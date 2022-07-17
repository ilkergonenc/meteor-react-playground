import { Meteor } from "meteor/meteor";

export default function UniqueKeysMiddleware(methodOptions) {
  const runFunction = methodOptions.run;

  methodOptions.uniqueKeys.forEach((uniqueKey) => {
    methodOptions.run = function (values) {
      let docQuery = {};
      docQuery[uniqueKey] = values[uniqueKey];

      const document = methodOptions.collection.findOne({ ...docQuery });

      if (document && document._id !== values[methodOptions.idKey]) {
        throw new Meteor.Error("Already exists.");
      }

      return runFunction.call(this, ...arguments);
    };
  });

  return methodOptions;
}
