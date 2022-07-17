import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

const NodesCollection = new Mongo.Collection("nodes");

// task schema validation
const nodesSchema = new SimpleSchema({
  _id: { type: String, regEx: SimpleSchema.RegEx.Id },
  userId: { type: String, regEx: SimpleSchema.RegEx.Id },
  hostId: { type: String, regEx: SimpleSchema.RegEx.Id },
  title: { type: String, max: 260 },
  description: { type: String, optional: true },
  isPublished: { type: Boolean, defaultValue: false },
  createdAt: { type: Date, optional: true },
  updatedAt: { type: Date, optional: true },
});

export { NodesCollection, nodesSchema };

NodesCollection.attachSchema(nodesSchema);

// task helpers
NodesCollection.helpers({
  isPrivate() {
    return !!this.isPublished;
  },
});

// timestamble
NodesCollection.before.insert(function (userId, document) {
  document.createdAt = new Date();
});

NodesCollection.before.update(function (
  userId,
  doc,
  fieldNames,
  modifier,
  options
) {
  modifier.$set = modifier.$set || {};
  modifier.$set.updatedAt = new Date();
});
