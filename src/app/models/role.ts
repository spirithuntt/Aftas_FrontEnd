export interface Role {
  name: string;
  authorities: string[];
  isDefault: boolean;
}

export class RoleResponseDTO implements Role {
  constructor(
    public name: string,
    public authorities: string[],
    public isDefault: boolean
  ) {}
}
