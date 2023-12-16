import { Time } from "@angular/common";

export interface Competition {
  id?: string,
  date?: Date,
  name?: string,
  location?: string,
  startTime?: Time,
  endTime?: Time,
  numberOfParticipants?: number,
  amount?: number
  member?: {
    id: number;
    name: string;
    familyName: string;
    accessDate: string;
    nationality: string;
    identityDocumentType: string;
    identityNumber: string;
  };
}

export class CCompetition implements Competition {
  constructor(
    public id?: string,
    public date?: Date,
    public name?: string,
    public location?: string,
    public startTime?: Time,
    public endTime?: Time,
    public numberOfParticipants?: number,
    public amount?: number,
    public member?: {
      id: number;
      name: string;
      familyName: string;
      accessDate: string;
      nationality: string;
      identityDocumentType: string;
      identityNumber: string;
    }
  ) {}
}
