// import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";

/**
 * @param {*} methodOptions
 * mehtodOptions must have
 * schema: Object
 * @returns
 */
export default function SchemaMiddleware(methodOptions) {
  methodOptions.validate = new SimpleSchema(methodOptions.schema).validator();
  return methodOptions;
}
