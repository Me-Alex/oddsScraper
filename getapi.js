

function afisareMeciuri(copyContainer, link, body, ddata) {
    // const app = firebase.initializeApp(firebaseConfig);
    let teamOne, teamTwo, equal;
    for (let ii = 0; ii < ddata.data1.length; ii++) {
        console.log(ii);
        // console.log(ddata.data1[ii].data.event);
        if (!(ddata.data1[ii].data === 'undefined') && ddata.data1[ii].data.event.markets[0].name == "Rezultat final") {
            // console.log(ddata.data1[ii].data.event.name + "  " + ii);
            // console.log(links.link[ii]);
            var event = ddata.data1[ii].data.event;
            teamOne = ddata.data1[ii].data.event.markets[0].selections[0].price;
            // console.log("1 " + teamOne);

            equal = ddata.data1[ii].data.event.markets[0].selections[1].price;
            // console.log("2 " + equal);

            teamTwo = ddata.data1[ii].data.event.markets[0].selections[2].price;
            // console.log("3 " + teamTwo);

            copyContainer.childNodes[1].innerHTML = ddata.data1[ii].data.event.name + "-> BETANO";
            //primele 3 cote   1  X  2
            copyContainer.childNodes[3].childNodes[1].childNodes[3].innerHTML = teamOne;
            // console.log(ddata.data1[ii].data.event.markets[0].selections[0].price);
            copyContainer.childNodes[3].childNodes[3].childNodes[3].innerHTML = equal;
            copyContainer.childNodes[3].childNodes[5].childNodes[2].innerHTML = teamTwo;
            // var playersRef = firebase.database().ref("meciuri/" + ddata.data1[ii].data.event.name + "/");
            // playersRef.set({
            //     event
            // }, function (error) {
            //     if (error) {
            //         // The write failed...

            //         console.log({ error });
            //     } else {


            //         console.log("success");
            //         // Data saved successfully!
            //     }
            // });
            for (let j = 0; j < ddata.data1[ii].data.event.markets.length; j++) {

                if (ddata.data1[ii].data.event.markets[j].name == "Niciun pariu pe egal") {

                    copyContainer.childNodes[5].childNodes[1].childNodes[3].innerHTML = ddata.data1[ii].data.event.markets[j].selections[0].price;
                    copyContainer.childNodes[5].childNodes[5].childNodes[2].innerHTML = ddata.data1[ii].data.event.markets[j].selections[1].price;
                    let parseLink = links.link[ii].split("/api");
                    //   console.log(parseLink);
                    link.href = parseLink[0] + parseLink[1];
                    body.innerHTML += copyContainer.outerHTML;
                    // console.log("Pariaza pe linkul acesta " + link.href);

                    break;
                }


            }
            for (let i = 0; i < jsonDataEfortuna.length; i++) {
                // console.log("te rog mergi");
                console.log(ddata.data1[ii].data.event.name);
                console.log(ii + "aici ii");
                if (ddata.data1[ii].data.event.name == jsonDataEfortuna[i].numeMatch) {
                    console.log(jsonDataEfortuna[i].numeMatch + ddata.data1[ii].data.event.name);
                    copyContainer.childNodes[1].innerHTML = jsonDataEfortuna[i].numeMatch + "-> EFORTUNA";
                    copyContainer.childNodes[3].childNodes[1].childNodes[3].innerHTML = jsonDataEfortuna[i].unu;
                    // console.log(ddata.data1[ii].data.event.markets[0].selections[0].price);
                    copyContainer.childNodes[3].childNodes[3].childNodes[3].innerHTML = jsonDataEfortuna[i].X;
                    copyContainer.childNodes[3].childNodes[5].childNodes[2].innerHTML = jsonDataEfortuna[i].doi;
                    copyContainer.childNodes[5].childNodes[1].childNodes[3].innerHTML = jsonDataEfortuna[i].victorieFaraEgal.victorieFaraEgal1;
                    copyContainer.childNodes[5].childNodes[5].childNodes[2].innerHTML = jsonDataEfortuna[i].victorieFaraEgal.victorieFaraEgal2;
                    body.innerHTML += copyContainer.outerHTML;
                    break;

                }
            }
        }
    }
}

