function calculateProfit() {
    let investment = document.querySelector("#input1").value;
    console.log("aici" + calculate);
    let x = document.querySelector("#input2").value;
    console.log("aici" + x);
    let y = document.querySelector("#input3").value;
    console.log("aici" + y);
    let z = document.querySelector("#input4").value;
    console.log("aici" + z);

    let result;
    result = investment - investment / x;
    result = result - investment / y;
    result = result - investment / z;
    console.log(result);
    if (result > 0) {
        console.log("POZITIV");
    }
    document.querySelector("#result").innerText = result;
    return result;

}

function calculateProfit2() {
    let investment = document.querySelector("#input1").value;
    console.log("aici" + calculate);
    let x = document.querySelector("#input2").value;
    console.log("aici" + x);
    let y = document.querySelector("#input3").value;
    console.log("aici" + y);
    let result;
    result = investment - investment / x;
    result = result - investment / y;
    console.log(result);
    if (result > 0) {
        console.log("POZITIV");
    }
    document.querySelector("#result").innerText = result;
    return result;

}