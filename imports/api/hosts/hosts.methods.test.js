import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";

import { assert } from "chai";

import { hostsRepository } from "/imports/api/hosts/hostsRepository";
import {
  insertHost,
  updateHost,
  removeHost,
} from "/imports/api/hosts/hosts.methods";

if (Meteor.isServer) {
  describe("Hosts", () => {
    describe("methods", () => {
      const userId = Random.id();
      let hostId;

      beforeEach(() => {
        hostsRepository.remove({});
        hostId = hostsRepository.insert({
          address: "localhost.test",
          name: "Local Host Test",
          title: "Testing",
          userId,
        });
      });

      it("can delete owned host", () => {
        removeHost._execute({ userId }, { hostId });

        assert.equal(hostsRepository.find().count(), 0);
      });

      it("can't delete host without an user authenticated", () => {
        const fn = () => removeHost._execute({}, { hostId });
        assert.throw(fn, /Not authorized/);
        assert.equal(hostsRepository.find().count(), 1);
      });

      it("can't delete host from another owner", () => {
        const fn = () =>
          removeHost._execute({ userId: "somebody-else-id" }, { hostId });

        assert.throw(fn, /Access denied/);
        assert.equal(hostsRepository.find().count(), 1);
      });

      it("can change a host", () => {
        const originalTask = hostsRepository.findOne(hostId);
        updateHost._execute(
          { userId },
          {
            hostId,
            address: "local.test",
            name: "Local Host Test",
            title: "Testing",
          }
        );

        const updatedTask = hostsRepository.findOne(hostId);
        assert.notEqual(updatedTask.address, originalTask.address);
      });

      it("can insert new hosts", () => {
        const address = "local.test";
        insertHost._execute(
          { userId },
          {
            address,
            name: "Local Host Test",
            title: "Testing",
          }
        );

        const hosts = hostsRepository.find({}).fetch();
        assert.equal(hosts.length, 2);
        assert.isTrue(hosts.some((host) => host.address === address));
      });
    });
  });
}
