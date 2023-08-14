let betanoTennisMatchesOdds = [];


async function getBetanoTennisOdds() {
    let list = ["18310r", "18311r", "18341r", "18336r", "184244r", "199304r", "201289r", "201292r", "201295r", "199311r", "201290r", "201297r", "184246r", "199308r", "201291r",
        "201294r", "201296r", "17187r", "17209r", "17688r", "17894r", "18061r", "18192r", "186932r", "186935r", "186937r", "187330r", "188132r", "17417r", "183767r", "183877r", "17750r", "18509r",
        "181802r", "181888r", "182014r", "193908r", "18236r", "182055r", "187543r", "188604r", "189364r", "196663r", "182042r", "183725r", "184377r", "184480r", "198532r", "198533r"

    ]
    let l = "https://ro.betano.com/sport/tenis/ligi/";
    list.forEach(async (element, index) => {
        let data = await fetchUrlText(l + element);
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(data, "text/html");
        var betanoEvents = JSON.parse(xmlDoc.body.querySelector("script").innerHTML.split('window["initial_state"]=')[1]);
        if (betanoEvents.data.blocks)
            for (let index = 0; index < betanoEvents.data.blocks[0].events.length; index++) {
                let url = "https://ro.betano.com/api";
                fetch(url + betanoEvents.data.blocks[0].events[index].url, options)
                    .then(response => response.json())
                    .then(async (response) => {
                        if (!await response.data.event.betRadarId == 0 && await response.data.event.stats) {
                            betanoTennisMatchesOdds[await response.data.event.betRadarId] = {
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
            console.log(betanoTennisMatchesOdds);
            // console.clear();
            setTimeout(() => {
                compareFwithB();
            }, 20000);
        }
    });

}
let fortunaTennisOdds = [];
async function getFortunaTennisOdds() {
    let map = [
        "f-wimbledon-simplu",
        "m-wimbledon-simplu",
        "m-wimbledon-simplu",
        "f-wimbledon-dublu",
        "m-wimbledon-dublu",
        "m-atp-chall-bloomfield-hills-simplu",
        "m-atp-chall-karlsruhe-simplu",
        "m-atp-chall-karlsruhe-simplu",
        "m-atp-chall-milan-simplu",
        "m-atp-chall-santa-fe-simplu",
        "m-atp-chall-troyes-simplu",
        "m-atp-chall-bloomfield-hills-dublu",
        "m-atp-chall-karlsruhe-dublu",
        "m-atp-chall-milan-dublu",
        "m-atp-chall-santa-fe-dublu",
        "m-atp-chall-troyes-dublu",
        "f-itf-getxo-simplu",
        "f-itf-hong-kong-simplu",
        "f-itf-lakewood-simplu",
        "f-itf-montpellier-simplu",
        "f-itf-nakhon-si-thammarat-simplu",
        "f-itf-punta-cana-simplu",
        "f-itf-stuttgart-vaihingen-simplu",
        "f-itf-the-hague-simplu",
        "f-itf-tianjin-simplu",
        "m-itf-ajaccio-simplu",
        "m-itf-biella-simplu",
        "m-itf-brasov-simplu",
        "m-itf-getxo-simplu",
        "m-itf-lakewood-simplu",
        "m-itf-marburg-simplu",
        "m-itf-monastir-simplu",
        "m-itf-nakhon-si-thammarat-simplu",
        "m-itf-the-hague-simplu",
        "m-itf-tianjin-simplu",
        "f-itf-hong-kong-dublu",
        "f-itf-nakhon-si-thammarat-dublu",
        "f-itf-tianjin-dublu",
        "m-itf-getxo-dublu",
        "m-itf-nakhon-si-thammarat-dublu",
        "m-itf-tianjin-dublu"
    ]
    let fortunaTennisMatches = [{}];
    console.log(map);
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

                if (matchDataContainer1[j] && matchDataContainer[j + nr]) {
                    console.log('4');
                    console.log(matchDataContainer[j + nr].href);
                    let sID = await fetchUrl1(matchDataContainer[j + nr].href, options1);
                    console.log(sID);
                    console.log(fortunaTennisMatches.length + " " + trueCount);

                    fortunaTennisMatches[fortunaTennisMatches.length++ - 1] = {

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
        if (index1 == map.length - 1) {
            console.log(fortunaTennisMatches.length);
            fortunaTennisMatches.forEach((match, indext) => {
                console.log('entered here');
                console.log(indext);
                if (match.sportRadarID) {
                    console.log('entered here 2');

                    fortunaTennisOdds[match.sportRadarID] = {
                        sportRadarUrl: match.sportRadarUrl,
                        sportRadarUrlAnchor: match.sportRadarUrlAnchor,
                        eFortunaUrl: match.eFortunaUrl,
                        sportRadarID: match.sportRadarID,
                    }
                }
                if (fortunaTennisMatches.length - 2 == indext) {
                    console.log('finished');
                    console.log(fortunaTennisOdds);
                    // console.clear();
                    updateFortunaTennisOdds(fortunaTennisOdds);
                }
            });
            console.log("program finished");

        }
        nr = 0;
    }





}
async function updateFortunaTennisOdds(keyE) {
    let key = Object.keys(keyE)
    // console.log(key.length + " lungimea");
    for (index = 0; index < key.length; index++) {
        let timeFromApi = linkSportRadar + key[index];
        let result = await fetchUrlJson(timeFromApi);
        // console.log(index + "index");
        //este in secunde si am transformat in ms cu *1000
        if (result.doc[0] && result.doc[0].data.time) {
            if ((new Date(result.doc[0].data.time.uts * 1000 - Date.now())) / 1000 / 60 > 0) {
                console.log(fortunaTennisOdds[key[index]].eFortunaUrl);
                // console.log((new Date(result.doc[0].data.time.uts - Date.now())) / 1000 / 60);
                // console.log(Date.now() + " " + result.doc[0].data.time.uts);
                await scrapeFortunaTennisMatchOdds(fortunaTennisOdds[key[index]].eFortunaUrl, fortunaTennisOdds[key[index]].sportRadarID);
            }
        }
        // if (key.length - 1 == index) {
        //     setTimeout(getBetanoOdds(), 20000);
        //     // getBetanoOdds();
        // }
    }


}
async function scrapeFortunaTennisMatchOdds(url, ID) {

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
        console.log(allMarketH3);
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
                away: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(3) > a > span',
            }
        ];
        for (let index = 0; index < allMarketH3.length; index++) {
            mapMarkets.forEach((el, index1) => {
                if (el == allMarketH3[index].innerText.replace(/\s{2,}/g, ' ')) {
                    console.log(allMarketH3[index].innerText.replace(/\s{2,}/g, ' '));
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
                    allMarkets = [];
                    markets[index1] = {
                        marketName: '1X2',
                        allMarkets: [{ oddValue: doc, oddName: 'Home' }, { oddValue: doc1, oddName: 'Away' }]
                    }

                    // if (matchDataContainer.querySelector(mapMarkets[9].homeOrDraw).innerText != null) {
                    //     doc = matchDataContainer.querySelector(mapMarkets[9].homeOrDraw).innerText;
                    //     doc1 = matchDataContainer.querySelector(mapMarkets[9].drawOrAway).innerText;
                    //     doc2 = matchDataContainer.querySelector(mapMarkets[9].homeOrAway).innerText;
                    //     allMarkets = [];
                    //     markets[index1 + 1] = {
                    //         marketName: '1X-X2-12',
                    //         allMarkets: [{ oddValue: doc, oddName: '1X' }, { oddValue: doc1, oddName: 'X2' }, { oddValue: doc2, oddName: '12' }]
                    //     }
                    // }

                }
                setTimeout(() => { }, 2000);
            })


        }
        matchOdds = {
            id: ID,
            markets
        }
        console.log(matchOdds);
        markets = [];

        var updates = {};
        if (matchOdds.markets[0] || matchOdds.markets[9]) { //daca a gasit markets le urcam catre baza de date 
            // console.log(fortunaTennisOdds[ID]);
            fortunaTennisOdds[ID].matchOdds = matchOdds;
        }
        // else {//daca nu a gasit markets stergem evenimentul din baza de date

        //     firebase.database().ref('meciuri-eFortunaWithIdv5/' + ID).remove().then(() => { console.log('evenimentul a fost eliminat pentru ca evenimentul nu mai exista' + ID) })
        // }//posibil sa existe in viitor o eroare referitor ca evenimentul nu a existat niciodata in baza de date ::::POSIBILITATE::::
        matchOdds = {};
        return matchOdds;
    }
}

async function compareFwithBTennisOdds() {
    let key = Object.keys(fortunaTennisOdds);
    console.log(key.length + " lungimea");
    for (index = 0; index < key.length; index++) {
        if (betanoTennisMatchesOdds[key[index]]) {
            console.log(fortunaTennisOdds[key[index]]);
            console.log(betanoTennisMatchesOdds[key[index]]);
            console.log(checkIfEventHasMarkets(betanoTennisMatchesOdds[key[index]]))
            if (checkIfEventHasMarkets(fortunaTennisOdds[key[index]])) {
                console.log("exita");
                compareOddsEventTennis(fortunaTennisOdds[key[index]], betanoTennisMatchesOdds[key[index]], key[index]);
            } else {
                console.log("nu exista");
                // scrapeFortunaMatchOdds2(fortunaTennisOdds[key[index]].sportRadarUrl, fortunaTennisOdds[key[index]].sportRadarID)
                // index = index - 1;
            }
        }
        if (key.length - 1 == index) {
            // setTimeout(updatefortunaTennisOdds(fortunaTennisOdds), 20000);
        }
    }

}

async function startTennis() {
    await getBetanoTennisOdds();
    await getFortunaTennisOdds();
    await compareFwithBTennisOdds();
    await startTennisLoop();
    async function startTennisLoop() {
        console.clear();
        await getBetanoTennisOdds();
        await updateFortunaTennisOdds(fortunaTennisOdds);
        await compareFwithBTennisOdds();
        await startTennisLoop();
    }

}