async function afisareMeciuriEfortuna(matchData) {
    var counter = 0;
    for (let i = 0; i < matchData.length; i++) {
        for (let j = 0; j < matchData[i].children[1].querySelectorAll('.row-sub-markets').length * 2; j += 2) {
            if (matchData[i].children[1].children[j].querySelector('.market-name')) {
                // console.log(matchData[i].children[1].children[j]);
                // console.log(matchData[i].parentNode.parentNode.parentNode.previousSibling.previousElementSibling.querySelectorAll('.title-part')[1].childNodes[1].href);
                let temp = matchData[i].children[1].children[j].querySelector('.col-title');
                let elementHref = matchData[i].parentNode.parentNode.parentNode.previousSibling.previousElementSibling.querySelectorAll('.title-part')[1].childNodes[1].href
                let MatchLiga = elementHref.split("fotbal/");
                let matchLigaString = MatchLiga[1];

                console.log('');
                jsonDataEfortuna[counter++] = {
                    numeMatch: temp.attributes[1].value,
                    unu: matchData[i].children[1].children[j].children[1].querySelector('.odds-value').innerHTML,
                    X: matchData[i].children[1].children[j].children[2].querySelector('.odds-value').innerHTML,
                    doi: matchData[i].children[1].children[j].children[3].querySelector('.odds-value').innerHTML,
                    leagueURl: "https://efortuna.ro/ajax/pariuri-online/fotbal" + elementHref.split("/fotbal")[1] + "?timeTo=&rateFrom=&rateTo=&type=M2915%7CM2918",
                    leagueName: matchLigaString,
                    victorieFaraEgal: []
                }

                // console.log('am intrat aici');
            }
        }
    }
    let container = [];
    let counter23 = 0;
    let storedNr = 0;
    for (let i = 0; i < jsonDataEfortuna.length; i++) {
        let FLAG1 = 0;
        if (i > 0 && jsonDataEfortuna[i - 1].leagueName != jsonDataEfortuna[i].leagueName) {
            container[counter23++] = jsonDataEfortuna[i].leagueName;
            let data = await fetchUrlText(jsonDataEfortuna[i - 1].leagueURl);
            var parser = new DOMParser();
            xmlDoc = parser.parseFromString(data, "text/html");
            var marketHeader = xmlDoc.body.querySelectorAll('.market-with-header');
            // var ods = marketHeader[0].querySelectorAll('.odds-value');
            console.log(marketHeader.length);
            var name = xmlDoc.body.querySelectorAll('.names');
            var variableNr = i;
            for (let index = storedNr, j = 0; index < marketHeader.length + storedNr && j < marketHeader.length; index++, j++) {
                jsonDataEfortuna[index].victorieFaraEgal = {
                    victorieFaraEgal1: marketHeader[j].querySelectorAll('.odds-value')[0].innerText,
                    victorieFaraEgal2: marketHeader[j].querySelectorAll('.odds-value')[1].innerText
                }

            }

            storedNr = i;
        }
        console.log(i);
    }
    console.log(container);

}

async function fetchUrlText(url) {
    const fetchedData = await fetch(url, options)
        .then(response => response.text())
        .catch(err => console.error(err));

    return fetchedData;

}
async function fetchUrlJson(url) {
    const fetchedData = await fetch(url, options)
        .then(response => response.json())
        .catch(err => console.error(err));

    return fetchedData;

}

async function dataInOneDocument(fortunaDataFetch, className, eFortunaURL2) {
    var parser = new DOMParser();
    xmlDoc = parser.parseFromString(fortunaDataFetch, "text/html");
    var matchDataContainer = xmlDoc.body;
    console.log(matchDataContainer);
    for (let i = 0; i < 15; i++) {
        const fortunaDataFetch = await fetchUrlText(eFortunaURL2 + i);
        if (fortunaDataFetch) {
            console.log(i);
            // console.log(fortunaDataFetch);

            var parser = new DOMParser();
            xmlDoc = parser.parseFromString(fortunaDataFetch, "text/html");
            matchDataContainer.innerHTML += xmlDoc.body.innerHTML;
            var TbodyChildLength = xmlDoc.body.querySelectorAll('.row-sub-markets');
        }
        if (i == 14) {
            var matchData = matchDataContainer.querySelectorAll(className);
            afisareMeciuriEfortuna(await matchData);
            console.log(matchDataContainer);

        }
    }
}
var FLAG1 = false;

const options = {
    method: 'GET',
    headers: {
        cookie: 'sticky=stx52.531; __cf_bm=RjI2SaJAReaVg0gxxMCGeozyaV5zo7yNdmPVX7xoMPE-1668875847-0-AYNoAeQrP8TDRRO1jRVTaG7KJ1hlxwZwCXgM2vmbWxWpXh%2FWvFB9hzoQw%2FDxn7xuQSQRfRgV9EaueGAqNLiveRg%3D',
        cookie: 'SESSION=OWRjNjQwODQtMzAwOS00ZmQxLTkzYjktYWNmNTRhZDI3ZDcz',
        cookie: 'routeid=cc7c23881031c3b0e1bc10781a943f25; PREMATCH_SESSION=MmQ0ZjUxNmItMmVhZC00M2E4LWFmOGMtZTdiODc5YTljNDBk'
    }
};

