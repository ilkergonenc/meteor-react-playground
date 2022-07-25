import { Mongo } from "meteor/mongo";

/**
 * Base class containing repository functionality
 */
class MongoRepository {
  /**
   * @constructor
   * @param {Mongo.Collection} collection
   */
  constructor(collection) {
    /**
     * @protected
     * @type {Mongo.Collection}
     */
    this._collection = collection;
  }

  /**
   * Finds documents based on provided selector and options
   * @param {(string|object)} [selector]
   * @param {object} [options]
   * @returns {Mongo.Cursor}
   */
  find(selector = {}, options = {}) {
    return this._collection.find(selector, options);
  }

  /**
   * Finds one document only
   * @param {(string|object)} selector
   * @param {object} [options]
   * @returns {object}
   */
  findOne(selector = {}, options = {}) {
    return this._collection.findOne(selector, options);
  }

  /**
   * Inserts a document and returns the id of it
   * @param {object} document
   * @returns {string}
   */
  insert(document) {
    return this._collection.insert(document);
  }

  /**
   * Inserts or updates a document
   * @param {(string|object)} selector
   * @param {object} updateObject
   * @param {object} [options]
   */
  upsert(selector, updateObject, options = null) {
    this._collection.upsert(selector, updateObject, options);
  }

  /**
   * Updates a document
   * @example Notifications.update({assignedTo: userId}, {$set: {'isRead': true}}, {multi: true});
   * @param {(string|object)} selector
   * @param {object} updateObject
   * @param {object} [options]
   */
  update(selector, updateObject, options = null) {
    this._collection.update(selector, updateObject, options);
  }

  /**
   * Updates all matching documents
   * @param {(string|object)} selector
   * @param {object} updateObject
   */
  updateMany(selector, updateObject) {
    this._collection.update(selector, updateObject, { multi: true });
  }

  /**
   * Updates id of provided document
   * @param {object} document
   * @param {string} newId
   */
  updateId(document, newId) {
    this.remove(document._id);

    document._id = newId;

    this.insert(document);
  }

  /**
   * Removes a document with id or selector
   * @param {(string|object)} selector
   * @returns {number} affected row count
   */
  remove(selector) {
    return this._collection.remove(selector);
  }

  /**
   * Counts the number of documents for provided selector
   * @param {(string|object)} [selector]
   * @param {object} [options]
   * @returns {number}
   */
  count(selector = {}, options = {}) {
    return this.find(selector, options).count();
  }
}

export default MongoRepository;
