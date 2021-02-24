export class UserLoginResponse{
     token: string;
     firstName: string;
     lastName: string;

     constructor(token: string, firstName: string, lastName: string) {
         this.token = token;
         this.firstName = firstName;
         this.lastName = lastName;
     }
}