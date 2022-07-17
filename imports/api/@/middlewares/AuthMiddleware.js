import { Meteor } from "meteor/meteor";

export default function AuthMiddleware(methodOptions) {
  const runFunction = methodOptions.run;
  methodOptions.run = function () {
    if (!this.userId) {
      throw new Meteor.Error(`Not authorized.`);
    }
    return runFunction.call(this, ...arguments);
  };
  return methodOptions;
}
