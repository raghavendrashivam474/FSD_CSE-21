function sum(a, b) {
    return a+b;
}

function sumwithmssg(clbk,mssg){
    const res = clbk(5, 10);
    const fresult = "HI"+mssg+"Your score is: " + res;
    console.log(fresult)
}

sumwithmssg(sum, "Good Job! ");