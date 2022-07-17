import { Meteor } from "meteor/meteor";

export default function OwnerMiddleware(methodOptions) {
  const runFunction = methodOptions.run;

  methodOptions.run = function (values) {
    const document = methodOptions.collection.findOne({
      _id: values[methodOptions.idKey],
      userId: this.userId,
    });

    if (!document || typeof document === undefined) {
      throw new Meteor.Error("Access denied.");
    }

    return runFunction.call(this, ...arguments);
  };

  return methodOptions;
}