var links = {
    link: [],
    i: [],
    j: [],

}
var jsonDataEfortuna = [{

}];
var ddata = {
    data1: [],
};
let linkSportRadar = "https://stats.fn.sportradar.com/betano/ro/Europe:Helsinki/gismo/stats_match_get/";
async function showToFrontEnd() {
    var theUrl = "https://api.efortuna.ro/live3/api/live/matches/overview";
    let urlBetano = "https://ro.betano.com/api/sport/fotbal/meciurile-urmatoare-de-azi/";
    let urlBetano1 = "https://ro.betano.com/api/sport/fotbal/urmatoarele-24-ore/?sort=Leagues";
    let anurl = "http://crm.motumaregalimob.ro/adminsystem/property_list.asp";
    let poateURl = "/cote/salford-city-peterborough/betbuilder/29452376/";
    let eFortunaURL1 = "https://efortuna.ro/bets/ajax/loadmoresport/fotbal-cm-2022?type=M235&timeTo=&rateFrom=&rateTo=&date=&selectDates=&filter=today";
    let eFortunaURL2 = "https://efortuna.ro/bets/ajax/loadmoresport/fotbal?timeTo=&rateFrom=&rateTo=&date=&pageSize=100&page=";
    // let sportRadar = "https://ls.fn.sportradar.com/betano/ro/Africa:Johannesburg/gismo/sport_matches/1/2022-12-12/0";
    const fortunaDataFetch = await fetchUrlText(eFortunaURL2);
    await dataInOneDocument(fortunaDataFetch, ".events-table", eFortunaURL2);

    // console.log(matchData[0].children[1].querySelectorAll('.row-sub-markets').length);
    // console.log(xmlDoc);

    let body = document.querySelector('.containerBody');
    let copyContainer = document.querySelector('.container');
    let link = document.querySelector(".pariaza-aici");
    copyContainer.outerHTML = "";

    // console.log(link);
    // console.log(copyContainer);

    const betano = await fetchUrlJson(urlBetano);
    vreauJSON1 = await fetchUrlJson(urlBetano1);
    let nr = 0;
    for (let i = 0; i < vreauJSON1.data.blocks.length; i++) {
        for (let j = 0; j < vreauJSON1.data.blocks[i].events.length; j++) {
            //mai jos recuperez linkul pentru nicun pariu pe egal
            let UrlPariuEgal = "https://ro.betano.com/api";
            let UrlNiciunPariuPeEgal = vreauJSON1.data.blocks[i].events[j].url;
            // console.log(UrlNiciunPariuPeEgal);
            // console.log(UrlNiciunPariuPeEgal);
            // if (UrlNiciunPariuPeEgal != null) {
            UrlNiciunPariuPeEgal = UrlPariuEgal + UrlNiciunPariuPeEgal;
            links.link[nr++] = UrlNiciunPariuPeEgal;
            links.i[nr] = i;
            links.j[nr] = j;
            // }

        }
    }

    console.log(links);
    for (let ii = 0; ii < links.link.length; ii++) {
        fetch(links.link[ii], options)
            .then(response => response.json())
            .then(async (response) => {
                ddata.data1[ii] = await response;
            }).then(() => {
                if (ii == links.link.length - 1) {
                    setInterval(afisareMeciuri(copyContainer, link, body, ddata), 4000);

                }
            }).catch(err => console.error(err));

    }


}


let urlAPIEsporsBattle = "https://football.esportsbattle.com/api/tournaments/65600/matches";
async function showToFrontEndEsportsBattleMatthes() {
    for (let index = 0; index < 1000; index++) {
        for (let j = 0; j < 10; j += 2) {

            let fetchData = await fetchUrlJson(urlAPIEsporsBattle);
            console.log(fetchData);
            console.log(index);
            console.log(fetchData[19].participant1.score);
            console.log(fetchData[19].participant2.score);
        }


    }



}


function writeMatchesToDB() {
    for (let ii = 0; ii < ddata.data1.length; ii++) {
        var event = ddata.data1[ii].data.event.markets[0];
        if (ddata.data1[ii].data.event.name !=null) {
            var playersRef = firebase.database().ref("meciuri-20-12-2022/" + ddata.data1[ii].data.event.name + "/");
            let teamOne = ddata.data1[ii].data.event.markets[0].selections[0].price;
            let equal = ddata.data1[ii].data.event.markets[0].selections[1].price;
            let teamTwo = ddata.data1[ii].data.event.markets[0].selections[2].price;
            let stats = ddata.data1[ii].data.event.stats[0];
            let v1, v2, peste, sub, p1Name, p2Name;
            ddata.data1[ii].data.event.markets.forEach((element) => {
                if (element.name == "Niciun pariu pe egal") {
                    v1 = element.selections[0].price;
                    v2 = element.selections[1].price;
                }

                if (element.name == "Total goluri Peste/Sub") {
                    peste = element.selections[0].price;
                    sub = element.selections[1].price;
                    p1Name = element.selections[0].name + " " + peste;
                    p2Name = element.selections[1].name + " " + sub;
                }
            })
            if (stats && v1 & v2)
                playersRef.set({
                    teamOne, equal, teamTwo, "NiciunPariuPeEgal1": v1, "NiciunPariuPeEgal2": v2, p1Name, p2Name, "stats": stats
                }, function (error) {
                    if (error) {
                        // The write failed...

                        console.log({ error });
                    } else {


                        console.log("success");
                        // Data saved successfully!
                    }
                });
        }

    }

}
function writeScoreMatchesToDB(link) {
    console.log("minic");
}
function removeMatches() {
    var data = firebase.database().ref("meciuri-11-12-2022");
    data.remove().then(() => { console.log("location removed"); });
}

