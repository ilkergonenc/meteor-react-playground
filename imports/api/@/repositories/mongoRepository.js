/**
 * Base class containing repository functionality
 */
class MongoRepository {
  /**
   * @constructor
   * @param collection {Mongo.Collection}
   */
  constructor(collection) {
    /**
     * @protected
     * @type {Mongo.Collection}
     */
    this._collection = collection;

    /**
     * @private
     */
    this._collectionName = collection._name;
  }

  /**
   * Finds documents based on provided selector and options
   * @param selector {string|object} [optional]
   * @param options {object} [optional]
   * @returns {Mongo.Cursor}
   */
  find(selector = {}, options = {}) {
    return this._collection.find(selector, options);
  }

  /**
   * Finds one document only
   * @param selector {string|object}
   * @param options {object} [optional]
   * @returns {object}
   */
  findOne(selector = {}, options = {}) {
    return this._collection.findOne(selector, options);
  }

  /**
   * Inserts a document and returns the id of it
   * @param document {object}
   * @returns {string}
   */
  insert(document) {
    return this._collection.insert(document);
  }

  /**
   * Inserts or updates a document
   * @param selector {string|object}
   * @param updateObject {object}
   * @param options {object}
   */
  upsert(selector, updateObject, options = null) {
    this._collection.upsert(selector, updateObject, options);
  }

  /**
   * Updates a document
   * @example Notifications.update({assignedTo: userId}, {$set: {'isRead': true}}, {multi: true});
   * @param selector {string|object}
   * @param updateObject {object}
   * @param options {object}
   */
  update(selector, updateObject, options = null) {
    this._collection.update(selector, updateObject, options);
  }

  /**
   * Updates all matching documents
   * @param selector {string|object}
   * @param updateObject {object}
   */
  updateMany(selector, updateObject) {
    this._collection.update(selector, updateObject, { multi: true });
  }

  /**
   * Updates id of provided document
   * @param document {object}
   * @param newId {string}
   */
  updateId(document, newId) {
    this.remove(document._id);

    document._id = newId;

    this.insert(document);
  }

  /**
   * Removes a document with id or selector
   * @param selector {string|object}
   * @returns {number} affected row count
   */
  remove(selector) {
    return this._collection.remove(selector);
  }

  /**
   * Counts the number of documents for provided selector
   * @param selector {object}
   * @param options {object}
   * @returns {number}
   */
  count(selector = {}, options = {}) {
    return this.find(selector, options).count();
  }
}

export default MongoRepository;
