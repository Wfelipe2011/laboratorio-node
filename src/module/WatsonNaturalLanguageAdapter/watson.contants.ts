import { IamAuthenticator } from "ibm-watson/auth";
import { IConfigWatson } from "./watson.interface";

export const ConfigWatson: IConfigWatson = {
  authenticator: new IamAuthenticator({
    apikey: process.env.API_KEY,
  }),
  version: "2018-04-05",
  serviceUrl: process.env.URL_SERVICE,
};
