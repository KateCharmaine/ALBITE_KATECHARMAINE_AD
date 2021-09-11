import { Injectable } from '@nestjs/common';

@Injectable()
export class Exercise3Service {
    helloWorld(){
        console.log("Hello there AppsDev Class");
        return "Hello there AppsDev Class";
    }

    loopsTriangle(){
        var n = 5;
        var string = "";
        
        for (var i = 1; i <= n; i++) {
          for (var j = 0; j < i; j++) {
            string += "*";
          }
          string += "\n";
        }
        console.log(string);
    }
    return;

}
