"use strict";

var TAKE = {
    beginNumber : 0,
    endNumber : 100
};

window.onload = function(){
    outputFizzBuzzToColsole();
};

function outputFizzBuzzToColsole(){
    var i = 0;
    for( i = TAKE.beginNumber ; i < TAKE.endNumber ; ++i ){
        if( (i%15) === 0 ){
            console.log("Fizz Buzz");
        }
        else if( (i%3) === 0 ){
            console.log("Fizz");
        }
        else if( (i%5) === 0 ){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}
