import { ICountsHitsProvider } from "../../../../shared/infra/adapters/providers/CounterHits/ICounterHits";

export class CountNumberHitsUseCase {
  constructor(private counterHitsProvider: ICountsHitsProvider) {}

  async execute() {
    const data = await this.counterHitsProvider.countHits();
    return data;
  }
}
