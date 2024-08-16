export type loginBodyRequest = {
  login: string,
  password: string,
};

export type registerBodyRequest = {
  login: string,
  password: string,
  role: userRoleType,
}

export type userRoleType = "ADMIN" | "USER";
