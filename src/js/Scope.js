
//scope de var
function testVar(){
    var x=34;
    if (true){
        var x=17;
        console.log(x);
    }
    console.log(x);
}
//testVar();


//Scope de let
function testLet(){
    let x = 45;
    if(true){
        let x = 90;
        console.log(x)
    }
    console.log(x);
}
//testLet();

//Scope con const
const x = 24
function Scopeconst(){
    const x = 45;
    if(true){
        const x = 90;
        console.log(x)
    }
    console.log(x);
}
//console.log(x);

//Scopeconst();


if (true){
    let z = 34;
    const w = 12;
    var y = 45;
}

console.log(y);
