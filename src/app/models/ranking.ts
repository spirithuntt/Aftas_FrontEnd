export interface Member {
  id: number;
  name: string;
  familyName: string;
  accessDate: string;
  nationality: string;
  identityDocumentType: string;
  identityNumber: string;
}

export interface Competition {
  id: number;
  code: string;
  date: string;
  startTime: string;
  endTime: string;
  numberOfParticipants: number;
  location: string;
  amount: number;
}

export interface Ranking {
  id: {
    memberId: number;
    competitionId: number;
  };
  rank: number;
  score: number;
  member: Member;
  competition: Competition;
}

export class CRanking implements Ranking {
  constructor(
    public id: { memberId: number; competitionId: number },
    public rank: number,
    public score: number,
    public member: Member,
    public competition: Competition
  ) {}
}
