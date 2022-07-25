import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import MongoRepository from "./mongoRepository";

/**
 * Base repository with error handling extended over base mongo repository
 */
class BaseRepository extends MongoRepository {
  /**
   * @constructor
   * @param {Mongo.Collection} collection
   * @param {string} collectionName
   */
  constructor(collection, collectionName) {
    /**
     * @protected
     * @type {Mongo.Collection}
     */
    super(collection);

    /**
     * @private
     */
    this._collectionName = collectionName;
  }

  /**
   * Throw Meteor Error
   * @param {string} [message]
   * @param {string} [details]
   * @param {(number|string)} [handle]
   * @throws {Meteor.Error}
   */
  _throwError(
    message = "Something went wrong.",
    details = "An error occurred.",
    handle = 500 // internal-server-error
  ) {
    throw new Meteor.Error(handle, message, details);
  }

  /**
   * Finds documents based on provided selector and options
   * @param {(string|object)} [selector]
   * @param {object} [options]
   * @returns {(Mongo.Cursor|Meteor.Error)}
   */
  find(selector = {}, options = {}) {
    try {
      return super.find(selector, options);
    } catch (error) {
      this._throwError(
        `Could not find documents on "${this._collectionName}" collection.`,
        error
      );
    }
  }

  /**
   * Finds one document only
   * @param {(string|object)} selector
   * @param {object} [options]
   * @returns {(object|Meteor.Error)}
   */
  findOne(selector = {}, options = {}) {
    try {
      return super.findOne(selector, options);
    } catch (error) {
      this._throwError(
        `Could not find document on "${this._collectionName}" collection.`,
        error
      );
    }
  }

  /**
   * Inserts a document and returns the id of it
   * @param {object} document
   * @returns {(string|Meteor.Error)}
   */
  insert(document) {
    try {
      return super.insert(document);
    } catch (error) {
      this._throwError(
        `Could not insert document on "${this._collectionName}" collection.`,
        error
      );
    }
  }

  /**
   * Inserts or updates a document
   * @param {(string|object)} selector
   * @param {object} updateObject
   * @param {object} [options]
   */
  upsert(selector, updateObject, options = null) {
    try {
      super.upsert(selector, updateObject, options);
    } catch (error) {
      this._throwError(
        `Could not upsert document on "${this._collectionName}" collection.`,
        error
      );
    }
  }

  /**
   * Updates a document
   * @param {(string|object)} selector
   * @param {object} updateObject
   * @param {object} [options]
   */
  update(selector, updateObject, options = null) {
    try {
      super.update(selector, updateObject, options);
    } catch (error) {
      this._throwError(
        `Could not update document on "${this._collectionName}" collection.`,
        error
      );
    }
  }

  /**
   * Removes a document with id or selector
   * @param {(string|object)} selector
   * @returns {(number|Meteor.Error)}
   */
  remove(selector) {
    try {
      return super.remove(selector);
    } catch (error) {
      this._throwError(
        `Could not remove document on "${this._collectionName}" collection.`,
        error
      );
    }
  }

  /**
   * Counts the number of documents for provided selector
   * @param {(string|object)} [selector]
   * @param {object} [options]
   * @returns {(number|Meteor.Error)}
   */
  count(selector = {}, options = {}) {
    try {
      return super.count(selector, options);
    } catch (error) {
      this._throwError(
        `Could not count documents on "${this._collectionName}" collection.`,
        error
      );
    }
  }
}

export default BaseRepository;
