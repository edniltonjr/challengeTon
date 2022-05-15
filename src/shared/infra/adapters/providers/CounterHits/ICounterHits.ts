interface IHits {
  value: string;
}

interface ICountsHitsProvider {
  countHits(): Promise<IHits>;
  addHit(): Promise<IHits>;
}

export { IHits, ICountsHitsProvider };
