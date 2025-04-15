import config from "../config/config";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account; 

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
        
    }
}

const authService = new AuthService();

export default authService

  