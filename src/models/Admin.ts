export interface Admin {
  id: number;
  username: string;
  email: string;
  isAuthentication: boolean;
  role: string;
}

const adminData: Admin = {
  id: 1,
  username: "SalibaseAdmin",
  email: "davidAdmin@example.com",
  isAuthentication: true,
  role: "ADMIN"
}
