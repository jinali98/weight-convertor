let input = document.getElementById('getInput');

let submitToG = document.getElementById('submitToG');
submitToG.addEventListener("click", convertTog);

let submitToMG = document.getElementById('submitToMG');
submitToMG.addEventListener("click", convertTomg);

let submitToLB = document.getElementById('submitToLB');
submitToLB.addEventListener("click", convertTolb);

// to convert to miligrams 

function convertTomg() {

    if (input.value == 0 || isString(input.value) ) {
        let p = document.getElementById('output');
        p.innerHTML = "Enter a valid value to convert";
    } else {
        let inputValue = input.value;

        let convertTomg = inputValue * 10000;

        let p = document.getElementById('output');
        p.innerHTML = inputValue + "Kg is " + convertTomg + "mg";

    }
}
function convertTolb() {

    if (input.value == 0 || isString(input.value)) {
        let p = document.getElementById('output');
        p.innerHTML = "Enter a valid value to convert";
    } else {
        let inputValue = input.value;

        let convertTolb = inputValue * 2;

        let p = document.getElementById('output');
        p.innerHTML = inputValue + "Kg is " + convertTolb + "lb";

    }
}


// to covert to grams

function convertTog() {

    if (input.value == 0 || isString(input.value)) {
        let p = document.getElementById('output');
        p.innerHTML = "Enter a valid value to convert";

    } else {


        let inputValue = input.value;

        let convertTog = inputValue * 1000;
        //     let h3 = document.createElement("h3");
        //     let node = document.createTextNode(convertTog);

        //     h3.appendChild(node);
        // document.getElementById('output').appendChild(h3);

        //     console.log(convertTog);

        // method two to display the value

        let p = document.getElementById('output');
        p.innerHTML = inputValue + "Kg is " + convertTog + "g";

        // method 3

        // let p =document.getElementById("output");
        // let node = document.createTextNode(convertTog);

        // p.appendChild(node);
    }

}