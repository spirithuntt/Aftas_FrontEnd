export interface Ranking {
  id?: number,
  name?: string,
  score?: number
}

export class CRanking implements Ranking {
  constructor(
    public id?: number,
    public name?: string,
    public score?: number
  ) {}
}
