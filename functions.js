function getAverage (a,b){
    // local variable average
    var average = (a + b) / 2;
    console.log(average);
}

getAverage(7,12);


//global variable outside of function
average = 0;

function globalAverage (a,b){
    average = (a + b) / 2;
    console.log(average);
}

globalAverage(7,12);
