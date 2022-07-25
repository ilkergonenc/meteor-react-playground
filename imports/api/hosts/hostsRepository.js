// import BaseRepository from "../@/repositories/mongoRepository";
import BaseRepository from "../@/repositories/baseRepository";
import { HostsCollection } from "./hosts";

class HostsRepository extends BaseRepository {
  /**
   * @constructor
   */
  constructor() {
    super(HostsCollection, "hosts");
  }
}

export const hostsRepository = new HostsRepository();
