


var perfectlyLocalVariable = "Perfect";
var changebleVariable = "perfect Local";

var firstFunction = function(){
    console.log("Entered first function :::::");
    perfectlyLocalVariable = "changed value in first function"
    console.log("Perfectly Local Variable :::" + perfectlyLocalVariable);
    var changebleVariable = "declare in first function";
    console.log("changeble Variable :::::" + changebleVariable);
    var firstFunctionVariable = "first Function Variable";
    console.log("frist function Variable :::::" + firstFunctionVariable);

    var secondFunction = function(){
        console.log("Entered second Function ::::::");
        perfectlyLocalVariable = "changed value in second function";
        console.log("Perfect Local Variable  ::::: " + perfectlyLocalVariable);
        var changebleVariable = "declared in second function";
        console.log("changeble Variable ::::: " + changebleVariable);

        console.log("first funcion Variable ::::" + firstFunctionVariable);


    }
    console.log("Exit Second Function :::::");
    console.log("Perfect Local Variable  ::::: " + perfectlyLocalVariable);
    console.log("changeble Variable :::: " + changebleVariable);
    secondFunction();
}

firstFunction();

console.log("Exit first Funcion :::: ");
console.log("perfectly lcoal variable :::: " + perfectlyLocalVariable);
console.log("changeble variable :::: " + changebleVariable);
