
export class User {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}

export class Friend {
  userid: string;
  friendid: string;
  hasaccepted: string;
}
