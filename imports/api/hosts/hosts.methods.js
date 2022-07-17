import { Meteor } from "meteor/meteor";
import { ValidatedMethod } from "meteor/mdg:validated-method";

import SimpleSchema from "simpl-schema";

import {
  SchemaMiddleware,
  AuthMiddleware,
  UniqueKeysMiddleware,
  OwnerMiddleware,
} from "../@/middlewares";

import { hostRepository } from "./hostRepository";

const fetchHostIdFromAddress = new ValidatedMethod({
  name: "hosts.fetchIdByAddress",
  schema: {
    address: { type: String },
  },
  mixins: [SchemaMiddleware],
  run({ address }) {
    const host = hostRepository.findOne({ address }, { fields: { _id: 1 } });
    if (typeof host === undefined) {
      throw new Meteor.Error("Not found.");
    }
    return host?._id;
  },
});

const insertHost = new ValidatedMethod({
  name: "hosts.insert",
  collection: hostRepository,
  uniqueKeys: ["address"],
  schema: {
    address: { type: String },
    name: { type: String },
    title: { type: String },
  },
  mixins: [SchemaMiddleware, AuthMiddleware, UniqueKeysMiddleware],
  run({ address, name, title }) {
    return hostRepository.insert({
      userId: this.userId,
      address,
      name,
      title,
    });
  },
});

const updateHost = new ValidatedMethod({
  name: "hosts.update",
  collection: hostRepository,
  idKey: "hostId",
  uniqueKeys: ["address"],
  schema: {
    hostId: { type: String, regEx: SimpleSchema.RegEx.Id },
    address: { type: String },
    name: { type: String },
    title: { type: String },
  },
  mixins: [
    SchemaMiddleware,
    AuthMiddleware,
    UniqueKeysMiddleware,
    OwnerMiddleware,
  ],
  run({ hostId, address, name, title }) {
    hostRepository.update(hostId, {
      $set: {
        address,
        name,
        title,
      },
    });
  },
});

const removeHost = new ValidatedMethod({
  name: "hosts.remove",
  collection: hostRepository,
  idKey: "hostId",
  schema: {
    hostId: { type: String, regEx: SimpleSchema.RegEx.Id },
  },
  mixins: [SchemaMiddleware, AuthMiddleware, OwnerMiddleware],
  run({ hostId }) {
    hostRepository.remove(hostId);
  },
});

export { fetchHostIdFromAddress, insertHost, updateHost, removeHost };
