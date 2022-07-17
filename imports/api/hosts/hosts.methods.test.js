import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";
import { mockMethodCall } from "meteor/quave:testing";
import { assert } from "chai";
import { HostsCollection } from "/imports/api/hosts/hosts";
// import "./hosts.methods";
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
        HostsCollection.remove({});
        hostId = HostsCollection.insert({
          address: "localhost.test",
          name: "Local Host Test",
          title: "Testing",
          userId,
        });
      });

      it("can delete owned host", () => {
        removeHost._execute({ userId }, { hostId });

        assert.equal(HostsCollection.find().count(), 0);
      });

      it("can't delete host without an user authenticated", () => {
        const fn = () => removeHost._execute({}, { hostId });
        assert.throw(fn, /Not authorized/);
        assert.equal(HostsCollection.find().count(), 1);
      });

      it("can't delete host from another owner", () => {
        const fn = () =>
          removeHost._execute({ userId: "somebody-else-id" }, { hostId });

        assert.throw(fn, /Access denied/);
        assert.equal(HostsCollection.find().count(), 1);
      });

      // it("can change the status of a host", () => {
      //   const originalTask = HostsCollection.findOne(hostId);
      //   mockMethodCall("hosts.setIsChecked", hostId, !originalTask.isChecked, {
      //     context: { userId },
      //   });

      //   const updatedTask = HostsCollection.findOne(hostId);
      //   assert.notEqual(updatedTask.isChecked, originalTask.isChecked);
      // });

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

        const hosts = HostsCollection.find({}).fetch();
        assert.equal(hosts.length, 2);
        assert.isTrue(hosts.some((host) => host.address === address));
      });
    });
  });
}
