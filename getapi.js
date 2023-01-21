

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

            //for-ul de mai jos compara numele meciurilor preluate de pe fotruna cu cele de pe betano
            // nu ne putem baza pe compararea numelelor
            // deoarece aceiasi echipa poate sa apara diverit pe abele case de pariuri 

            // for (let i = 0; i < jsonDataEfortuna.length; i++) {
            //     console.log(ddata.data1[ii].data.event.name);
            //     console.log(ii + "aici ii");
            //     if (ddata.data1[ii].data.event.name == jsonDataEfortuna[i].numeMatch) {
            //         console.log(jsonDataEfortuna[i].numeMatch + ddata.data1[ii].data.event.name);
            //         copyContainer.childNodes[1].innerHTML = jsonDataEfortuna[i].numeMatch + "-> EFORTUNA";
            //         copyContainer.childNodes[3].childNodes[1].childNodes[3].innerHTML = jsonDataEfortuna[i].unu;
            //         // console.log(ddata.data1[ii].data.event.markets[0].selections[0].price);
            //         copyContainer.childNodes[3].childNodes[3].childNodes[3].innerHTML = jsonDataEfortuna[i].X;
            //         copyContainer.childNodes[3].childNodes[5].childNodes[2].innerHTML = jsonDataEfortuna[i].doi;
            //         copyContainer.childNodes[5].childNodes[1].childNodes[3].innerHTML = jsonDataEfortuna[i].victorieFaraEgal.victorieFaraEgal1;
            //         copyContainer.childNodes[5].childNodes[5].childNodes[2].innerHTML = jsonDataEfortuna[i].victorieFaraEgal.victorieFaraEgal2;
            //         body.innerHTML += copyContainer.outerHTML;
            //         break;

            //     }
            // }
        }
    }
}

