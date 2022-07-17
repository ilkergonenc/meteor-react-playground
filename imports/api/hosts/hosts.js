import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

const HostsCollection = new Mongo.Collection("hosts");

// task schema validation
const hostsSchema = new SimpleSchema({
  _id: { type: String, regEx: SimpleSchema.RegEx.Id },
  userId: { type: String, regEx: SimpleSchema.RegEx.Id },
  address: { type: String, max: 260 },
  handle: { type: String, max: 260, optional: true },
  name: { type: String, max: 260 },
  title: { type: String, max: 260 },
  isHttps: { type: Boolean, defaultValue: false },
  createdAt: { type: Date, optional: true },
});

export { HostsCollection, hostsSchema };

HostsCollection.attachSchema(hostsSchema);

// task helpers
HostsCollection.helpers({
  isSecure() {
    return !!this.isHttps;
  },
});

// timestamble
HostsCollection.before.insert(function (userId, document) {
  document.createdAt = new Date();
});
