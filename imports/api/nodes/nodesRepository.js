import BaseRepository from "../@/repositories/baseRepository";
import { NodesCollection } from "./nodes";

/**
 * Nodes collection repository extends on base repository
 */
class NodesRepository extends BaseRepository {
  /**
   * @constructor
   */
  constructor() {
    super(NodesCollection, "nodes");
  }
}

export const nodesRepository = new NodesRepository();
