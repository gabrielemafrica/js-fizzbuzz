//seleziono elemento contenitore

const contenitore = document.getElementById("box_circle");
//stampo i numeri da 1 a 100

for(let i=1; i<=100; i++){

        //creo elemento cerchio
        const cerchio = document.createElement('div');

        //aggiungo una classe
        cerchio.classList.add("circle");

        //genero numero random
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(`numero random ${randomNum}`);



    //i numeri non divisibili per 3 e 5
    if(i % 3 !== 0 && i % 5 !== 0){


        //inserisco il valore dell'elemento
        cerchio.append(i);

        //aggiungo al contenitore
        contenitore.append(cerchio);

        //aggiungo classe
        cerchio.classList.add("blue");

        console.log(i);

      
    



    //i numeri divisibili per 3 e 5
    }else if(i % 3 === 0 && i % 5 === 0){
        //inserisco il valore dell'elemento
        cerchio.append(`FizzBuzz`);

        //aggiungo al contenitore
        contenitore.append(cerchio);

        //aggiungo classe
        cerchio.classList.add("pink");
        
        //effettto random
        if(randomNum == 1){
            cerchio.classList.add("rotate1");
        }else if(randomNum == 2){
            cerchio.classList.add("rotate2");
        }else{
            cerchio.classList.add("rotate3");
        }

        console.log(`FizzBuzz ${i}`);
    //i numeri divisibili per 3 e non per 5
    }else if(i % 3 === 0 && i % 5 !== 0){
        //inserisco il valore dell'elemento
        cerchio.append(`Fizz`);

        //aggiungo al contenitore
        contenitore.append(cerchio);

        //aggiungo classe
        cerchio.classList.add("green");

        //effettto random
        if(randomNum == 1){
            cerchio.classList.add("opacity1");
        }else if(randomNum == 2){
            cerchio.classList.add("opacity2");
        }else{
            cerchio.classList.add("opacity3");
        }
        
        console.log(`Fizz ${i}`);
    //i numeri divisibili per 5 e non per 3
    }else if(i % 5 === 0 && i % 3 !== 0){
            //inserisco il valore dell'elemento
            cerchio.append(`Buzz`);

            //aggiungo al contenitore
            contenitore.append(cerchio);
    
            //aggiungo classe
            cerchio.classList.add("orange");
            
            //effettto random
            if(randomNum == 1){
            cerchio.classList.add("batti1");
            }else if(randomNum == 2){
            cerchio.classList.add("batti2");
            }else{
            cerchio.classList.add("batti3");
            }
                
        console.log(`Buzz ${i}`);
    }


}