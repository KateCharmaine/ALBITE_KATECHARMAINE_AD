var number = 23;
var i = 1;
var count = 0;

for (i = 1; i <=number; i++){
    if (number % i == 0)
        count++;
}

if (count == 2)
    console.log(number + " is a prime number");
else
    console.log(number + " is not a prime number");