import { Meteor } from "meteor/meteor";
import { ValidatedMethod } from "meteor/mdg:validated-method";

import SimpleSchema from "simpl-schema";

import {
  SchemaMiddleware,
  AuthMiddleware,
  OwnerMiddleware,
} from "../@/middlewares";

import { nodesRepository } from "./nodesRepository";

const insertNode = new ValidatedMethod({
  name: "nodes.insert",
  schema: {
    hostId: { type: String, regEx: SimpleSchema.RegEx.Id },
    title: { type: String, max: 260 },
  },
  mixins: [SchemaMiddleware, AuthMiddleware],
  run({ hostId, title }) {
    return nodesRepository.insert({
      userId: this.userId,
      hostId,
      title,
    });
  },
});

const updateNode = new ValidatedMethod({
  name: "nodes.update",
  collection: nodesRepository,
  idKey: "nodeId",
  schema: {
    nodeId: { type: String, regEx: SimpleSchema.RegEx.Id },
    title: { type: String, max: 260 },
  },
  mixins: [SchemaMiddleware, AuthMiddleware, OwnerMiddleware],
  run({ nodeId, title }) {
    return nodesRepository.update(nodeId, {
      $set: {
        title,
      },
    });
  },
});

const removeNode = new ValidatedMethod({
  name: "nodes.remove",
  collection: nodesRepository,
  idKey: "nodeId",
  schema: {
    nodeId: { type: String, regEx: SimpleSchema.RegEx.Id },
  },
  mixins: [SchemaMiddleware, AuthMiddleware, OwnerMiddleware],
  run({ nodeId }) {
    return nodesRepository.remove(nodeId);
  },
});

export { insertNode, updateNode, removeNode };
