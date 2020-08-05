
function firstOperatioon() {
    secondOperation();

    console.log("Hello");
}

function secondOperation() {
    setTimeout(function () {
        let i = 0;

        while(i < 10E9) {
            i++
        }

        console.log("Finish")
    }, 0);

}

firstOperatioon();