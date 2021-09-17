import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Exercise3Service } from './exercise3.service';

@Controller('exercise3')
export class Exercise3Controller {
  
    constructor(private readonly e3: Exercise3Service){}

    @Get('/Car/:id')
    getOne(@Param("id") id:string){
    return this.e3.getCar(id);
    //return;    
  }

    @Get("/helloWorld")
  getHello(): string {
    return this.e3.helloWorld();
  }

  @Get("/loopsTriangle")
  loopsTriangle(){
    return this.e3.loopsTriangle();
  }

  @Get("/hello/:name")
    gethello(@Param('name') name:string): string{
    return this.e3.gethello(name);
  }


  @Get("/prime/:number")
        PrimeNumber(@Param('number') number:string){
        var parsedNumber = parseInt(number);
        return `The number ${parsedNumber} is ${this.e3.PrimeNumber(23)}`;
  }

  @Post("/addCar")
    addCar(@Body() body:any){
    return this.e3.addCar(body);
    //return;    
  }

  @Put('/replaceCar/:id')
  replaceCar(@Param("id") id:string, @Body() body:any){
  return this.e3.replaceCar(id, body);
  //return;    
  }

  @Delete('/deleteCar/:id')
  deleteCar(@Param("id") id:string){
  return this.e3.deleteCar(id);
  //return;    
  }

  @Get("/addJoshCar1")
    test1(){
    return this.e3.addJoshCar1();
    //return;    
  }

  @Get("/logcars")
    logCars(){
    return this.e3.logAllCars();
    //return;    
  }
}

