import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";

import { assert } from "chai";

import { hostRepository } from "/imports/api/hosts/hostRepository";
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
        hostRepository.remove({});
        hostId = hostRepository.insert({
          address: "localhost.test",
          name: "Local Host Test",
          title: "Testing",
          userId,
        });
      });

      it("can delete owned host", () => {
        removeHost._execute({ userId }, { hostId });

        assert.equal(hostRepository.find().count(), 0);
      });

      it("can't delete host without an user authenticated", () => {
        const fn = () => removeHost._execute({}, { hostId });
        assert.throw(fn, /Not authorized/);
        assert.equal(hostRepository.find().count(), 1);
      });

      it("can't delete host from another owner", () => {
        const fn = () =>
          removeHost._execute({ userId: "somebody-else-id" }, { hostId });

        assert.throw(fn, /Access denied/);
        assert.equal(hostRepository.find().count(), 1);
      });

      it("can change a host", () => {
        const originalTask = hostRepository.findOne(hostId);
        updateHost._execute(
          { userId },
          {
            hostId,
            address: "local.test",
            name: "Local Host Test",
            title: "Testing",
          }
        );

        const updatedTask = hostRepository.findOne(hostId);
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

        const hosts = hostRepository.find({}).fetch();
        assert.equal(hosts.length, 2);
        assert.isTrue(hosts.some((host) => host.address === address));
      });
    });
  });
}
