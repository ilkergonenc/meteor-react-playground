import { Meteor } from "meteor/meteor";

/**
 * @param {*} methodOptions
 * mehtodOptions must have
 * collection: MongoCollection
 * idKey: String
 * @returns
 */
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
