import conf from "../conf/conf";
import { Client, Account, ID,Databases,Storage,Query } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwirteUrl)
            .setEndpoint(conf.appwirteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);


    }

    async createPost({title,slug,content,featuredImg,status,userId}){
                try {
                    return await this.databases.createDocument(
                        conf.appwirteDatabaseId,
                        conf.appwirteCollectionId,
                        slug,
                        {
                            title,
                            content,
                            featuredImg,
                            status,
                            userId
                        }
                    )
                } catch (error) {
                    console.log("Appwrite Service :: create Post error ",error);   
                }
    }


    async updatePost(slug,{title,content,featuredImg,status}){
        try {

            return await this.databases.updateDocument(
                conf.appwirteDatabaseId,
                conf.appwirteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: Update Post error ",error);   
        }
}


async deletePost(slug,{title,content,featuredImg,status}){
    try {

         await this.databases.deleteDocument(
            conf.appwirteDatabaseId,
            conf.appwirteCollectionId,
            slug,
            {
                title,
                content,
                featuredImg,
                status
            }
        );

        return true;

    } catch (error) {
        console.log("Appwrite Service :: Delete Post error ",error);   
        return false;
    }
}


async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwirteDatabaseId,
            conf.appwirteCollectionId,
            slug
        )

    } catch (error) {
            console.log("Appwirte Service :: getPost Error",error)
            return false;
    }
}

async getPosts(queries = [Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwirteDatabaseId,
            conf.appwirteCollectionId,
           queries,

        )
    } catch (error) {
        console.log("Appwrite Service :: getPosts",error)
        return false; // ho sakta value naa mele koi bhii toh 
    }
}

// file upload method :

async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwirteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite Service :: uploadFile",error);
        return false;
    }
}


async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appwirteBucketId,
            fileId

        )
        return true;
    } catch (error) {
        console.log("Appwrite Service :: deleteFile",error);
        return false;
    }
}

async filePreview(fileId){
    try {
       return  this.bucket.getFilePreview(
            conf.appwirteBucketId,
            fileId
        )
       
    } catch (error) {
        console.log("Appwrite Service :: filePreview",error);
        return false;
    }
}


}

const service = new Service();

export default service

