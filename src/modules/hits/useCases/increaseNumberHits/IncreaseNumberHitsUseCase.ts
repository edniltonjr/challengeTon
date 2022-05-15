import axios from "axios";

export class IncreaseNumberHitsUseCase {
  async execute() {
    const apiHits = process.env.API_HITS;
    const urlTon = process.env.URL_TON;

    const { data } = await axios.get(`${apiHits}/update/${urlTon}/?amount=1`);

    return data;
  }
}
