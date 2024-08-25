import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account ;

    constructor(){
        this.client
            .setEndpoint(conf.appwirteUrl)
            .setEndpoint(conf.appwirteProjectId);
            this.account= new Account(this.client);
    }
    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                // call another method
                    return this.login({email,password});
            }
            else{
                return userAccount 
            }
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
           return await this.account.get();
        } catch (error) {
            console.log("Appwrite Serice :: getCurrentUser",error)
        }
    return null;
    }

    async login({email,password}){
        try {
            return await account.createEmailPasswordSession(
                email, 
                password
            );
        } catch (error) {
            throw error;
        }
    }
    async logout (){
        try {
            await this.account.deleteSessions('current');

        } catch (error) {
            console.log("Appwrite Serice :: logout ",error)
        }
    }
}


const authService = new AuthService();

export default authService;