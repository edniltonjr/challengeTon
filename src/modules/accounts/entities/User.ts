class User {
  id: string;
  name: string;
  email: string;
  password: string;

  constructor(data: {
    id: string;
    name: string;
    email: string;
    password: string;
  }) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.password = data.password;
  }
}

export default User;
