import { IamAuthenticator } from "ibm-watson/auth";

export interface IConfigWatson {
  authenticator: IamAuthenticator;
  version: string;
  serviceUrl: string;
}
