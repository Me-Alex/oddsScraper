let betanoMatchesOdds = [];

function getBetanoOdds() {
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
    list.forEach(async(element, index) => {
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
                        if (!await response.data.event.betRadarId == 0 && await response.data.event.stats) {
                            betanoMatchesOdds[await response.data.event.betRadarId] = {
                                name: await response.data.event.name,
                                startTime: await response.data.event.startTime,
                                shortName: await response.data.event.shortName,
                                leagueDescription: await response.data.event.leagueDescription,
                                markets: await response.data.event.markets,
                                statsUrl: await response.data.event.stats[0],
                                betRadarId: await response.data.event.betRadarId
                            }
                        }
                    })

            }
            // if (!betanoEvents.data.blocks === "undefined")
        console.log(betanoEvents.data.blocks);
        if (list.length - 1 == index) {
            console.log('finished');
            console.log(betanoMatchesOdds);
            console.clear();
            setTimeout(() => {
                compareFwithB();
            }, 20000);
        }
    });

}
let fortunaOdds = [];
async function getFortunaOdds() {
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
    let fortunaMatches = [{}];

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
                        sportRadarID: sID.split('match/')[1] || sID.split('ro/')[1],


                    }
                }
            }

        } else {
            console.log('cele 2 linkuri nu usnt asemanatoare');
        }
        if (index1 == 120) {
            console.log(fortunaMatches.length);
            fortunaMatches.forEach((match, indext) => {
                console.log('entered here');
                console.log(indext);
                if (match.sportRadarID) {
                    console.log('entered here 2');

                    fortunaOdds[match.sportRadarID] = {
                        sportRadarUrl: match.sportRadarUrl,
                        sportRadarUrlAnchor: match.sportRadarUrlAnchor,
                        eFortunaUrl: match.eFortunaUrl,
                        sportRadarID: match.sportRadarID,
                    }
                }
                if (fortunaMatches.length - 2 == indext) {
                    console.log('finished');
                    console.log(fortunaOdds);
                    console.clear();
                    updateFortunaOdds(fortunaOdds);
                }
            });
            console.log("program finished");

        }
        nr = 0;
    }





}

async function updateFortunaOdds(keyE) {
    let key = Object.keys(keyE)
        // console.log(key.length + " lungimea");
    for (index = 0; index < key.length; index++) {
        let timeFromApi = linkSportRadar + key[index];
        let result = await fetchUrlJson(timeFromApi);
        // console.log(index + "index");
        //este in secunde si am transformat in ms cu *1000
        if (result.doc[0] && result.doc[0].data.time) {
            if ((new Date(result.doc[0].data.time.uts * 1000 - Date.now())) / 1000 / 60 > 0) {
                console.log(fortunaOdds[key[index]].eFortunaUrl);
                // console.log((new Date(result.doc[0].data.time.uts - Date.now())) / 1000 / 60);
                // console.log(Date.now() + " " + result.doc[0].data.time.uts);
                await scrapeFortunaMatchOdds2(fortunaOdds[key[index]].eFortunaUrl, fortunaOdds[key[index]].sportRadarID);
            }
        }
        if (key.length - 1 == index) {
            // setTimeout(getBetanoOdds(), 20000);
            getBetanoOdds();
        }
    }


}
async function scrapeFortunaMatchOdds2(url, ID) {

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
            // console.log(fortunaOdds[ID]);
            fortunaOdds[ID].matchOdds = matchOdds;
        }
        // else {//daca nu a gasit markets stergem evenimentul din baza de date

        //     firebase.database().ref('meciuri-eFortunaWithIdv5/' + ID).remove().then(() => { console.log('evenimentul a fost eliminat pentru ca evenimentul nu mai exista' + ID) })
        // }//posibil sa existe in viitor o eroare referitor ca evenimentul nu a existat niciodata in baza de date ::::POSIBILITATE::::
        matchOdds = {};
        return matchOdds;
    }
}


function compareFwithB() {
    let key = Object.keys(fortunaOdds);
    console.log(key.length + " lungimea");
    for (index = 0; index < key.length; index++) {
        if (betanoMatchesOdds[key[index]]) {
            console.log(fortunaOdds[key[index]]);
            console.log(betanoMatchesOdds[key[index]]);
            console.log(checkIfEventHasMarkets(betanoMatchesOdds[key[index]]))
            if (checkIfEventHasMarkets(fortunaOdds[key[index]])) {
                console.log("exita");
                compareOddsEvent(fortunaOdds[key[index]], betanoMatchesOdds[key[index]], key[index]);
            } else {
                console.log("nu exista");
            }
        }
        if (key.length - 1 == index) {
            // setTimeout(updateFortunaOdds(fortunaOdds), 20000);
        }
    }

}

function clock() {
    setInterval(() => {
        updateFortunaOdds(fortunaOdds);
    }, 300000)
}