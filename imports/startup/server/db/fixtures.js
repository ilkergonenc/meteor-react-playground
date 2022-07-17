import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

import { HostsCollection } from "/imports/api/hosts/hosts";
import { NodesCollection } from "/imports/api/nodes/nodes";

const USER_NO_ONE = {
  username: "noone",
  password: "01010101",
  email: "free.ilkergonenc@gmail.com",
  profile: {
    firstname: "No",
    lastname: "One",
  },
};

const HOST_NO_ONE = {
  address: "localhost:7070",
  name: "Local Host 7070",
  title: "Mr. Play Ground",
};

const NODE_NO_ONE = {
  title: "Node One #01",
};

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(USER_NO_ONE.username)) {
    Accounts.createUser({ ...USER_NO_ONE });
  }

  const user = Accounts.findUserByUsername(USER_NO_ONE.username);

  if (HostsCollection.find().count() === 0) {
    if (user) {
      HostsCollection.insert({
        userId: user._id,
        ...HOST_NO_ONE,
      });
    }
  }

  const host = HostsCollection.findOne({ address: HOST_NO_ONE.address });

  if (NodesCollection.find().count() === 0) {
    if (user && host) {
      NodesCollection.insert({
        userId: user._id,
        hostId: host._id,
        title: NODE_NO_ONE.title,
      });
    }
  }
});
