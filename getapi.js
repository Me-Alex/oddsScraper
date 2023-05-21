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

        let getTheResponseUrl = async() => {
            const ee = await fetchUrl1(jsonDataEfortuna[d].statsUrl, options1);
            jsonDataEfortuna[d].statsUrl = ee;
            let id = ee.split("match/");
            console.log(ee);
            let nume = jsonDataEfortuna[d].numeMatch;
            let nnume = nume.replace('.', "");
            firebase.database().ref("meciuri-eFortunaWithId/" + id[1] + "/").set({
                match: jsonDataEfortuna[d]
            }, function(error) {
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
let getTheResponseUrl = async() => {
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
    }, function(error) {
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
let mapTenis = [
    'f-wta-austin-simplu', 'f-wta-merida-simplu', 'f-wta-merida-simplu-clasare-finala',
    'f-wta-monterrey-simplu', 'm-atp-acapulco-simplu', 'm-atp-dubai-simplu', 'm-atp-marseille-simplu',
    'm-atp-rio-de-janeiro-simplu', 'm-atp-rio-de-janeiro-simplu-clasare-finala', 'm-atp-santiago-simplu',
    'm-atp-chall-bengaluru-simplu', 'm-atp-chall-monterrey-simplu', 'm-atp-chall-pune-simplu', 'm-atp-chall-rome-simplu',
    'm-atp-chall-rovereto-simplu', 'f-wta-merida-dublu', 'm-atp-acapulco-dublu', 'm-atp-dubai-dublu', 'm-atp-marseille-dublu',
    'm-atp-rio-de-janeiro-dublu', 'm-atp-chall-monterrey-dublu', 'm-atp-chall-pune-dublu', 'f-itf-antalya-simplu', 'f-itf-gurugram-simplu',
    'f-itf-macon-simplu', 'f-itf-manacor-simplu', 'f-itf-monastir-simplu', 'f-itf-sharm-el-sheikh-simplu', 'f-itf-swan-hill-simplu', 'm-itf-antalya-simplu',
    'm-itf-faro-simplu', 'm-itf-monastir-15-simplu', 'm-itf-monastir-25-simplu', 'm-itf-sharm-el-sheikh-simplu', 'm-itf-swan-hill-simplu', 'm-itf-tucuman-simplu',
    'f-roland-garros-simplu-clasare-finala', 'm-roland-garros-simplu-clasare-finala'
]
console.log(map);
let fortunaMatches = [{


}];
let linkSportRadar = "https://stats.fn.sportradar.com/betano/ro/Europe:Helsinki/gismo/stats_match_get/";


async function showToFrontEndEfortunaTennis() {
    let w1 = "";
    //s-ar putea sa functioneze doar pe localHOST de revenit aici daca linkurile nu sunt accesibilie
    if (window.location.port) {
        w1 = window.location.hostname + ":" + window.location.port;
    } else {
        w1 = window.location.hostname;
    }
    let baseUrl = "https://efortuna.ro/pariuri-online/tenis/";
    let baseUrl1 = "https://efortuna.ro";
    let trueCount = 0;
    let ok = 0;
    let nr = 0;

    async function ceva() {
        for (let index1 = 0; index1 < mapTenis.length; index1++) {
            // console.log(index1);

            console.log(mapTenis[index1]);
            console.log(mapTenis.length)
            let el1 = mapTenis[index1];
            let el = baseUrl + mapTenis[index1];
            console.log(el);
            const fortunaDataFetch = await fetchUrlText(el);
            if (el == await fetchUrl1(el)) {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(fortunaDataFetch, "text/html");
                var matchDataContainer = xmlDoc.querySelectorAll(".link-event-icon.text-middle");
                var matchDataContainer1 = xmlDoc.querySelectorAll('.event-link.js-event-link');
                // var time = xmlDoc.querySelectorAll('.event-datetime');

                console.log(matchDataContainer.length);
                if (matchDataContainer.length > matchDataContainer1.length) {
                    nr = matchDataContainer.length - matchDataContainer1.length;
                } else {
                    nr = matchDataContainer1.length - matchDataContainer.length;
                }
                for (let j = 0; j < matchDataContainer.length; j++) {
                    console.log(matchDataContainer1[j]);

                    if (matchDataContainer1[j]) {
                        console.log('4');
                        console.log(matchDataContainer[j + nr].href);

                        let sID = await fetchUrl1(matchDataContainer[j + nr].href, options1);
                        console.log(sID);
                        console.log(fortunaMatches.length + " " + trueCount);

                        fortunaMatches[fortunaMatches.length++ - 1] = {

                            sportRadarUrlAnchor: matchDataContainer[j + nr].href,
                            eFortunaUrl: baseUrl1 + matchDataContainer1[j].href.split(w1)[1],
                            sportRadarUrl: sID,
                            sportRadarID: sID.split('match/')[1] || sID.split('ro/')[1]

                        }
                    }
                }

            } else {
                console.log('cele 2 linkuri nu usnt asemanatoare');
            }
            if (index1 == 120) {
                console.log("program finished");
                writeToDb();
            }
            nr = 0;
        }


    }
    ceva();
    async function writeToDb() {
        fortunaMatches.forEach((match, index) => {
            if (match.sportRadarID)
                writeToDbNoModular('meciuri-eFortunaWithIdv5-Tenis/' + match.sportRadarID + '/', match);
        });
    }

}



//scrapes all links of the events from efortuna and then it writes them to the database
async function showToFrontEndEfortuna() {
    let w1 = "";
    //s-ar putea sa functioneze doar pe localHOST de revenit aici daca linkurile nu sunt accesibilie
    if (window.location.port) {
        w1 = window.location.hostname + ":" + window.location.port;
    } else {
        w1 = window.location.hostname;
    }
    let baseUrl = "https://efortuna.ro/pariuri-online/fotbal/";
    let baseUrl1 = "https://efortuna.ro";
    let trueCount = 0;
    let ok = 0;
    let nr = 0;

    async function ceva() {
        for (let index1 = 0; index1 < map.length; index1++) {
            // console.log(index1);

            console.log(map[index1]);
            console.log(map.length)
            let el1 = map[index1];
            let el = baseUrl + map[index1];
            console.log(el);
            const fortunaDataFetch = await fetchUrlText(el);
            if (el == await fetchUrl1(el)) {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(fortunaDataFetch, "text/html");
                var matchDataContainer = xmlDoc.querySelectorAll(".link-event-icon.text-middle");
                var matchDataContainer1 = xmlDoc.querySelectorAll('.event-link.js-event-link');
                // var time = xmlDoc.querySelectorAll('.event-datetime');

                console.log(matchDataContainer.length);
                if (matchDataContainer.length > matchDataContainer1.length) {
                    nr = matchDataContainer.length - matchDataContainer1.length;
                } else {
                    nr = matchDataContainer1.length - matchDataContainer.length;
                }
                for (let j = 0; j < matchDataContainer.length; j++) {
                    console.log(matchDataContainer1[j]);

                    if (matchDataContainer1[j]) {
                        console.log('4');
                        console.log(matchDataContainer[j + nr].href);

                        let sID = await fetchUrl1(matchDataContainer[j + nr].href, options1);
                        console.log(sID);
                        console.log(fortunaMatches.length + " " + trueCount);

                        fortunaMatches[fortunaMatches.length++ - 1] = {

                            sportRadarUrlAnchor: matchDataContainer[j + nr].href,
                            eFortunaUrl: baseUrl1 + matchDataContainer1[j].href.split(w1)[1],
                            sportRadarUrl: sID,
                            sportRadarID: sID.split('match/')[1] || sID.split('ro/')[1]

                        }
                    }
                }

            } else {
                console.log('cele 2 linkuri nu usnt asemanatoare');
            }
            if (index1 == 120) {
                console.log("program finished");
                writeToDb();
            }
            nr = 0;
        }


    }
    ceva();
    async function writeToDb() {
        fortunaMatches.forEach((match, index) => {
            if (match.sportRadarID)
                writeToDbNoModular('meciuri-eFortunaWithIdv5/' + match.sportRadarID + '/', match);
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
    firebase.database().ref('meciuri-eFortunaWithIdv5').get().then(async(snap) => {
        let values = snap.val();
        let key = Object.keys(values)
        console.log(key.length + " lungimea");
        for (index = 0; index < key.length; index++) {
            let timeFromApi = linkSportRadar + key[index];
            let result = await fetchUrlJson(timeFromApi);
            console.log(index + " index");
            //este in secunde si am transformat in ms cu *1000
            if (result.doc[0] && result.doc[0].data.time) {
                if ((new Date(result.doc[0].data.time.uts * 1000 - Date.now())) / 1000 / 60 > 0) {
                    console.log(values[key[index]].eFortunaUrl);
                    // console.log((new Date(result.doc[0].data.time.uts - Date.now())) / 1000 / 60);
                    // console.log(Date.now() + " " + result.doc[0].data.time.uts);
                    scrapeFortunaMatchOdds(values[key[index]].eFortunaUrl, values[key[index]].sportRadarID);
                }
            }
        }
    });

}
// te rog nu ma injura daca citesti codul asta dupa 1 saptamana 
async function scrapeFortunaMatchOdds(url, ID) {

    if (url.split('m.')[0] == 'http://') { //poti sa inlaturi if statement-ul am verificat eu o chestie  
        console.log(url.split('//')[1]);
        console.log(url);
        url = url.split('m.e')[0] + url.split('m.e')[1];
        console.log(url);
        // scrapeFortunaMatchOdds(url,ID);
    } else {
        console.log(url);
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
        if (matchOdds.markets[0]) { //daca a gasit markets le urcam catre baza de date 
            updates['meciuri-eFortunaWithIdv5/' + ID + '/' + "matchOdds"] = matchOdds;
            firebase.database().ref().update(updates);
            console.log(matchOdds);
        }
        // else {//daca nu a gasit markets stergem evenimentul din baza de date

        //     firebase.database().ref('meciuri-eFortunaWithIdv5/' + ID).remove().then(() => { console.log('evenimentul a fost eliminat pentru ca evenimentul nu mai exista' + ID) })
        // }//posibil sa existe in viitor o eroare referitor ca evenimentul nu a existat niciodata in baza de date ::::POSIBILITATE::::
        matchOdds = {};
        return matchOdds;
    }
}

function compareDates(d2) {
    let date = new Date;
    if (date.getFullYear() <= d2.getFullYear() && date.getMonth() <= d2.getMonth() && date.getDate() <= d2.getDate() && date.getHours() <= d2.getHours() && date.getMinutes() <= d2.getMinutes())
        return true;
    return false;

}
async function verifyEventStartingTime(key) { //key prin referinta este ID ul evenimentului 
    let timeFromApi1 = linkSportRadar + key;
    let result1 = await fetchUrlJson(timeFromApi1); //este in secunde si am transformat in ms cu *1000
    if (result1.doc[0] && result1.doc[0].data.time) {
        if ((new Date(result1.doc[0].data.time.uts * 1000 - Date.now())) / 1000 / 60 > 0) {
            // console.log((new Date(result1.doc[0].data.time.uts * 1000 - Date.now())) / 1000 / 60);
            return true;
        }
    }
    return false;
}
async function returnTIme(key) {
    let timeFromApi1 = linkSportRadar + key;
    let result1 = await fetchUrlJson(timeFromApi1); //este in secunde si am transformat in ms cu *1000
    if (result1.doc[0] && result1.doc[0].data.time) {
        if ((new Date(result1.doc[0].data.time.uts * 1000 - Date.now())) / 1000 / 60 > 0) {
            // console.log((new Date(result1.doc[0].data.time.uts * 1000 - Date.now())) / 1000 / 60);
            return formatTime(new Date(result1.doc[0].data.time.uts * 1000 - Date.now()));
        }
    }
}

function formatTime(ms) {
    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    let hours = (ms / (1000 * 60 * 60)).toFixed(1);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);

    if (days > 1) {
        return Math.round(days) + ' d';
    } else if (hours > 1) {
        return Math.round(hours) + " h";
    } else if (minutes > 1) {
        return Math.round(minutes) + ' m';
    }
}

function checkIfEventHasMarkets(match) {
    if (match.matchOdds) {
        if (match.matchOdds.markets)
            return true;
        return false;
    } else {
        return false;
    }
}

function compareBetanoWithFortunaMatches() { //cauta meciurile care sunt disponibilie si pe fortuna si pe betano
    console.log('started comparing the odds');
    let counter = 0;
    firebase.database().ref('meciuri-BetanoWithIdV2').get().then(async(snap) => {
        console.log('retreaving the betano odss');
        let valuesBetano = snap.val(); // console.log(valuesBetano); let sizeBetano = snap.size();
        firebase.database().ref('meciuri-eFortunaWithIdv5').get().then(async(snap1) => {
            console.log('retreaving the Fortuna  odss');
            let valuesFortuna = snap1.val();
            console.log(snap1);
            console.log(valuesFortuna); // let sizeFortuna = snap.size();
            for (const [keyB, valueB] of Object.entries(valuesBetano)) { // console.log(valuesBetano[keyB]);
                if (valuesFortuna[keyB]) {
                    // let verify= await verifyEventStartingTime(keyB);
                    // console.log(verify);
                    // console.log(keyB);
                    // scrapeFortunaMatchOdds(valuesFortuna[keyB].eFortunaUrl, valuesFortuna[keyB].sportRadarID);
                    if (await verifyEventStartingTime(keyB)) {
                        console.log(valuesFortuna[keyB]);
                        console.log(valuesBetano[keyB]);
                        console.log(checkIfEventHasMarkets(valuesFortuna[keyB]))
                        if (checkIfEventHasMarkets(valuesFortuna[keyB])) {
                            console.log("exita");
                            compareOddsEvent(valuesFortuna[keyB], valuesBetano[keyB], keyB);
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


    }).catch(error => {
        console.error(`Error getting values for meciuri-BetanoWithIdV2: ${error}`);
        console.log('retrying in 200 ms');
        setTimeout(() => {
            compareBetanoWithFortunaMatches();
        }, 1000);
    });
}
async function compareOddsEvent(fortuna, betano, key) {
    var flag1 = false;
    var FLAG2 = false;
    var tempIndexB = -1;
    var tempIndexF = -1
    var flag2 = false;
    for (let index = 0; index < betano.markets.length; index++) {
        // console.log(betano.markets[index].name);
        if (fortuna.matchOdds.markets)
            for (let index2 = 0; index2 < fortuna.matchOdds.markets.length; index2++) {
                let resultC = -500;
                if (fortuna.matchOdds.markets[index2]) {
                    // console.log(fortuna.matchOdds.markets[index2].marketName);

                    if (betano.markets[index].name == "Rezultat final" && fortuna.matchOdds.markets[index2].marketName == "1X2") {
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
                            calculateProfit2way(biggerNr(betano.markets[tempIndexB].selections[0].price, fortuna.matchOdds.markets[tempIndexF].allMarkets[0].oddValue), biggerNr(betano.markets[index].selections[1].price, fortuna.matchOdds.markets[index2].allMarkets[1].oddValue));
                            console.log('Team 2 compared with  1X');
                            calculateProfit2way(biggerNr(betano.markets[tempIndexB].selections[2].price, fortuna.matchOdds.markets[tempIndexF].allMarkets[1].oddValue), biggerNr(betano.markets[index].selections[0].price, fortuna.matchOdds.markets[index2].allMarkets[0].oddValue));
                            console.log('Egal compared with  12');
                            calculateProfit2way(biggerNr(betano.markets[tempIndexB].selections[1].price, fortuna.matchOdds.markets[tempIndexF].allMarkets[2].oddValue), biggerNr(betano.markets[index].selections[2].price, fortuna.matchOdds.markets[index2].allMarkets[2].oddValue));
                            flag1 = false;
                            tempIndexB = -1;
                            tempIndexF = -1;
                        }


                    }
                    if (betano.markets[index].name == "Ambele echipe înscriu" && fortuna.matchOdds.markets[index2].marketName == " Ambele marcheaza ") {
                        console.log('Amebele inscriu ');
                        console.log(betano.markets[index].selections[0].price + " " + fortuna.matchOdds.markets[index2].allMarkets[0].oddValue);
                        console.log(betano.markets[index].selections[1].price + " " + fortuna.matchOdds.markets[index2].allMarkets[1].oddValue);
                        calculator2way(betano.markets[index].selections[0].price, betano.markets[index].selections[1].price, fortuna.matchOdds.markets[index2].allMarkets[0].oddValue, fortuna.matchOdds.markets[index2].allMarkets[1].oddValue)
                    }
                    if (betano.markets[index].name == "Niciun pariu pe egal" && fortuna.matchOdds.markets[index2].marketName == " Victorie fara egal ") {
                        console.log('Niciun pariu pe egal');
                        console.log(betano.markets[index].selections[0].price + " " + fortuna.matchOdds.markets[index2].allMarkets[0].oddValue);
                        console.log(betano.markets[index].selections[1].price + " " + fortuna.matchOdds.markets[index2].allMarkets[1].oddValue);
                        calculator2way(betano.markets[index].selections[0].price, betano.markets[index].selections[1].price, fortuna.matchOdds.markets[index2].allMarkets[0].oddValue, fortuna.matchOdds.markets[index2].allMarkets[1].oddValue);
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

function compareAndCalculate(betano, fortuna) {
    for (let index = 0; index < betano.length; index++) {
        for (let index1 = 0; index1 < fortuna.length; index1++) {
            if (betano[index].name.toLowerCase().split(" ")[0] == "peste" && fortuna[index1].oddName.toLowerCase().split(' ')[0] == "sub" && betano[index].name.toLowerCase().split(" ")[1] == fortuna[index1].oddName.toLowerCase().split(' ')[1]) {
                console.log(betano[index].name.toLowerCase()); //PESTE
                console.log(betano[index].price + " " + fortuna[index1 + 1].oddValue);
                console.log(betano[index + 1].price + " " + fortuna[index1].oddValue);
                console.log(fortuna[index1].oddName.toLowerCase()); //SUB
                calculator2way(betano[index].price, betano[index + 1].price, fortuna[index1 + 1].oddValue, fortuna[index1].oddValue)

                // calculateProfit2way(betano[index].price,fortuna[index1].oddValue);
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

function calculator2way(result1B, result2B, result1F, result2F) {
    let result1 = biggerNr(result1B, result1F);
    let result2 = biggerNr(result2B, result2F);
    calculateProfit2way(result1, result2);

}

function calculateProfit2way(x, y) {
    let investment = 300;
    let result;
    result = investment - investment / x;
    result = result - investment / y;
    console.log(result);
    if (result > 0) {
        console.log("POZITIV");
    }

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
            .then(async(response) => {
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
                                element,
                                function(error) {
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

function showToFrontEndTennisBetano() {
    let listBetanoTennis = ["198533r", "196664r", "189048r", "182180r", "181910r",
        "181757r", "18509r", "18078r", "17807r", "17642r", "17673r", "17918r", "18220r", "181756r",
        "185089", "184890r", "184886r", "184881r", "199453r", "200572r", "200329r", "200331r", "200327o", "182088r",
        "200327r", "183572r", "183571r", "181999r", "181998r", "194072r", "181990r", "181985r", "16741o", "16741r", "181965o",
        "16861r", "198532r", "189179r", "188083r", "182055r", "182183r", "181976r", "181872r", "181954r", "181871r", "181691r", "17209r", "17764r", "17893r", "186935r", "187576r",
        "192049r", "196071r", "196354r", "200573r", "183665r", "190110r", "196075r", "196355r", "200332r", "183645r", "16782r",
        "200330r", "16910r", '16877r', '182023r', '17980r', '182020r', '182117r', '190119r', '196354r', '184854r', '190126r',
        '196356r', '181885r', '182019r', '183896r', '183930r', '184252r', '200749r', '17935r',
        '182183r', '183768r', '17871r', '182371r', '183753r', '183894r', '183954r', '184228r', '189192r',
        '195205r', '195206r'
    ]
    let l = "https://ro.betano.com/sport/tenis/ligi/";
    listBetanoTennis.forEach(async element => {
        let data = await fetchUrlText(l + element);
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(data, "text/html");
        var betanoEvents = JSON.parse(xmlDoc.body.querySelector("script").innerHTML.split('window["initial_state"]=')[1]);
        if (betanoEvents.data.blocks)
            for (let index = 0; index < betanoEvents.data.blocks[0].events.length; index++) {
                let url = "https://ro.betano.com/api";
                fetch(url + betanoEvents.data.blocks[0].events[index].url, options)
                    .then(response => response.json())
                    .then(async(response) => {
                        firebase.database().ref("meciuri-BetanoWithIdV2Tenis/" + await response.data.event.betRadarId + "/").set({
                            betanoApiUrl: betanoEvents.data.blocks[0].events[index].url,
                            name: await response.data.event.name,
                            startTime: await response.data.event.startTime,
                            shortName: await response.data.event.shortName,
                            leagueDescription: await response.data.event.leagueDescription,
                            markets: await response.data.event.markets,
                            statsUrl: await response.data.event.stats[0],
                            betRadarId: await response.data.event.betRadarId
                        }, function(error) {
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
        console.log(betanoEvents.data.blocks);
    });
}

function showToFrontEndV2() {
    let list = ["17088r", "17087r", "17087o", "182748r", "182761r", "196755r",
        "1r", "218r", "10215r", "2r", "527r", "4r", "10767r", "1697r", "17877r",
        "1698r", "18092r", "18443r", "192991r", "192992r", "186905r", "193119r",
        "193121r", "17405r", "17445r", "190926r", "190985r", "5r", "10067r",
        "10000r", "197049r", "12227r", "17592r", "17527r", "1635r", "10815r",
        "10210r", "17714r", "216r", "10486r", "10486r", "217r", "17313r",
        "11971r", "11969r", "18492r", "17459r", "184740r", "215r", "11963r",
        "10467r", "11962r", "17083r", "17082r", "17086r", "17385r", "197549r",
        "17067r", "17069r", "17370r", "184592r", "17799r", "16947r", "1636r",
        "10392r", "193128r", "17497r", "16823r", "16833r", "16826r", "17538r",
        "16765r", "16849r", "16842r", "17158r", "184591r", "16918r", "16921r",
        "16952r", "16941r", "16955r", "17126r", "17122r", "17124r", "17123r",
        "198492r", "17041r", "184021r", "185904r", "18265r", "17073r", "186962r",
        "17901r", "17491r", "17391r", "17494r", "17819r", "17809r", "183295r",
        "17076o", "17080r", "17396r", "1647r", "10346r", "10345r", "1630r",
        "1672r", "1673r", "17315r", "17695r", "17118r", "17403r", "17024r",
        "18198r", "17093r", "17091r", "17439r", "200263r", "200268r", "195785r", "17548r", "193989r", "16880r", "16901r", "16893r", "16887r", "187416r",
        "16932r", "16940r", "189547r", "17572r", "181553r", "194920r", "17249r", "191634r",
        "17264r", "195435r", "184596r", "17383r", "17595r", "188482r", "196214r", "17917r",
        "17078r", "17103r", "17105r", "191952r", "17727r", "18093r", "193471r", "189375r",
        "17766r", "17619r", "16816r", "181734r", "183604r", "17620r", "17823r", "189365r",
        "17060o", "191722r", "17906r", "187051r", "195765r", "17530r", "182900r", "17578r",
        "192170r", "181753r", "182985r", "17049r", "17900r", "17545r", "17839r", "17796r",
        "17716r", "17943r", "181647r", "189785r", "194048r", "17827r", "193800r", "193792r",
        "17525r", "193821r", "194293r", "17539r", "183037r", "183204r", "195438r", "17377r",
        "18442r", "182133r", "186111r", "200011r", "197284r", "189482r", "191873r", "17407r",
        "188809r", "17026r", "17228r", "17160r", "182080r",

    ]
    let l = "https://ro.betano.com/sport/fotbal/ligi/";
    list.forEach(async element => {
        let data = await fetchUrlText(l + element);
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(data, "text/html");
        var betanoEvents = JSON.parse(xmlDoc.body.querySelector("script").innerHTML.split('window["initial_state"]=')[1]);
        if (betanoEvents.data.blocks)
            for (let index = 0; index < betanoEvents.data.blocks[0].events.length; index++) {
                let url = "https://ro.betano.com/api";
                fetch(url + betanoEvents.data.blocks[0].events[index].url, options)
                    .then(response => response.json())
                    .then(async(response) => {
                        // if (await response.data.event)
                        // if (await response.data.event.stats)
                        // if (!await response.data.event.stats[0] === "undefined")
                        // console.log(await response.data.event.betRadarId);
                        if (!await response.data.event.betRadarId == 0 && await response.data.event.stats)
                            firebase.database().ref("meciuri-BetanoWithIdV2/" + await response.data.event.betRadarId + "/").set({
                                name: await response.data.event.name,
                                startTime: await response.data.event.startTime,
                                shortName: await response.data.event.shortName,
                                leagueDescription: await response.data.event.leagueDescription,
                                markets: await response.data.event.markets,
                                statsUrl: await response.data.event.stats[0],
                                betRadarId: await response.data.event.betRadarId
                            }, function(error) {
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
            // if (!betanoEvents.data.blocks === "undefined")
        console.log(betanoEvents.data.blocks);
    });
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
                    teamOne,
                    equal,
                    teamTwo,
                    "NiciunPariuPeEgal1": v1,
                    "NiciunPariuPeEgal2": v2,
                    p1Name,
                    p2Name,
                    "stats": stats
                }, function(error) {
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
    var data = firebase.database().ref("tenisDataForCsv");
    data.remove().then(() => { console.log("location removed"); });


    //in caz ca adaugi toate meciurile pe pagina principala in firebase
    // firebase.database().ref("meciuri-20-12-2022").on('value', async (snap) => {

    //     for (const [key, values] of Object.entries(snap.val())) {
    //         console.log(key);
    //         var data1 = firebase.database().ref("meciuri-BetanoWithId" + key);
    //         data1.remove().then(() => { console.log("location removed" + key); });
    //     }
    // });




}
// am schimbat functia la values[key].stats a devenit values[key].statsUrl
function readDataFromDatabase() {

    firebase.database().ref('meciuri-BetanoWithIdV2').get().then(async(snap) => {
        let values = snap.val();
        console.log(snap.val());
        for (const [key, value] of Object.entries(values)) {
            console.log(values[key].statsUrl.url.split("match/"));
            let matchScore = await fetchUrlJson(linkSportRadar + values[key].statsUrl.url.split("match/")[1]);

            let matchScore1 = matchScore.doc[0].data.result;
            console.log(matchScore1);
            if (matchScore1) {

                firebase.database().ref("meciuri-20-12-2022/" + key + "/score").set({
                    "score": matchScore1
                }, function(error) {
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
    firebase.database().ref('meciuri-16-12-2022').on('value', async(snap) => {
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
    firebase.database().ref('meciuri-20-12-2022').on('value', async(snap) => {
        let values = snap.val();
        let AllMatchesWhereHomeTeamWins = 0;
        let AllMatchesWhereAwayTeamWins = 0;
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
        let d = 0,
            d2 = 0;
        let n = 0,
            m = 0;
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
                    if (Scoreteam1 > Scoreteam2) {
                        AllMatchesWhereHomeTeamWins++;


                    }
                    if (Scoreteam1 < Scoreteam2) {
                        AllMatchesWhereAwayTeamWins++;

                    }
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
                    if (((Scoreteam1 > Scoreteam2) || (Scoreteam1 < Scoreteam2)) && (Scoreteam1 + Scoreteam2) % 2 == 0) {
                        n++;
                    }
                    if (((Scoreteam1 > Scoreteam2) || (Scoreteam1 < Scoreteam2)) && (Scoreteam1 + Scoreteam2) % 2 == 1) {
                        m++;
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
        console.log("NR TOTAL DE MECIURI UNDE HOME TEAM CASTIGA " + AllMatchesWhereHomeTeamWins);
        console.log("NR TOTAL DE MECIURI UNDE AWAY TEAM CASTIGA " + AllMatchesWhereAwayTeamWins);

        console.log("NR TOTAL DE MECIURI PARE " + AllMatchesNREven);
        console.log("NR TOTAL DE MECIURI IMPARE " + AllMatchesNROdd);
        console.log("NR TOTAL DE MECIURI Egale " + AllMatchesNREqual);
        console.log("NR TOTAL DE MECIURI Egale sau Impare " + AllMatchesNREqualAndOdd);
        console.log("NR TOTAL DE MECIURI Impare sau Peste 1.5 golluri " + AllMatchesNROddOverOnePointFive);
        console.log("NR TOTAL DE MECIURI Impare si Peste 1.5 golluri " + AllMatchesNREOddAndOverOnePointFive);
        console.log("NR TOTAL DE MECIURI Pare sau Peste 2.5 golluri " + AllMatchesNREvenOverTwoPointFive);
        console.log("NR TOTAL DE MECIURI Pare si Peste 2.5 golluri " + AllMatchesNREvenAndOverTwoPointFive);
        console.log("Peste 2.5 golluri " + AllMatchesNROverTwoPointFive);
        console.log("Peste 1.5 golluri " + AllMatchesNROverOnePointFive);
        console.log("Sub 1.5 golluri " + AllMatchesNRUnderOnePointFive);
        console.log("Sub 2.5 golluri " + AllMatchesNRUnderTwoPointFive);

        console.log("NR TOTAL DE MECIURI IN CARE AMBELE ECHIPE AU MARCAT " + AllMatchesNRInWhichBothTeamScored);
        console.log("NR TOTAL DE MECIURI IN CARE DOAR O SINGURA ECHIPA MARCHEAZA PESTE UN 1.5 " + AllMatchesNRInWhichJustOneTeamScoresOverOnePointFive);
        console.log("NR TOTAL DE MECIURI IN CARE Abele Echipe Nu au inscris nici un gol " + AllMatchesNRInWhichBothTeamsScoredZero);
        console.log("Castiga Echipa 1 sau Echipa 2 " + d);
        console.log("Castiga Echipa 1 sau Echipa 2 sau scorul lor este par " + n);
        console.log("Castiga Echipa 1 sau Echipa 2 sau scorul lor este impar " + m);
        console.log("Ambele echipe nu vor inscrie sau scorul va fii sub 1.5 " + NuInscrieAmbeleEchipeSauSubUnuPunctCinci);
        const data = [
            { "Data": "NR TOTAL DE MECIURI", "Valoare": AllMatchesNR },
            { "Data": "NR TOTAL DE MECIURI UNDE HOME TEAM CASTIGA", "Valoare": AllMatchesWhereHomeTeamWins },
            { "Data": "NR TOTAL DE MECIURI UNDE AWAY TEAM CASTIGA", "Valoare": AllMatchesWhereAwayTeamWins },
            { "Data": "NR TOTAL DE MECIURI PARE", "Valoare": AllMatchesNREven },
            { "Data": "NR TOTAL DE MECIURI IMPARE", "Valoare": AllMatchesNROdd },
            { "Data": "NR TOTAL DE MECIURI Egale", "Valoare": AllMatchesNREqual },
            { "Data": "NR TOTAL DE MECIURI Egale sau Impare", "Valoare": AllMatchesNREqualAndOdd },
            { "Data": "NR TOTAL DE MECIURI Impare sau Peste 1.5 golluri", "Valoare": AllMatchesNROddOverOnePointFive },
            { "Data": "NR TOTAL DE MECIURI Impare si Peste 1.5 golluri", "Valoare": AllMatchesNREOddAndOverOnePointFive },
            { "Data": "NR TOTAL DE MECIURI Pare sau Peste 2.5 golluri", "Valoare": AllMatchesNREvenOverTwoPointFive },
            { "Data": "NR TOTAL DE MECIURI Pare si Peste 2.5 golluri", "Valoare": AllMatchesNREvenAndOverTwoPointFive },
            { "Data": "Peste 2.5 golluri", "Valoare": AllMatchesNROverTwoPointFive },
            { "Data": "Peste 1.5 golluri", "Valoare": AllMatchesNROverOnePointFive },
            { "Data": "Sub 1.5 golluri", "Valoare": AllMatchesNRUnderOnePointFive },
            { "Data": "Sub 2.5 golluri", "Valoare": AllMatchesNRUnderTwoPointFive },
            { "Data": "NR TOTAL DE MECIURI IN CARE AMBELE ECHIPE AU MARCAT", "Valoare": AllMatchesNRInWhichBothTeamScored },
            { "Data": "NR TOTAL DE MECIURI IN CARE DOAR O SINGURA ECHIPA MARCHEAZA PESTE UN 1.5", "Valoare": AllMatchesNRInWhichJustOneTeamScoresOverOnePointFive },
            { "Data": "NR TOTAL DE MECIURI IN CARE Abele Echipe Nu au inscris nici un gol", "Valoare": AllMatchesNRInWhichBothTeamsScoredZero },
            { "Data": "Castiga Echipa 1 sau Echipa 2", "Valoare": d },
            { "Data": "Castiga Echipa 1 sau Echipa 2 sau scorul lor este par ", "Valoare": n },
            { "Data": "Castiga Echipa 1 sau Echipa 2 sau scorul lor este impar ", "Valoare": m },
            { "Data": "Ambele echipe nu vor inscrie sau scorul va fii sub 1.5 ", "Valoare": NuInscrieAmbeleEchipeSauSubUnuPunctCinci },
        ];
        const table = document.createElement('table');
        console.log(data);
        // Create table rows
        for (let i = 0; i < data.length; i++) {
            const row = document.createElement('tr');

            // Create table cells
            for (let j = 0; j < 2; j++) {
                const cell = document.createElement('td');
                let text;
                if (j == 0) {
                    text = document.createTextNode(data[i].Data);
                }
                if (j == 1) {
                    text = document.createTextNode(data[i].Valoare);
                }
                cell.appendChild(text);
                row.appendChild(cell);
            }

            // Append row to table
            table.appendChild(row);
        }

        // Append table to document body
        document.body.appendChild(table);
    });
}




function show(el) {
    let element = el.nextElementSibling;
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
        window.location = "profile.html";
    }
    document.querySelector(".name").innerHTML = userItem;
    document.querySelector(".name").style.cursor = "pointer";
}



function unibetOddsScalp() {
    let urlCreation = ["https://dt.sportradar.com/?match=", '&bookmaker=6&oddstype=2&oddsfield=0&refbid=6&lang=ro'];
    console.log(urlCreation);
    firebase.database().ref('meciuri-BetanoWithIdV2').on("value", async(snap) => {
        let values = snap.val();
        console.log(snap.val());
        for (const [key, value] of Object.entries(values)) {
            let eventUrl = urlCreation[0] + key + urlCreation[1];
            if (await verifyEventStartingTime(key)) {
                let data = await fetchUrlText(eventUrl);
                var parser = new DOMParser();
                xmlDoc = parser.parseFromString(data, "text/html");
                xmlDoc = xmlDoc.querySelector(".KambiBC-bet-offer-category.KambiBC-expanded");
                if (xmlDoc) {
                    console.log(xmlDoc);
                    console.log(eventUrl);
                }
                console.log(key);
            }
        }
    });
}


function showPublicWinToFrontEnd() {
    let publicWinUrl = "https://publicwin.ro/sports/#/tournament/2/";
    let PublicWInMap = [
        "600,582,669,2,42956,30155,740,20"
    ]
}


function scrapeBookmakerOdds(bookmakerName) {

    let bookmakerBaseUrl = ["https://widgets.fn.sportradar.com/", "/ro/Etc:UTC/gismo/match_bookmakerodds/"];
    let bookmakerUrl = null;
    firebase.database().ref('meciuri-BetanoWithIdV2').on("value", async(snap) => {
        let betanoId = snap.val(); // console.log(valuesBetano); let sizeBetano = snap.size();

        for ([key, value] of Object.entries(betanoId)) {
            if (await verifyEventStartingTime(key)) {
                await fetch(bookmakerBaseUrl[0] + bookmakerName + bookmakerBaseUrl[1] + key)
                    .then(response => response.json())
                    .then(async(response) => {
                        if (await response.doc[0].data)
                            if (await response.doc[0].data[key]) {
                                console.log(response.doc[0].data[key][2]);
                                let data = response.doc[0].data[key][2];
                                firebase.database().ref("meciuri-" + bookmakerName + "/" + key).set({
                                        data
                                    }),
                                    function(error) {
                                        if (error) {
                                            // The write failed...

                                            console.log({ error });
                                        } else {

                                            //comparelive
                                            console.log("success");
                                            // Data saved successfully!
                                        }
                                    }
                            }
                    });
            }

        }
    });
}

function compareLiveOdds() { //betinaction2 -baumbet
    removeMatchesBookmakers();
    let bookmakerNameMap = ['unibet', 'fortuna', 'betinaction2', 'favoritbet']; //se pot folosii si idul fiecarei case de pariu ca de exemplu in loc de fortuna se poate folosii id-ul acesteia care este 138
    bookmakerNameMap.forEach(element => {
        scrapeBookmakerOdds(element);
    });
}
let valuesBookmakersAll = [];

function compareAllBookmakersOdds() {
    let bookmakerNameMap = ['unibet', 'fortuna', 'betinaction2', 'favoritbet']; //se pot folosii si idul fiecarei case de pariu ca de exemplu in loc de fortuna se poate folosii id-ul acesteia care este 138
    firebase.database().ref('meciuri-BetanoWithIdV2').get().then(async(snap) => {
        let valuesBetano = snap.val();
        bookmakerNameMap.forEach((bookmakerName, index) => {
            firebase.database().ref("meciuri-" + bookmakerName).get().then(async(snap) => {
                let valuesBookmakers = snap.val();
                valuesBookmakersAll[index] = valuesBookmakers;
            })
            console.log(index);
            if (index == bookmakerNameMap.length - 1) {
                // console.log(values);
                // console.log(values.length);
                compareBetanoWithAllOtherBookmakers(valuesBetano);
            }
        });
    }).catch(error => {
        console.error(`Error getting values for meciuri-BetanoWithIdV2: ${error}`);
        console.log('retrying in 200 ms');
        setTimeout(() => {
            compareAllBookmakersOdds();
        }, 200)
    });

}

function removeMatchesBookmakers() {
    let bookmakerNameMap = ['unibet', 'fortuna', 'betinaction2', 'favoritbet']; //se pot folosii si idul fiecarei case de pariu ca de exemplu in loc de fortuna se poate folosii id-ul acesteia care este 138
    bookmakerNameMap.forEach((bookmakerName, index) => {
        var data = firebase.database().ref("meciuri-" + bookmakerName);
        data.remove().then(() => { console.log("location removed"); });

    });


}

function compareBetanoWithAllOtherBookmakers(betanoValues) {
    console.log(valuesBookmakersAll);
    console.log(valuesBookmakersAll[0]);
    let storeIndex = [];
    if (valuesBookmakersAll[0])
        for ([keyB, values] of Object.entries(betanoValues)) {
            console.log(keyB);
            for (let index = 0; index < valuesBookmakersAll.length; index++) {
                if (valuesBookmakersAll[index][keyB]) {
                    storeIndex.push(index);
                    // console.log(element[keyB].data.bookmakerid);
                    console.log(valuesBookmakersAll[index][keyB].data.outcomes[1].odds + " " + valuesBookmakersAll[index][keyB].data.outcomes[2].odds + " " + valuesBookmakersAll[index][keyB].data.outcomes[3].odds + " BookmakerID " + valuesBookmakersAll[index][keyB].data.bookmakerid);
                }
                if (index == valuesBookmakersAll.length - 1) {
                    console.log(storeIndex);
                    if (storeIndex.length > 1) {
                        let MapBiggestOdds = [];
                        returnMax(valuesBookmakersAll, storeIndex, MapBiggestOdds, keyB);
                    }
                    storeIndex = [];
                }
            }
        }
    else {
        setTimeout(() => {
            compareBetanoWithAllOtherBookmakers(betanoValues);
        }, 1000);
    }
}

async function returnMax(valuesBookmakersAll, array, odds, keyB) {
    let max = 0;
    let BetanoMatchUrl = "https://s5.sir.sportradar.com/betano/ro/match/";
    // if (await verifyEventStartingTime(keyB))
    for (let index = 1; index < 4; index++) {
        for (let index1 = 0; index1 < array.length; index1++) {
            let t = array[index1];
            if (max < valuesBookmakersAll[t][keyB].data.outcomes[index].odds) {
                max = valuesBookmakersAll[t][keyB].data.outcomes[index].odds;
            }
            if (index1 == array.length - 1) {
                odds.push(max);
                max = 0;
            }
        }
        if (index == 3) {
            console.log(odds);
            let result = calculateProfit3way(odds[0], odds[1], odds[2], true);
            console.log(result);
            if (result > -10) {
                var htmlString = '<div class="card">' +
                    '<div class="card-header" onclick="toggleDropdown(this)">' +
                    '<h1 class="card-title"><i class="fas fa-futbol"></i>' + "Result" + result +
                    '</h1>' +
                    '<p class="card-start-time">' + await returnTIme(keyB) + '</p>' +
                    '<i class="fas fa-angle-down" id="angle-down"></i>' +
                    '</div>' +
                    '<div class="card-body dropdown-content" id="myDropdown" style="display: none;">' +
                    '<div class="card-group">' +
                    '<div class="card">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title 1">' + "Echipa 1" + '</h5> ' +
                    '<p class="card-text">Odds: <span>' + odds[0] + '</span></p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="card">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title x">' + "Egal" + '</h5>' +
                    '<p class="card-text">Odds: <span>' + odds[1] + '</span></p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="card">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title 2">' + "Echipa 2" + '</h5>' +
                    '<p class="card-text">Odds: <span>' + odds[2] + '</span></p>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="text-center mt-3">' +
                    '<a class="btn btn-primary" target="_blank" href="">Pariaza aici</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                var div = document.createElement("div");

                // set the class name of the div to "column"
                div.className = "column";
                document.body.appendChild(div);
                document.body.querySelector('.column').innerHTML += htmlString;
            }
            console.log(BetanoMatchUrl + keyB);
        }
    }

}


function writeBetanoTennisDataTOCsv() {
    console.log("started tennis results ");
    firebase.database().ref('meciuri-BetanoWithIdV2Tenis').get().then(async(snap) => {
        let values = snap.val();
        console.log(snap.val());
        for (const [key, value] of Object.entries(values)) {
            console.log(values[key].statsUrl.url.split("match/"));
            let matchScore = await fetchUrlJson(linkSportRadar + values[key].statsUrl.url.split("match/")[1]);

            let matchScore1 = matchScore.doc[0].data.periods;
            console.log(matchScore1);
            if (matchScore1) {

                firebase.database().ref("tenisDataForCsv/" + key).set(
                    matchScore1,
                    function(error) {
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
// writeBetanoTennisDataTOCsv();




function remakeBetaniTenis() { //// deleted from mistake the database meciuri-BetanoWithIdV2Tenis si am refacut-o doar cu idurile pentru un moment 
    console.log("started tennis results "); // recomand sa folosesti functia de mai sus 
    firebase.database().ref('meciuri-BetanoWithIdV2Tenis').get().then(async(snap) => {
        let values = snap.val();
        console.log(snap.val());
        for (const [key, value] of Object.entries(values)) {
            let matchScore = await fetchUrlJson(linkSportRadar + key);

            let matchScore1 = matchScore.doc[0].data.periods;
            console.log(matchScore1);
            if (matchScore1)
                firebase.database().ref("tenisDataForCsv/" + key).set(
                    matchScore1,
                    function(error) {
                        if (error) {
                            // The write failed...

                            console.log({ error });
                        } else {


                            console.log("success");
                            // Data saved successfully!
                        }
                    });


        }
    });
}
// remakeBetaniTenis();


function takeTennisData() {
    let dataT = "";
    console.log("started gathering data "); // recomand sa folosesti functia de mai sus 
    firebase.database().ref('tenisDataForCsv').get().then(async(snap) => {
        let values = snap.val();
        console.log(snap.val());
        for (const [key, value] of Object.entries(values)) {
            if (values[key].ft && values[key].p1 && values[key].p2) {
                // console.log(values[key].ft);
                // console.log(dataT.push(values[key].p1.home));
                // console.log(dataT.push(values[key].p1.away));

                // console.log(dataT.push(values[key].p2.home));
                // console.log(dataT.push(values[key].p2.away));

                // console.log(dataT.push(values[key].p3.home));
                // console.log(dataT.push(values[key].p3.away));
                if (values[key].p3)
                    dataT += values[key].p1.home + "," + values[key].p1.away + "," + values[key].p2.home + "," + values[key].p2.away + "," + values[key].p3.home + "," + values[key].p3.away + ",";
                else {
                    dataT += values[key].p1.home + "," + values[key].p1.away + "," + values[key].p2.home + "," + values[key].p2.away + "," + 0 + "," + 0 + ",";

                }
            }

        }
        return console.log(dataT);
    });
}
// takeTennisData();


function takingTennisUrlFromBetano() { ///use this funtion inside the console of a browser on betano https://ro.betano.com/sport/tenis/
    let temp;
    let arr = [];
    let body = document.querySelectorAll('.sport-block__region__body');
    body.forEach((el) => {
        temp = el.querySelectorAll('.sb-checkbox__link.sb-checkbox__link--selected');
        temp.forEach((el2) => {
            console.log(el2.href.split('/')[7]);
            arr.push(el2.href.split('/')[7]);
        })
    });
    console.log(arr);
}