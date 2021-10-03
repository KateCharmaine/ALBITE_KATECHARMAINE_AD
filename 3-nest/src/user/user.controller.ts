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
    getUserID(@Param("id") id: string){
        return this.userService.getUserID(id);
    }

    @Put('/:id')
    replaceValuePut(@Param("id") id: string, @Body() body: any) {
        return this.userService.replaceValuePut(id, body); 
    }

    @Patch('/:id')
    replaceValuePatch(@Param("id") id:string, @Body() body: any) {
        return this.userService.replaceValuePatch(id,body);
    }


    @Delete('/:id')
    deleteUser(@Param("id") id: string) {
        return this.userService.deleteUser(id);
    }

    @Post("/login")
    login(@Body() login: any){
        return this.userService.login(login);
    }

    @Get("search/:term")
    searchUser(@Param("term") term: string){
        return this.userService.searchUser(term);
    }
}

