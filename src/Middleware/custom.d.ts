declare namespace Express {
  export interface Request {
    user: JwtPayload;
    headers: "auth-token";
  }
  export interface Response {
    user: any;
  }
}
