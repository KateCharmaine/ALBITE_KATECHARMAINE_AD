import { Controller, Get} from '@nestjs/common';
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
}
