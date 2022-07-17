import { ValidatedMethod } from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";
import { HostsCollection } from "./hosts";

const fetchHostIdFromAddress = new ValidatedMethod({
  name: "hosts.fetchIdByAddress",
  schema: {
    address: { type: String },
  },
  mixins: [SchemaMixin],
  run({ address }) {
    const host = HostsCollection.findOne({ address }, { fields: { _id: 1 } });
    if (typeof host === undefined) {
      throw new Meteor.Error("Not found.");
    }
    return host?._id;
  },
});

function SchemaMixin(methodOptions) {
  methodOptions.validate = new SimpleSchema(methodOptions.schema).validator();
  return methodOptions;
}

export { fetchHostIdFromAddress };
