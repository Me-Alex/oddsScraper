function isFloat(number) {
    return !Number.isInteger(number);
}
function isInteger(number) {
    return Number.isInteger(number);
}
async function fetchUrl1(url) {
    const fetchedData = await fetch(url)
        .then(response => response.url)
        .catch(err => console.error(err));

    return fetchedData;

}
async function fetchUrlNoRedirect(url) {
    const fetchedData = await fetch(url, {
        method: 'GET',
        redirect: 'manual', // Prevent automatic redirection
    })
        .then(response => response.url)
        .catch(err => console.error(err));

    return fetchedData;

}
async function fetchUrlText(url) {
    const fetchedData = await fetch(url, options)
        .then(response => response.text())
        .catch(err => console.error(err));

    return fetchedData;

}
async function fetchUrlTextNew(url) {
    const fetchedData = await fetch(url, {
        method: 'GET',
        headers: {
          cookie: 'routeid=a3e0d5fcbba9e2a633b0716e40d1657a; PREMATCH_SESSION=NjNlZjU1NmItODVjNS00MWFkLWFkNzUtMjczOTAxNzY3YTdm',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      })
        .then(response => response.text())
        .then(jsonResponse => {
            console.log(jsonResponse);
        })
        .catch(err => console.error(err));

    return fetchedData;

}
async function fetchUrl(url) {
    const fetchedData = await fetch(url, options)
        .then(response => response.url)
        .catch(err => console.error(err));

    return fetchedData;

}
async function fetchUrlJson(url) {
    const fetchedData = await fetch(url, options)
        .then(response => response.json())
        .catch(err => console.error(err));

    return fetchedData;

}

function checkIfEventHasMarkets(match) {
    if (match.matchOdds) {
        if (match.matchOdds.markets)
            return true;
        else
            return false;
    } else {
        return false;
    }
}

function compareAndCalculate(betano, fortuna) {
    for (let index = 0; index < betano.length; index++) {
        for (let index1 = 0; index1 < fortuna.length; index1++) {
            if (betano[index].name.toLowerCase().split(" ")[0] == "peste" && fortuna[index1].oddName.toLowerCase().split(' ')[0] == "sub" && betano[index].name.toLowerCase().split(" ")[1] == fortuna[index1].oddName.toLowerCase().split(' ')[1]) {
                console.log(betano[index].name.toLowerCase()); //PESTE
                console.log(betano[index].price + " " + fortuna[index1 + 1].oddValue);
                console.log(betano[index + 1].price + " " + fortuna[index1].oddValue);
                console.log(fortuna[index1].oddName.toLowerCase()); //SUB
                calculator2way(betano[index].price, betano[index + 1].price, fortuna[index1 + 1].oddValue, fortuna[index1].oddValue, false)


            }
        }

    }
}
//pentru 1X2 type bets 
function calculator3way(teamB, equalB, team2B, teamF, equalF, team2F, bool) {
    let team1 = biggerNr(teamB, teamF);
    let equal = biggerNr(equalB, equalF);
    let team2 = biggerNr(team2B, team2F);
    if (bool == true) {
        return calculateProfit3way(team1, equal, team2, true);
    } else
        calculateProfit3way(team1, equal, team2);

}

function biggerNr(nr1, nr2) {
    if (nr1 >= nr2) {
        return nr1;
    }
    if (nr2 >= nr1) {
        return nr2;
    }

}
function smallerNr(nr1, nr2) {
    if (nr1 <= nr2) {
        return nr1;
    }
    if (nr2 <= nr1) {
        return nr2;
    }

}

function calculateProfit3way(x, y, z, bool) {
    let investment = 300;
    let result;
    result = investment - investment / x;
    result = result - investment / y;
    result = result - investment / z;
    console.log(result);
    if (result > 0) {
        console.log("POZITIV");
    }
    if (bool == true) {
        return result;
    }

}

function calculator2way(result1B, result2B, result1F, result2F, bool) {
    let result1 = biggerNr(result1B, result1F);
    let result2 = biggerNr(result2B, result2F);
    calculateProfit2way(result1, result2, bool);

}
function calculateProfitForUnderUnderOverStrategie(underOdd1, underOdd2, overOdd, bool) {
    let result, temp, temp1, temp2;
    let investment = 300;
    result = investment / overOdd;
    result = investment - result;
    temp = result;//204
    result = investment / biggerNr(underOdd1, underOdd2);
    temp1 = result;//181.81
    temp2 = temp - temp1;//22.18
    result = temp2 * biggerNr(underOdd1, underOdd2) + temp1 * smallerNr(underOdd1, underOdd2);
    console.log(result - investment);
    if (result > investment) {
        if (result > 0) {
            console.log("POZITIV");
        }
        if (bool = true) {
            return result - investment;
        }
    }
}
function calculateProfit2way(x, y, bool) {
    let investment = 300;
    let result;
    biggerNr(x, y);
    result = investment - investment / biggerNr(x, y);
    result = result - investment / smallerNr(x, y);
    console.log(result);
    if (result > 0) {
        console.log("POZITIV");
    }
    if (bool = true) {
        return result;
    }
}

async function compareOddsEvent(fortuna, betano, key) {
    var flag1 = false;
    var FLAG2 = false;
    var tempIndexB = -1;
    var tempIndexF = -1
    var flag2 = false;
    for (let index = 0; index < betano.markets.length; index++) {
        flag2 = false;
        // console.log(betano.markets[index].name);
        if (fortuna.matchOdds.markets)
            for (let index2 = 0; index2 < fortuna.matchOdds.markets.length; index2++) {
                let resultC = -500;
                if (fortuna.matchOdds.markets[index2]) {
                    // console.log(fortuna.matchOdds.markets[index2].marketName);

                    if ((betano.markets[index].name == "Rezultat final"||betano.markets[index].name =="Rezultat final MC") && fortuna.matchOdds.markets[index2].marketName == "1X2") {
                        flag1 = true;
                        tempIndexB = index;
                        tempIndexF = index2;
                        console.log(betano.markets[index].selections[0].price + " " + fortuna.matchOdds.markets[index2].allMarkets[0].oddValue); //ordine betano 1 X 2 ordine fortuna 1 2 X
                        console.log(betano.markets[index].selections[1].price + " " + fortuna.matchOdds.markets[index2].allMarkets[2].oddValue);
                        console.log(betano.markets[index].selections[2].price + " " + fortuna.matchOdds.markets[index2].allMarkets[1].oddValue);
                        resultC = calculator3way(betano.markets[index].selections[0].price, betano.markets[index].selections[1].price, betano.markets[index].selections[2].price, fortuna.matchOdds.markets[index2].allMarkets[0].oddValue, fortuna.matchOdds.markets[index2].allMarkets[2].oddValue, fortuna.matchOdds.markets[index2].allMarkets[1].oddValue, true);
                        var htmlString = '<div class="card" >' +
                            '<div class="card-header"onclick="toggleDropdown(this)">' +
                            '<h1 class="card-title"> <i class="fas fa-futbol"></i> ' + " " + betano.shortName + " profit " + resultC + " lei" +
                            '</h1>' +
                            '<p class="card-start-time">' + await returnTIme(key) + '</p>' +
                            '<i class="fas fa-angle-down" id="angle-down"></i>' +
                            '</div>' +
                            '<div class="card-body dropdown-content" id="myDropdown" style="display: none;">' +
                            '<div class="card-group">' +
                            '<div class="card">' +
                            '<div class="card-body">' +
                            '<h5 class="card-title 1">' + betano.markets[index].selections[0].fullName + '</h5>' +
                            '<p class="card-text">Odds: <span>' + biggerNr(betano.markets[index].selections[0].price, fortuna.matchOdds.markets[index2].allMarkets[0].oddValue) + '</span></p>' +
                            '</div>' +
                            '</div>' +
                            '<div class="card">' +
                            '<div class="card-body">' +
                            '<h5 class="card-title x">' + betano.markets[index].selections[1].fullName + '</h5>' +
                            '<p class="card-text">Odds: <span>' + biggerNr(betano.markets[index].selections[1].price, fortuna.matchOdds.markets[index2].allMarkets[2].oddValue) + '</span></p>' +
                            '</div>' +
                            '</div>' +
                            '<div class="card">' +
                            '<div class="card-body">' +
                            '<h5 class="card-title 2">' + betano.markets[index].selections[2].fullName + '</h5>' +
                            '<p class="card-text">Odds: <span>' + biggerNr(betano.markets[index].selections[2].price, fortuna.matchOdds.markets[index2].allMarkets[1].oddValue) + '</span></p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="text-center mt-3">' +
                            '<a class="btn btn-primary" target="_blank" href="">Pariaza aici</a>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                        if (resultC > -2) {
                            if (flag2 == false) {
                                var div = document.createElement("div");
                                div.className = "column";
                                document.body.appendChild(div);
                                flag2 = true;
                            }
                            document.body.querySelector('.column').innerHTML += htmlString;
                        }


                    }
                    if (betano.markets[index].name == "Handicap Asiatic (Scorul actual 0 - 0)" && fortuna.matchOdds.markets[index2].marketName == " Handicap Asiatic ") { // se repeta de 8 ori pentru ca trebuie ca if-ul sa aiba un && ca si comparatie cu fortuna 
                        console.log('Handicap Asiatic');
                        console.log(betano.markets[index].selections[0].name);
                        console.log("null" + betano.markets[index].selections[0].price);
                        console.log(betano.markets[index].selections[1].name);
                        console.log("null" + betano.markets[index].selections[0].price);
                        // compareAndCalculate(betano.markets[index].selections, fortuna.matchOdds.markets[index2].allMarkets);
                    }
                    if (betano.markets[index].name == "Șansă dublă" && fortuna.matchOdds.markets[index2].marketName == "1X-X2-12") {
                        console.log('Sansa Dubla');
                        console.log(betano.markets[index].selections[0].price + " " + fortuna.matchOdds.markets[index2].allMarkets[0].oddValue);
                        console.log(betano.markets[index].selections[1].price + " " + fortuna.matchOdds.markets[index2].allMarkets[1].oddValue);
                        console.log(betano.markets[index].selections[2].price + " " + fortuna.matchOdds.markets[index2].allMarkets[2].oddValue);
                        calculator3way(betano.markets[index].selections[0].price, betano.markets[index].selections[1].price, betano.markets[index].selections[2].price, fortuna.matchOdds.markets[index2].allMarkets[0].oddValue, fortuna.matchOdds.markets[index2].allMarkets[1].oddValue, fortuna.matchOdds.markets[index2].allMarkets[2].oddValue, fortuna.matchOdds.markets[index2].allMarkets[2].oddValue)

                        if (flag1 == true) {
                            console.log("match Key: " + key);
                            console.log('Team 1 compared with  X2');
                            calculateProfit2way(biggerNr(betano.markets[tempIndexB].selections[0].price, fortuna.matchOdds.markets[tempIndexF].allMarkets[0].oddValue), biggerNr(betano.markets[index].selections[1].price, fortuna.matchOdds.markets[index2].allMarkets[1].oddValue), false);
                            console.log('Team 2 compared with  1X');
                            calculateProfit2way(biggerNr(betano.markets[tempIndexB].selections[2].price, fortuna.matchOdds.markets[tempIndexF].allMarkets[1].oddValue), biggerNr(betano.markets[index].selections[0].price, fortuna.matchOdds.markets[index2].allMarkets[0].oddValue), false);
                            console.log('Egal compared with  12');
                            calculateProfit2way(biggerNr(betano.markets[tempIndexB].selections[1].price, fortuna.matchOdds.markets[tempIndexF].allMarkets[2].oddValue), biggerNr(betano.markets[index].selections[2].price, fortuna.matchOdds.markets[index2].allMarkets[2].oddValue), false);
                            flag1 = false;
                            tempIndexB = -1;
                            tempIndexF = -1;
                        }


                    }
                    if (betano.markets[index].name == "Ambele echipe înscriu" && fortuna.matchOdds.markets[index2].marketName == " Ambele marcheaza ") {
                        console.log('Amebele inscriu ');
                        console.log(betano.markets[index].selections[0].price + " " + fortuna.matchOdds.markets[index2].allMarkets[0].oddValue);
                        console.log(betano.markets[index].selections[1].price + " " + fortuna.matchOdds.markets[index2].allMarkets[1].oddValue);
                        calculator2way(betano.markets[index].selections[0].price, betano.markets[index].selections[1].price, fortuna.matchOdds.markets[index2].allMarkets[0].oddValue, fortuna.matchOdds.markets[index2].allMarkets[1].oddValue, false)
                    }
                    if (betano.markets[index].name == "Niciun pariu pe egal" && fortuna.matchOdds.markets[index2].marketName == " Victorie fara egal ") {
                        console.log('Niciun pariu pe egal');
                        console.log(betano.markets[index].selections[0].price + " " + fortuna.matchOdds.markets[index2].allMarkets[0].oddValue);
                        console.log(betano.markets[index].selections[1].price + " " + fortuna.matchOdds.markets[index2].allMarkets[1].oddValue);
                        calculator2way(betano.markets[index].selections[0].price, betano.markets[index].selections[1].price, fortuna.matchOdds.markets[index2].allMarkets[0].oddValue, fortuna.matchOdds.markets[index2].allMarkets[1].oddValue, false);
                        htmlString += '<div class="card-group">' +
                            '<div class="card">' +
                            '<div class="card-body">' +
                            '<h5 class="card-title 1">' + betano.markets[index].selections[0].fullName + '</h5>' +
                            '<p class="card-text">Odds: <span>' + betano.markets[index].selections[0].price + '</span></p>' +
                            '</div>' +
                            '</div>' +
                            '<div class="card">' +
                            '<div class="card-body">' +
                            '<h5 class="card-title 2">' + betano.markets[index].selections[1].fullName + '</h5>' +
                            '<p class="card-text">Odds: <span>' + betano.markets[index].selections[1].price + '</span></p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="text-center mt-3">' +
                            '<a class="btn btn-primary" target="_blank" href="">Pariaza aici</a>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                        if (resultC > -20)
                            document.body.querySelector('.column').innerHTML += htmlString;

                    }
                    if (betano.markets[index].name == "Rezultat final" && fortuna.matchOdds.markets[index2].marketName == " Victorie fara egal ") {//strategia2.png
                        let drow = betano.markets[index].selections[1].price;
                        let drowNobet = fortuna.matchOdds.markets[index2].allMarkets[1].oddValue;
                        let team1 = betano.markets[index].selections[0].price;
                        calculateProfitForDrawNoBetDrawTeam1(drowNobet, drow, team1, false);

                    }
                    if (betano.markets[index].name == "Total goluri Peste/Sub (suplimentar)" && fortuna.matchOdds.markets[index2].marketName == " Peste/Sub ") {
                        console.log('Total goluri Peste/Sub');
                        // compareAndCalculate(betano.markets[index].selections, fortuna.matchOdds.markets[index2].allMarkets);
                        let b, f;
                        b = betano.markets[index].selections;
                        f = fortuna.matchOdds.markets[index2].allMarkets;
                        for (let numberB = 0; numberB < b.length; numberB++) {
                            for (let numberF = 0; numberF < f.length; numberF++) {
                                if (b[numberB].name.toLowerCase().split(" ")[0] == "peste" && f[numberF].oddName.toLowerCase().split(' ')[0] == "sub" && b[numberB].name.toLowerCase().split(" ")[1] == f[numberF].oddName.toLowerCase().split(' ')[1]) {
                                    console.log(b[numberB].name.toLowerCase()); //PESTE
                                    console.log(b[numberB].price + " " + f[numberF + 1].oddValue);
                                    console.log(f[numberF].oddName.toLowerCase()); //SUB
                                    console.log(b[numberB + 1].price + " " + f[numberF].oddValue);
                                    calculator2way(b[numberB].price, b[numberB + 1].price, f[numberF + 1].oddValue, f[numberF].oddValue, false)


                                }//real
                                // if (b[numberB].name.toLowerCase().split(" ")[0] == "peste" && f[numberF].oddName.toLowerCase().split(' ')[0] == "sub" && b[numberB].name.toLowerCase().split(" ")[1].split(".")[0] == f[numberF].oddName.toLowerCase().split(' ')[1].split(".")[0]) {
                                //     console.log(b[numberB].name.toLowerCase()); //PESTE
                                //     console.log(b[numberB].price + " " + f[numberF + 1].oddValue);
                                //     console.log(f[numberF].oddName.toLowerCase()); //SUB
                                //     console.log(b[numberB + 1].price + " " + f[numberF].oddValue);
                                //     calculateProfit2way(b[numberB].price, f[numberF].oddValue, false)
                                //     console.log("match : " + key);


                                // }
                                if (b[numberB].name.toLowerCase().split(" ")[0] == "sub" && f[numberF].oddName.toLowerCase().split(' ')[0] == "peste" && parseFloat(b[numberB].name.toLowerCase().split(" ")[1]) < parseFloat(f[numberF].oddName.toLowerCase().split(' ')[1]) && parseFloat(b[numberB].name.toLowerCase().split(" ")[1]) + 1 > parseFloat(f[numberF].oddName.toLowerCase().split(' ')[1]) && isFloat(parseFloat(f[numberF].oddName.toLowerCase().split(' ')[1])) == false) {
                                    console.log("START ");
                                    console.log(b[numberB].name.toLowerCase()); //SUB betano
                                    console.log(b[numberB].price + " "); // under odd
                                    console.log(b[numberB + 2].name.toLowerCase()); //SUB betano + 1   ex =>>>under 1.5 her it will be 1.5+1=2.5  under 2.5 
                                    console.log(b[numberB + 2].price + " "); // under odd
                                    console.log(f[numberF].oddName.toLowerCase()); //PESTE fortuna number is a integer
                                    console.log(f[numberF].oddValue);
                                    calculateProfitForUnderUnderOverStrategie(b[numberB].price, b[numberB + 2].price, f[numberF].oddValue, false);
                                    console.log("match : " + key);
                                    console.log("END");


                                }// strategia sub sub over 
                                // if (b[numberB].name.toLowerCase().split(" ")[0] == "peste" && f[numberF].oddName.toLowerCase().split(' ')[0] == "sub" && parseInt( b[numberB].name.toLowerCase().split(" ")[1].split(".")[0])+1 == parseInt(f[numberF].oddName.toLowerCase().split(' ')[1].split(".")[0])) {
                                //     console.log(b[numberB].name.toLowerCase()); //PESTE
                                //     console.log(b[numberB].price + " " + f[numberF + 1].oddValue);
                                //     console.log(f[numberF].oddName.toLowerCase()); //SUB
                                //     console.log(b[numberB + 1].price + " " + f[numberF].oddValue);
                                //     calculateProfit2way(b[numberB].price, f[numberF].oddValue, false)
                                //     console.log("match : "+key);

                                // } //peste 1.5 sub 2 sub 2.5
                            }

                        }
                    }

                    if (betano.markets[index].name == "Pauză/Final" && fortuna.matchOdds.markets[index2].marketName == " Pauza/final ") {
                        console.log('Pauza Final');
                        for (let c1 = 0; c1 < fortuna.matchOdds.markets[index2].allMarkets.length; c1++) {
                            // console.log(fortuna.matchOdds.markets[index2].allMarkets[c1].oddName);
                            for (let c2 = 0; c2 < betano.markets[index].selections.length; c2++) {
                                // console.log(betano.markets[index].selections[c2].name);
                                if (fortuna.matchOdds.markets[index2].allMarkets[c1].oddName == betano.markets[index].selections[c2].name) {
                                    console.log(fortuna.matchOdds.markets[index2].allMarkets[c1].oddName);
                                    console.log(betano.markets[index].selections[c2].price + " " + fortuna.matchOdds.markets[index2].allMarkets[c1].oddValue); //ordine betano 1 X 2 ordine fortuna 1 2 X
                                }
                            }

                        }
                    }
                }

            }
        else {

            // scrapeFortunaMatchOdds(fortuna.eFortunaUrl, fortuna.sportRadarID);
            console.log('cote adaugate la');
        }

    }
}
async function compareOddsEventTennis(fortuna, betano, key) {
    var flag1 = false;
    var FLAG2 = false;
    var tempIndexB = -1;
    var tempIndexF = -1
    var flag2 = false;
    for (let index = 0; index < betano.markets.length; index++) {
        flag2 = false;
        // console.log(betano.markets[index].name);
        if (fortuna.matchOdds.markets)
            for (let index2 = 0; index2 < fortuna.matchOdds.markets.length; index2++) {
                let resultC = -500;
                if (fortuna.matchOdds.markets[index2]) {
                    // console.log(fortuna.matchOdds.markets[index2].marketName);

                    if (betano.markets[index].name == "Câştigător" && fortuna.matchOdds.markets[index2].marketName == "1X2") {
                        flag1 = true;
                        tempIndexB = index;
                        tempIndexF = index2;
                        console.log(betano.markets[index].selections[0].price + " " + fortuna.matchOdds.markets[index2].allMarkets[0].oddValue); //ordine betano 1 X 2 ordine fortuna 1 2 X
                        console.log(betano.markets[index].selections[1].price + " " + fortuna.matchOdds.markets[index2].allMarkets[1].oddValue);
                        resultC = calculateProfit2way(betano.markets[index].selections[0].price, betano.markets[index].selections[1].price, fortuna.matchOdds.markets[index2].allMarkets[0].oddValue, fortuna.matchOdds.markets[index2].allMarkets[1].oddValue, true);
                        var htmlString = '<div class="card" >' +
                            '<div class="card-header"onclick="toggleDropdown(this)">' +
                            '<h1 class="card-title"> <i class="fas fa-futbol"></i> ' + " " + betano.shortName + " profit " + resultC + " lei" +
                            '</h1>' +
                            '<p class="card-start-time">' + await returnTIme(key) + '</p>' +
                            '<i class="fas fa-angle-down" id="angle-down"></i>' +
                            '</div>' +
                            '<div class="card-body dropdown-content" id="myDropdown" style="display: none;">' +
                            '<div class="card-group">' +
                            '<div class="card">' +
                            '<div class="card-body">' +
                            '<h5 class="card-title 1">' + betano.markets[index].selections[0].fullName + '</h5>' +
                            '<p class="card-text">Odds: <span>' + biggerNr(betano.markets[index].selections[0].price, fortuna.matchOdds.markets[index2].allMarkets[0].oddValue) + '</span></p>' +
                            '</div>' +
                            '</div>' +
                            '<div class="card">' +
                            '<div class="card-body">' +
                            '<h5 class="card-title 2">' + betano.markets[index].selections[1].fullName + '</h5>' +
                            '<p class="card-text">Odds: <span>' + biggerNr(betano.markets[index].selections[1].price, fortuna.matchOdds.markets[index2].allMarkets[1].oddValue) + '</span></p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="text-center mt-3">' +
                            '<a class="btn btn-primary" target="_blank" href="">Pariaza aici</a>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                        if (resultC >= -0.99) {
                            if (flag2 == false) {
                                var div = document.createElement("div");
                                div.className = "column";
                                document.body.appendChild(div);
                                flag2 = true;
                            }
                            document.body.querySelector('.column').innerHTML += htmlString;
                        }


                    }
                    if (betano.markets[index].name == "Handicap Asiatic (Scorul actual 0 - 0)") { // se repeta de 8 ori pentru ca trebuie ca if-ul sa aiba un && ca si comparatie cu fortuna 
                        console.log('Handicap Asiatic');
                        console.log(betano.markets[index].selections[0].name);
                        console.log("null" + betano.markets[index].selections[0].price);
                        console.log(betano.markets[index].selections[1].name);
                        console.log("null" + betano.markets[index].selections[0].price);
                        // compareAndCalculate(betano.markets[index].selections, fortuna.matchOdds.markets[index2].allMarkets);
                    }
                    if (betano.markets[index].name == "Șansă dublă" && fortuna.matchOdds.markets[index2].marketName == "1X-X2-12") {
                        console.log('Sansa Dubla');
                        console.log(betano.markets[index].selections[0].price + " " + fortuna.matchOdds.markets[index2].allMarkets[0].oddValue);
                        console.log(betano.markets[index].selections[1].price + " " + fortuna.matchOdds.markets[index2].allMarkets[1].oddValue);
                        console.log(betano.markets[index].selections[2].price + " " + fortuna.matchOdds.markets[index2].allMarkets[2].oddValue);
                        calculator3way(betano.markets[index].selections[0].price, betano.markets[index].selections[1].price, betano.markets[index].selections[2].price, fortuna.matchOdds.markets[index2].allMarkets[0].oddValue, fortuna.matchOdds.markets[index2].allMarkets[1].oddValue, fortuna.matchOdds.markets[index2].allMarkets[2].oddValue, fortuna.matchOdds.markets[index2].allMarkets[2].oddValue)

                        if (flag1 == true) {
                            console.log("match Key: " + key);
                            console.log('Team 1 compared with  X2');
                            calculateProfit2way(biggerNr(betano.markets[tempIndexB].selections[0].price, fortuna.matchOdds.markets[tempIndexF].allMarkets[0].oddValue), biggerNr(betano.markets[index].selections[1].price, fortuna.matchOdds.markets[index2].allMarkets[1].oddValue), false);
                            console.log('Team 2 compared with  1X');
                            calculateProfit2way(biggerNr(betano.markets[tempIndexB].selections[2].price, fortuna.matchOdds.markets[tempIndexF].allMarkets[1].oddValue), biggerNr(betano.markets[index].selections[0].price, fortuna.matchOdds.markets[index2].allMarkets[0].oddValue), false);
                            console.log('Egal compared with  12');
                            calculateProfit2way(biggerNr(betano.markets[tempIndexB].selections[1].price, fortuna.matchOdds.markets[tempIndexF].allMarkets[2].oddValue), biggerNr(betano.markets[index].selections[2].price, fortuna.matchOdds.markets[index2].allMarkets[2].oddValue), false);
                            flag1 = false;
                            tempIndexB = -1;
                            tempIndexF = -1;
                        }


                    }
                    if (betano.markets[index].name == "Ambele echipe înscriu" && fortuna.matchOdds.markets[index2].marketName == " Ambele marcheaza ") {
                        console.log('Amebele inscriu ');
                        console.log(betano.markets[index].selections[0].price + " " + fortuna.matchOdds.markets[index2].allMarkets[0].oddValue);
                        console.log(betano.markets[index].selections[1].price + " " + fortuna.matchOdds.markets[index2].allMarkets[1].oddValue);
                        calculator2way(betano.markets[index].selections[0].price, betano.markets[index].selections[1].price, fortuna.matchOdds.markets[index2].allMarkets[0].oddValue, fortuna.matchOdds.markets[index2].allMarkets[1].oddValue, false)
                    }
                    if (betano.markets[index].name == "Niciun pariu pe egal" && fortuna.matchOdds.markets[index2].marketName == " Victorie fara egal ") {
                        console.log('Niciun pariu pe egal');
                        console.log(betano.markets[index].selections[0].price + " " + fortuna.matchOdds.markets[index2].allMarkets[0].oddValue);
                        console.log(betano.markets[index].selections[1].price + " " + fortuna.matchOdds.markets[index2].allMarkets[1].oddValue);
                        calculator2way(betano.markets[index].selections[0].price, betano.markets[index].selections[1].price, fortuna.matchOdds.markets[index2].allMarkets[0].oddValue, fortuna.matchOdds.markets[index2].allMarkets[1].oddValue, false);
                        htmlString += '<div class="card-group">' +
                            '<div class="card">' +
                            '<div class="card-body">' +
                            '<h5 class="card-title 1">' + betano.markets[index].selections[0].fullName + '</h5>' +
                            '<p class="card-text">Odds: <span>' + betano.markets[index].selections[0].price + '</span></p>' +
                            '</div>' +
                            '</div>' +
                            '<div class="card">' +
                            '<div class="card-body">' +
                            '<h5 class="card-title 2">' + betano.markets[index].selections[1].fullName + '</h5>' +
                            '<p class="card-text">Odds: <span>' + betano.markets[index].selections[1].price + '</span></p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="text-center mt-3">' +
                            '<a class="btn btn-primary" target="_blank" href="">Pariaza aici</a>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                        if (resultC > -20)
                            document.body.querySelector('.column').innerHTML += htmlString;

                    }
                    if (betano.markets[index].name == "Total goluri Peste/Sub (suplimentar)" && fortuna.matchOdds.markets[index2].marketName == " Total goluri / Total goluri asiatice ") {
                        console.log('Total goluri Peste/Sub');
                        compareAndCalculate(betano.markets[index].selections, fortuna.matchOdds.markets[index2].allMarkets);
                    }

                    if (betano.markets[index].name == "Pauză/Final" && fortuna.matchOdds.markets[index2].marketName == " Pauza/final ") {
                        console.log('Pauza Final');
                        for (let c1 = 0; c1 < fortuna.matchOdds.markets[index2].allMarkets.length; c1++) {
                            // console.log(fortuna.matchOdds.markets[index2].allMarkets[c1].oddName);
                            for (let c2 = 0; c2 < betano.markets[index].selections.length; c2++) {
                                // console.log(betano.markets[index].selections[c2].name);
                                if (fortuna.matchOdds.markets[index2].allMarkets[c1].oddName == betano.markets[index].selections[c2].name) {
                                    console.log(fortuna.matchOdds.markets[index2].allMarkets[c1].oddName);
                                    console.log(betano.markets[index].selections[c2].price + " " + fortuna.matchOdds.markets[index2].allMarkets[c1].oddValue); //ordine betano 1 X 2 ordine fortuna 1 2 X
                                }
                            }

                        }
                    }
                }

            }
        else {

            // scrapeFortunaMatchOdds(fortuna.eFortunaUrl, fortuna.sportRadarID);
            console.log('cote adaugate la');
        }

    }
}