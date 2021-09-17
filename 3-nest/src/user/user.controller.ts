import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post('/register')
    register(@Body() body: any) {
        return this.userService.register(body);
    }

    @Get('/all')
    getAllUser() {
        return this.userService.getAllUser();
    }

    @Get('/:id')
    getUserID(@Param("id") id: number){
        return this.userService.getUserID(id);
    }

    @Put('/:id')
    replaceValuePut(@Param("id") id:number, @Body() body: any) {
        return this.userService.replaceValuePut(id,body); 
    }

    @Patch('/:id')
    replaceValuePatch(@Param("id") id:number, @Body() body: any) {
        return this.userService.replaceValuePatch(id,body);
    }


    @Delete('/:id')
    deleteUser(@Param("id") id: number) {
        return this.userService.deleteUser(id);
    }

    @Post("/login")
    login(@Body("email") email:string , @Body("password") password:string){
        return this.userService.login(email,password);
    }

    @Get("search/:term")
    searchUser(@Body() body:any){
        return this.userService.searchUser(body);
    }
}

