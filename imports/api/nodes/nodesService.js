import { nodesRepository } from "./nodesRepository";

/**
 * Nodes collection service
 */
class NodesService {
  count(selector, options = { fields: {} }) {
    return nodesRepository.count(selector, options);
  }
  find(selector, options) {
    return nodesRepository.find(selector, options).fetch();
  }
  findOne(selector, options) {
    return nodesRepository.findOne(selector, options);
  }
  insert(document) {
    return nodesRepository.insert(document);
  }
  update(selector, updateObject) {
    return nodesRepository.update(selector, updateObject);
  }
  remove(selector) {
    return nodesRepository.remove(selector);
  }
}

export const nodesService = new NodesService();