async function afisareMeciuriEfortuna(matchData) {
    var counter = 0;
    let statsUrl;
    for (let i = 0; i < matchData.length; i++) {
        for (let j = 0; j < matchData[i].children[1].querySelectorAll('.row-sub-markets').length * 2; j += 2) {
            if (matchData[i].children[1].children[j].querySelector('.market-name')) {
                // console.log(matchData[i].children[1].children[j]);
                // console.log(matchData[i].parentNode.parentNode.parentNode.previousSibling.previousElementSibling.querySelectorAll('.title-part')[1].childNodes[1].href);
                let temp = matchData[i].children[1].children[j].querySelector('.col-title');
                let elementHref = matchData[i].parentNode.parentNode.parentNode.previousSibling.previousElementSibling.querySelectorAll('.title-part')[1].childNodes[1].href
                let MatchLiga = elementHref.split("fotbal/");
                let matchLigaString = MatchLiga[1];
                if (matchData[i].children[1].children[j].querySelector(".link-event-icon ")) {
                    statsUrl = matchData[i].children[1].children[j].querySelector(".link-event-icon ").href;

                }


                //from future here , I don't want to even try to think about the code below
                console.log('');
                jsonDataEfortuna[counter++] = {
                    numeMatch: temp.attributes[1].value,
                    unu: matchData[i].children[1].children[j].children[1].querySelector('.odds-value').innerHTML,
                    X: matchData[i].children[1].children[j].children[2].querySelector('.odds-value').innerHTML,
                    doi: matchData[i].children[1].children[j].children[3].querySelector('.odds-value').innerHTML,
                    leagueURl: "https://efortuna.ro/ajax/pariuri-online/fotbal" + elementHref.split("/fotbal")[1] + "?timeTo=&rateFrom=&rateTo=&type=M2915%7CM2918",
                    leagueName: matchLigaString,
                    victorieFaraEgal: [],
                    statsUrl: statsUrl

                }
                statsUrl = null;
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
    for (let d = 0; d < jsonDataEfortuna.length; d++) {
        console.log("dkfakldfj adlkjf alkdjf lakdjf lak");

        let uSplit = jsonDataEfortuna[1].statsUrl.split('match/');
        const options1 = { method: 'GET', headers: { 'Content-Type': 'application/json' } };

        let getTheResponseUrl = async () => {
            const ee = await fetchUrl1(jsonDataEfortuna[d].statsUrl, options1);
            jsonDataEfortuna[d].statsUrl = ee;
            let id = ee.split("match/");
            console.log(ee);
            let nume = jsonDataEfortuna[d].numeMatch;
            let nnume = nume.replace('.', "");
            firebase.database().ref("meciuri-eFortunaWithId/" + id[1] + "/").set({
                match: jsonDataEfortuna[d]
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
        setTimeout(getTheResponseUrl, 4000);


    }

}


async function fetchUrl1(url) {
    const fetchedData = await fetch(url)
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
async function fetchUrl(url) {
    const fetchedData = await fetch(url, options)
        .then(response => response.url)
        .catch(err => console.error(err));

    return fetchedData;

}
let aaa = ['https://s5.sir.sportradar.com/fortuna2/ro/m61616356', 'fdfadsf'];
let getTheResponseUrl = async () => {
    const ee = await fetchUrl(aaa[0]);
    console.log(ee);
}
async function fetchUrlJson(url) {
    const fetchedData = await fetch(url, options)
        .then(response => response.json())
        .catch(err => console.error(err));

    return fetchedData;

}

function writeToDbNoModular(path, obj) {
    firebase.database().ref(path).set({
        sportRadarUrl: obj.sportRadarUrl,
        sportRadarUrlAnchor: obj.sportRadarUrlAnchor,
        eFortunaUrl: obj.eFortunaUrl,
        sportRadarID: obj.sportRadarID,
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
const options1 = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
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
var fortunaLinks = [];
var ddata = {
    data1: [],
};
const event = new Map();
getTheResponseUrl();
let map = [
    "europa-conference-league",
    "romania-1",
    "romania-cupa",
    "spania-la-liga",
    "liga-campionilor",
    "europa-league",
    "anglia-premier-league",
    "anglia-cupa-ligii",
    "anglia-cupa-fa",
    "spania-cupa",
    "italia-serie-a",
    "italia-supercupa",
    "italia-cupa",
    "germania-bundesliga",
    "germania-cupa",
    "franta-ligue-1",
    "franta-cupa",
    "franta-2",
    "spania-2",
    "germania-2",
    "italia-2",
    "anglia-championship",
    "anglia-3",
    "anglia-4",
    "argentina-1",
    "austria-1",
    "australia-1",
    "belgia-1",
    "cehia-1",
    "croatia-1",
    "danemarca-1",
    "elvetia-1",
    "grecia-1",
    "grecia-cupa",
    "norvegia-1",
    "olanda-1",
    "olanda-2",
    "portugalia-1",
    "polonia-1",
    "rusia-1",
    "scotia-1",
    "scotia-cupa",
    "turcia-1",
    "ungaria-1",
    "sua-mls",
    "meciuri-amicale",
    "africa-de-sud-1",
    "africa-de-sud-2",
    "albania-cupa",
    "anglia-fa-trophy",
    "anglia-6-nord",
    "anglia-6-sud",
    "arabia-saudita-1",
    "arabia-saudita-2",
    "australia-1-f-",
    "belgia-2",
    "brazilia-carioca",
    "brazilia-catarinense",
    "brazilia-cearense",
    "brazilia-goiano",
    "brazilia-paulista",
    "brazilia-paulista-2",
    "brazilia-pernambucano",
    "brazilia-paranaense",
    "brazilia-alagoano",
    "brazilia-maranhense",
    "brazilia-potiguar",
    "brazilia-baiano",
    "cehia-2",
    "chile-1",
    "cipru-1",
    "cipru-2",
    "cipru-cupa",
    "costa-rica-1",
    "eau-1",
    "egipt-1",
    "franta-3",
    "germania-3",
    "germania-4-ne",
    "grecia-2",
    "india-super-league",
    "india-1",
    "indonezia-1",
    "irlanda-de-nord-1",
    "iran-1",
    "iran-2",
    "israel-1",
    "israel-cupa-ligii",
    "israel-1-f-",
    "italia-3-a",
    "italia-3-b",
    "italia-3-c",
    "italia-cupa-lp",
    "kenya-premier-league",
    "maroc-1",
    "mexic-1",
    "mexic-2",
    "mexic-u20-",
    "nigeria-1",
    "palestina-1",
    "peru-1",
    "polonia-cupa",
    "polonia-3_0",
    "portugalia-cupa-ligii",
    "portugalia-2",
    "portugalia-3",
    "qatar-1",
    "scotia-3",
    "scotia-4",
    "slovacia-1",
    "spania-3",
    "spania-supercupa-feminin",
    "tanzania-1",
    "tara-galilor-1",
    "tara-galilor-2-nord",
    "thailanda-1",
    "tunisia-1",
    "turcia-cupa",
    "turcia-2",
    "campionatul-americii-de-sud-u20",
    "campionatul-natiunilor-africane"
]
console.log(map);
let fortunaMatches = [{


}];
let linkSportRadar = "https://stats.fn.sportradar.com/betano/ro/Europe:Helsinki/gismo/stats_match_get/";
//scrapes all links of the events from efortuna and then it writes them to the database
async function showToFrontEndEfortuna() {
    let w1 = "";
    //s-ar putea sa functioneze doar pe localHOST de revenit aici daca linkurile nu sunt accesibilie
    if (window.location.port) {
        w1 = window.location.hostname + ":" + window.location.port;
    }
    else {
        w1 = window.location.hostname;
    }
    let baseUrl = "https://efortuna.ro/pariuri-online/fotbal/";
    let baseUrl1 = "https://efortuna.ro";
    let trueCount = 0;
    let ok = 0;
    async function ceva() {
        for (let index1 = 0; index1 < map.length; index1++) {
            // console.log(index1);
            console.log(map[index1]);
            let el1 = map[index1];
            let el = baseUrl + map[index1];
            console.log(el);
            const fortunaDataFetch = await fetchUrlText(el);
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(fortunaDataFetch, "text/html");
            var matchDataContainer = xmlDoc.querySelectorAll(".link-event-icon.text-middle");
            var matchDataContainer1 = xmlDoc.querySelectorAll('.event-link.js-event-link');
            // var time = xmlDoc.querySelectorAll('.event-datetime');

            for (let j = 0; j < matchDataContainer.length; j++) {
                if (matchDataContainer1[j]) {
                    let sID = await fetchUrl1(matchDataContainer[j].href, options1);
                    // console.log(fortunaMatches.length + " " + trueCount);

                    fortunaMatches[fortunaMatches.length++ - 1] = {

                        sportRadarUrlAnchor: matchDataContainer[j].href,
                        eFortunaUrl: (baseUrl1 + matchDataContainer1[j].href.split(w1)[1]) ?? 'none',
                        sportRadarUrl: sID,
                        sportRadarID: sID.split('match/')[1] || sID.split('ro/')[1]

                    }
                }
            }
            if (index1 == 120) {
                console.log("program finished");
                writeToDb();
            }

        }


    }
    ceva();
    async function writeToDb() {
        fortunaMatches.forEach((match, index) => {
            writeToDbNoModular('meciuri-eFortunaWithIdv4/' + match.sportRadarID + '/', match);
        });
    }

}
let allMarkets = [{

}]
let markets = [{

}]
let matchOdds = {

    id: 'dsadasd ',
    markets: [{
        marketName: 'fgsgsfd',
        allMarkets: [{
            name: '',
            oddValue: '',
            oddName: ''
        }]
    }]

};
console.log(matchOdds);
let counterMarkets = 0;
let counter = 0;
let allMarketsCounter = 0;
async function checkEventsStartTime() {
    firebase.database().ref('meciuri-eFortunaWithIdv4').on('value', async (snap) => {
        let values = snap.val();
        for (const [key, value] of Object.entries(values)) {
            let timeFromApi = linkSportRadar + key;
            let result = await fetchUrlJson(timeFromApi);
            //este in secunde si am transformat in ms cu *1000
            if (result.doc[0] && result.doc[0].data.time) {
                if ((new Date(result.doc[0].data.time.uts * 1000 - Date.now())) / 1000 / 60 > 0) {
                    console.log(values[key].eFortunaUrl);
                    // console.log((new Date(result.doc[0].data.time.uts - Date.now())) / 1000 / 60);
                    // console.log(Date.now() + " " + result.doc[0].data.time.uts);
                    scrapeFortunaMatchOdds(values[key].eFortunaUrl, values[key].sportRadarID);
                }
            }
        }
    });
}
// te rog nu ma injura daca citesti codul asta dupa 1 saptamana 
async function scrapeFortunaMatchOdds(url, ID) {

    const fortunaDataFetch = await fetchUrlText(url);
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(fortunaDataFetch, "text/html");
    var matchDataContainer = xmlDoc.body;
    let allMarketH3 = matchDataContainer.querySelectorAll(".market h3");
    // console.log(matchOdds);
    //document.querySelector(
    let mapOdds = {
        home: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(2) > a > span',
        away: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(4) > a > span',
        draw: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(3) > a > span',
        homeOrDraw: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(5) > a > span',
        drawOrAway: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(6) > a > span',
        homeOrAway: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(7) > a > span'
    }
    //document.querySelectorAll(".market h3")
    let mapMarkets = [
        ' Pauza sau final pariaza pe rezultatul primei reprize sau rezultatul final (daca meciul nu este finalizat, pariurile vor fi anulate) ',
        ' Victorie fara egal pariaza pe victoria echipei gazda sau oaspete, in caz de egalitate pariurile sunt nule ',
        ' Total goluri / Total goluri asiatice ',
        ' Ambele echipe marcheaza sau peste goluri in meci ',
        ' Ambele marcheaza ',
        ' Handicap / Handicap asiatic ',
        ' Prima repriza ',
        ' Pauza/final pariaza pe rezultatul primei reprize si rezultatul final al meciului ',
        ' Meci: Par/ Impar ',
        {
            home: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(2) > a > span',
            away: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(4) > a > span',
            draw: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(3) > a > span',
            homeOrDraw: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(5) > a > span',
            drawOrAway: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(6) > a > span',
            homeOrAway: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(7) > a > span'
        }
    ];
    //nici nu ai idee cat de rau imi pare ca te pun sa citesti ...si mai rau sa intelegi codul acesta 
    //tot ce trebuie sa stii ca este eficient si isi face treaba , preia tote cotele de pe fortuna -> Alex din trecut 
    //you're a genius
    //get a bike tough
    // console.log(mapMarkets);
    let mapMarkets1 = {
        breakOrOver: 'Pauza sau final',
        drawNoBet: 'Victorie fara egal',
        overUnder: 'Total goluri / Total goluri asiatice',
        bothScoreOrOver: 'Ambele echipe marcheaza sau peste goluri in meci',
        bothScore: 'Ambele marcheaza',
        asianHandicap: 'Handicap / Handicap asiatic',
        firstRound: 'Prima repriza',
        pauzaFinal: 'Pauza/final',
        oddEven: 'Meci: Par/ Impar',
    }
    for (let index = 0; index < allMarketH3.length; index++) {
        mapMarkets.forEach((el, index1) => {
            if (el == allMarketH3[index].innerText.replace(/\s{2,}/g, ' ')) {
                let oddsGroup = allMarketH3[index].nextElementSibling.querySelectorAll('.odds-group a');
                for (let indexOdds = 0; indexOdds < oddsGroup.length; indexOdds++) {
                    let oddValue = oddsGroup[indexOdds].querySelector('.odds-value').textContent;
                    let oddName = oddsGroup[indexOdds].querySelector('.odds-name').outerText.split('\n')[0];
                    allMarkets[indexOdds] = {
                        oddValue: oddValue,
                        oddName: oddName
                    }
                }
                if (index1 == 0)
                    markets[index1] = {
                        marketName: ' Pauza sau final ',
                        allMarkets
                    }
                else if (index1 == 1)
                    markets[index1] = {
                        marketName: ' Victorie fara egal ',
                        allMarkets
                    }
                else if (index1 == 7)
                    markets[index1] = {
                        marketName: ' Pauza/final ',
                        allMarkets
                    }
                else
                    markets[index1] = {
                        marketName: el,
                        allMarkets
                    }
                allMarkets = [];

            }
            if (index1 == 9) {
                let doc = xmlDoc.body.querySelector(mapMarkets[9].home).innerText;
                let doc1 = matchDataContainer.querySelector(mapMarkets[9].away).innerText;
                let doc2 = matchDataContainer.querySelector(mapMarkets[9].draw).innerText;
                allMarkets = [];
                markets[index1] = {
                    marketName: '1X2',
                    allMarkets: [{ oddValue: doc, oddName: 'Home' }, { oddValue: doc1, oddName: 'Away' }, { oddValue: doc2, oddName: 'Draw' }]
                }
                doc = matchDataContainer.querySelector(mapMarkets[9].homeOrDraw).innerText;
                doc1 = matchDataContainer.querySelector(mapMarkets[9].drawOrAway).innerText;
                doc2 = matchDataContainer.querySelector(mapMarkets[9].homeOrAway).innerText;
                allMarkets = [];
                markets[index1 + 1] = {
                    marketName: '1X-X2-12',
                    allMarkets: [{ oddValue: doc, oddName: '1X' }, { oddValue: doc1, oddName: 'X2' }, { oddValue: doc2, oddName: '12' }]
                }

            }
        })


    }
    matchOdds = {
        id: ID,
        markets
    }

    markets = [];
    var updates = {};
    updates['/meciuri-eFortunaWithIdv4/' + ID + '/' + "matchOdds"] = matchOdds;
    firebase.database().ref().update(updates);
    console.log(matchOdds);
    matchOdds = {};
    //scriu catre baza de date
    // firebase.database().ref("meciuri-eFortunaWithIdv4/" + ID + "/").set({
    //     matchOdds, "ceva": "alune"
    // }
    //     , function (error) {
    //         if (error) {
    //             // The write failed...
    //             console.log({ error });
    //         } else {
    //             console.log("success");
    //             // Data saved successfully!
    //         }
    //     });
    return matchOdds;
}
function compareDates(d2) {
    let date = new Date;
    if (date.getFullYear() <= d2.getFullYear() && date.getMonth() <= d2.getMonth() && date.getDate() <= d2.getDate() && date.getHours() <= d2.getHours() && date.getMinutes() <= d2.getMinutes())
        return true;
    return false;

}
async function verifyEventStartingTime(key) { //key prin referinta este ID ul evenimentului 
    let timeFromApi = linkSportRadar + key;
    let result = await fetchUrlJson(timeFromApi);//este in secunde si am transformat in ms cu *1000
    if (result.doc[0] && result.doc[0].data.time) {
        if ((new Date(result.doc[0].data.time.uts * 1000 - Date.now())) / 1000 / 60 > 0) {
            return true;
        }
    }
    return false;
}
function checkIfEventHasMarkets(match) {
    if (match.matchOdds) {
        return true;
    } else {
        return false;
    }
}

function compareBetanoWithFortunaMatches() {//cauta meciurile care sunt disponibilie si pe fortuna si pe betano
    let counter = 0;
    firebase.database().ref('meciuri-BetanoWithId').on('value', async (snap) => {
        let valuesBetano = snap.val(); // console.log(valuesBetano); let sizeBetano = snap.size();
        firebase.database().ref('meciuri-eFortunaWithIdv4').on('value', async (snap1) => {
            let valuesFortuna = snap1.val();
            console.log(valuesFortuna); // let sizeFortuna = snap.size();
            for (const [keyB, valueB] of Object.entries(valuesBetano)) {  // console.log(valuesBetano[keyB]);
                if (valuesFortuna[keyB] != null) {
                    if (verifyEventStartingTime(keyB)) {
                        console.log(valuesFortuna[keyB]);
                        console.log(valuesBetano[keyB]);

                        if (checkIfEventHasMarkets(valuesFortuna[keyB])) {
                            console.log("exita");
                        } else {
                            console.log("nu exista");
                            scrapeFortunaMatchOdds(valuesFortuna[keyB].eFortunaUrl, valuesFortuna[keyB].sportRadarID);
                        }
                        counter++;
                    }

                }
            }

            console.log(counter + "acesta este numarul de evenimente");


        });


    });
}
async function showToFrontEnd() {
    var theUrl = "https://api.efortuna.ro/live3/api/live/matches/overview";
    let urlBetano = "https://ro.betano.com/api/sport/fotbal/meciurile-urmatoare-de-azi/";
    let urlBetano1 = "https://ro.betano.com/api/sport/fotbal/urmatoarele-24-ore/?sort=Leagues";
    let anurl = "http://crm.motumaregalimob.ro/adminsystem/property_list.asp";
    let poateURl = "/cote/salford-city-peterborough/betbuilder/29452376/";
    let eFortunaURL1 = "https://efortuna.ro/bets/ajax/loadmoresport/fotbal-cm-2022?type=M235&timeTo=&rateFrom=&rateTo=&date=&selectDates=&filter=today";
    let eFortunaURL2 = "https://efortuna.ro/bets/ajax/loadmoresport/fotbal?timeTo=&rateFrom=&rateTo=&date=&pageSize=100&page=";
    // let sportRadar = "https://ls.fn.sportradar.com/betano/ro/Africa:Johannesburg/gismo/sport_matches/1/2022-12-12/0";

    // const fortunaDataFetch = await fetchUrlText(eFortunaURL2);
    // pentru efortuna important
    // await dataInOneDocument(fortunaDataFetch, ".events-table", eFortunaURL2);

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
            //reverse engineering
            //ma jos creez linkul fiecarui eveniment pentru a accesa toate cotele  pe viitor trebuie simplificat 
            let UrlPariuEgal = "https://ro.betano.com/api";
            let UrlNiciunPariuPeEgal = vreauJSON1.data.blocks[i].events[j].url;
            // console.log(UrlNiciunPariuPeEgal + " " + i);
            // console.log(UrlNiciunPariuPeEgal);

            links.link[nr++] = UrlPariuEgal + UrlNiciunPariuPeEgal;
            links.i[nr] = i;
            links.j[nr] = j;


        }
    }
    console.log(links);
    for (let ii = 0; ii < links.link.length; ii++) {
        fetch(links.link[ii], options)
            .then(response => response.json())
            .then(async (response) => {
                ddata.data1[ii] = {
                    name: await response.data.event.name,
                    startTime: await response.data.event.startTime,
                    shortName: await response.data.event.shortName,
                    leagueDescription: await response.data.event.leagueDescription,
                    markets: await response.data.event.markets,
                    statsUrl: await response.data.event.stats[0],
                    betRadarId: await response.data.event.betRadarId
                };
            }).then(() => {

                if (ii == links.link.length - 1) {
                    // am testat cu 230 meciuri si id-ul nu se repeta
                    // setTimeout(afisareMeciuri(copyContainer, link, body, ddata), 40000);
                    ddata.data1.forEach((element) => {
                        if (element.betRadarId)
                            firebase.database().ref("meciuri-BetanoWithId/" + element.betRadarId + "/").set(
                                element
                                , function (error) {
                                    if (error) {
                                        // The write failed...
                                        console.log({ error });
                                    } else {
                                        console.log("success");
                                        // Data saved successfully!
                                    }
                                });
                    })

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

//Alex from future very readable code ngl , idc if it works :)))
function writeMatchesToDB() {
    for (let ii = 0; ii < ddata.data1.length; ii++) {
        var event = ddata.data1[ii].data.event.markets[0];
        if (ddata.data1[ii].data.event.name != null) {
            var playersRef = firebase.database().ref("meciuri-21-12-2022/" + ddata.data1[ii].data.event.name + "/");
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
    var data = firebase.database().ref("meciuri-eFortunaWithIdv4");
    data.remove().then(() => { console.log("location removed"); });
}

function readDataFromDatabase() {
    firebase.database().ref('meciuri-21-12-2022').on('value', async (snap) => {
        let values = snap.val();
        console.log(snap.val());
        for (const [key, value] of Object.entries(values)) {
            console.log(values[key].stats.url.split("match/"));
            let matchScore = await fetchUrlJson(linkSportRadar + values[key].stats.url.split("match/")[1]);

            let matchScore1 = matchScore.doc[0].data.result;
            if (matchScore1) {
                firebase.database().ref("meciuri-20-12-2022/" + key + "/score").set({
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

//functia de mai jos nu este buna deoarece compara 2 stringuri 
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
    firebase.database().ref('meciuri-17-12-2022').on('value', async (snap) => {
        let values = snap.val();
        let AllMatchesNR = 0;
        let AllMatchesNROdd = 0;
        let AllMatchesNREven = 0;
        let AllMatchesNREqual = 0;
        let AllMatchesNREqualAndOdd = 0;
        let AllMatchesNROddOverOnePointFive = 0;
        let AllMatchesNROddAndOverTwoPointFive = 0;
        let AllMatchesNREvenAndOverTwoPointFive = 0;
        let AllMatchesNREOddAndOverOnePointFive = 0;
        let AllMatchesNREvenOverTwoPointFive = 0;
        let AllMatchesNROverTwoPointFive = 0;
        let AllMatchesNROverOnePointFive = 0;
        let AllMatchesNRInWhichBothTeamScored = 0;
        let AllMatchesNRUnderOnePointFive = 0;
        let AllMatchesNRUnderTwoPointFive = 0;
        let AllMatchesNRInWhichBothTeamsScoredZero = 0;
        let AllMatchesNRInWhichJustOneTeamScoresOverOnePointFive = 0;
        let NuInscrieAmbeleEchipeSauSubUnuPunctCinci = 0;
        let d = 0, d2 = 0;
        let v = [];
        for (const [key, value] of Object.entries(values)) {
            let checkNull = values[key].score;
            // console.log(values[key]);
            if (checkNull) {
                let Scoreteam1 = parseInt(values[key].score.score.home);
                let Scoreteam2 = parseInt(values[key].score.score.away);
                if (Scoreteam1 === Scoreteam1) {
                    // console.log(Scoreteam1 + "-" + Scoreteam2);
                    AllMatchesNR++;
                    if ((Scoreteam1 + Scoreteam2) % 2 == 0) {
                        AllMatchesNREven++;
                    } else {
                        AllMatchesNROdd++;
                    }
                    if ((Scoreteam1 == Scoreteam2) || (Scoreteam1 == 0 && Scoreteam2 == 0)) {
                        AllMatchesNREqual++;
                    }
                    if (Scoreteam1 == Scoreteam2 || (Scoreteam1 + Scoreteam2) % 2 == 1) {
                        AllMatchesNREqualAndOdd++;
                    }
                    if ((Scoreteam1 + Scoreteam2) % 2 == 1 || Scoreteam1 + Scoreteam2 > 1.5) {
                        AllMatchesNROddOverOnePointFive++;
                    }
                    if ((Scoreteam1 + Scoreteam2) % 2 == 0 || Scoreteam1 + Scoreteam2 > 2.5) {
                        AllMatchesNREvenOverTwoPointFive++;
                    }
                    if ((Scoreteam1 + Scoreteam2) > 2.5) {
                        AllMatchesNROverTwoPointFive++;
                    } else {
                        AllMatchesNRUnderTwoPointFive++;
                    }
                    if (Scoreteam1 + Scoreteam2 > 1.5) {
                        // console.log(Scoreteam1 + " " + Scoreteam2);
                        AllMatchesNROverOnePointFive++;
                    } else {
                        AllMatchesNRUnderOnePointFive++;
                    }
                    if ((Scoreteam1 + Scoreteam2) % 2 == 0 && Scoreteam1 + Scoreteam2 > 2.5) {
                        AllMatchesNREvenAndOverTwoPointFive++;
                    }
                    if ((Scoreteam1 + Scoreteam2) % 2 == 1 && Scoreteam1 + Scoreteam2 > 1.5) {
                        AllMatchesNREOddAndOverOnePointFive++;
                    }
                    if (Scoreteam1 > 0 && Scoreteam2 > 0) {
                        AllMatchesNRInWhichBothTeamScored++;
                    }
                    if ((Scoreteam1 == 0 && Scoreteam2 > 1.5) || (Scoreteam2 == 0 && Scoreteam1 > 1.5)) {
                        AllMatchesNRInWhichJustOneTeamScoresOverOnePointFive++;
                    }
                    // if ((Scoreteam1 > 0 && Scoreteam2 > 0||)) {
                    //     AllMatchesNRInWhichBothTeamScored++;
                    // }
                    if (Scoreteam1 == 0 && Scoreteam2 == 0) {
                        AllMatchesNRInWhichBothTeamsScoredZero++;
                    }
                    if ((Scoreteam1 > Scoreteam2) || (Scoreteam1 < Scoreteam2)) {
                        v[d] = "" + Scoreteam1 + "-" + Scoreteam2 + "";
                        d++;
                    }
                    if ((Scoreteam1 + Scoreteam2 < 1.5) || (Scoreteam1 > 0 || Scoreteam2 < 0)) {
                        NuInscrieAmbeleEchipeSauSubUnuPunctCinci++;

                    }
                    // else{
                    //     d2++;
                    // }
                }
            }
        }
        console.log("NR TOTAL DE MECIURI " + AllMatchesNR);
        console.log("NR TOTAL DE MECIURI PARE " + AllMatchesNREven);
        console.log("NR TOTAL DE MECIURI IMPARE" + AllMatchesNROdd);
        console.log("NR TOTAL DE MECIURI Egale" + AllMatchesNREqual);
        console.log("NR TOTAL DE MECIURI Egale sau Impare" + AllMatchesNREqualAndOdd);
        console.log("NR TOTAL DE MECIURI Impare sau Peste 1.5 golluri" + AllMatchesNROddOverOnePointFive);
        console.log("NR TOTAL DE MECIURI Impare si Peste 1.5 golluri" + AllMatchesNREOddAndOverOnePointFive);
        console.log("NR TOTAL DE MECIURI Pare sau Peste 2.5 golluri" + AllMatchesNREvenOverTwoPointFive);
        console.log("NR TOTAL DE MECIURI Pare si Peste 2.5 golluri" + AllMatchesNREvenAndOverTwoPointFive);
        console.log("Peste 2.5 golluri" + AllMatchesNROverTwoPointFive);
        console.log("Peste 1.5 golluri" + AllMatchesNROverOnePointFive);
        console.log("Sub 1.5 golluri" + AllMatchesNRUnderOnePointFive);
        console.log("Sub 2.5 golluri" + AllMatchesNRUnderTwoPointFive);

        console.log("NR TOTAL DE MECIURI IN CARE AMBERLE ECHIPE AU MARCAT" + AllMatchesNRInWhichBothTeamScored);
        console.log("NR TOTAL DE MECIURI IN CARE DOAR O SINGURA ECHIPA MARCHEAZA PESTE UN 1.5 " + AllMatchesNRInWhichJustOneTeamScoresOverOnePointFive);
        console.log("NR TOTAL DE MECIURI IN CARE Abele Echipe Nu au inscris nici un gol " + AllMatchesNRInWhichBothTeamsScoredZero);
        console.log("Castiga Echipa 1 sau Echipa 2 " + d + " altfel" + d2);
        console.log("Ambele echipe nu vor inscrie sau scorul va fii sub 1.5" + NuInscrieAmbeleEchipeSauSubUnuPunctCinci);
        // v.forEach(element => {
        //     console.log(element);
        // });
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
let userItem = localStorage.getItem("User");
if (userItem) {
    // console.log("fkldajfkljsdklfajsdklfj alkdfj alksfj kalj")
    document.querySelector(".hide").style.display = "none";
    document.querySelector(".hide1").style.display = "none";
    document.querySelector(".name").onclick = () => {
        window.location = "http://127.0.0.1:5500/profile.html";
    }
    document.querySelector(".name").innerHTML = userItem;
    document.querySelector(".name").style.cursor = "pointer";
}













// if (user !== null) {
//     // The user object has basic properties such as display name, email, etc.
//     const displayName = user.displayName;
//     const email = user.email;
//     const photoURL = user.photoURL;
//     const emailVerified = user.emailVerified;

//     // The user's ID, unique to the Firebase project. Do NOT use
//     // this value to authenticate with your backend server, if
//     // you have one. Use User.getToken() instead.
//     const uid = user.uid;
// }
