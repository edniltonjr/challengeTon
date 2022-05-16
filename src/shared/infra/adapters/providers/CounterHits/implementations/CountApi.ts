import axios from "axios";

import { ICountsHitsProvider, IHits } from "../ICounterHits";

class CountApiProvider implements ICountsHitsProvider {
  private apiHits;
  private urlTon;

  constructor() {
    this.apiHits = process.env.API_HITS;
    this.urlTon = process.env.URL_TON;
  }

  async countHits(): Promise<IHits> {
    const { data } = await axios.get(`${this.apiHits}/get/${this.urlTon}`);
    return data;
  }
  async addHit(): Promise<IHits> {
    const { data } = await axios.get(
      `${this.apiHits}/update/${this.urlTon}/?amount=1`
    );
    return data;
  }
}

export { CountApiProvider };
