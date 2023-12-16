import { Time } from "@angular/common";

export interface Competition {
  date?: Date,
  name?: string,
  location?: string,
  startTime?: Time,
  endTime?: Time,
  numberOfParticipants?: number,
  amount?: number
}

export class CCompetition implements Competition {
  constructor(
    public date?: Date,
    public name?: string,
    public location?: string,
    public startTime?: Time,
    public endTime?: Time,
    public numberOfParticipants?: number,
    public amount?: number
  ) {}
}
