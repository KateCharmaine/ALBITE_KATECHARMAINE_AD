import { Controller, Get, Param} from '@nestjs/common';
import { Exercise3Service } from './exercise3.service';

@Controller('exercise3')
export class Exercise3Controller {
    constructor(private readonly e3: Exercise3Service){}

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

}