function readDataFromDatabase() {
    firebase.database().ref('meciuri-18-12-2022').on('value', async (snap) => {
        let values = snap.val();
        console.log(snap.val());
        for (const [key, value] of Object.entries(values)) {
            console.log(values[key].stats.url.split("match/"));
            let matchScore = await fetchUrlJson(linkSportRadar + values[key].stats.url.split("match/")[1]);

            let matchScore1 = matchScore.doc[0].data.result;
            if (matchScore1) {
                firebase.database().ref("meciuri-19-12-2022/" + key + "/score").set({
                    "score": matchScore1
                }, function (error) {
                    if (error) {
                        // The write failed...

                        console.log({ error });
                    } else {


                        console.log("success");
                        // Data saved successfully!
                    }
                });
            }

        }
    });
}

//functia de mai jos nu este buna deoarece compara 2 stinguri 
//intre ele deocamdata nu stiu exact daca aceasta este problema
function checkHowManyEqualsHasBeenMade() {
    firebase.database().ref('meciuri-16-12-2022').on('value', async (snap) => {
        let values = snap.val();
        let AllMatchesNR = 0;
        let AllMatchesNrWhichWereEqual = 0;
        console.log(snap.val());
        for (const [key, value] of Object.entries(values)) {
            let checkNull = values[key].score;
            console.log(values[key]);
            if (checkNull) {
                let Scoreteam1 = values[key].score.score.home;
                let Scoreteam2 = values[key].score.score.away;
                AllMatchesNR++;
                if (Scoreteam1 == Scoreteam2) {
                    AllMatchesNrWhichWereEqual++;
                }
            }



        }
        console.log("NR TOTAL DE MECIURI " + AllMatchesNR);
        console.log("NR TOTAL DE MECIURI Care sau terminat egal" + AllMatchesNrWhichWereEqual);


    });
}

function statisticiMeciuri() {
    firebase.database().ref('meciuri-19-12-2022').on('value', async (snap) => {
        let values = snap.val();
        let AllMatchesNR = 0;
        let AllMatchesNROdd = 0;
        let AllMatchesNREven = 0;
        let AllMatchesNREqual = 0;
        let AllMatchesNROddOverOnePointFive = 0;
        let AllMatchesNREvenOverTwoPointFive = 0;
        for (const [key, value] of Object.entries(values)) {
            let checkNull = values[key].score;
            console.log(values[key]);
            if (checkNull) {
                let Scoreteam1 = parseInt(values[key].score.score.home);
                let Scoreteam2 = parseInt(values[key].score.score.away);
                AllMatchesNR++;
                if ((Scoreteam1 + Scoreteam2) % 2 == 0) {
                    AllMatchesNREven++;
                } else {
                    AllMatchesNROdd++;
                }
                if (Scoreteam1 == Scoreteam2) {
                    AllMatchesNREqual++;
                }
                if ((Scoreteam1 + Scoreteam2) % 2 == 1 || Scoreteam1 + Scoreteam2 > 1.5) {
                    AllMatchesNROddOverOnePointFive++;
                }
                if ((Scoreteam1 + Scoreteam2) % 2 == 0 || Scoreteam1 + Scoreteam2 > 2.5) {
                    AllMatchesNREvenOverTwoPointFive++;
                }
            }
        }
        console.log("NR TOTAL DE MECIURI " + AllMatchesNR);
        console.log("NR TOTAL DE MECIURI PARE " + AllMatchesNREven);
        console.log("NR TOTAL DE MECIURI IMPARE" + AllMatchesNROdd);
        console.log("NR TOTAL DE MECIURI Egale" + AllMatchesNREqual);
        console.log("NR TOTAL DE MECIURI Impare sau Peste 1.5 golluri" + AllMatchesNROddOverOnePointFive);
        console.log("NR TOTAL DE MECIURI Pare sau Peste 2.5 golluri" + AllMatchesNREvenOverTwoPointFive);
    });
}




function show() {
    let element = document.querySelector(".show");
    if (element.style.display == "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }

}