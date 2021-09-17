import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {

    private users: Map<number,User> = new Map<number,User>();
    email: string;
    password: string;

    constructor(){
        this.populate();
    }

    populate(){
        
        this.users.set(1,new User(1,"Wilfredo Quitara",18,"Wilfredo.Quitara@gmail.com", "123456"));
        this.users.set(2,new User(2,"Kate Sasan",16,"Kate.Sasan@gmail.com", "1234567"));
        this.users.set(3,new User(3,"Maegan Chu",17,"Maegan.Chu@gmail.com", "1234568"));
        this.users.set(4,new User(4,"Shannen Loyola",18,"Shannen.Loyola@gmail.com", "1234569"));
    }

    register(user:any){
        var newUser:User ; 
        newUser = new User(user.id, user.name, user.age, user.email, user.password);
        if(this.users.set(user.id, newUser)){
            this.logAllUsers();
            console.log("Thank you for registering!\n Account has been added\n");
        }
        else console.log("Sorry, account cannot be added!");
        
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
        return populateData;
    }

    getUserID(id:number){
        if (this.users.has(id)) {
            this.users.get(id).toJson()
            return console.log(id);
        }
    }

    replaceValuePut(id:number, user:any){
        var newUser:User ; 
        newUser = new User(user.id, user.name, user.age, user.email, user.password);
        if(this.users.set(id, newUser)){
            this.logAllUsers();
            console.log("Changed Successfully\n");
        }
        else console.log("Sorry, unable to change\n");
    }

    replaceValuePatch(id:number, newUser:any){
        for(const [num,user] of this.users.entries()){
            if(user['id'] === id){
                user["email"] = newUser.email;
                console.log();
            }
        }
    }

    deleteUser(id:number){
        if(this.users.has(id))
        this.users.delete(id);
        else console.log(id + "Sorry, does not exist in database!");
    }

    login(email:string, password:string){
        if(email === this.email && password === this.password)
        return console.log(email + password);
        else
        return console.log("Sorry! Email and Password Invalid");   
    }

    searchUser(newUser:any){
        for(const [number,user] of this.users.entries()){
            console.log(newUser);
            user.log();
        }
      }
}