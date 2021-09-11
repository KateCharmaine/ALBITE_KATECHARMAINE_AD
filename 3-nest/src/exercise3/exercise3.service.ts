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

    gethello(name:string){
        return "Hello there "+ name;
    }

    PrimeNumber(n:number){
        var i = 1;
        var count = 0;

        for (i = 1; i <=n; i++){
             if (n % i == 0)
                  count++;
        }

        if (count == 2)
            return (" a prime number");
        else
            return (" not a prime number");
    }


}
