import axios from "axios";

export class CountNumberHitsUseCase {
  async execute() {
    const apiHits = process.env.API_HITS;
    const urlTon = process.env.URL_TON;

    const { data } = await axios.get(`${apiHits}/get/${urlTon}`);

    return data;
  }
}
