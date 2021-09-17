import { Injectable } from '@nestjs/common';
import { Car } from './car.model';

@Injectable()
export class Exercise3Service {

    private cars: Map<string,Car> = new Map<string,Car>();

    private cars2: Array<{}> = [{

            "id":"CARL143",
            "model":"Ferarri",
            "color":"Black",
            "wheels": {
                "name":"Pirelli",
                "radius":16
        }
        
    },{
        "id":"JOSH420",
        "model":"Montero",
        "color":"Red",
        "wheels": {
            "name":"Goodyear",
            "radius":18
    }
    }
];

    searchCar(){
        for(const car of this.cars2){
            if(car['id']==="JOSH420"){
                return car;
            }
        }

    }

    getCar(id:string){

        return this.cars.get(id).toJson();
    
    }

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

<<<<<<< Updated upstream

=======
    //sampleFunction(){
        //var v1:Array<string>;
        //v1 = ["Carl", "Joseph", "Aleczar", "Pete", "Shaina"];
       //console.log(v1);
        //v1 = v1.sort((a,b)=>{
            //return a.localeCompare(b);
            //if(a.length<b.length) return -1;
            //else if(a.length>b.length) return 1;
            //else return 0;

        //});        
        //console.log("sorted");
        //console.log(v1);
        //console.log(v1);
        //v1 = 1;
        //console.log(v1); 
        //v1 = false;
       //console.log(v1);
   //}

   addCar(car:any){
        var newCar: Car;
        newCar = new Car(car?.model, car?.color, {name: car?.wheels.name, radius:car.wheels.radius});
        this.cars.set(car.id, newCar);
        this.logAllCars();
   }

   replaceCar(id:string, car:any){
        var newCar: Car;
        newCar = new Car(car?.model, car?.color, {name: car?.wheels.name, radius:car.wheels.radius});
        this.cars.set(id, newCar);
        this.logAllCars();
   }

   deleteCar(id:string){
        if(this.cars.has(id))
        this.cars.delete(id)
        else console.log(id +"Does not exist in database!");
   }

   addJoshCar1(){
        var joshuaCar: Car;
        joshuaCar = new Car("Montero", "Blue", {name: "Goodyear", radius:18});
        this.cars.set("Joshua", joshuaCar);
        this.logAllCars();
    }

   logAllCars(){
        for(const [key,car] of this.cars.entries()){
        console.log(key);
        car.log();
        }
   }
>>>>>>> Stashed changes
}

