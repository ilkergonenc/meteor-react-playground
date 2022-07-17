import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { check } from "meteor/check";

Meteor.methods({
  "users.signup"(username, password) {
    check(username, String);
    check(email, String);
    check(password, String);

    if (
      !Accounts.findUserByUsername(username) ||
      !Accounts.findUserByEmail(email)
    ) {
      throw new Meteor.Error("Already exists.");
    }

    Accounts.createUser({
      username,
      email,
      password,
    });
  },

  "users.login"(username, password) {
    check(username, String);
    check(password, String);

    if (!Accounts.findUserByUsername(username)) {
      throw new Meteor.Error("Doesn't exists.");
    }

    Meteor.loginWithPassword(username, password);
  },

  "users.logout"() {
    Meteor.logout();
  },
});
