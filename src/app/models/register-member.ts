export interface RegisterMember {
  member: string;
  competition: string;
}

export class RegisterMemberC implements RegisterMember {
  constructor(
    public member: string,
    public competition: string
  ) {}
}
