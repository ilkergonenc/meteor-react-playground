import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";

const UsersCollection = Meteor.users;

// schema
const userSchema = new SimpleSchema({
  _id: { type: String, regEx: SimpleSchema.RegEx.Id },
  username: { type: String, min: 3, max: 24 },
  emails: { type: Array },
  "emails.$": { type: Object },
  "emails.$.address": { type: String, regEx: SimpleSchema.RegEx.Email },
  "emails.$.verified": { type: Boolean },
  profile: { type: Object, optional: true },
  "profile.firstname": { type: String },
  "profile.lastname": { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date, optional: true },
  services: { type: Object, blackbox: true },
});
// UsersCollection.schema = userSchema;

// public fields
const userPublics = {
  username: 1,
  "emails[0].address": 1,
  profile: 1,
};
// UsersCollection.publicFields = userPublics;

export { UsersCollection, userSchema, userPublics };

// helpers methods
UsersCollection.helpers({
  email() {
    return this.emails[0].address;
  },
  fullname() {
    return this.profile.firstname + " " + this.profile.lastname;
  },
  isVerified() {
    return this.emails[0].verified;
  },
});

// hooks | timestamps
if (Meteor.isServer) {
  UsersCollection.before.update(function (
    userId,
    doc,
    fieldNames,
    modifier,
    options
  ) {
    modifier.$set = modifier.$set || {};
    modifier.$set.updatedAt = Date.now();
  });
}
