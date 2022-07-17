import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

import { HostsCollection } from "./hosts";

Meteor.methods({
  "hosts.insert"(address, name, title) {
    check(address, String);
    check(name, String);
    check(title, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    HostsCollection.insert({
      userId: this.userId,
      address,
      name,
      title,
    });
  },

  "hosts.update"(hostId, hostValues) {
    check(hostId, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    const host = HostsCollection.findOne({ _id: hostId, userId: this.userId });

    if (!host) {
      throw new Meteor.Error("Access denied.");
    }

    HostsCollection.update(hostId, {
      $set: {
        ...hostValues,
      },
    });
  },

  "hosts.remove"(hostId) {
    check(hostId, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    const host = HostsCollection.findOne({ _id: hostId, userId: this.userId });

    if (!host) {
      throw new Meteor.Error("Access denied.");
    }

    HostsCollection.remove(hostId);
  },
});
