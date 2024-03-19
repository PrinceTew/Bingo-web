let B = false,
    I = false,
    N = false,
    G = false,
    O = false;

function grn(max){

    let rndmnumber = Math.floor(Math.random() * max) + 1;
    //if...else if...else statement
    //if( conditions ) { block of code to execute}
    // ==, ! =, >, <, > =, < =, &&, ||

    if(rndmnumber <= 15){
        B = true;
        console.log(`Random Number ${ rndmnumber } is in B. 1 - 15`);
    } 
    else if (rndmnumber >= 16 && rndmnumber <= 30)
    {
        I = true;
        console.log(`Random Number ${ rndmnumber } is in I. 16 - 30`)
    } 
    else if (rndmnumber >= 31 && rndmnumber <= 45)
    {
        N = true;
        console.log(`Random Number ${ rndmnumber } is in N. 31 - 45`)
    } 
    else if (rndmnumber >= 46 && rndmnumber <= 60)
    {
        G = true;
        console.log(`Random Number ${ rndmnumber } is in G. 46 - 60`)
    } 
    else if (rndmnumber >= 61 && rndmnumber <= 75)
    {
        O = true;
        console.log(`Random Number ${ rndmnumber } is in O. 61 - 75`)
    } 
    else 
    {
        return console.log(`Ramdom Number is Invalid`);
    }

    if(B == true && I == true && N == true && G == true && O == true){
        console.log(`Bingo!!!`)
    }
    
}

console.log("Hello World");

grn(75);