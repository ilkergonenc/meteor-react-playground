import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

import { NodesCollection } from "./nodes";

Meteor.methods({
  "nodes.insert"(title) {
    check(title, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    NodesCollection.insert({
      title,
      createdAt: new Date(),
      userId: this.userId,
    });
  },

  "nodes.remove"(nodeId) {
    check(nodeId, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    const node = NodesCollection.findOne({ _id: nodeId, userId: this.userId });

    if (!node) {
      throw new Meteor.Error("Access denied.");
    }

    NodesCollection.remove(nodeId);
  },

  "nodes.update"(nodeId, nodeValues) {
    check(nodeId, String);
    check(isPublished, Boolean);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    const node = NodesCollection.findOne({ _id: nodeId, userId: this.userId });

    if (!node) {
      throw new Meteor.Error("Access denied.");
    }

    NodesCollection.update(nodeId, {
      $set: {
        title: nodeValues.title,
        isPublished: nodeValues.isPublished,
      },
    });
  },

  "nodes.updatePublishStatus"(nodeId, isPublished) {
    check(nodeId, String);
    check(isPublished, Boolean);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    const node = NodesCollection.findOne({ _id: nodeId, userId: this.userId });

    if (!node) {
      throw new Meteor.Error("Access denied.");
    }

    NodesCollection.update(nodeId, {
      $set: {
        isPublished,
      },
    });
  },
});
