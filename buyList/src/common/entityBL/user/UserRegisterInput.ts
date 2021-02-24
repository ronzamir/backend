export class UserRegisterInput {
  public email: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public username: string;

  constructor(
    email: string,
    password: string,
    firstName: string,
    LastName: string,
    username: string
  ) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = LastName;
    this.username = username;
  }
}
