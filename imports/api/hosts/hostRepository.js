import BaseRepository from "../@/repositories/mongoRepository";
import { HostsCollection } from "./hosts";

class HostRepository extends BaseRepository {
  /**
   * @constructor
   */
  constructor() {
    super(HostsCollection);
  }
}

export const hostRepository = new HostRepository();
