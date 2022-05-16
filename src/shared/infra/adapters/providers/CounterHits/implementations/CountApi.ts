import axios from "axios";

import { ICountsHitsProvider, IHits } from "../ICounterHits";

class CountApiProvider implements ICountsHitsProvider {
  async countHits(): Promise<IHits> {
    const apiHits = process.env.API_HITS;
    const urlTon = process.env.URL_TON;
    const { data } = await axios.get(`${apiHits}/get/${urlTon}`);
    return data;
  }
  async addHit(): Promise<IHits> {
    const apiHits = process.env.API_HITS;
    const urlTon = process.env.URL_TON;

    const { data } = await axios.get(`${apiHits}/update/${urlTon}/?amount=1`);

    return data;
  }
}

export { CountApiProvider };
