import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

const SEED_USERNAME = "noone";
const SEED_PASSWORD = "01010101";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});
