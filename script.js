console.log("Hello World");

grn(75);

function grn(max){
    let rndmnumber = Math.floor(Math.random() * max) + 1;
    //if...else if...else statement
    //if( conditions ) { block of code to execute}
    // ==, ! =, >, <, > =, < =, &&, ||

    if(rndmnumber <= 15){
        return console.log(`Random Number ${ rndmnumber } is in B. 1 - 15`);
    } 
    else if (rndmnumber >= 16 && rndmnumber <= 30)
    {
        return console.log(`Random Number ${ rndmnumber } is in I. 16 - 30`)
    } 
    else if (rndmnumber >= 31 && rndmnumber <= 45)
    {
        return console.log(`Random Number ${ rndmnumber } is in N. 31 - 45`)
    } 
    else if (rndmnumber >= 46 && rndmnumber <= 60)
    {
        return console.log(`Random Number ${ rndmnumber } is in G. 46 - 60`)
    } 
    else if (rndmnumber >= 61 && rndmnumber <= 75)
    {
        return console.log(`Random Number ${ rndmnumber } is in O. 61 - 75`)
    } 
    else 
    {
        return console.log(`Ramdom Number is Invalid`);
    }
    
}