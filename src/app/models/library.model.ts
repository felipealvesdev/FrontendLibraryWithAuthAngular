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

export type bookModel = {
  id: string,
  title: string,
  author: string,
  releaseYear: string,
  quantity: number
}
