// import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";

export default function SchemaMiddleware(methodOptions) {
  methodOptions.validate = new SimpleSchema(methodOptions.schema).validator();
  return methodOptions;
}
