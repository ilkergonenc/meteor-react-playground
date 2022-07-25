import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";

import { assert } from "chai";

import { nodesRepository } from "/imports/api/nodes/nodesRepository";
import {
  insertNode,
  updateNode,
  removeNode,
} from "/imports/api/nodes/nodes.methods";

if (Meteor.isServer) {
  describe("Nodes", () => {
    describe("methods", () => {
      const userId = Random.id();
      const hostId = Random.id();
      let nodeId;

      beforeEach(() => {
        nodesRepository.remove({});
        nodeId = nodesRepository.insert({
          title: "Test Node",
          hostId,
          userId,
        });
      });

      it("can delete owned node", () => {
        removeNode._execute({ userId }, { nodeId });

        assert.equal(nodesRepository.find().count(), 0);
      });

      it("can't delete node without an user authenticated", () => {
        const fn = () => removeNode._execute({}, { nodeId });
        assert.throw(fn, /Not authorized/);
        assert.equal(nodesRepository.find().count(), 1);
      });

      it("can't delete node from another owner", () => {
        const fn = () =>
          removeNode._execute({ userId: "somebody-else-id" }, { nodeId });

        assert.throw(fn, /Access denied/);
        assert.equal(nodesRepository.find().count(), 1);
      });

      it("can change a node", () => {
        const originalTask = nodesRepository.findOne(nodeId);
        updateNode._execute({ userId }, { title: "Testing a node", nodeId });

        const updatedTask = nodesRepository.findOne(nodeId);
        assert.notEqual(updatedTask.title, originalTask.title);
      });

      it("can insert new hosts", () => {
        const title = "local.test";
        insertNode._execute({ userId }, { title, hostId });

        const hosts = nodesRepository.find({}).fetch();
        assert.equal(hosts.length, 2);
        assert.isTrue(hosts.some((node) => node.title === title));
      });
    });
  });
}
