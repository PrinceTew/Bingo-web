console.log("Hello World");

grn(100);

function grn(max){
    let rndmnumber = Math.floor(Math.random * max) + 1;

    if(rndmnumber >= 5){
        console.log(`R`);
    } else {
        console.log(`Random Number is < = to 5`)
    }

    return console.log(rndmnumber);

}