import config from "../config/config";
import { Client, Databases, ID, Storage, Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    buket;
    
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
            this.databases = new Databases(this.client);
            this.buket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            return error
        }
    }
}

const service = new Service()
export default service