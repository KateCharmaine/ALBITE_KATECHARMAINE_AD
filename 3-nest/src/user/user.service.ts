import { Injectable } from '@nestjs/common';
import { debug } from 'console';
import { truncateSync } from 'fs';
import { CRUDReturn } from './crud_return.interface';
import { Helper } from './helper';
import { User } from './user.model';

const DEBUG: boolean = true;
@Injectable()
export class UserService {

    private users: Map<string,User> = new Map<string,User>();
    id: string;
    email: string;
    password: string;

    constructor(){
        this.users = Helper.populate();
    }

    login(login: any):CRUDReturn {
        for(const user of this.users.values()){
           if(user.toJson().email == login.email)
            return user.login(login.password);
        }
          return  {
              success:false, 
              data: `Login Fail, Email does not match`
        };     
    }


    register(body:any): CRUDReturn {
        try {
            var validBodyPut: {valid: boolean; data:string } = Helper.validBodyPut(body);
            if (validBodyPut.valid) {
                if (!this.emailExists(body.email)){
                    var newUser: User = new User(
                        body.name,
                        body.age,
                        body.email,
                        body.password,
                    );
                    if (this.saveToDB(newUser)){
                        if (debug) this.logAllUsers();
                        return {
                            success: true,
                            data: newUser.toJson(),
                        };
                    } else {
                        throw new Error('generic database error');
                    }
                } else {
                    throw new Error (`${body.email} is already in use by another user`);
                }           
        }else {
            throw new Error(validBodyPut.data);
        }
    } catch (error) {
        console.log(error.message);
        return {success: false,data: `Error adding account, ${error.message}`};
    }
}
        

    logAllUsers(){
        for(const[key,user] of this.users.entries()){
            console.log(key);
            user.log();
        }
    }

    getAllUser(){
        var populateData = [];
        for(const user of this.users.values()){
            populateData.push(user.toJson());
        }
        return {
            success: true, data: populateData,
        }
    }

    getUserID(id:string): CRUDReturn {
        if (this.users.has(id)) {
            return { success: true, data: this.users.get(id).toJson() };
        } else 
            return {
                success: false,
                data: `User ${id} is not in database`,
            };
    }

    replaceValuePut(id:string, body: any):CRUDReturn{
        try{
        var replace: {valid:boolean;data:string} = Helper.validBodyPut(body);
        if(replace.valid){
            for(const replaceValues of this.users.values()){
                if(id == replaceValues.toJson().id){
                  if(!this.emailExists(body.email) || body.email == replaceValues.toJson().email){
                          if(replaceValues?.replaceValues(body)){
                          return {
                              success: true,
                              data: replaceValues.toJson()
                            };
                        }
                        return {
                            success: false, 
                            data: 'Error'
                        };                     
                  }
                  else
                  {
                    throw new Error(`${body.email} is already used.`);
                  }
                }
              }
              throw new Error(`User ${id} does not exist in the database`);
            }
            else
            {
              throw new Error(replace.data);
            }
          }
          catch(error){
            return {
                success: false, 
                data: `${error.message}`
            };
          }
        }
        
    replaceValuePatch(id:string, body:any){
        try{
            var replace: {valid:boolean;data:string} = Helper.validBodyPatch(body);
            if(replace.valid){
                for(const replaceValues of this.users.values()){
                    if(id == replaceValues.toJson().id){
                      if(!this.emailExists(body.email) || body.email == replaceValues.toJson().email){
                              if(replaceValues?.replaceValues(body)){
                              return {
                                  success: true,
                                  data: replaceValues.toJson()
                                };
                            }
                            return {
                                success: false, 
                                data: 'Error'
                            };                     
                      }
                      else
                      {
                        throw new Error(`${body.email} is already used.`);
                      }
                    }
                  }
                  throw new Error(`User ${id} does not exist in the database`);
                }
                else
                {
                  throw new Error(replace.data);
                }
              }
              catch(error){
                return {
                    success: false, 
                    data: `${error.message}`
                };
              }
        }


    deleteUser(id:string){
        try {
            if (this.users.has(id)) {
                return { success: true, data: this.users.delete(id) };
            } else {
                throw new Error(`${this.id} User doesn't exist!`);
              }
            } catch (error) {
                return { success: false, data: error.message };
        }
    }



    searchUser(term: string): CRUDReturn{
        var results: Array<any> = [];
        for (const user of this.users.values()) {
            if (user.matches(term)) results.push(user.toJson());
        }
        return {success: results.length > 0, data:results};
    }

    saveToDB(user: User): boolean {
        try  {
            this.users.set(user.id, user);
            return this.users.has(user.id);
        } catch (error) {
            console.log(error);
            return false;
        }
    }


    emailExists(email:string,options?:{exeptionalId:string}){
        for (const user of this.users.values()){
            if(user.matches(email)){
                if (
                    options?.exeptionalId!=undefined && 
                    user.matches(options.exeptionalId)
                )
                continue;
                else return true;
            }
        }

        return false;
    }

    replaceValues(id:string,options?:{exeptionalId:string}){
        for (const user of this.users.values()){
            if(user.replaceValues(id)){
                if (
                    options?.exeptionalId!= undefined && 
                    user.replaceValues(options.exeptionalId)
                )
                continue;
                else return true;
            }
        }
        return false;
    }
    
}