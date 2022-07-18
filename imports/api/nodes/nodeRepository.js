import BaseRepository from "../@/repositories/mongoRepository";
import { NodesCollection } from "./nodes";

class NodeRepository extends BaseRepository {
  /**
   * @constructor
   */
  constructor() {
    super(NodesCollection);
  }
}

export const nodeRepository = new NodeRepository();
