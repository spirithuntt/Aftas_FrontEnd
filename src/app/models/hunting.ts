export interface Hunting {
  competition: string;
  member: number;
  fish: number;
  weight: number;
}
export class CHunting implements Hunting {
  constructor(
    public competition: string,
    public member: number,
    public fish: number,
    public weight: number
  ) {}
}

