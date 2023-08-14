function ceva() {
    let str = "peste 0.5";
    let str2 = "peste 2";

    console.log(str.split(" ")[1].split(".")[0]);
    if (str2.split(" ")[1].split(".")[0]) {
        console.log(str2.split(" ")[1]);
        console.log(str2.split(" ")[1].split(".")[0]);
        console.log("ceva");
    }
}
function calculateProfitForUnderUnderOverStrategie2(underOdd1, underOdd2, overOdd, bool) {
    let result, temp, temp1, temp2;
    let investment = 300;
    result = investment / overOdd;
    console.log(investment + '/' + overOdd);
    console.log(result);
    console.log(" ");
    console.log(investment + "-" + result);
    result = investment - result;
    console.log(result);
    console.log(" ");
    temp = result;//204
    result = investment / biggerNr(underOdd1, underOdd2);
    console.log(investment + "/" + biggerNr(underOdd1, underOdd2));
    console.log(result);
    console.log(" ");
    temp1 = result;//181.81
    temp2 = temp - temp1;//22.18
    result = temp2 * biggerNr(underOdd1, underOdd2) + temp1 * smallerNr(underOdd1, underOdd2);
    console.log(temp2 + "*" + biggerNr(underOdd1, underOdd2) + " + " + temp1 + "*" + smallerNr(underOdd1, underOdd2));
    console.log(result);
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
function calculateProfitForEvenDrowNoBetTeamOneTest(DND, even, teamOne, bool) {
    let result, temp, temp1, temp2;
    let investment = 300;
    temp = investment / teamOne;
    console.log(temp);
    temp1 = investment / DND;
    console.log(temp1);
    temp2 = investment - temp1 - temp;
    console.log(temp2);
    result = (temp2 * even) + temp1;
    console.log(result - investment);
    if (result >= investment) {
        if (result > 0) {
            console.log("POZITIV");
        }
        if (bool = true) {
            return result - investment;
        }
    }
}
function calculateProfitForDrawNoBetDrawTeam1Test(DrawNoBet, Draw, Team1) {
    let result, temp, temp1, temp2;
    let investment = 300;
    temp = investment / DrawNoBet;
    temp1 = investment / Team1;
    temp2 = investment - temp;
    result = temp2 / Draw;
    temp2 = temp2 - result;
    result = temp2 * Team1;

    if (result > 0) {
        console.log("POZITIV");
    }
    if (bool = true) {
        return result;
    }


}
function biggerNrTest(nr1, nr2) {
    if (nr1 >= nr2) {
        return nr1;
    }
    if (nr2 >= nr1) {
        return nr2;
    }

}
function smallerNrTest(nr1, nr2) {
    if (nr1 <= nr2) {
        return nr1;
    }
    if (nr2 <= nr1) {
        return nr2;
    }

}
function calculateProfit3wayTest(x, y, z, bool) {
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
function calculateProfit2wayTest(x, y, bool) {
    let investment = 300;
    let result;
    biggerNrTest(x, y);
    result = investment - investment / biggerNrTest(x, y);
    result = result - investment / smallerNrTest(x, y);
    console.log(result);
    if (result > 0) {
        console.log("POZITIV");
    }
    if (bool == true) {
        return result;
    }
}
function profitSureBetDoubleChance(x, y, z, bool) {
    console.log("1X and X2")
    calculateProfit2wayTest(x, y, false);
    console.log("1X2-1x-12-x2");
    console.log(x);
    console.log(y);
    console.log(z);
    let investment = 300;
    let temp1, temp2, temp3, temp4, result;
    temp1 = investment / 2;
    temp2 = temp1 / x;
    temp3 = temp1 / y;
    temp4 = temp1 / z;
    result = temp2 + temp3 + temp4;
    result = investment - result;
    console.log(result);
    if (result > 0) {
        console.log("POZITIV");
    }
    if (bool == true) {
        return result;
    }

}

testBetano = {
    "name": "Chelsea FC - Liverpool FC",
    "startTime": 1691940600000,
    "shortName": "Chelsea FC - Liverpool FC",
    "leagueDescription": "Premier League",
    "markets": [
        {
            "id": "1430679457",
            "uniqueId": "1430679457",
            "name": "Rezultat final MC",
            "type": "MR12",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "marketNotes": "Piețele care beneficiază de MegaCote sunt oferite cu cote mai mari și nu pot fi combinate cu nicio altă oferta.",
            "renderingLayout": 4,
            "pinKey": "p_MR120",
            "selections": [
                {
                    "id": "3695376081",
                    "name": "1",
                    "fullName": "Chelsea FC",
                    "price": 3,
                    "handicap": 0,
                    "betRef": "3695376081",
                    "renderingLayout": 4,
                    "columnIndex": 0
                },
                {
                    "id": "3695376082",
                    "name": "X",
                    "fullName": "Egal",
                    "price": 3.65,
                    "handicap": 0,
                    "betRef": "3695376082",
                    "renderingLayout": 4,
                    "columnIndex": 1
                },
                {
                    "id": "3695376083",
                    "name": "2",
                    "fullName": "Liverpool FC",
                    "price": 2.45,
                    "handicap": 0,
                    "betRef": "3695376083",
                    "renderingLayout": 4,
                    "columnIndex": 2
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212032",
            "uniqueId": "1383212032",
            "name": "Rezultat final",
            "type": "MRES",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 4,
            "pinKey": "p_MRES0",
            "selections": [
                {
                    "id": "3463728595",
                    "name": "1",
                    "fullName": "Chelsea FC",
                    "price": 2.92,
                    "handicap": 0,
                    "betRef": "3463728595",
                    "renderingLayout": 4,
                    "columnIndex": 0
                },
                {
                    "id": "3463728596",
                    "name": "X",
                    "fullName": "Egal",
                    "price": 3.5,
                    "handicap": 0,
                    "betRef": "3463728596",
                    "renderingLayout": 4,
                    "columnIndex": 1
                },
                {
                    "id": "3463728597",
                    "name": "2",
                    "fullName": "Liverpool FC",
                    "price": 2.37,
                    "handicap": 0,
                    "betRef": "3463728597",
                    "renderingLayout": 4,
                    "columnIndex": 2
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383223022",
            "uniqueId": "1383223022",
            "name": "Total goluri Peste/Sub",
            "type": "HCTG",
            "handicap": 2.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_HCTG0",
            "selections": [
                {
                    "id": "3463783393",
                    "name": "Peste 2.5",
                    "price": 1.6,
                    "handicap": 2.5,
                    "betRef": "3463783393",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783394",
                    "name": "Sub 2.5",
                    "price": 2.35,
                    "handicap": 2.5,
                    "betRef": "3463783394",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212041",
            "uniqueId": "1383212041",
            "name": "Ambele echipe înscriu",
            "type": "BTSC",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_BTSC0",
            "selections": [
                {
                    "id": "3463728622",
                    "name": "Da (GG)",
                    "price": 1.47,
                    "handicap": 0,
                    "betRef": "3463728622",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728623",
                    "name": "Nu (NG)",
                    "price": 2.55,
                    "handicap": 0,
                    "betRef": "3463728623",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212217",
            "uniqueId": "1383212217",
            "name": "Ambele echipe înscriu sau Peste 2.5",
            "type": "3966",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_39660",
            "selections": [
                {
                    "id": "3463729175",
                    "name": "Da",
                    "price": 1.34,
                    "handicap": 0,
                    "betRef": "3463729175",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463729176",
                    "name": "Nu (2-0, 1-0, 0-0, 0-1 sau 0-2)",
                    "price": 3.1,
                    "handicap": 0,
                    "betRef": "3463729176",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212037",
            "uniqueId": "1383212037",
            "name": "Șansă dublă",
            "type": "DBLC",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 3,
            "pinKey": "p_DBLC0",
            "selections": [
                {
                    "id": "3463728611",
                    "name": "1X",
                    "price": 1.62,
                    "handicap": 0,
                    "betRef": "3463728611",
                    "renderingLayout": 3,
                    "columnIndex": 0
                },
                {
                    "id": "3463728613",
                    "name": "X2",
                    "price": 1.44,
                    "handicap": 0,
                    "betRef": "3463728613",
                    "renderingLayout": 3,
                    "columnIndex": 1
                },
                {
                    "id": "3463728612",
                    "name": "12",
                    "price": 1.32,
                    "handicap": 0,
                    "betRef": "3463728612",
                    "renderingLayout": 3,
                    "columnIndex": 2
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212038",
            "uniqueId": "1383212038",
            "name": "Niciun pariu pe egal",
            "type": "DNOB",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_DNOB0",
            "selections": [
                {
                    "id": "3463728614",
                    "name": "Chelsea FC",
                    "price": 2.07,
                    "handicap": 0,
                    "betRef": "3463728614",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728616",
                    "name": "Liverpool FC",
                    "price": 1.7,
                    "handicap": 0,
                    "betRef": "3463728616",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383223026",
            "uniqueId": "1383223026",
            "name": "Total goluri Peste/Sub (suplimentar)",
            "type": "HCTG",
            "handicap": 0.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_HCTG1",
            "selections": [
                {
                    "id": "3463783401",
                    "name": "Peste 0.5",
                    "price": 1.04,
                    "handicap": 0.5,
                    "betRef": "3463783401",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783402",
                    "name": "Sub 0.5",
                    "price": 11.25,
                    "handicap": 0.5,
                    "betRef": "3463783402",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783397",
                    "name": "Peste 1.5",
                    "price": 1.2,
                    "handicap": 1.5,
                    "betRef": "3463783397",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783398",
                    "name": "Sub 1.5",
                    "price": 4.6,
                    "handicap": 1.5,
                    "betRef": "3463783398",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783393",
                    "name": "Peste 2.5",
                    "price": 1.6,
                    "handicap": 2.5,
                    "betRef": "3463783393",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783394",
                    "name": "Sub 2.5",
                    "price": 2.35,
                    "handicap": 2.5,
                    "betRef": "3463783394",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783421",
                    "name": "Peste 3.5",
                    "price": 2.45,
                    "handicap": 3.5,
                    "betRef": "3463783421",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783392",
                    "name": "Sub 3.5",
                    "price": 1.57,
                    "handicap": 3.5,
                    "betRef": "3463783392",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783395",
                    "name": "Peste 4.5",
                    "price": 4.2,
                    "handicap": 4.5,
                    "betRef": "3463783395",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783396",
                    "name": "Sub 4.5",
                    "price": 1.23,
                    "handicap": 4.5,
                    "betRef": "3463783396",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783399",
                    "name": "Peste 5.5",
                    "price": 7.4,
                    "handicap": 5.5,
                    "betRef": "3463783399",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783400",
                    "name": "Sub 5.5",
                    "price": 1.09,
                    "handicap": 5.5,
                    "betRef": "3463783400",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783403",
                    "name": "Peste 6.5",
                    "price": 12,
                    "handicap": 6.5,
                    "betRef": "3463783403",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783404",
                    "name": "Sub 6.5",
                    "price": 1.03,
                    "handicap": 6.5,
                    "betRef": "3463783404",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212051",
            "uniqueId": "1383212051",
            "name": "Rezultat meci & Peste/Sub (1.5)",
            "type": "MROU",
            "handicap": 1.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_MROU0",
            "selections": [
                {
                    "id": "3463728669",
                    "name": "1 şi Peste 1.5",
                    "price": 3.3,
                    "handicap": 1.5,
                    "betRef": "3463728669",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728671",
                    "name": "1 şi Sub 1.5",
                    "price": 11.75,
                    "handicap": 1.5,
                    "betRef": "3463728671",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728672",
                    "name": "2 şi Peste 1.5",
                    "price": 2.67,
                    "handicap": 1.5,
                    "betRef": "3463728672",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728673",
                    "name": "2 şi Sub 1.5",
                    "price": 10.75,
                    "handicap": 1.5,
                    "betRef": "3463728673",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728674",
                    "name": "X şi Peste 1.5",
                    "price": 3.9,
                    "handicap": 1.5,
                    "betRef": "3463728674",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728675",
                    "name": "X şi Sub 1.5",
                    "price": 11.25,
                    "handicap": 1.5,
                    "betRef": "3463728675",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212052",
            "uniqueId": "1383212052",
            "name": "Rezultat meci & Peste/Sub (2.5)",
            "type": "MROU",
            "handicap": 2.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_MROU1",
            "selections": [
                {
                    "id": "3463728676",
                    "name": "1 şi Peste 2.5",
                    "price": 3.95,
                    "handicap": 2.5,
                    "betRef": "3463728676",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728677",
                    "name": "1 şi Sub 2.5",
                    "price": 7.6,
                    "handicap": 2.5,
                    "betRef": "3463728677",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728678",
                    "name": "2 şi Peste 2.5",
                    "price": 3.15,
                    "handicap": 2.5,
                    "betRef": "3463728678",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728679",
                    "name": "2 şi Sub 2.5",
                    "price": 6.6,
                    "handicap": 2.5,
                    "betRef": "3463728679",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728680",
                    "name": "X şi Peste 2.5",
                    "price": 8,
                    "handicap": 2.5,
                    "betRef": "3463728680",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728681",
                    "name": "X şi Sub 2.5",
                    "price": 5,
                    "handicap": 2.5,
                    "betRef": "3463728681",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212053",
            "uniqueId": "1383212053",
            "name": "Rezultat meci & Peste/Sub (3.5)",
            "type": "MROU",
            "handicap": 3.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_MROU2",
            "selections": [
                {
                    "id": "3463728682",
                    "name": "1 şi Peste 3.5",
                    "price": 6.8,
                    "handicap": 3.5,
                    "betRef": "3463728682",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728683",
                    "name": "1 şi Sub 3.5",
                    "price": 4.2,
                    "handicap": 3.5,
                    "betRef": "3463728683",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728684",
                    "name": "2 şi Peste 3.5",
                    "price": 5.2,
                    "handicap": 3.5,
                    "betRef": "3463728684",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728685",
                    "name": "2 şi Sub 3.5",
                    "price": 3.6,
                    "handicap": 3.5,
                    "betRef": "3463728685",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728686",
                    "name": "X şi Peste 3.5",
                    "price": 8,
                    "handicap": 3.5,
                    "betRef": "3463728686",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728687",
                    "name": "X şi Sub 3.5",
                    "price": 5,
                    "handicap": 3.5,
                    "betRef": "3463728687",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212055",
            "uniqueId": "1383212055",
            "name": "Rezultat meci & Peste/Sub (4.5)",
            "type": "MROU",
            "handicap": 4.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_MROU3",
            "selections": [
                {
                    "id": "3463728688",
                    "name": "1 şi Peste 4.5",
                    "price": 9.75,
                    "handicap": 4.5,
                    "betRef": "3463728688",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728689",
                    "name": "1 şi Sub 4.5",
                    "price": 3.5,
                    "handicap": 4.5,
                    "betRef": "3463728689",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728690",
                    "name": "2 şi Peste 4.5",
                    "price": 7.6,
                    "handicap": 4.5,
                    "betRef": "3463728690",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728691",
                    "name": "2 şi Sub 4.5",
                    "price": 2.92,
                    "handicap": 4.5,
                    "betRef": "3463728691",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728692",
                    "name": "X şi Peste 4.5",
                    "price": 28,
                    "handicap": 4.5,
                    "betRef": "3463728692",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728693",
                    "name": "X şi Sub 4.5",
                    "price": 3.55,
                    "handicap": 4.5,
                    "betRef": "3463728693",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212054",
            "uniqueId": "1383212054",
            "name": "Rezultat meci & Peste/Sub (5.5)",
            "type": "MROU",
            "handicap": 5.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_MROU4",
            "selections": [
                {
                    "id": "3463728694",
                    "name": "1 şi Peste 5.5",
                    "price": 22,
                    "handicap": 5.5,
                    "betRef": "3463728694",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728695",
                    "name": "1 şi Sub 5.5",
                    "price": 2.95,
                    "handicap": 5.5,
                    "betRef": "3463728695",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728696",
                    "name": "2 şi Peste 5.5",
                    "price": 16,
                    "handicap": 5.5,
                    "betRef": "3463728696",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728697",
                    "name": "2 şi Sub 5.5",
                    "price": 2.45,
                    "handicap": 5.5,
                    "betRef": "3463728697",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728698",
                    "name": "X şi Peste 5.5",
                    "price": 27,
                    "handicap": 5.5,
                    "betRef": "3463728698",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728700",
                    "name": "X şi Sub 5.5",
                    "price": 3.55,
                    "handicap": 5.5,
                    "betRef": "3463728700",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212045",
            "uniqueId": "1383212045",
            "name": "Rezultat meci & Ambele echipe să înscrie",
            "type": "MRBT",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_MRBT0",
            "selections": [
                {
                    "id": "3463728646",
                    "name": "Chelsea FC / Da",
                    "price": 4.45,
                    "handicap": 0,
                    "betRef": "3463728646",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728645",
                    "name": "Chelsea FC / Nu",
                    "price": 6.1,
                    "handicap": 0,
                    "betRef": "3463728645",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728647",
                    "name": "Egal / Da",
                    "price": 3.9,
                    "handicap": 0,
                    "betRef": "3463728647",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728648",
                    "name": "Egal / Nu",
                    "price": 11.25,
                    "handicap": 0,
                    "betRef": "3463728648",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728649",
                    "name": "Liverpool FC / Da",
                    "price": 3.7,
                    "handicap": 0,
                    "betRef": "3463728649",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728650",
                    "name": "Liverpool FC / Nu",
                    "price": 5,
                    "handicap": 0,
                    "betRef": "3463728650",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212243",
            "uniqueId": "1383212243",
            "name": "Rezultat final sau Total goluri Peste/Sub 2.5",
            "type": "5249",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_52490",
            "selections": [
                {
                    "id": "3463729262",
                    "name": "1 sau Peste 2.5",
                    "price": 1.3,
                    "handicap": 0,
                    "betRef": "3463729262",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463729263",
                    "name": "1 sau Sub 2.5",
                    "price": 1.44,
                    "handicap": 0,
                    "betRef": "3463729263",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463729264",
                    "name": "X sau Peste 2.5",
                    "price": 1.22,
                    "handicap": 0,
                    "betRef": "3463729264",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463729265",
                    "name": "X sau Sub 2.5",
                    "price": 1.7,
                    "handicap": 0,
                    "betRef": "3463729265",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463729266",
                    "name": "2 sau Peste 2.5",
                    "price": 1.28,
                    "handicap": 0,
                    "betRef": "3463729266",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463729267",
                    "name": "2 sau Sub 2.5",
                    "price": 1.34,
                    "handicap": 0,
                    "betRef": "3463729267",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212244",
            "uniqueId": "1383212244",
            "name": "Rezultat final sau Ambele echipe înscriu",
            "type": "5015",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_50150",
            "selections": [
                {
                    "id": "3463729268",
                    "name": "1 sau GG",
                    "price": 1.21,
                    "handicap": 0,
                    "betRef": "3463729268",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463729269",
                    "name": "1 sau NG",
                    "price": 1.6,
                    "handicap": 0,
                    "betRef": "3463729269",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463729270",
                    "name": "X sau GG",
                    "price": 1.32,
                    "handicap": 0,
                    "betRef": "3463729270",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463729271",
                    "name": "X sau NG",
                    "price": 1.53,
                    "handicap": 0,
                    "betRef": "3463729271",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463729272",
                    "name": "2 sau GG",
                    "price": 1.17,
                    "handicap": 0,
                    "betRef": "3463729272",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463729273",
                    "name": "2 sau NG",
                    "price": 1.5,
                    "handicap": 0,
                    "betRef": "3463729273",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212046",
            "uniqueId": "1383212046",
            "name": "Ambele echipe înscriu & Peste/Sub (2.5)",
            "type": "BSOU",
            "handicap": 2.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_BSOU0",
            "selections": [
                {
                    "id": "3463728654",
                    "name": "Da şi Peste 2.5",
                    "price": 1.78,
                    "handicap": 2.5,
                    "betRef": "3463728654",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728655",
                    "name": "Nu şi Peste 2.5",
                    "price": 10.25,
                    "handicap": 2.5,
                    "betRef": "3463728655",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728656",
                    "name": "Da şi Sub 2.5",
                    "price": 7.4,
                    "handicap": 2.5,
                    "betRef": "3463728656",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728657",
                    "name": "Nu şi Sub 2.5",
                    "price": 3.1,
                    "handicap": 2.5,
                    "betRef": "3463728657",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212048",
            "uniqueId": "1383212048",
            "name": "Ambele echipe înscriu & Peste/Sub (3.5)",
            "type": "BSOU",
            "handicap": 3.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_BSOU1",
            "selections": [
                {
                    "id": "3463728658",
                    "name": "Da şi Peste 3.5",
                    "price": 2.52,
                    "handicap": 3.5,
                    "betRef": "3463728658",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728659",
                    "name": "Nu şi Peste 3.5",
                    "price": 27,
                    "handicap": 3.5,
                    "betRef": "3463728659",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728660",
                    "name": "Da şi Sub 3.5",
                    "price": 3.05,
                    "handicap": 3.5,
                    "betRef": "3463728660",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728661",
                    "name": "Nu şi Sub 3.5",
                    "price": 2.72,
                    "handicap": 3.5,
                    "betRef": "3463728661",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212049",
            "uniqueId": "1383212049",
            "name": "Ambele echipe înscriu & Peste/Sub (4.5)",
            "type": "BSOU",
            "handicap": 4.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_BSOU2",
            "selections": [
                {
                    "id": "3463728662",
                    "name": "Da şi Peste 4.5",
                    "price": 4.2,
                    "handicap": 4.5,
                    "betRef": "3463728662",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728663",
                    "name": "Nu şi Peste 4.5",
                    "price": 80,
                    "handicap": 4.5,
                    "betRef": "3463728663",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728664",
                    "name": "Da şi Sub 4.5",
                    "price": 2.05,
                    "handicap": 4.5,
                    "betRef": "3463728664",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728665",
                    "name": "Nu şi Sub 4.5",
                    "price": 2.57,
                    "handicap": 4.5,
                    "betRef": "3463728665",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212050",
            "uniqueId": "1383212050",
            "name": "Ambele echipe înscriu & Peste/Sub (5.5)",
            "type": "BSOU",
            "handicap": 5.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_BSOU3",
            "selections": [
                {
                    "id": "3463728666",
                    "name": "Da şi Peste 5.5",
                    "price": 7.7,
                    "handicap": 5.5,
                    "betRef": "3463728666",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728667",
                    "name": "Nu şi Peste 5.5",
                    "price": 250,
                    "handicap": 5.5,
                    "betRef": "3463728667",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728668",
                    "name": "Da şi Sub 5.5",
                    "price": 1.7,
                    "handicap": 5.5,
                    "betRef": "3463728668",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728670",
                    "name": "Nu şi Sub 5.5",
                    "price": 2.47,
                    "handicap": 5.5,
                    "betRef": "3463728670",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212058",
            "uniqueId": "1383212058",
            "name": "Șansă dublă & Peste/Sub (1.5)",
            "type": "DCTG",
            "handicap": 1.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_DCTG0",
            "selections": [
                {
                    "id": "3463728706",
                    "name": "12 şi Peste 1.5",
                    "price": 1.6,
                    "handicap": 1.5,
                    "betRef": "3463728706",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728707",
                    "name": "12 şi Sub 1.5",
                    "price": 6.1,
                    "handicap": 1.5,
                    "betRef": "3463728707",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728708",
                    "name": "1X şi Peste 1.5",
                    "price": 1.95,
                    "handicap": 1.5,
                    "betRef": "3463728708",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728709",
                    "name": "1X şi Sub 1.5",
                    "price": 7.3,
                    "handicap": 1.5,
                    "betRef": "3463728709",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728710",
                    "name": "X2 şi Peste 1.5",
                    "price": 1.72,
                    "handicap": 1.5,
                    "betRef": "3463728710",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728711",
                    "name": "X2 şi Sub 1.5",
                    "price": 6.9,
                    "handicap": 1.5,
                    "betRef": "3463728711",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212059",
            "uniqueId": "1383212059",
            "name": "Șansă dublă & Peste/Sub (2.5)",
            "type": "DCTG",
            "handicap": 2.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_DCTG1",
            "selections": [
                {
                    "id": "3463728712",
                    "name": "12 şi Peste 2.5",
                    "price": 1.9,
                    "handicap": 2.5,
                    "betRef": "3463728712",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728713",
                    "name": "12 şi Sub 2.5",
                    "price": 3.85,
                    "handicap": 2.5,
                    "betRef": "3463728713",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728714",
                    "name": "1X şi Peste 2.5",
                    "price": 2.87,
                    "handicap": 2.5,
                    "betRef": "3463728714",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728715",
                    "name": "1X şi Sub 2.5",
                    "price": 3.3,
                    "handicap": 2.5,
                    "betRef": "3463728715",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728716",
                    "name": "X2 şi Peste 2.5",
                    "price": 2.45,
                    "handicap": 2.5,
                    "betRef": "3463728716",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728717",
                    "name": "X2 şi Sub 2.5",
                    "price": 3.1,
                    "handicap": 2.5,
                    "betRef": "3463728717",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212060",
            "uniqueId": "1383212060",
            "name": "Șansă dublă & Peste/Sub (3.5)",
            "type": "DCTG",
            "handicap": 3.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_DCTG2",
            "selections": [
                {
                    "id": "3463728718",
                    "name": "12 şi Peste 3.5",
                    "price": 3.2,
                    "handicap": 3.5,
                    "betRef": "3463728718",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728719",
                    "name": "12 şi Sub 3.5",
                    "price": 2.1,
                    "handicap": 3.5,
                    "betRef": "3463728719",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728720",
                    "name": "1X şi Peste 3.5",
                    "price": 4.05,
                    "handicap": 3.5,
                    "betRef": "3463728720",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728722",
                    "name": "1X şi Sub 3.5",
                    "price": 2.47,
                    "handicap": 3.5,
                    "betRef": "3463728722",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728721",
                    "name": "X2 şi Peste 3.5",
                    "price": 3.45,
                    "handicap": 3.5,
                    "betRef": "3463728721",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728723",
                    "name": "X2 şi Sub 3.5",
                    "price": 2.27,
                    "handicap": 3.5,
                    "betRef": "3463728723",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212061",
            "uniqueId": "1383212061",
            "name": "Șansă dublă & Peste/Sub (4.5)",
            "type": "DCTG",
            "handicap": 4.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_DCTG3",
            "selections": [
                {
                    "id": "3463728724",
                    "name": "12 şi Peste 4.5",
                    "price": 4.75,
                    "handicap": 4.5,
                    "betRef": "3463728724",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728725",
                    "name": "12 şi Sub 4.5",
                    "price": 1.72,
                    "handicap": 4.5,
                    "betRef": "3463728725",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728726",
                    "name": "1X şi Peste 4.5",
                    "price": 8,
                    "handicap": 4.5,
                    "betRef": "3463728726",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728727",
                    "name": "1X şi Sub 4.5",
                    "price": 1.91,
                    "handicap": 4.5,
                    "betRef": "3463728727",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728728",
                    "name": "X2 şi Peste 4.5",
                    "price": 6.5,
                    "handicap": 4.5,
                    "betRef": "3463728728",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728729",
                    "name": "X2 şi Sub 4.5",
                    "price": 1.75,
                    "handicap": 4.5,
                    "betRef": "3463728729",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212062",
            "uniqueId": "1383212062",
            "name": "Șansă dublă & Peste/Sub (5.5)",
            "type": "DCTG",
            "handicap": 5.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_DCTG4",
            "selections": [
                {
                    "id": "3463728730",
                    "name": "12 şi Peste 5.5",
                    "price": 10.25,
                    "handicap": 5.5,
                    "betRef": "3463728730",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728731",
                    "name": "12 şi Sub 5.5",
                    "price": 1.45,
                    "handicap": 5.5,
                    "betRef": "3463728731",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728732",
                    "name": "1X şi Peste 5.5",
                    "price": 13.5,
                    "handicap": 5.5,
                    "betRef": "3463728732",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728733",
                    "name": "1X şi Sub 5.5",
                    "price": 1.72,
                    "handicap": 5.5,
                    "betRef": "3463728733",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728734",
                    "name": "X2 şi Peste 5.5",
                    "price": 11,
                    "handicap": 5.5,
                    "betRef": "3463728734",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728735",
                    "name": "X2 şi Sub 5.5",
                    "price": 1.57,
                    "handicap": 5.5,
                    "betRef": "3463728735",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212036",
            "uniqueId": "1383212036",
            "name": "Rezultat Prima repriză",
            "type": "H1RS",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 3,
            "pinKey": "p_H1RS0",
            "selections": [
                {
                    "id": "3463728608",
                    "name": "Chelsea FC",
                    "price": 3.35,
                    "handicap": 0,
                    "betRef": "3463728608",
                    "renderingLayout": 3,
                    "columnIndex": 0
                },
                {
                    "id": "3463728609",
                    "name": "Egal",
                    "price": 2.27,
                    "handicap": 0,
                    "betRef": "3463728609",
                    "renderingLayout": 3,
                    "columnIndex": 1
                },
                {
                    "id": "3463728610",
                    "name": "Liverpool FC",
                    "price": 2.85,
                    "handicap": 0,
                    "betRef": "3463728610",
                    "renderingLayout": 3,
                    "columnIndex": 2
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383223031",
            "uniqueId": "1383223031",
            "name": "Goluri prima repriză Peste/Sub",
            "type": "OUH1",
            "handicap": 0.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_OUH10",
            "selections": [
                {
                    "id": "3463783411",
                    "name": "Peste 0.5",
                    "price": 1.32,
                    "handicap": 0.5,
                    "betRef": "3463783411",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783419",
                    "name": "Sub 0.5",
                    "price": 3.4,
                    "handicap": 0.5,
                    "betRef": "3463783419",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783409",
                    "name": "Peste 1.5",
                    "price": 2.32,
                    "handicap": 1.5,
                    "betRef": "3463783409",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783410",
                    "name": "Sub 1.5",
                    "price": 1.62,
                    "handicap": 1.5,
                    "betRef": "3463783410",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783412",
                    "name": "Peste 2.5",
                    "price": 5.1,
                    "handicap": 2.5,
                    "betRef": "3463783412",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783413",
                    "name": "Sub 2.5",
                    "price": 1.17,
                    "handicap": 2.5,
                    "betRef": "3463783413",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783414",
                    "name": "Peste 3.5",
                    "price": 10.75,
                    "handicap": 3.5,
                    "betRef": "3463783414",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783415",
                    "name": "Sub 3.5",
                    "price": 1.04,
                    "handicap": 3.5,
                    "betRef": "3463783415",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783416",
                    "name": "Peste 4.5",
                    "price": 17,
                    "handicap": 4.5,
                    "betRef": "3463783416",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783417",
                    "name": "Sub 4.5",
                    "price": 1.009,
                    "handicap": 4.5,
                    "betRef": "3463783417",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212042",
            "uniqueId": "1383212042",
            "name": "Pauză/Final",
            "type": "HTFT",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 3,
            "pinKey": "p_HTFT0",
            "selections": [
                {
                    "id": "3463728624",
                    "name": "1/1",
                    "price": 4.7,
                    "handicap": 0,
                    "betRef": "3463728624",
                    "renderingLayout": 3,
                    "columnIndex": 0
                },
                {
                    "id": "3463728625",
                    "name": "1/X",
                    "price": 13,
                    "handicap": 0,
                    "betRef": "3463728625",
                    "renderingLayout": 3,
                    "columnIndex": 1
                },
                {
                    "id": "3463728627",
                    "name": "1/2",
                    "price": 25,
                    "handicap": 0,
                    "betRef": "3463728627",
                    "renderingLayout": 3,
                    "columnIndex": 2
                },
                {
                    "id": "3463728626",
                    "name": "X/1",
                    "price": 6.9,
                    "handicap": 0,
                    "betRef": "3463728626",
                    "renderingLayout": 3,
                    "columnIndex": 0
                },
                {
                    "id": "3463728628",
                    "name": "X/X",
                    "price": 5.7,
                    "handicap": 0,
                    "betRef": "3463728628",
                    "renderingLayout": 3,
                    "columnIndex": 1
                },
                {
                    "id": "3463728629",
                    "name": "X/2",
                    "price": 5.9,
                    "handicap": 0,
                    "betRef": "3463728629",
                    "renderingLayout": 3,
                    "columnIndex": 2
                },
                {
                    "id": "3463728630",
                    "name": "2/1",
                    "price": 28,
                    "handicap": 0,
                    "betRef": "3463728630",
                    "renderingLayout": 3,
                    "columnIndex": 0
                },
                {
                    "id": "3463728631",
                    "name": "2/X",
                    "price": 12.5,
                    "handicap": 0,
                    "betRef": "3463728631",
                    "renderingLayout": 3,
                    "columnIndex": 1
                },
                {
                    "id": "3463728632",
                    "name": "2/2",
                    "price": 3.75,
                    "handicap": 0,
                    "betRef": "3463728632",
                    "renderingLayout": 3,
                    "columnIndex": 2
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212108",
            "uniqueId": "1383212108",
            "name": "Total goluri (suplimentar)",
            "type": "TOTG",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_TOTG0",
            "selections": [
                {
                    "id": "3463728861",
                    "name": "0-1",
                    "price": 4.6,
                    "handicap": 0,
                    "betRef": "3463728861",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728862",
                    "name": "2-3",
                    "price": 2.1,
                    "handicap": 0,
                    "betRef": "3463728862",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463728863",
                    "name": "4-6",
                    "price": 2.6,
                    "handicap": 0,
                    "betRef": "3463728863",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463728864",
                    "name": "7+",
                    "price": 12,
                    "handicap": 0,
                    "betRef": "3463728864",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212190",
            "uniqueId": "1383212190",
            "name": "Total goluri",
            "type": "TOTG",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_TOTG1",
            "selections": [
                {
                    "id": "3463729106",
                    "name": "0-2",
                    "price": 2.35,
                    "handicap": 0,
                    "betRef": "3463729106",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463729107",
                    "name": "0-3",
                    "price": 1.57,
                    "handicap": 0,
                    "betRef": "3463729107",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463729108",
                    "name": "0-4",
                    "price": 1.23,
                    "handicap": 0,
                    "betRef": "3463729108",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463729109",
                    "name": "1-2",
                    "price": 2.35,
                    "handicap": 0,
                    "betRef": "3463729109",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463729110",
                    "name": "1-3",
                    "price": 1.57,
                    "handicap": 0,
                    "betRef": "3463729110",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463729111",
                    "name": "1-4",
                    "price": 1.27,
                    "handicap": 0,
                    "betRef": "3463729111",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463729112",
                    "name": "1-5",
                    "price": 1.14,
                    "handicap": 0,
                    "betRef": "3463729112",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463729113",
                    "name": "2-4",
                    "price": 1.5,
                    "handicap": 0,
                    "betRef": "3463729113",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463729114",
                    "name": "2-5",
                    "price": 1.31,
                    "handicap": 0,
                    "betRef": "3463729114",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463729115",
                    "name": "2-6",
                    "price": 1.23,
                    "handicap": 0,
                    "betRef": "3463729115",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463729116",
                    "name": "3-4",
                    "price": 2.12,
                    "handicap": 0,
                    "betRef": "3463729116",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463729117",
                    "name": "3-5",
                    "price": 1.75,
                    "handicap": 0,
                    "betRef": "3463729117",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463729118",
                    "name": "3-6",
                    "price": 1.6,
                    "handicap": 0,
                    "betRef": "3463729118",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463729119",
                    "name": "5-6",
                    "price": 4.3,
                    "handicap": 0,
                    "betRef": "3463729119",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212043",
            "uniqueId": "1383212043",
            "name": "Scor corect",
            "type": "CSFT",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 4,
            "pinKey": "p_CSFT0",
            "selections": [
                {
                    "id": "3463783681",
                    "name": "1 - 0",
                    "price": 11.75,
                    "handicap": 0,
                    "betRef": "3463783681",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 1,
                    "as": 0
                },
                {
                    "id": "3463783688",
                    "name": "2 - 0",
                    "price": 19.5,
                    "handicap": 0,
                    "betRef": "3463783688",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 2,
                    "as": 0
                },
                {
                    "id": "3463783689",
                    "name": "2 - 1",
                    "price": 10.75,
                    "handicap": 0,
                    "betRef": "3463783689",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 2,
                    "as": 1
                },
                {
                    "id": "3463783695",
                    "name": "3 - 0",
                    "price": 40,
                    "handicap": 0,
                    "betRef": "3463783695",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 3,
                    "as": 0
                },
                {
                    "id": "3463783696",
                    "name": "3 - 1",
                    "price": 23,
                    "handicap": 0,
                    "betRef": "3463783696",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 3,
                    "as": 1
                },
                {
                    "id": "3463783697",
                    "name": "3 - 2",
                    "price": 25,
                    "handicap": 0,
                    "betRef": "3463783697",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 3,
                    "as": 2
                },
                {
                    "id": "3463783702",
                    "name": "4 - 0",
                    "price": 110,
                    "handicap": 0,
                    "betRef": "3463783702",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 4,
                    "as": 0
                },
                {
                    "id": "3463783703",
                    "name": "4 - 1",
                    "price": 60,
                    "handicap": 0,
                    "betRef": "3463783703",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 4,
                    "as": 1
                },
                {
                    "id": "3463783704",
                    "name": "4 - 2",
                    "price": 70,
                    "handicap": 0,
                    "betRef": "3463783704",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 4,
                    "as": 2
                },
                {
                    "id": "3463783705",
                    "name": "4 - 3",
                    "price": 110,
                    "handicap": 0,
                    "betRef": "3463783705",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 4,
                    "as": 3
                },
                {
                    "id": "3463783708",
                    "name": "5 - 0",
                    "price": 350,
                    "handicap": 0,
                    "betRef": "3463783708",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 5,
                    "as": 0
                },
                {
                    "id": "3463783709",
                    "name": "5 - 1",
                    "price": 200,
                    "handicap": 0,
                    "betRef": "3463783709",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 5,
                    "as": 1
                },
                {
                    "id": "3463783710",
                    "name": "5 - 2",
                    "price": 250,
                    "handicap": 0,
                    "betRef": "3463783710",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 5,
                    "as": 2
                },
                {
                    "id": "3463783711",
                    "name": "5 - 3",
                    "price": 350,
                    "handicap": 0,
                    "betRef": "3463783711",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 5,
                    "as": 3
                },
                {
                    "id": "3463783712",
                    "name": "5 - 4",
                    "price": 800,
                    "handicap": 0,
                    "betRef": "3463783712",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 5,
                    "as": 4
                },
                {
                    "id": "3463783714",
                    "name": "6 - 1",
                    "price": 800,
                    "handicap": 0,
                    "betRef": "3463783714",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 6,
                    "as": 1
                },
                {
                    "id": "3463783715",
                    "name": "6 - 2",
                    "price": 900,
                    "handicap": 0,
                    "betRef": "3463783715",
                    "renderingLayout": 4,
                    "columnIndex": 0,
                    "hs": 6,
                    "as": 2
                },
                {
                    "id": "3463783674",
                    "name": "0 - 0",
                    "price": 11.25,
                    "handicap": 0,
                    "betRef": "3463783674",
                    "renderingLayout": 4,
                    "columnIndex": 1,
                    "hs": 0,
                    "as": 0
                },
                {
                    "id": "3463783682",
                    "name": "1 - 1",
                    "price": 7.4,
                    "handicap": 0,
                    "betRef": "3463783682",
                    "renderingLayout": 4,
                    "columnIndex": 1,
                    "hs": 1,
                    "as": 1
                },
                {
                    "id": "3463783690",
                    "name": "2 - 2",
                    "price": 11.5,
                    "handicap": 0,
                    "betRef": "3463783690",
                    "renderingLayout": 4,
                    "columnIndex": 1,
                    "hs": 2,
                    "as": 2
                },
                {
                    "id": "3463783698",
                    "name": "3 - 3",
                    "price": 37,
                    "handicap": 0,
                    "betRef": "3463783698",
                    "renderingLayout": 4,
                    "columnIndex": 1,
                    "hs": 3,
                    "as": 3
                },
                {
                    "id": "3463783706",
                    "name": "4 - 4",
                    "price": 200,
                    "handicap": 0,
                    "betRef": "3463783706",
                    "renderingLayout": 4,
                    "columnIndex": 1,
                    "hs": 4,
                    "as": 4
                },
                {
                    "id": "3463783675",
                    "name": "0 - 1",
                    "price": 10.75,
                    "handicap": 0,
                    "betRef": "3463783675",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 0,
                    "as": 1
                },
                {
                    "id": "3463783676",
                    "name": "0 - 2",
                    "price": 15.5,
                    "handicap": 0,
                    "betRef": "3463783676",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 0,
                    "as": 2
                },
                {
                    "id": "3463783683",
                    "name": "1 - 2",
                    "price": 9.5,
                    "handicap": 0,
                    "betRef": "3463783683",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 1,
                    "as": 2
                },
                {
                    "id": "3463783677",
                    "name": "0 - 3",
                    "price": 28,
                    "handicap": 0,
                    "betRef": "3463783677",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 0,
                    "as": 3
                },
                {
                    "id": "3463783684",
                    "name": "1 - 3",
                    "price": 17.5,
                    "handicap": 0,
                    "betRef": "3463783684",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 1,
                    "as": 3
                },
                {
                    "id": "3463783691",
                    "name": "2 - 3",
                    "price": 21,
                    "handicap": 0,
                    "betRef": "3463783691",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 2,
                    "as": 3
                },
                {
                    "id": "3463783678",
                    "name": "0 - 4",
                    "price": 70,
                    "handicap": 0,
                    "betRef": "3463783678",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 0,
                    "as": 4
                },
                {
                    "id": "3463783685",
                    "name": "1 - 4",
                    "price": 45,
                    "handicap": 0,
                    "betRef": "3463783685",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 1,
                    "as": 4
                },
                {
                    "id": "3463783692",
                    "name": "2 - 4",
                    "price": 50,
                    "handicap": 0,
                    "betRef": "3463783692",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 2,
                    "as": 4
                },
                {
                    "id": "3463783699",
                    "name": "3 - 4",
                    "price": 90,
                    "handicap": 0,
                    "betRef": "3463783699",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 3,
                    "as": 4
                },
                {
                    "id": "3463783679",
                    "name": "0 - 5",
                    "price": 200,
                    "handicap": 0,
                    "betRef": "3463783679",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 0,
                    "as": 5
                },
                {
                    "id": "3463783686",
                    "name": "1 - 5",
                    "price": 120,
                    "handicap": 0,
                    "betRef": "3463783686",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 1,
                    "as": 5
                },
                {
                    "id": "3463783693",
                    "name": "2 - 5",
                    "price": 150,
                    "handicap": 0,
                    "betRef": "3463783693",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 2,
                    "as": 5
                },
                {
                    "id": "3463783700",
                    "name": "3 - 5",
                    "price": 300,
                    "handicap": 0,
                    "betRef": "3463783700",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 3,
                    "as": 5
                },
                {
                    "id": "3463783707",
                    "name": "4 - 5",
                    "price": 700,
                    "handicap": 0,
                    "betRef": "3463783707",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 4,
                    "as": 5
                },
                {
                    "id": "3463783680",
                    "name": "0 - 6",
                    "price": 700,
                    "handicap": 0,
                    "betRef": "3463783680",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 0,
                    "as": 6
                },
                {
                    "id": "3463783687",
                    "name": "1 - 6",
                    "price": 450,
                    "handicap": 0,
                    "betRef": "3463783687",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 1,
                    "as": 6
                },
                {
                    "id": "3463783694",
                    "name": "2 - 6",
                    "price": 500,
                    "handicap": 0,
                    "betRef": "3463783694",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 2,
                    "as": 6
                },
                {
                    "id": "3463783701",
                    "name": "3 - 6",
                    "price": 1000,
                    "handicap": 0,
                    "betRef": "3463783701",
                    "renderingLayout": 4,
                    "columnIndex": 2,
                    "hs": 3,
                    "as": 6
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "tableLayout": {
                "layoutType": 6,
                "variation": 2,
                "title": "Handicap Meci",
                "id": "1383223086",
                "columnTitles": [
                    {
                        "title": "Chelsea FC"
                    },
                    {
                        "title": "Egal"
                    },
                    {
                        "title": "Liverpool FC"
                    }
                ],
                "statHeaders": [],
                "groups": [],
                "rows": [
                    {
                        "rowId": "1383223086",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3463783556",
                                        "name": "Chelsea FC -4",
                                        "shortName": "-4",
                                        "price": 35,
                                        "handicap": -4,
                                        "betRef": "3463783556",
                                        "renderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3463783555",
                                        "name": "Egal -4",
                                        "shortName": "-4",
                                        "price": 17,
                                        "handicap": -4,
                                        "betRef": "3463783555",
                                        "renderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3463783557",
                                        "name": "Liverpool FC +4",
                                        "shortName": "+4",
                                        "price": 1.009,
                                        "handicap": 4,
                                        "betRef": "3463783557",
                                        "renderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "rowId": "1383223084",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3463783550",
                                        "name": "Chelsea FC -3",
                                        "shortName": "-3",
                                        "price": 25,
                                        "handicap": -3,
                                        "betRef": "3463783550",
                                        "renderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3463783549",
                                        "name": "Egal -3",
                                        "shortName": "-3",
                                        "price": 12.5,
                                        "handicap": -3,
                                        "betRef": "3463783549",
                                        "renderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3463783551",
                                        "name": "Liverpool FC +3",
                                        "shortName": "+3",
                                        "price": 1.04,
                                        "handicap": 3,
                                        "betRef": "3463783551",
                                        "renderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "rowId": "1383223082",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3463783544",
                                        "name": "Chelsea FC -2",
                                        "shortName": "-2",
                                        "price": 13,
                                        "handicap": -2,
                                        "betRef": "3463783544",
                                        "renderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3463783543",
                                        "name": "Egal -2",
                                        "shortName": "-2",
                                        "price": 7.8,
                                        "handicap": -2,
                                        "betRef": "3463783543",
                                        "renderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3463783545",
                                        "name": "Liverpool FC +2",
                                        "shortName": "+2",
                                        "price": 1.14,
                                        "handicap": 2,
                                        "betRef": "3463783545",
                                        "renderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "rowId": "1383223080",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3463783521",
                                        "name": "Chelsea FC -1",
                                        "shortName": "-1",
                                        "price": 5.9,
                                        "handicap": -1,
                                        "betRef": "3463783521",
                                        "renderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3463783520",
                                        "name": "Egal -1",
                                        "shortName": "-1",
                                        "price": 4.7,
                                        "handicap": -1,
                                        "betRef": "3463783520",
                                        "renderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3463783539",
                                        "name": "Liverpool FC +1",
                                        "shortName": "+1",
                                        "price": 1.44,
                                        "handicap": 1,
                                        "betRef": "3463783539",
                                        "renderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "rowId": "1383223079",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3463783518",
                                        "name": "Chelsea FC +1",
                                        "shortName": "+1",
                                        "price": 1.62,
                                        "handicap": 1,
                                        "betRef": "3463783518",
                                        "renderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3463783517",
                                        "name": "Egal +1",
                                        "shortName": "+1",
                                        "price": 4.25,
                                        "handicap": 1,
                                        "betRef": "3463783517",
                                        "renderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3463783519",
                                        "name": "Liverpool FC -1",
                                        "shortName": "-1",
                                        "price": 4.45,
                                        "handicap": -1,
                                        "betRef": "3463783519",
                                        "renderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "rowId": "1383223081",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3463783541",
                                        "name": "Chelsea FC +2",
                                        "shortName": "+2",
                                        "price": 1.21,
                                        "handicap": 2,
                                        "betRef": "3463783541",
                                        "renderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3463783540",
                                        "name": "Egal +2",
                                        "shortName": "+2",
                                        "price": 6.6,
                                        "handicap": 2,
                                        "betRef": "3463783540",
                                        "renderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3463783542",
                                        "name": "Liverpool FC -2",
                                        "shortName": "-2",
                                        "price": 9.5,
                                        "handicap": -2,
                                        "betRef": "3463783542",
                                        "renderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "rowId": "1383223083",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3463783547",
                                        "name": "Chelsea FC +3",
                                        "shortName": "+3",
                                        "price": 1.07,
                                        "handicap": 3,
                                        "betRef": "3463783547",
                                        "renderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3463783546",
                                        "name": "Egal +3",
                                        "shortName": "+3",
                                        "price": 10.75,
                                        "handicap": 3,
                                        "betRef": "3463783546",
                                        "renderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3463783548",
                                        "name": "Liverpool FC -3",
                                        "shortName": "-3",
                                        "price": 19.5,
                                        "handicap": -3,
                                        "betRef": "3463783548",
                                        "renderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "rowId": "1383223085",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3463783553",
                                        "name": "Chelsea FC +4",
                                        "shortName": "+4",
                                        "price": 1.02,
                                        "handicap": 4,
                                        "betRef": "3463783553",
                                        "renderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3463783552",
                                        "name": "Egal +4",
                                        "shortName": "+4",
                                        "price": 15.5,
                                        "handicap": 4,
                                        "betRef": "3463783552",
                                        "renderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3463783554",
                                        "name": "Liverpool FC -4",
                                        "shortName": "-4",
                                        "price": 30,
                                        "handicap": -4,
                                        "betRef": "3463783554",
                                        "renderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    }
                ],
                "visibleRowCount": 8,
                "expanded": true
            },
            "id": "1383223086",
            "uniqueId": "1383223086",
            "name": "Handicap Meci",
            "type": "FHMR",
            "handicap": -4,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 0,
            "selections": [],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212102",
            "uniqueId": "1383212102",
            "name": "Marja victoriei",
            "type": "WIMG",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 1,
            "pinKey": "p_WIMG0",
            "selections": [
                {
                    "id": "3463728847",
                    "name": "Chelsea FC câștigă la o diferență de un singur gol",
                    "price": 4.7,
                    "handicap": 0,
                    "betRef": "3463728847",
                    "renderingLayout": 1,
                    "columnIndex": 0
                },
                {
                    "id": "3463728848",
                    "name": "Chelsea FC câștigă la o diferență de două goluri",
                    "price": 7.8,
                    "handicap": 0,
                    "betRef": "3463728848",
                    "renderingLayout": 1,
                    "columnIndex": 0
                },
                {
                    "id": "3463728849",
                    "name": "Chelsea FC câștigă la o diferență de 3 sau mai multe goluri",
                    "price": 13,
                    "handicap": 0,
                    "betRef": "3463728849",
                    "renderingLayout": 1,
                    "columnIndex": 0
                },
                {
                    "id": "3463728850",
                    "name": "Egal",
                    "price": 3.5,
                    "handicap": 0,
                    "betRef": "3463728850",
                    "renderingLayout": 1,
                    "columnIndex": 0
                },
                {
                    "id": "3463728851",
                    "name": "Liverpool FC câștigă la o diferență de un singur gol",
                    "price": 4.25,
                    "handicap": 0,
                    "betRef": "3463728851",
                    "renderingLayout": 1,
                    "columnIndex": 0
                },
                {
                    "id": "3463728852",
                    "name": "Liverpool FC câștigă la o diferență de două goluri",
                    "price": 6.6,
                    "handicap": 0,
                    "betRef": "3463728852",
                    "renderingLayout": 1,
                    "columnIndex": 0
                },
                {
                    "id": "3463728853",
                    "name": "Liverpool FC câștigă la o diferență de 3 sau mai multe goluri",
                    "price": 9.5,
                    "handicap": 0,
                    "betRef": "3463728853",
                    "renderingLayout": 1,
                    "columnIndex": 0
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383223107",
            "uniqueId": "1383223107",
            "name": "Handicap Asiatic (Scorul actual 0 - 0)",
            "type": "AHRF",
            "handicap": 0.25,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_AHRF0",
            "selections": [
                {
                    "id": "3463783609",
                    "name": "Chelsea FC +0.25",
                    "price": 1.82,
                    "handicap": 0.25,
                    "betRef": "3463783609",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783613",
                    "name": "Liverpool FC -0.25",
                    "price": 2.05,
                    "handicap": -0.25,
                    "betRef": "3463783613",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383223060",
            "uniqueId": "1383223060",
            "name": "Asiatic (Peste/Sub) Total goluri",
            "type": "ASOU",
            "handicap": 3,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_ASOU0",
            "selections": [
                {
                    "id": "3463783472",
                    "name": "Peste 3.0",
                    "price": 1.98,
                    "handicap": 3,
                    "betRef": "3463783472",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783473",
                    "name": "Sub 3.0",
                    "price": 1.88,
                    "handicap": 3,
                    "betRef": "3463783473",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383223114",
            "uniqueId": "1383223114",
            "name": "Handicap Asiatic - Prima Repriză  (Scorul actual 0 - 0)",
            "type": "AHRH",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_AHRH0",
            "selections": [
                {
                    "id": "3463783627",
                    "name": "Chelsea FC 0.0",
                    "price": 2.07,
                    "handicap": 0,
                    "betRef": "3463783627",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783628",
                    "name": "Liverpool FC 0.0",
                    "price": 1.75,
                    "handicap": 0,
                    "betRef": "3463783628",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383223067",
            "uniqueId": "1383223067",
            "name": "Asiatic (Peste/Sub) - Total goluri Prima repriză",
            "type": "AOH1",
            "handicap": 1.25,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_AOH10",
            "selections": [
                {
                    "id": "3463783486",
                    "name": "Peste 1.25",
                    "price": 1.98,
                    "handicap": 1.25,
                    "betRef": "3463783486",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783487",
                    "name": "Sub 1.25",
                    "price": 1.85,
                    "handicap": 1.25,
                    "betRef": "3463783487",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383212039",
            "uniqueId": "1383212039",
            "name": "Următorul gol (Gol 1)",
            "type": "INTS",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 3,
            "pinKey": "p_INTS0",
            "selections": [
                {
                    "id": "3463728615",
                    "name": "Chelsea FC",
                    "price": 2.07,
                    "handicap": 0,
                    "betRef": "3463728615",
                    "renderingLayout": 3,
                    "columnIndex": 0
                },
                {
                    "id": "3463728617",
                    "name": "Fără gol",
                    "price": 11.25,
                    "handicap": 0,
                    "betRef": "3463728617",
                    "renderingLayout": 3,
                    "columnIndex": 1
                },
                {
                    "id": "3463728618",
                    "name": "Liverpool FC",
                    "price": 1.85,
                    "handicap": 0,
                    "betRef": "3463728618",
                    "renderingLayout": 3,
                    "columnIndex": 2
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383223036",
            "uniqueId": "1383223036",
            "name": "Chelsea FC - Total goluri Peste/Sub",
            "type": "OUHG",
            "handicap": 0.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_OUHG0",
            "selections": [
                {
                    "id": "3463783422",
                    "name": "Peste 0.5",
                    "price": 1.24,
                    "handicap": 0.5,
                    "betRef": "3463783422",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783423",
                    "name": "Sub 0.5",
                    "price": 3.8,
                    "handicap": 0.5,
                    "betRef": "3463783423",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783418",
                    "name": "Peste 1.5",
                    "price": 2.15,
                    "handicap": 1.5,
                    "betRef": "3463783418",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783420",
                    "name": "Sub 1.5",
                    "price": 1.65,
                    "handicap": 1.5,
                    "betRef": "3463783420",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783424",
                    "name": "Peste 2.5",
                    "price": 4.45,
                    "handicap": 2.5,
                    "betRef": "3463783424",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783425",
                    "name": "Sub 2.5",
                    "price": 1.18,
                    "handicap": 2.5,
                    "betRef": "3463783425",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783426",
                    "name": "Peste 3.5",
                    "price": 8.75,
                    "handicap": 3.5,
                    "betRef": "3463783426",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783427",
                    "name": "Sub 3.5",
                    "price": 1.05,
                    "handicap": 3.5,
                    "betRef": "3463783427",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783428",
                    "name": "Peste 4.5",
                    "price": 12.5,
                    "handicap": 4.5,
                    "betRef": "3463783428",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783429",
                    "name": "Sub 4.5",
                    "price": 1.009,
                    "handicap": 4.5,
                    "betRef": "3463783429",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1383223045",
            "uniqueId": "1383223045",
            "name": "Liverpool FC - Total goluri Peste/Sub",
            "type": "OUAG",
            "handicap": 0.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_OUAG0",
            "selections": [
                {
                    "id": "3463783440",
                    "name": "Peste 0.5",
                    "price": 1.19,
                    "handicap": 0.5,
                    "betRef": "3463783440",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783441",
                    "name": "Sub 0.5",
                    "price": 4.3,
                    "handicap": 0.5,
                    "betRef": "3463783441",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783436",
                    "name": "Peste 1.5",
                    "price": 1.9,
                    "handicap": 1.5,
                    "betRef": "3463783436",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783437",
                    "name": "Sub 1.5",
                    "price": 1.85,
                    "handicap": 1.5,
                    "betRef": "3463783437",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783438",
                    "name": "Peste 2.5",
                    "price": 3.7,
                    "handicap": 2.5,
                    "betRef": "3463783438",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783439",
                    "name": "Sub 2.5",
                    "price": 1.25,
                    "handicap": 2.5,
                    "betRef": "3463783439",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783442",
                    "name": "Peste 3.5",
                    "price": 7.4,
                    "handicap": 3.5,
                    "betRef": "3463783442",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783443",
                    "name": "Sub 3.5",
                    "price": 1.07,
                    "handicap": 3.5,
                    "betRef": "3463783443",
                    "renderingLayout": 2,
                    "columnIndex": 1
                },
                {
                    "id": "3463783444",
                    "name": "Peste 4.5",
                    "price": 11.75,
                    "handicap": 4.5,
                    "betRef": "3463783444",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3463783445",
                    "name": "Sub 4.5",
                    "price": 1.015,
                    "handicap": 4.5,
                    "betRef": "3463783445",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "tableLayout": {
                "layoutType": 1,
                "title": "Marcator",
                "id": "1383212096",
                "columnTitles": [
                    {
                        "id": "1383212096",
                        "title": "Oricând",
                        "type": "PSCR"
                    },
                    {
                        "id": "1383212093",
                        "title": "Primul",
                        "type": "FGSC"
                    },
                    {
                        "id": "1383212095",
                        "title": "Ultimul",
                        "type": "LGSC"
                    }
                ],
                "statHeaders": [],
                "groups": [
                    {
                        "id": "106835",
                        "title": "Chelsea FC"
                    },
                    {
                        "id": "108840",
                        "title": "Liverpool FC"
                    }
                ],
                "rows": [
                    {
                        "groupId": "108840",
                        "title": "Mohamed Salah",
                        "rowId": "1073174",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347792",
                                        "name": "Mohamed Salah (Liverpool FC)",
                                        "price": 2.47,
                                        "handicap": 0,
                                        "betRef": "3682347792",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347582",
                                        "name": "Mohamed Salah (Liverpool FC)",
                                        "price": 6.3,
                                        "handicap": 0,
                                        "betRef": "3682347582",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347726",
                                        "name": "Mohamed Salah (Liverpool FC)",
                                        "price": 6.3,
                                        "handicap": 0,
                                        "betRef": "3682347726",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Nicolas Jackson",
                        "rowId": "19159623",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347756",
                                        "name": "Nicolas Jackson (Chelsea FC)",
                                        "price": 2.75,
                                        "handicap": 0,
                                        "betRef": "3682347756",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347542",
                                        "name": "Nicolas Jackson (Chelsea FC)",
                                        "price": 7.4,
                                        "handicap": 0,
                                        "betRef": "3682347542",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347681",
                                        "name": "Nicolas Jackson (Chelsea FC)",
                                        "price": 7.4,
                                        "handicap": 0,
                                        "betRef": "3682347681",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Darwin Nunez",
                        "rowId": "18986716",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347773",
                                        "name": "Darwin Nunez (Liverpool FC)",
                                        "price": 3.05,
                                        "handicap": 0,
                                        "betRef": "3682347773",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347569",
                                        "name": "Darwin Nunez (Liverpool FC)",
                                        "price": 8.25,
                                        "handicap": 0,
                                        "betRef": "3682347569",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347717",
                                        "name": "Darwin Nunez (Liverpool FC)",
                                        "price": 8.25,
                                        "handicap": 0,
                                        "betRef": "3682347717",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Cody Gakpo",
                        "rowId": "18947737",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347769",
                                        "name": "Cody Gakpo (Liverpool FC)",
                                        "price": 3.15,
                                        "handicap": 0,
                                        "betRef": "3682347769",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347553",
                                        "name": "Cody Gakpo (Liverpool FC)",
                                        "price": 8.5,
                                        "handicap": 0,
                                        "betRef": "3682347553",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347706",
                                        "name": "Cody Gakpo (Liverpool FC)",
                                        "price": 8.5,
                                        "handicap": 0,
                                        "betRef": "3682347706",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Armando Broja",
                        "rowId": "19007889",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347730",
                                        "name": "Armando Broja (Chelsea FC)",
                                        "price": 3.3,
                                        "handicap": 0,
                                        "betRef": "3682347730",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347524",
                                        "name": "Armando Broja (Chelsea FC)",
                                        "price": 9.25,
                                        "handicap": 0,
                                        "betRef": "3682347524",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347659",
                                        "name": "Armando Broja (Chelsea FC)",
                                        "price": 9.25,
                                        "handicap": 0,
                                        "betRef": "3682347659",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Mason Burstow",
                        "rowId": "19185545",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347733",
                                        "name": "Mason Burstow (Chelsea FC)",
                                        "price": 3.3,
                                        "handicap": 0,
                                        "betRef": "3682347733",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347521",
                                        "name": "Mason Burstow (Chelsea FC)",
                                        "price": 9.25,
                                        "handicap": 0,
                                        "betRef": "3682347521",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347663",
                                        "name": "Mason Burstow (Chelsea FC)",
                                        "price": 9.25,
                                        "handicap": 0,
                                        "betRef": "3682347663",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Diogo Jota",
                        "rowId": "18924156",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347796",
                                        "name": "Diogo Jota (Liverpool FC)",
                                        "price": 3.45,
                                        "handicap": 0,
                                        "betRef": "3682347796",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347584",
                                        "name": "Diogo Jota (Liverpool FC)",
                                        "price": 9.5,
                                        "handicap": 0,
                                        "betRef": "3682347584",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347728",
                                        "name": "Diogo Jota (Liverpool FC)",
                                        "price": 9.5,
                                        "handicap": 0,
                                        "betRef": "3682347728",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Raheem Sterling",
                        "rowId": "1083014",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347786",
                                        "name": "Raheem Sterling (Chelsea FC)",
                                        "price": 3.6,
                                        "handicap": 0,
                                        "betRef": "3682347786",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347568",
                                        "name": "Raheem Sterling (Chelsea FC)",
                                        "price": 10.25,
                                        "handicap": 0,
                                        "betRef": "3682347568",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347695",
                                        "name": "Raheem Sterling (Chelsea FC)",
                                        "price": 10.25,
                                        "handicap": 0,
                                        "betRef": "3682347695",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Luis Diaz",
                        "rowId": "18961508",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347765",
                                        "name": "Luis Diaz (Liverpool FC)",
                                        "price": 3.75,
                                        "handicap": 0,
                                        "betRef": "3682347765",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347548",
                                        "name": "Luis Diaz (Liverpool FC)",
                                        "price": 10.5,
                                        "handicap": 0,
                                        "betRef": "3682347548",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347703",
                                        "name": "Luis Diaz (Liverpool FC)",
                                        "price": 10.5,
                                        "handicap": 0,
                                        "betRef": "3682347703",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Ben Doak",
                        "rowId": "19192161",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347774",
                                        "name": "Ben Doak (Liverpool FC)",
                                        "price": 3.95,
                                        "handicap": 0,
                                        "betRef": "3682347774",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347579",
                                        "name": "Ben Doak (Liverpool FC)",
                                        "price": 11,
                                        "handicap": 0,
                                        "betRef": "3682347579",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347710",
                                        "name": "Ben Doak (Liverpool FC)",
                                        "price": 11,
                                        "handicap": 0,
                                        "betRef": "3682347710",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Noni Madueke",
                        "rowId": "19155783",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347777",
                                        "name": "Noni Madueke (Chelsea FC)",
                                        "price": 4.3,
                                        "handicap": 0,
                                        "betRef": "3682347777",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347578",
                                        "name": "Noni Madueke (Chelsea FC)",
                                        "price": 12.5,
                                        "handicap": 0,
                                        "betRef": "3682347578",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347689",
                                        "name": "Noni Madueke (Chelsea FC)",
                                        "price": 12.5,
                                        "handicap": 0,
                                        "betRef": "3682347689",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Mykhailo Mudryk",
                        "rowId": "18990935",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347755",
                                        "name": "Mykhailo Mudryk (Chelsea FC)",
                                        "price": 4.3,
                                        "handicap": 0,
                                        "betRef": "3682347755",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347571",
                                        "name": "Mykhailo Mudryk (Chelsea FC)",
                                        "price": 12.5,
                                        "handicap": 0,
                                        "betRef": "3682347571",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347699",
                                        "name": "Mykhailo Mudryk (Chelsea FC)",
                                        "price": 12.5,
                                        "handicap": 0,
                                        "betRef": "3682347699",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Diego Moreira",
                        "rowId": "19210061",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347768",
                                        "name": "Diego Moreira (Chelsea FC)",
                                        "price": 4.5,
                                        "handicap": 0,
                                        "betRef": "3682347768",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347546",
                                        "name": "Diego Moreira (Chelsea FC)",
                                        "price": 13,
                                        "handicap": 0,
                                        "betRef": "3682347546",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347698",
                                        "name": "Diego Moreira (Chelsea FC)",
                                        "price": 13,
                                        "handicap": 0,
                                        "betRef": "3682347698",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Alexis Mac Allister",
                        "rowId": "18986546",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347785",
                                        "name": "Alexis Mac Allister (Liverpool FC)",
                                        "price": 4.9,
                                        "handicap": 0,
                                        "betRef": "3682347785",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347557",
                                        "name": "Alexis Mac Allister (Liverpool FC)",
                                        "price": 14.5,
                                        "handicap": 0,
                                        "betRef": "3682347557",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347709",
                                        "name": "Alexis Mac Allister (Liverpool FC)",
                                        "price": 14.5,
                                        "handicap": 0,
                                        "betRef": "3682347709",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Carney Chukwuemeka",
                        "rowId": "19162570",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347750",
                                        "name": "Carney Chukwuemeka (Chelsea FC)",
                                        "price": 5,
                                        "handicap": 0,
                                        "betRef": "3682347750",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347530",
                                        "name": "Carney Chukwuemeka (Chelsea FC)",
                                        "price": 15,
                                        "handicap": 0,
                                        "betRef": "3682347530",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347677",
                                        "name": "Carney Chukwuemeka (Chelsea FC)",
                                        "price": 15,
                                        "handicap": 0,
                                        "betRef": "3682347677",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Ian Maatsen",
                        "rowId": "19154252",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347784",
                                        "name": "Ian Maatsen (Chelsea FC)",
                                        "price": 5,
                                        "handicap": 0,
                                        "betRef": "3682347784",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347544",
                                        "name": "Ian Maatsen (Chelsea FC)",
                                        "price": 15,
                                        "handicap": 0,
                                        "betRef": "3682347544",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347713",
                                        "name": "Ian Maatsen (Chelsea FC)",
                                        "price": 15,
                                        "handicap": 0,
                                        "betRef": "3682347713",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Curtis Jones",
                        "rowId": "18951556",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347787",
                                        "name": "Curtis Jones (Liverpool FC)",
                                        "price": 5.9,
                                        "handicap": 0,
                                        "betRef": "3682347787",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347570",
                                        "name": "Curtis Jones (Liverpool FC)",
                                        "price": 17.5,
                                        "handicap": 0,
                                        "betRef": "3682347570",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347697",
                                        "name": "Curtis Jones (Liverpool FC)",
                                        "price": 17.5,
                                        "handicap": 0,
                                        "betRef": "3682347697",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Bobby Clark",
                        "rowId": "19208186",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347761",
                                        "name": "Bobby Clark (Liverpool FC)",
                                        "price": 6.4,
                                        "handicap": 0,
                                        "betRef": "3682347761",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347574",
                                        "name": "Bobby Clark (Liverpool FC)",
                                        "price": 19,
                                        "handicap": 0,
                                        "betRef": "3682347574",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347701",
                                        "name": "Bobby Clark (Liverpool FC)",
                                        "price": 19,
                                        "handicap": 0,
                                        "betRef": "3682347701",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Harvey Elliott",
                        "rowId": "19177362",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347798",
                                        "name": "Harvey Elliott (Liverpool FC)",
                                        "price": 6.4,
                                        "handicap": 0,
                                        "betRef": "3682347798",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347555",
                                        "name": "Harvey Elliott (Liverpool FC)",
                                        "price": 19,
                                        "handicap": 0,
                                        "betRef": "3682347555",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347707",
                                        "name": "Harvey Elliott (Liverpool FC)",
                                        "price": 19,
                                        "handicap": 0,
                                        "betRef": "3682347707",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Dominik Szoboszlai",
                        "rowId": "18932660",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347805",
                                        "name": "Dominik Szoboszlai (Liverpool FC)",
                                        "price": 6.4,
                                        "handicap": 0,
                                        "betRef": "3682347805",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347585",
                                        "name": "Dominik Szoboszlai (Liverpool FC)",
                                        "price": 19,
                                        "handicap": 0,
                                        "betRef": "3682347585",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347727",
                                        "name": "Dominik Szoboszlai (Liverpool FC)",
                                        "price": 19,
                                        "handicap": 0,
                                        "betRef": "3682347727",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Conor Gallagher",
                        "rowId": "18978029",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347745",
                                        "name": "Conor Gallagher (Chelsea FC)",
                                        "price": 6.5,
                                        "handicap": 0,
                                        "betRef": "3682347745",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347533",
                                        "name": "Conor Gallagher (Chelsea FC)",
                                        "price": 20,
                                        "handicap": 0,
                                        "betRef": "3682347533",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347685",
                                        "name": "Conor Gallagher (Chelsea FC)",
                                        "price": 20,
                                        "handicap": 0,
                                        "betRef": "3682347685",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Cesare Casadei",
                        "rowId": "19193992",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347734",
                                        "name": "Cesare Casadei (Chelsea FC)",
                                        "price": 7,
                                        "handicap": 0,
                                        "betRef": "3682347734",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347526",
                                        "name": "Cesare Casadei (Chelsea FC)",
                                        "price": 22,
                                        "handicap": 0,
                                        "betRef": "3682347526",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347661",
                                        "name": "Cesare Casadei (Chelsea FC)",
                                        "price": 22,
                                        "handicap": 0,
                                        "betRef": "3682347661",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Andrey Santos",
                        "rowId": "19171657",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347757",
                                        "name": "Andrey Santos (Chelsea FC)",
                                        "price": 7.5,
                                        "handicap": 0,
                                        "betRef": "3682347757",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347549",
                                        "name": "Andrey Santos (Chelsea FC)",
                                        "price": 23,
                                        "handicap": 0,
                                        "betRef": "3682347549",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347687",
                                        "name": "Andrey Santos (Chelsea FC)",
                                        "price": 23,
                                        "handicap": 0,
                                        "betRef": "3682347687",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Trent Alexander-Arnold",
                        "rowId": "18922943",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347790",
                                        "name": "Trent Alexander-Arnold (Liverpool FC)",
                                        "price": 8.25,
                                        "handicap": 0,
                                        "betRef": "3682347790",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347552",
                                        "name": "Trent Alexander-Arnold (Liverpool FC)",
                                        "price": 25,
                                        "handicap": 0,
                                        "betRef": "3682347552",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347694",
                                        "name": "Trent Alexander-Arnold (Liverpool FC)",
                                        "price": 25,
                                        "handicap": 0,
                                        "betRef": "3682347694",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Stefan Bajcetic",
                        "rowId": "19208169",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347760",
                                        "name": "Stefan Bajcetic (Liverpool FC)",
                                        "price": 8.25,
                                        "handicap": 0,
                                        "betRef": "3682347760",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347573",
                                        "name": "Stefan Bajcetic (Liverpool FC)",
                                        "price": 25,
                                        "handicap": 0,
                                        "betRef": "3682347573",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347692",
                                        "name": "Stefan Bajcetic (Liverpool FC)",
                                        "price": 25,
                                        "handicap": 0,
                                        "betRef": "3682347692",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Thiago Alcantara",
                        "rowId": "1095327",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347771",
                                        "name": "Thiago Alcantara (Liverpool FC)",
                                        "price": 8.25,
                                        "handicap": 0,
                                        "betRef": "3682347771",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347562",
                                        "name": "Thiago Alcantara (Liverpool FC)",
                                        "price": 25,
                                        "handicap": 0,
                                        "betRef": "3682347562",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347702",
                                        "name": "Thiago Alcantara (Liverpool FC)",
                                        "price": 25,
                                        "handicap": 0,
                                        "betRef": "3682347702",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Ben Chilwell",
                        "rowId": "18909547",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347732",
                                        "name": "Ben Chilwell (Chelsea FC)",
                                        "price": 9,
                                        "handicap": 0,
                                        "betRef": "3682347732",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347529",
                                        "name": "Ben Chilwell (Chelsea FC)",
                                        "price": 28,
                                        "handicap": 0,
                                        "betRef": "3682347529",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347671",
                                        "name": "Ben Chilwell (Chelsea FC)",
                                        "price": 28,
                                        "handicap": 0,
                                        "betRef": "3682347671",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Reece James",
                        "rowId": "18898919",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347778",
                                        "name": "Reece James (Chelsea FC)",
                                        "price": 9,
                                        "handicap": 0,
                                        "betRef": "3682347778",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347565",
                                        "name": "Reece James (Chelsea FC)",
                                        "price": 28,
                                        "handicap": 0,
                                        "betRef": "3682347565",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347683",
                                        "name": "Reece James (Chelsea FC)",
                                        "price": 28,
                                        "handicap": 0,
                                        "betRef": "3682347683",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Virgil van Dijk",
                        "rowId": "1099936",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347808",
                                        "name": "Virgil van Dijk (Liverpool FC)",
                                        "price": 9.75,
                                        "handicap": 0,
                                        "betRef": "3682347808",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347586",
                                        "name": "Virgil van Dijk (Liverpool FC)",
                                        "price": 30,
                                        "handicap": 0,
                                        "betRef": "3682347586",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347749",
                                        "name": "Virgil van Dijk (Liverpool FC)",
                                        "price": 30,
                                        "handicap": 0,
                                        "betRef": "3682347749",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Enzo Fernandez",
                        "rowId": "19163626",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347744",
                                        "name": "Enzo Fernandez (Chelsea FC)",
                                        "price": 11,
                                        "handicap": 0,
                                        "betRef": "3682347744",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347538",
                                        "name": "Enzo Fernandez (Chelsea FC)",
                                        "price": 35,
                                        "handicap": 0,
                                        "betRef": "3682347538",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347667",
                                        "name": "Enzo Fernandez (Chelsea FC)",
                                        "price": 35,
                                        "handicap": 0,
                                        "betRef": "3682347667",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Thiago Silva",
                        "rowId": "1095333",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347738",
                                        "name": "Thiago Silva (Chelsea FC)",
                                        "price": 12,
                                        "handicap": 0,
                                        "betRef": "3682347738",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347536",
                                        "name": "Thiago Silva (Chelsea FC)",
                                        "price": 37,
                                        "handicap": 0,
                                        "betRef": "3682347536",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347673",
                                        "name": "Thiago Silva (Chelsea FC)",
                                        "price": 37,
                                        "handicap": 0,
                                        "betRef": "3682347673",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Axel Disasi",
                        "rowId": "18959032",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347740",
                                        "name": "Axel Disasi (Chelsea FC)",
                                        "price": 12,
                                        "handicap": 0,
                                        "betRef": "3682347740",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347535",
                                        "name": "Axel Disasi (Chelsea FC)",
                                        "price": 37,
                                        "handicap": 0,
                                        "betRef": "3682347535",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347672",
                                        "name": "Axel Disasi (Chelsea FC)",
                                        "price": 37,
                                        "handicap": 0,
                                        "betRef": "3682347672",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Benoît Badiashile",
                        "rowId": "18958376",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347723",
                                        "name": "Benoît Badiashile (Chelsea FC)",
                                        "price": 13,
                                        "handicap": 0,
                                        "betRef": "3682347723",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347517",
                                        "name": "Benoît Badiashile (Chelsea FC)",
                                        "price": 40,
                                        "handicap": 0,
                                        "betRef": "3682347517",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347660",
                                        "name": "Benoît Badiashile (Chelsea FC)",
                                        "price": 40,
                                        "handicap": 0,
                                        "betRef": "3682347660",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Trevoh Chalobah",
                        "rowId": "18958129",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347737",
                                        "name": "Trevoh Chalobah (Chelsea FC)",
                                        "price": 13,
                                        "handicap": 0,
                                        "betRef": "3682347737",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347525",
                                        "name": "Trevoh Chalobah (Chelsea FC)",
                                        "price": 40,
                                        "handicap": 0,
                                        "betRef": "3682347525",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347668",
                                        "name": "Trevoh Chalobah (Chelsea FC)",
                                        "price": 40,
                                        "handicap": 0,
                                        "betRef": "3682347668",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Ibrahima Konate",
                        "rowId": "18928556",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347766",
                                        "name": "Ibrahima Konate (Liverpool FC)",
                                        "price": 14.5,
                                        "handicap": 0,
                                        "betRef": "3682347766",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347566",
                                        "name": "Ibrahima Konate (Liverpool FC)",
                                        "price": 45,
                                        "handicap": 0,
                                        "betRef": "3682347566",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347704",
                                        "name": "Ibrahima Konate (Liverpool FC)",
                                        "price": 45,
                                        "handicap": 0,
                                        "betRef": "3682347704",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Joel Matip",
                        "rowId": "1104613",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347779",
                                        "name": "Joel Matip (Liverpool FC)",
                                        "price": 14.5,
                                        "handicap": 0,
                                        "betRef": "3682347779",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347559",
                                        "name": "Joel Matip (Liverpool FC)",
                                        "price": 45,
                                        "handicap": 0,
                                        "betRef": "3682347559",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347725",
                                        "name": "Joel Matip (Liverpool FC)",
                                        "price": 45,
                                        "handicap": 0,
                                        "betRef": "3682347725",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Andrew Robertson",
                        "rowId": "18899342",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347782",
                                        "name": "Andrew Robertson (Liverpool FC)",
                                        "price": 14.5,
                                        "handicap": 0,
                                        "betRef": "3682347782",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347580",
                                        "name": "Andrew Robertson (Liverpool FC)",
                                        "price": 45,
                                        "handicap": 0,
                                        "betRef": "3682347580",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347719",
                                        "name": "Andrew Robertson (Liverpool FC)",
                                        "price": 45,
                                        "handicap": 0,
                                        "betRef": "3682347719",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Konstantinos Tsimikas",
                        "rowId": "18907978",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347795",
                                        "name": "Konstantinos Tsimikas (Liverpool FC)",
                                        "price": 14.5,
                                        "handicap": 0,
                                        "betRef": "3682347795",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347587",
                                        "name": "Konstantinos Tsimikas (Liverpool FC)",
                                        "price": 45,
                                        "handicap": 0,
                                        "betRef": "3682347587",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347731",
                                        "name": "Konstantinos Tsimikas (Liverpool FC)",
                                        "price": 45,
                                        "handicap": 0,
                                        "betRef": "3682347731",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Levi Colwill",
                        "rowId": "19176325",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347751",
                                        "name": "Levi Colwill (Chelsea FC)",
                                        "price": 15,
                                        "handicap": 0,
                                        "betRef": "3682347751",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347522",
                                        "name": "Levi Colwill (Chelsea FC)",
                                        "price": 50,
                                        "handicap": 0,
                                        "betRef": "3682347522",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347674",
                                        "name": "Levi Colwill (Chelsea FC)",
                                        "price": 50,
                                        "handicap": 0,
                                        "betRef": "3682347674",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Malo Gusto",
                        "rowId": "19164414",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347739",
                                        "name": "Malo Gusto (Chelsea FC)",
                                        "price": 17,
                                        "handicap": 0,
                                        "betRef": "3682347739",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347537",
                                        "name": "Malo Gusto (Chelsea FC)",
                                        "price": 55,
                                        "handicap": 0,
                                        "betRef": "3682347537",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347680",
                                        "name": "Malo Gusto (Chelsea FC)",
                                        "price": 55,
                                        "handicap": 0,
                                        "betRef": "3682347680",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Bashir Humphreys",
                        "rowId": "19207146",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347752",
                                        "name": "Bashir Humphreys (Chelsea FC)",
                                        "price": 17,
                                        "handicap": 0,
                                        "betRef": "3682347752",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347539",
                                        "name": "Bashir Humphreys (Chelsea FC)",
                                        "price": 55,
                                        "handicap": 0,
                                        "betRef": "3682347539",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347686",
                                        "name": "Bashir Humphreys (Chelsea FC)",
                                        "price": 55,
                                        "handicap": 0,
                                        "betRef": "3682347686",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Marc Cucurella",
                        "rowId": "18935263",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347736",
                                        "name": "Marc Cucurella (Chelsea FC)",
                                        "price": 21,
                                        "handicap": 0,
                                        "betRef": "3682347736",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347527",
                                        "name": "Marc Cucurella (Chelsea FC)",
                                        "price": 70,
                                        "handicap": 0,
                                        "betRef": "3682347527",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347665",
                                        "name": "Marc Cucurella (Chelsea FC)",
                                        "price": 70,
                                        "handicap": 0,
                                        "betRef": "3682347665",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Joe Gomez",
                        "rowId": "18909600",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347772",
                                        "name": "Joe Gomez (Liverpool FC)",
                                        "price": 21,
                                        "handicap": 0,
                                        "betRef": "3682347772",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347575",
                                        "name": "Joe Gomez (Liverpool FC)",
                                        "price": 65,
                                        "handicap": 0,
                                        "betRef": "3682347575",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3682347705",
                                        "name": "Joe Gomez (Liverpool FC)",
                                        "price": 65,
                                        "handicap": 0,
                                        "betRef": "3682347705",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Fără gol",
                        "rowId": "75eeefe5-1eed-4c58-96a8-8f1e21357d38",
                        "noGroup": true,
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3463728833",
                                        "name": "Fără gol",
                                        "price": 11.25,
                                        "handicap": 0,
                                        "betRef": "3463728833",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 1
                                    },
                                    {
                                        "id": "3463728834",
                                        "name": "Fără gol",
                                        "price": 11.25,
                                        "handicap": 0,
                                        "betRef": "3463728834",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 2
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    }
                ],
                "visibleRowCount": 12
            },
            "id": "1383212096",
            "uniqueId": "1383212096",
            "name": "Marchează oricând",
            "type": "PSCR",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 0,
            "selections": [],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "tableLayout": {
                "layoutType": 1,
                "title": "Marcator 2+",
                "id": "1383212097",
                "columnTitles": [
                    {
                        "id": "1383212097",
                        "title": "Peste 2 Goluri",
                        "type": "PTS2"
                    },
                    {
                        "id": "1383212098",
                        "title": "Hat-Trick",
                        "type": "HATR"
                    }
                ],
                "statHeaders": [],
                "groups": [
                    {
                        "id": "106835",
                        "title": "Chelsea FC"
                    },
                    {
                        "id": "108840",
                        "title": "Liverpool FC"
                    }
                ],
                "rows": [
                    {
                        "groupId": "108840",
                        "title": "Mohamed Salah",
                        "rowId": "1073174",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347861",
                                        "name": "Mohamed Salah (Liverpool FC)",
                                        "price": 8,
                                        "handicap": 0,
                                        "betRef": "3682347861",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347932",
                                        "name": "Mohamed Salah (Liverpool FC)",
                                        "price": 40,
                                        "handicap": 0,
                                        "betRef": "3682347932",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Nicolas Jackson",
                        "rowId": "19159623",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347836",
                                        "name": "Nicolas Jackson (Chelsea FC)",
                                        "price": 10,
                                        "handicap": 0,
                                        "betRef": "3682347836",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347899",
                                        "name": "Nicolas Jackson (Chelsea FC)",
                                        "price": 60,
                                        "handicap": 0,
                                        "betRef": "3682347899",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Darwin Nunez",
                        "rowId": "18986716",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347862",
                                        "name": "Darwin Nunez (Liverpool FC)",
                                        "price": 12,
                                        "handicap": 0,
                                        "betRef": "3682347862",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347928",
                                        "name": "Darwin Nunez (Liverpool FC)",
                                        "price": 75,
                                        "handicap": 0,
                                        "betRef": "3682347928",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Cody Gakpo",
                        "rowId": "18947737",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347845",
                                        "name": "Cody Gakpo (Liverpool FC)",
                                        "price": 13,
                                        "handicap": 0,
                                        "betRef": "3682347845",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347921",
                                        "name": "Cody Gakpo (Liverpool FC)",
                                        "price": 80,
                                        "handicap": 0,
                                        "betRef": "3682347921",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Armando Broja",
                        "rowId": "19007889",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347802",
                                        "name": "Armando Broja (Chelsea FC)",
                                        "price": 14,
                                        "handicap": 0,
                                        "betRef": "3682347802",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347878",
                                        "name": "Armando Broja (Chelsea FC)",
                                        "price": 100,
                                        "handicap": 0,
                                        "betRef": "3682347878",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Mason Burstow",
                        "rowId": "19185545",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347807",
                                        "name": "Mason Burstow (Chelsea FC)",
                                        "price": 14,
                                        "handicap": 0,
                                        "betRef": "3682347807",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347886",
                                        "name": "Mason Burstow (Chelsea FC)",
                                        "price": 100,
                                        "handicap": 0,
                                        "betRef": "3682347886",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Diogo Jota",
                        "rowId": "18924156",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347864",
                                        "name": "Diogo Jota (Liverpool FC)",
                                        "price": 15.5,
                                        "handicap": 0,
                                        "betRef": "3682347864",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347936",
                                        "name": "Diogo Jota (Liverpool FC)",
                                        "price": 110,
                                        "handicap": 0,
                                        "betRef": "3682347936",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Raheem Sterling",
                        "rowId": "1083014",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347832",
                                        "name": "Raheem Sterling (Chelsea FC)",
                                        "price": 16.5,
                                        "handicap": 0,
                                        "betRef": "3682347832",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347900",
                                        "name": "Raheem Sterling (Chelsea FC)",
                                        "price": 120,
                                        "handicap": 0,
                                        "betRef": "3682347900",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Luis Diaz",
                        "rowId": "18961508",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347847",
                                        "name": "Luis Diaz (Liverpool FC)",
                                        "price": 17.5,
                                        "handicap": 0,
                                        "betRef": "3682347847",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347911",
                                        "name": "Luis Diaz (Liverpool FC)",
                                        "price": 150,
                                        "handicap": 0,
                                        "betRef": "3682347911",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Ben Doak",
                        "rowId": "19192161",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347840",
                                        "name": "Ben Doak (Liverpool FC)",
                                        "price": 19.5,
                                        "handicap": 0,
                                        "betRef": "3682347840",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347906",
                                        "name": "Ben Doak (Liverpool FC)",
                                        "price": 150,
                                        "handicap": 0,
                                        "betRef": "3682347906",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Noni Madueke",
                        "rowId": "19155783",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347839",
                                        "name": "Noni Madueke (Chelsea FC)",
                                        "price": 23,
                                        "handicap": 0,
                                        "betRef": "3682347839",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347896",
                                        "name": "Noni Madueke (Chelsea FC)",
                                        "price": 200,
                                        "handicap": 0,
                                        "betRef": "3682347896",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Mykhailo Mudryk",
                        "rowId": "18990935",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347821",
                                        "name": "Mykhailo Mudryk (Chelsea FC)",
                                        "price": 23,
                                        "handicap": 0,
                                        "betRef": "3682347821",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347916",
                                        "name": "Mykhailo Mudryk (Chelsea FC)",
                                        "price": 200,
                                        "handicap": 0,
                                        "betRef": "3682347916",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Diego Moreira",
                        "rowId": "19210061",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347829",
                                        "name": "Diego Moreira (Chelsea FC)",
                                        "price": 25,
                                        "handicap": 0,
                                        "betRef": "3682347829",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347901",
                                        "name": "Diego Moreira (Chelsea FC)",
                                        "price": 250,
                                        "handicap": 0,
                                        "betRef": "3682347901",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Alexis Mac Allister",
                        "rowId": "18986546",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347855",
                                        "name": "Alexis Mac Allister (Liverpool FC)",
                                        "price": 29,
                                        "handicap": 0,
                                        "betRef": "3682347855",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347944",
                                        "name": "Alexis Mac Allister (Liverpool FC)",
                                        "price": 300,
                                        "handicap": 0,
                                        "betRef": "3682347944",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Carney Chukwuemeka",
                        "rowId": "19162570",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347811",
                                        "name": "Carney Chukwuemeka (Chelsea FC)",
                                        "price": 30,
                                        "handicap": 0,
                                        "betRef": "3682347811",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347888",
                                        "name": "Carney Chukwuemeka (Chelsea FC)",
                                        "price": 300,
                                        "handicap": 0,
                                        "betRef": "3682347888",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Ian Maatsen",
                        "rowId": "19154252",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347842",
                                        "name": "Ian Maatsen (Chelsea FC)",
                                        "price": 30,
                                        "handicap": 0,
                                        "betRef": "3682347842",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347915",
                                        "name": "Ian Maatsen (Chelsea FC)",
                                        "price": 300,
                                        "handicap": 0,
                                        "betRef": "3682347915",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Curtis Jones",
                        "rowId": "18951556",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347858",
                                        "name": "Curtis Jones (Liverpool FC)",
                                        "price": 40,
                                        "handicap": 0,
                                        "betRef": "3682347858",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347923",
                                        "name": "Curtis Jones (Liverpool FC)",
                                        "price": 450,
                                        "handicap": 0,
                                        "betRef": "3682347923",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Conor Gallagher",
                        "rowId": "18978029",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347827",
                                        "name": "Conor Gallagher (Chelsea FC)",
                                        "price": 45,
                                        "handicap": 0,
                                        "betRef": "3682347827",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347892",
                                        "name": "Conor Gallagher (Chelsea FC)",
                                        "price": 600,
                                        "handicap": 0,
                                        "betRef": "3682347892",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Bobby Clark",
                        "rowId": "19208186",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347853",
                                        "name": "Bobby Clark (Liverpool FC)",
                                        "price": 45,
                                        "handicap": 0,
                                        "betRef": "3682347853",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347919",
                                        "name": "Bobby Clark (Liverpool FC)",
                                        "price": 500,
                                        "handicap": 0,
                                        "betRef": "3682347919",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Harvey Elliott",
                        "rowId": "19177362",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347835",
                                        "name": "Harvey Elliott (Liverpool FC)",
                                        "price": 45,
                                        "handicap": 0,
                                        "betRef": "3682347835",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347926",
                                        "name": "Harvey Elliott (Liverpool FC)",
                                        "price": 500,
                                        "handicap": 0,
                                        "betRef": "3682347926",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Dominik Szoboszlai",
                        "rowId": "18932660",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347867",
                                        "name": "Dominik Szoboszlai (Liverpool FC)",
                                        "price": 45,
                                        "handicap": 0,
                                        "betRef": "3682347867",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347940",
                                        "name": "Dominik Szoboszlai (Liverpool FC)",
                                        "price": 500,
                                        "handicap": 0,
                                        "betRef": "3682347940",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Cesare Casadei",
                        "rowId": "19193992",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347809",
                                        "name": "Cesare Casadei (Chelsea FC)",
                                        "price": 55,
                                        "handicap": 0,
                                        "betRef": "3682347809",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347918",
                                        "name": "Cesare Casadei (Chelsea FC)",
                                        "price": 700,
                                        "handicap": 0,
                                        "betRef": "3682347918",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Andrey Santos",
                        "rowId": "19171657",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347831",
                                        "name": "Andrey Santos (Chelsea FC)",
                                        "price": 60,
                                        "handicap": 0,
                                        "betRef": "3682347831",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347908",
                                        "name": "Andrey Santos (Chelsea FC)",
                                        "price": 700,
                                        "handicap": 0,
                                        "betRef": "3682347908",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Trent Alexander-Arnold",
                        "rowId": "18922943",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347848",
                                        "name": "Trent Alexander-Arnold (Liverpool FC)",
                                        "price": 70,
                                        "handicap": 0,
                                        "betRef": "3682347848",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347917",
                                        "name": "Trent Alexander-Arnold (Liverpool FC)",
                                        "price": 900,
                                        "handicap": 0,
                                        "betRef": "3682347917",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Stefan Bajcetic",
                        "rowId": "19208169",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347856",
                                        "name": "Stefan Bajcetic (Liverpool FC)",
                                        "price": 70,
                                        "handicap": 0,
                                        "betRef": "3682347856",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347910",
                                        "name": "Stefan Bajcetic (Liverpool FC)",
                                        "price": 900,
                                        "handicap": 0,
                                        "betRef": "3682347910",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Thiago Alcantara",
                        "rowId": "1095327",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347852",
                                        "name": "Thiago Alcantara (Liverpool FC)",
                                        "price": 70,
                                        "handicap": 0,
                                        "betRef": "3682347852",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347907",
                                        "name": "Thiago Alcantara (Liverpool FC)",
                                        "price": 900,
                                        "handicap": 0,
                                        "betRef": "3682347907",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Ben Chilwell",
                        "rowId": "18909547",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347813",
                                        "name": "Ben Chilwell (Chelsea FC)",
                                        "price": 80,
                                        "handicap": 0,
                                        "betRef": "3682347813",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347885",
                                        "name": "Ben Chilwell (Chelsea FC)",
                                        "price": 1000,
                                        "handicap": 0,
                                        "betRef": "3682347885",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Reece James",
                        "rowId": "18898919",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347824",
                                        "name": "Reece James (Chelsea FC)",
                                        "price": 80,
                                        "handicap": 0,
                                        "betRef": "3682347824",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347891",
                                        "name": "Reece James (Chelsea FC)",
                                        "price": 1000,
                                        "handicap": 0,
                                        "betRef": "3682347891",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Virgil van Dijk",
                        "rowId": "1099936",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347875",
                                        "name": "Virgil van Dijk (Liverpool FC)",
                                        "price": 90,
                                        "handicap": 0,
                                        "betRef": "3682347875",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347941",
                                        "name": "Virgil van Dijk (Liverpool FC)",
                                        "price": 1250,
                                        "handicap": 0,
                                        "betRef": "3682347941",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Enzo Fernandez",
                        "rowId": "19163626",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347825",
                                        "name": "Enzo Fernandez (Chelsea FC)",
                                        "price": 110,
                                        "handicap": 0,
                                        "betRef": "3682347825",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347905",
                                        "name": "Enzo Fernandez (Chelsea FC)",
                                        "price": 1500,
                                        "handicap": 0,
                                        "betRef": "3682347905",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Thiago Silva",
                        "rowId": "1095333",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347834",
                                        "name": "Thiago Silva (Chelsea FC)",
                                        "price": 120,
                                        "handicap": 0,
                                        "betRef": "3682347834",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347882",
                                        "name": "Thiago Silva (Chelsea FC)",
                                        "price": 1500,
                                        "handicap": 0,
                                        "betRef": "3682347882",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Axel Disasi",
                        "rowId": "18959032",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347812",
                                        "name": "Axel Disasi (Chelsea FC)",
                                        "price": 120,
                                        "handicap": 0,
                                        "betRef": "3682347812",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347887",
                                        "name": "Axel Disasi (Chelsea FC)",
                                        "price": 1500,
                                        "handicap": 0,
                                        "betRef": "3682347887",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Benoît Badiashile",
                        "rowId": "18958376",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347806",
                                        "name": "Benoît Badiashile (Chelsea FC)",
                                        "price": 150,
                                        "handicap": 0,
                                        "betRef": "3682347806",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347876",
                                        "name": "Benoît Badiashile (Chelsea FC)",
                                        "price": 1750,
                                        "handicap": 0,
                                        "betRef": "3682347876",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Trevoh Chalobah",
                        "rowId": "18958129",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347810",
                                        "name": "Trevoh Chalobah (Chelsea FC)",
                                        "price": 150,
                                        "handicap": 0,
                                        "betRef": "3682347810",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347881",
                                        "name": "Trevoh Chalobah (Chelsea FC)",
                                        "price": 1750,
                                        "handicap": 0,
                                        "betRef": "3682347881",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Ibrahima Konate",
                        "rowId": "18928556",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347837",
                                        "name": "Ibrahima Konate (Liverpool FC)",
                                        "price": 150,
                                        "handicap": 0,
                                        "betRef": "3682347837",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347925",
                                        "name": "Ibrahima Konate (Liverpool FC)",
                                        "price": 1750,
                                        "handicap": 0,
                                        "betRef": "3682347925",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Joel Matip",
                        "rowId": "1104613",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347846",
                                        "name": "Joel Matip (Liverpool FC)",
                                        "price": 150,
                                        "handicap": 0,
                                        "betRef": "3682347846",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347943",
                                        "name": "Joel Matip (Liverpool FC)",
                                        "price": 1750,
                                        "handicap": 0,
                                        "betRef": "3682347943",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Andrew Robertson",
                        "rowId": "18899342",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347868",
                                        "name": "Andrew Robertson (Liverpool FC)",
                                        "price": 150,
                                        "handicap": 0,
                                        "betRef": "3682347868",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347948",
                                        "name": "Andrew Robertson (Liverpool FC)",
                                        "price": 1750,
                                        "handicap": 0,
                                        "betRef": "3682347948",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Konstantinos Tsimikas",
                        "rowId": "18907978",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347873",
                                        "name": "Konstantinos Tsimikas (Liverpool FC)",
                                        "price": 150,
                                        "handicap": 0,
                                        "betRef": "3682347873",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347964",
                                        "name": "Konstantinos Tsimikas (Liverpool FC)",
                                        "price": 1750,
                                        "handicap": 0,
                                        "betRef": "3682347964",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Levi Colwill",
                        "rowId": "19176325",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347815",
                                        "name": "Levi Colwill (Chelsea FC)",
                                        "price": 175,
                                        "handicap": 0,
                                        "betRef": "3682347815",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347884",
                                        "name": "Levi Colwill (Chelsea FC)",
                                        "price": 1750,
                                        "handicap": 0,
                                        "betRef": "3682347884",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Malo Gusto",
                        "rowId": "19164414",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347822",
                                        "name": "Malo Gusto (Chelsea FC)",
                                        "price": 200,
                                        "handicap": 0,
                                        "betRef": "3682347822",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347883",
                                        "name": "Malo Gusto (Chelsea FC)",
                                        "price": 2000,
                                        "handicap": 0,
                                        "betRef": "3682347883",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Bashir Humphreys",
                        "rowId": "19207146",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347828",
                                        "name": "Bashir Humphreys (Chelsea FC)",
                                        "price": 200,
                                        "handicap": 0,
                                        "betRef": "3682347828",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347904",
                                        "name": "Bashir Humphreys (Chelsea FC)",
                                        "price": 2000,
                                        "handicap": 0,
                                        "betRef": "3682347904",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "106835",
                        "title": "Marc Cucurella",
                        "rowId": "18935263",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347817",
                                        "name": "Marc Cucurella (Chelsea FC)",
                                        "price": 250,
                                        "handicap": 0,
                                        "betRef": "3682347817",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347895",
                                        "name": "Marc Cucurella (Chelsea FC)",
                                        "price": 2000,
                                        "handicap": 0,
                                        "betRef": "3682347895",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    },
                    {
                        "groupId": "108840",
                        "title": "Joe Gomez",
                        "rowId": "18909600",
                        "groupSelections": [
                            {
                                "handicap": 0,
                                "selections": [
                                    {
                                        "id": "3682347838",
                                        "name": "Joe Gomez (Liverpool FC)",
                                        "price": 250,
                                        "handicap": 0,
                                        "betRef": "3682347838",
                                        "renderingLayout": 2,
                                        "wideRenderingLayout": 3,
                                        "columnIndex": 0
                                    },
                                    {
                                        "id": "3682347922",
                                        "name": "Joe Gomez (Liverpool FC)",
                                        "price": 2000,
                                        "handicap": 0,
                                        "betRef": "3682347922",
                                        "renderingLayout": 2,
                                        "columnIndex": 1
                                    }
                                ]
                            }
                        ],
                        "labels": []
                    }
                ],
                "visibleRowCount": 12
            },
            "id": "1383212097",
            "uniqueId": "1383212097",
            "name": "Să înscrie 2+ goluri",
            "type": "PTS2",
            "handicap": 0,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 0,
            "selections": [],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1426305557",
            "uniqueId": "1426305557",
            "name": "Cornere Peste/Sub",
            "type": "CNOU",
            "handicap": 10.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_CNOU0",
            "selections": [
                {
                    "id": "3673645476",
                    "name": "Peste 10.5",
                    "price": 2.05,
                    "handicap": 10.5,
                    "betRef": "3673645476",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3673645477",
                    "name": "Sub 10.5",
                    "price": 1.72,
                    "handicap": 10.5,
                    "betRef": "3673645477",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        },
        {
            "id": "1428076215",
            "uniqueId": "1428076215",
            "name": "Total cartonașe (Peste/Sub)",
            "type": "TCOU",
            "handicap": 4.5,
            "marketCloseTimeMillis": 1691940600000,
            "renderingLayout": 2,
            "pinKey": "p_TCOU0",
            "selections": [
                {
                    "id": "3682378635",
                    "name": "Peste 4.5",
                    "price": 1.85,
                    "handicap": 4.5,
                    "betRef": "3682378635",
                    "renderingLayout": 2,
                    "columnIndex": 0
                },
                {
                    "id": "3682378636",
                    "name": "Sub 4.5",
                    "price": 1.88,
                    "handicap": 4.5,
                    "betRef": "3682378636",
                    "renderingLayout": 2,
                    "columnIndex": 1
                }
            ],
            "scorerSelections": [],
            "exactScoreSelections": []
        }
    ],
    "statsUrl": {
        "url": "https://s5.sir.sportradar.com/betano/ro/match/41762853",
        "providerId": 1
    },
    "betRadarId": 41762853
}
console.log(testBetano);
testFortuna = {
    "sportRadarUrl": "https://s5.sir.sportradar.com/fortuna2/ro/1/season/105353/h2h/38/44/match/41762853",
    "sportRadarUrlAnchor": "http://s5.sir.sportradar.com/fortuna2/ro/match/m76661376",
    "eFortunaUrl": "https://efortuna.ro/pariuri-online/fotbal/anglia-premier-league/chelsea-liverpool-MRO76661376",
    "sportRadarID": "41762853",
    "matchOdds": {
        "id": "41762853",
        "markets": [
            {
                "marketName": " Pauza sau final ",
                "allMarkets": [
                    {
                        "oddValue": "2.27",
                        "oddName": "Chelsea"
                    },
                    {
                        "oddValue": "1.81",
                        "oddName": "X-X"
                    },
                    {
                        "oddValue": "1.91",
                        "oddName": "Liverpool"
                    }
                ]
            },
            {
                "marketName": " Victorie fara egal ",
                "allMarkets": [
                    {
                        "oddValue": "2.16",
                        "oddName": "Chelsea"
                    },
                    {
                        "oddValue": "1.75",
                        "oddName": "Liverpool"
                    }
                ]
            },
            {
                "marketName": " Total goluri / Total goluri asiatice Pariaza daca numarul total de goluri marcate in timpul regulamentar va fi sub sau peste valoarea indicata. ",
                "allMarkets": [
                    {
                        "oddValue": "14.00",
                        "oddName": "sub 0.5"
                    },
                    {
                        "oddValue": "1.02",
                        "oddName": "peste 0.5"
                    },
                    {
                        "oddValue": "14.00",
                        "oddName": "sub 1"
                    },
                    {
                        "oddValue": "1.03",
                        "oddName": "peste 1"
                    },
                    {
                        "oddValue": "5.00",
                        "oddName": "sub 1.5"
                    },
                    {
                        "oddValue": "1.19",
                        "oddName": "peste 1.5"
                    },
                    {
                        "oddValue": "3.90",
                        "oddName": "sub 2"
                    },
                    {
                        "oddValue": "1.27",
                        "oddName": "peste 2"
                    },
                    {
                        "oddValue": "2.34",
                        "oddName": "sub 2.5"
                    },
                    {
                        "oddValue": "1.63",
                        "oddName": "peste 2.5"
                    },
                    {
                        "oddValue": "1.84",
                        "oddName": "sub 3"
                    },
                    {
                        "oddValue": "2.01",
                        "oddName": "peste 3"
                    },
                    {
                        "oddValue": "1.54",
                        "oddName": "sub 3.5"
                    },
                    {
                        "oddValue": "2.56",
                        "oddName": "peste 3.5"
                    },
                    {
                        "oddValue": "1.27",
                        "oddName": "sub 4"
                    },
                    {
                        "oddValue": "3.95",
                        "oddName": "peste 4"
                    },
                    {
                        "oddValue": "1.21",
                        "oddName": "sub 4.5"
                    },
                    {
                        "oddValue": "4.75",
                        "oddName": "peste 4.5"
                    },
                    {
                        "oddValue": "1.08",
                        "oddName": "sub 5"
                    },
                    {
                        "oddValue": "8.70",
                        "oddName": "peste 5"
                    },
                    {
                        "oddValue": "1.07",
                        "oddName": "sub 5.5"
                    },
                    {
                        "oddValue": "9.60",
                        "oddName": "peste 5.5"
                    },
                    {
                        "oddValue": "1.01",
                        "oddName": "sub 6"
                    },
                    {
                        "oddValue": "20.00",
                        "oddName": "peste 6"
                    },
                    {
                        "oddValue": "1.01",
                        "oddName": "sub 6.5"
                    },
                    {
                        "oddValue": "21.00",
                        "oddName": "peste 6.5"
                    }
                ]
            },
            {
                "marketName": " Ambele echipe marcheaza sau peste goluri in meci ",
                "allMarkets": [
                    {
                        "oddValue": "1.01",
                        "oddName": "Da 0.5"
                    },
                    {
                        "oddValue": "1.17",
                        "oddName": "Da 1.5"
                    },
                    {
                        "oddValue": "1.33",
                        "oddName": "Da 2.5"
                    },
                    {
                        "oddValue": "1.42",
                        "oddName": "Da 3.5"
                    },
                    {
                        "oddValue": "1.46",
                        "oddName": "Da 4.5"
                    },
                    {
                        "oddValue": "1.47",
                        "oddName": "Da 5.5"
                    }
                ]
            },
            {
                "marketName": " Ambele marcheaza ",
                "allMarkets": [
                    {
                        "oddValue": "1.48",
                        "oddName": "Da"
                    },
                    {
                        "oddValue": "2.57",
                        "oddName": "Nu"
                    }
                ]
            },
            {
                "marketName": " Handicap Asiatic ",
                "allMarkets": [
                    {
                        "oddValue": "14.50",
                        "oddName": "Chelsea -2.5"
                    },
                    {
                        "oddValue": "1.01",
                        "oddName": "Liverpool +2.5"
                    },
                    {
                        "oddValue": "13.50",
                        "oddName": "Chelsea -2"
                    },
                    {
                        "oddValue": "1.01",
                        "oddName": "Liverpool +2"
                    },
                    {
                        "oddValue": "6.10",
                        "oddName": "Chelsea -1.5"
                    },
                    {
                        "oddValue": "1.11",
                        "oddName": "Liverpool +1.5"
                    },
                    {
                        "oddValue": "5.10",
                        "oddName": "Chelsea -1"
                    },
                    {
                        "oddValue": "1.15",
                        "oddName": "Liverpool +1"
                    },
                    {
                        "oddValue": "2.86",
                        "oddName": "Chelsea -0.5"
                    },
                    {
                        "oddValue": "1.40",
                        "oddName": "Liverpool +0.5"
                    },
                    {
                        "oddValue": "1.60",
                        "oddName": "Chelsea +0.5"
                    },
                    {
                        "oddValue": "2.29",
                        "oddName": "Liverpool -0.5"
                    },
                    {
                        "oddValue": "1.27",
                        "oddName": "Chelsea +1"
                    },
                    {
                        "oddValue": "3.65",
                        "oddName": "Liverpool -1"
                    },
                    {
                        "oddValue": "1.19",
                        "oddName": "Chelsea +1.5"
                    },
                    {
                        "oddValue": "4.50",
                        "oddName": "Liverpool -1.5"
                    },
                    {
                        "oddValue": "1.05",
                        "oddName": "Chelsea +2"
                    },
                    {
                        "oddValue": "9.00",
                        "oddName": "Liverpool -2"
                    },
                    {
                        "oddValue": "1.04",
                        "oddName": "Chelsea +2.5"
                    },
                    {
                        "oddValue": "9.90",
                        "oddName": "Liverpool -2.5"
                    }
                ]
            },
            null,
            {
                "marketName": " Pauza/final ",
                "allMarkets": [
                    {
                        "oddValue": "4.85",
                        "oddName": "1/1"
                    },
                    {
                        "oddValue": "5.80",
                        "oddName": "X/X"
                    },
                    {
                        "oddValue": "3.80",
                        "oddName": "2/2"
                    },
                    {
                        "oddValue": "12.00",
                        "oddName": "1/X"
                    },
                    {
                        "oddValue": "24.00",
                        "oddName": "1/2"
                    },
                    {
                        "oddValue": "12.00",
                        "oddName": "2/X"
                    },
                    {
                        "oddValue": "7.40",
                        "oddName": "X/1"
                    },
                    {
                        "oddValue": "28.00",
                        "oddName": "2/1"
                    },
                    {
                        "oddValue": "6.20",
                        "oddName": "X/2"
                    },
                    {
                        "oddValue": "3.10",
                        "oddName": "1X/1"
                    },
                    {
                        "oddValue": "4.30",
                        "oddName": "1X/X"
                    },
                    {
                        "oddValue": "5.20",
                        "oddName": "1X/2"
                    },
                    {
                        "oddValue": "6.20",
                        "oddName": "X2/1"
                    },
                    {
                        "oddValue": "4.25",
                        "oddName": "X2/X"
                    },
                    {
                        "oddValue": "2.47",
                        "oddName": "X2/2"
                    },
                    {
                        "oddValue": "4.30",
                        "oddName": "12/1"
                    },
                    {
                        "oddValue": "6.80",
                        "oddName": "12/X"
                    },
                    {
                        "oddValue": "3.40",
                        "oddName": "12/2"
                    },
                    {
                        "oddValue": "3.70",
                        "oddName": "1/1X"
                    },
                    {
                        "oddValue": "8.80",
                        "oddName": "1/X2"
                    },
                    {
                        "oddValue": "4.20",
                        "oddName": "1/12"
                    },
                    {
                        "oddValue": "3.50",
                        "oddName": "X/1X"
                    },
                    {
                        "oddValue": "3.20",
                        "oddName": "X/X2"
                    },
                    {
                        "oddValue": "3.65",
                        "oddName": "X/12"
                    },
                    {
                        "oddValue": "9.10",
                        "oddName": "2/1X"
                    },
                    {
                        "oddValue": "3.05",
                        "oddName": "2/X2"
                    },
                    {
                        "oddValue": "3.45",
                        "oddName": "2/12"
                    },
                    {
                        "oddValue": "1.87",
                        "oddName": "1X/1X"
                    },
                    {
                        "oddValue": "2.47",
                        "oddName": "1X/X2"
                    },
                    {
                        "oddValue": "2.03",
                        "oddName": "1X/12"
                    },
                    {
                        "oddValue": "2.66",
                        "oddName": "X2/1X"
                    },
                    {
                        "oddValue": "1.62",
                        "oddName": "X2/X2"
                    },
                    {
                        "oddValue": "1.83",
                        "oddName": "X2/12"
                    },
                    {
                        "oddValue": "2.79",
                        "oddName": "12/1X"
                    },
                    {
                        "oddValue": "2.37",
                        "oddName": "12/X2"
                    },
                    {
                        "oddValue": "1.97",
                        "oddName": "12/12"
                    }
                ]
            },
            {
                "marketName": " Meci: Par/ Impar ",
                "allMarkets": [
                    {
                        "oddValue": "1.84",
                        "oddName": "Par"
                    },
                    {
                        "oddValue": "1.93",
                        "oddName": "Impar"
                    }
                ]
            },
            {
                "marketName": "1X2",
                "allMarkets": [
                    {
                        "oddValue": "2.95",
                        "oddName": "Home"
                    },
                    {
                        "oddValue": "2.38",
                        "oddName": "Away"
                    },
                    {
                        "oddValue": "3.70",
                        "oddName": "Draw"
                    }
                ]
            },
            {
                "marketName": " Peste/Sub ",
                "allMarkets": [
                    {
                        "oddValue": "14.00",
                        "oddName": "sub 0.5"
                    },
                    {
                        "oddValue": "1.02",
                        "oddName": "peste 0.5"
                    },
                    {
                        "oddValue": "14.00",
                        "oddName": "sub 1"
                    },
                    {
                        "oddValue": "1.03",
                        "oddName": "peste 1"
                    },
                    {
                        "oddValue": "5.00",
                        "oddName": "sub 1.5"
                    },
                    {
                        "oddValue": "1.19",
                        "oddName": "peste 1.5"
                    },
                    {
                        "oddValue": "3.90",
                        "oddName": "sub 2"
                    },
                    {
                        "oddValue": "1.27",
                        "oddName": "peste 2"
                    },
                    {
                        "oddValue": "2.34",
                        "oddName": "sub 2.5"
                    },
                    {
                        "oddValue": "1.63",
                        "oddName": "peste 2.5"
                    },
                    {
                        "oddValue": "1.84",
                        "oddName": "sub 3"
                    },
                    {
                        "oddValue": "2.01",
                        "oddName": "peste 3"
                    },
                    {
                        "oddValue": "1.54",
                        "oddName": "sub 3.5"
                    },
                    {
                        "oddValue": "2.56",
                        "oddName": "peste 3.5"
                    },
                    {
                        "oddValue": "1.27",
                        "oddName": "sub 4"
                    },
                    {
                        "oddValue": "3.95",
                        "oddName": "peste 4"
                    },
                    {
                        "oddValue": "1.21",
                        "oddName": "sub 4.5"
                    },
                    {
                        "oddValue": "4.75",
                        "oddName": "peste 4.5"
                    },
                    {
                        "oddValue": "1.08",
                        "oddName": "sub 5"
                    },
                    {
                        "oddValue": "8.70",
                        "oddName": "peste 5"
                    },
                    {
                        "oddValue": "1.07",
                        "oddName": "sub 5.5"
                    },
                    {
                        "oddValue": "9.60",
                        "oddName": "peste 5.5"
                    },
                    {
                        "oddValue": "1.01",
                        "oddName": "sub 6"
                    },
                    {
                        "oddValue": "20.00",
                        "oddName": "peste 6"
                    },
                    {
                        "oddValue": "1.01",
                        "oddName": "sub 6.5"
                    },
                    {
                        "oddValue": "21.00",
                        "oddName": "peste 6.5"
                    }
                ]
            },
            {
                "marketName": "1X-X2-12",
                "allMarkets": [
                    {
                        "oddValue": "1.64",
                        "oddName": "1X"
                    },
                    {
                        "oddValue": "1.45",
                        "oddName": "X2"
                    },
                    {
                        "oddValue": "1.32",
                        "oddName": "12"
                    }
                ]
            }
        ]
    }
}
console.log(testFortuna);
accesMatch(testFortuna, testBetano, "41762853");
function accesMatch(fortuna, betano, key) {//remember to use key ok
    let fortunaSelections = fortuna.matchOdds.markets;
    let betanoSlections = betano.markets;
    getOddsForThreeWayFinalResult(betanoSlections, fortunaSelections);
    calculateBothTeamsScore(betanoSlections, fortunaSelections);
    calculateDrawNoBet(betanoSlections, fortunaSelections);
    calculateDoubleChance(betanoSlections, fortunaSelections);
    calculateTeamOneWithDoubleChance(betanoSlections, fortunaSelections);

}

function searchInsideJsonObject(object, searchName) {
    object = new Map(object.map(item => [item.name, item]));
    console.log(object);
    const result = object.get(searchName);
    if (result) {
        return result;
    } else {
        console.log("Item not found");
    }

}



// function calculateOddsOverUnderGoals(object, objectF) {
//     object = searchInsideJsonObject(object, "Total goluri Peste/Sub (suplimentar)");
//     if (object) {

//     }

// }//I will it later 
function getOddsForThreeWayFinalResult(object, objectF) {
    let search = searchInsideJsonObject(object, "Rezultat final MC");
    if (search) {
        calculateOddsFinalResult(search, objectF);
    } else {
        let search1 = searchInsideJsonObject(object, "Rezultat final");
        calculateOddsFinalResult(search1, objectF);
    }

}
function calculateOddsFinalResult(Bobject, objectF) {
    let Team1, Equal, Team2;
    Team1 = Bobject.selections[0].price;
    Equal = Bobject.selections[1].price;
    Team2 = Bobject.selections[2].price;
    let FTeam1, FEqual, FTeam2;
    FTeam1 = objectF[9].allMarkets[0].oddValue;
    FEqual = objectF[9].allMarkets[2].oddValue;
    FTeam2 = objectF[9].allMarkets[1].oddValue;
    let FinalOddTeam1, FinalOddEqual, FinalOddTeam2;
    FinalOddTeam1 = biggerNrTest(Team1, FTeam1);
    FinalOddEqual = biggerNrTest(Equal, FEqual);
    FinalOddTeam2 = biggerNrTest(Team2, FTeam2);
    calculateProfit3wayTest(FinalOddTeam1, FinalOddEqual, FinalOddTeam2, false);

}

function calculateBothTeamsScore(object, objectF) {
    object = searchInsideJsonObject(object, "Ambele echipe înscriu");
    if (object) {
        const betanoPrice1 = object.selections[0].price;
        const betanoPrice2 = object.selections[1].price;
        const fortunaOddValue1 = objectF[4].allMarkets[0].oddValue;
        const fortunaOddValue2 = objectF[4].allMarkets[1].oddValue;
        const BiggerOdd1 = biggerNrTest(betanoPrice1, fortunaOddValue1);
        const BiggerOdd2 = biggerNrTest(betanoPrice2, fortunaOddValue2);
        calculateProfit2wayTest(BiggerOdd1, BiggerOdd2, false);
    }
}
function calculateDrawNoBet(object, objectF) {
    object = searchInsideJsonObject(object, "Niciun pariu pe egal");
    if (object) {
        const betanoPrice1 = object.selections[0].price;
        const betanoPrice2 = object.selections[1].price;
        const fortunaOddValue1 = objectF[1].allMarkets[0].oddValue;
        const fortunaOddValue2 = objectF[1].allMarkets[1].oddValue;
        const BiggerOdd1 = biggerNrTest(betanoPrice1, fortunaOddValue1);
        const BiggerOdd2 = biggerNrTest(betanoPrice2, fortunaOddValue2);
        calculateProfit2wayTest(BiggerOdd1, BiggerOdd2, false);
    }
}
function calculateDoubleChance(object, objectF) {

    let Newobject = searchInsideJsonObject(object, "Șansă dublă");
    if (Newobject) {
        const betanoPrice1 = Newobject.selections[0].price;
        const betanoPrice2 = Newobject.selections[1].price;
        const betanoPrice3 = Newobject.selections[2].price;
        const fortunaOddValue1 = objectF[11].allMarkets[0].oddValue;
        const fortunaOddValue2 = objectF[11].allMarkets[1].oddValue;
        const fortunaOddValue3 = objectF[11].allMarkets[2].oddValue;
        const BiggerOdd1 = biggerNrTest(betanoPrice1, fortunaOddValue1);
        const BiggerOdd2 = biggerNrTest(betanoPrice2, fortunaOddValue2);
        const BiggerOdd3 = biggerNrTest(betanoPrice3, fortunaOddValue3);
        profitSureBetDoubleChance(BiggerOdd1, BiggerOdd2, BiggerOdd3, false);
    }
}
function calculateTeamOneWithDoubleChance(object, objectF) {
    let newObj = searchInsideJsonObject(object, "Rezultat final MC");
    let newObj1 = searchInsideJsonObject(object, "Șansă dublă");
    if (newObj) {
        calculateProfitTeamOneWithDoubleChance(newObj, newObj1, objectF);
    } else {
        newObj = searchInsideJsonObject(object, "Rezultat final");
        calculateProfitTeamOneWithDoubleChance(newObj, newObj1, objectF);
    }
}


function calculateProfitTeamOneWithDoubleChance(object, object2, objectF) {
    let Team1, Equal, Team2;
    Team1 = object.selections[0].price;
    Equal = object.selections[1].price;
    Team2 = object.selections[2].price;
    let FTeam1, FEqual, FTeam2;
    FTeam1 = objectF[9].allMarkets[0].oddValue;
    FEqual = objectF[9].allMarkets[2].oddValue;
    FTeam2 = objectF[9].allMarkets[1].oddValue;
    let FinalOddTeam1, FinalOddEqual, FinalOddTeam2;
    FinalOddTeam1 = biggerNrTest(Team1, FTeam1);
    FinalOddEqual = biggerNrTest(Equal, FEqual);
    FinalOddTeam2 = biggerNrTest(Team2, FTeam2);
    //double chance
    const betanoPrice1 = object2.selections[0].price;
    const betanoPrice2 = object2.selections[1].price;
    const betanoPrice3 = object2.selections[2].price;
    const fortunaOddValue1 = objectF[11].allMarkets[0].oddValue;
    const fortunaOddValue2 = objectF[11].allMarkets[1].oddValue;
    const fortunaOddValue3 = objectF[11].allMarkets[2].oddValue;
    const BiggerOdd1 = biggerNrTest(betanoPrice1, fortunaOddValue1);
    const BiggerOdd2 = biggerNrTest(betanoPrice2, fortunaOddValue2);
    const BiggerOdd3 = biggerNrTest(betanoPrice3, fortunaOddValue3);

    console.log("team1 with X2");
    calculateProfit2wayTest(FinalOddTeam1, BiggerOdd2, false);// team 1 with X2
    console.log("team2 with 1X");
    calculateProfit2wayTest(FinalOddTeam2, BiggerOdd1, false);// team 2 with 1X
    console.log("X with 12");
    calculateProfit2wayTest(FinalOddEqual, BiggerOdd3, false);// X with 1X
}




