import { ICountsHitsProvider } from "../../../../shared/infra/adapters/providers/CounterHits/ICounterHits";

export class IncreaseNumberHitsUseCase {
  constructor(private counterHitsProvider: ICountsHitsProvider) {}

  async execute() {
    const data = await this.counterHitsProvider.addHit();

    return data;
  }
}
