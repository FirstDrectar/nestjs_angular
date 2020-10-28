export interface IUser {
  email: string;
  name: string;
  password: string;
  role: Role ;
  status: Status;
}
export enum Role{
  admin = 'admin',
  advertiserManager = 'advertiserManager',
  affiliateManager = 'affiliateManager'
}
export enum Status{
  active = 'active',
  inactive = 'inactive'
}
