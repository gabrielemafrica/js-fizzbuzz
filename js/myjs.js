//stampo i numeri da 1 a 100

for(let i=1; i<=100; i++){

    //i numeri non divisibili per 3 e 5
    if(i % 3 !== 0 && i % 5 !== 0){
        console.log(i);
    //i numeri divisibili per 3 e 5
    }else if(i % 3 === 0 && i % 5 === 0){
        console.log(`FizzBuzz ${i}`);
    //i numeri divisibili per 3 e non per 5
    }else if(i % 3 === 0 && i % 5 !== 0){
        console.log(`Fizz ${i}`);
    //i numeri divisibili per 5 e non per 3
    }else if(i % 5 === 0 && i % 3 !== 0){
        console.log(`Buzz ${i}`);
    }
}