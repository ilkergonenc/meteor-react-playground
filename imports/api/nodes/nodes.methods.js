import { Meteor } from "meteor/meteor";
import { ValidatedMethod } from "meteor/mdg:validated-method";

import SimpleSchema from "simpl-schema";

import {
  SchemaMiddleware,
  AuthMiddleware,
  OwnerMiddleware,
} from "../@/middlewares";

import { NodesCollection } from "./nodes";

const insertHost = new ValidatedMethod({
  name: "nodes.insert",
  schema: {
    hostId: { type: String, regEx: SimpleSchema.RegEx.Id },
    title: { type: String, max: 260 },
  },
  mixins: [SchemaMiddleware, AuthMiddleware],
  run({ hostId, title }) {
    return NodesCollection.insert({
      userId: this.userId,
      hostId,
      title,
    });
  },
});

const updateHost = new ValidatedMethod({
  name: "nodes.update",
  collection: NodesCollection,
  idKey: "nodeId",
  schema: {
    hostId: { type: String, regEx: SimpleSchema.RegEx.Id },
    title: { type: String, max: 260 },
  },
  mixins: [SchemaMiddleware, AuthMiddleware, OwnerMiddleware],
  run({ nodeId, title }) {
    return NodesCollection.update(nodeId, {
      $set: {
        title,
      },
    });
  },
});

const removeHost = new ValidatedMethod({
  name: "nodes.remove",
  collection: NodesCollection,
  idKey: "nodeId",
  schema: {
    nodeId: { type: String, regEx: SimpleSchema.RegEx.Id },
  },
  mixins: [SchemaMiddleware, AuthMiddleware, OwnerMiddleware],
  run({ nodeId }) {
    return NodesCollection.remove(nodeId);
  },
});

export { insertHost, updateHost, removeHost };
