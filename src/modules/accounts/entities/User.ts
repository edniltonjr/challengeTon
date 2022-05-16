import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  email: string;
  password: string;

  constructor(data: {
    id?: string;
    name: string;
    email: string;
    password: string;
  }) {
    if (!this.id) {
      this.id = uuidV4();
    }
    this.email = data.email;
    this.name = data.name;
    this.password = data.password;
  }
}

export default User;
