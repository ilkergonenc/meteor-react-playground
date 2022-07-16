import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

const USER_NO_ONE = {
  username: "noone",
  password: "01010101",
  email: "free.ilkergonenc@gmail.com",
  profile: {
    firstname: "No",
    lastname: "One",
  },
};

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(USER_NO_ONE.username)) {
    Accounts.createUser({ ...USER_NO_ONE });
  }
});
