import { Accounts } from "meteor/accounts-base";

import { userSchema } from "./users";

// Ensuring every user has an email address, should be in server-side code
Accounts.validateNewUser((user) => {
  userSchema.validate(user);

  // Return true to allow user creation to proceed
  return true;
});
