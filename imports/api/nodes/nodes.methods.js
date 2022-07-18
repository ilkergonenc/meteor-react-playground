import { Meteor } from "meteor/meteor";
import { ValidatedMethod } from "meteor/mdg:validated-method";

import SimpleSchema from "simpl-schema";

import {
  SchemaMiddleware,
  AuthMiddleware,
  OwnerMiddleware,
} from "../@/middlewares";

import { nodeRepository } from "./nodeRepository";

const insertNode = new ValidatedMethod({
  name: "nodes.insert",
  schema: {
    hostId: { type: String, regEx: SimpleSchema.RegEx.Id },
    title: { type: String, max: 260 },
  },
  mixins: [SchemaMiddleware, AuthMiddleware],
  run({ hostId, title }) {
    return nodeRepository.insert({
      userId: this.userId,
      hostId,
      title,
    });
  },
});

const updateNode = new ValidatedMethod({
  name: "nodes.update",
  collection: nodeRepository,
  idKey: "nodeId",
  schema: {
    nodeId: { type: String, regEx: SimpleSchema.RegEx.Id },
    title: { type: String, max: 260 },
  },
  mixins: [SchemaMiddleware, AuthMiddleware, OwnerMiddleware],
  run({ nodeId, title }) {
    return nodeRepository.update(nodeId, {
      $set: {
        title,
      },
    });
  },
});

const removeNode = new ValidatedMethod({
  name: "nodes.remove",
  collection: nodeRepository,
  idKey: "nodeId",
  schema: {
    nodeId: { type: String, regEx: SimpleSchema.RegEx.Id },
  },
  mixins: [SchemaMiddleware, AuthMiddleware, OwnerMiddleware],
  run({ nodeId }) {
    return nodeRepository.remove(nodeId);
  },
});

export { insertNode, updateNode, removeNode };
