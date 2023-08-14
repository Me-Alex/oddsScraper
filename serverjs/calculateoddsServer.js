let betanoMatchesOdds = [];

async function getBetanoOdds() {
    let list = ["195396r", "195397r", "196753r", "1r", "10215r", "2r", "527r", "4r", "1697r", "17877r", "1698r", "18092r",
        "18443r", "192991r", "192992r", "193122r", "17405r", "17246o", "17524r", "17088r", "5r", "10000r", "1635r", "10815r",
        "10210r", "216r", "10456r", "10486r", "217r", "17313r", "11969r", "11971r", "17978r", "17993r", "18492r", "181650r",
        "182948r", "184517r", "13296r", "17459r", "186913r", "182206r", "18060r", "184742r", "15742r", "184743r", "184741r",
        "11973r", "17542r", "215r", "11963o", "10467r", "11962r", "17083r", "17086o", "17385r", "197549r", "16947r", "1636r",
        "17381r", "16823r", "16826r", "18079r", "183722r", "17538r", "16849r", "17158r", "17717r", "16918r", "16952r", "17460r",
        "17678r", "184995r", "184198r", "17418r", "16941r", "17737r", "17122r", "17123r", "181772r", "187550r", "17294r", "187056r",
        "17586r", "18171r", "188451r", "16996r", "16997r", "18279r", "182287r", "182123r", "17041r", "18080r", "17674r", "17073r",
        "18128r", "17229r", "17173r", "18163r", "18173r", "201042r", "17919r", "18123r", "17512r", "17564r", "17062r", "17461r", "181558r",
        "17074r", "17075r", "187660r", "187661r", "17315r", "17113r", "182210r", "17670r", "184607r", "17695r", "184509r", "183230r", "183792r",
        "17118r", "17121r", "18229r", "17172r", "17403r", "187487r", "182156r", "17100r", "17453r", "17024r", "18198r", "17093r", "17439r", "200262r",
        "200266r", "198461r", "17166o", "17244r", "196218r", "18274r", "10016r", "10017r", "10008r", "18249r", "182510r", "18387r", "184051r", "18251r",
        "190018r", "197287r", "194888r", "16932r", "16930r", "17561r", "17600r", "16940r", "16939r", "17500r", "17572r", "17249r", "18140r", "17412r",
        "18165r", "195435r", "188482r", "183321r", "17917r", "196214r", "17078r", "192552r", "17079r", "17103r", "18090r", "17501r", "17727r", "17766r",
        "188440r", "189769r", "16935r", "16934r", "17060r", "18233r", "194905r", "194900r", "183044r", "17839r", "17518r", "17058r", "17059r", "18112r",
        "186125r", "17827r", "191595r", "200882r", "18404r", "18062r", "18309r", "184508r", "17539r", "17239r", "17377r", "18442r", "192980r", "18133r",
        "18150r", "181748", "182291r", "189802r", "183683r", "197698r", "17988r", "196366r", "196299r", "17318r", "17360r", "17436r", "17458r", "17499r",
        "17543r", "18167r", "18206r", "18421r", "182275r", "183992r", "184270r", "184599r", "199063r", "199062r", "198800r", "196442r", "196380r", "195482r",
        "195166r", "194996r", "194175r", "192219r", "188071r", "187778r", "187772r", "186782r", "185589r"
    ]
    let l = "https://ro.betano.com/sport/fotbal/ligi/";
    list.forEach(async (element, index) => {
        let data = await fetchUrlText(l + element);
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(data, "text/html");
        var betanoEvents;
        if (xmlDoc.body.querySelector("script"))
            betanoEvents = JSON.parse(xmlDoc.body.querySelector("script").innerHTML.split('window["initial_state"]=')[1]);
        if (betanoEvents && betanoEvents.data && betanoEvents.data.blocks) {
            for (let index = 0; index < betanoEvents.data.blocks[0].events.length; index++) {
                let url = "https://ro.betano.com/api";
                fetch(url + betanoEvents.data.blocks[0].events[index].url, options)
                    .then(response => response.json())
                    .then(async (response) => {
                        let temp, temp1;
                        for (let i = 0; i < await response.data.event.markets.length; i++) {

                            if (response.data.event.markets[i].name == "Total goluri Peste/Sub") {
                                temp = response.data.event.markets[i].selections[0];
                                temp1 = response.data.event.markets[i].selections[1];
                                for (let ii = 0; ii < await response.data.event.markets.length; ii++) {
                                    if (response.data.event.markets[ii].name == "Total goluri Peste/Sub (suplimentar)") {

                                        let x = response.data.event.markets[ii].selections;
                                        let bool = false;
                                        let k, l, m, n;
                                        k = {};
                                        for (let iii = 0; iii < x.length; iii += 2) {

                                            if (bool == true) {
                                                m = x[iii];
                                                n = x[iii + 1];
                                                x[iii] = k;
                                                x[iii + 1] = l;
                                                k = m;
                                                l = n;


                                            }
                                            if (x[iii].handicap > temp.handicap && x[iii].handicap - temp.handicap == 1 && bool == false) {
                                                k = x[iii];
                                                l = x[iii + 1];
                                                x[iii] = temp;
                                                x[iii + 1] = temp1;
                                                bool = true;


                                            }
                                        }


                                    }
                                }
                            }

                        }//completam toate cotele peste/sub.
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
        }
        if (list.length - 1 == index) {
            console.log('finished');
            console.log(betanoMatchesOdds);

        }
        betanoEvents = null;
    });

}
let fortunaOdds = [];
async function getFortunaOdds() {
    let map = [
        "euro-2024-calificari",
        "supercupa-europei",
        "liga-campionilor",
        "europa-league",
        "europa-conference-league",
        "romania-1",
        "romania-2",
        "anglia-premier-league",
        "anglia-premier-league",
        "anglia-cupa-ligii",
        "franta-ligue-1",
        "germania-supercupa",
        "germania-bundesliga",
        "germania-cupa",
        "italia-serie-a",
        "italia-cupa",
        "italia-cupa",
        "spania-la-liga",
        "cm-f-",
        "copa-libertadores",
        "meciuri-amicale",
        "africa-de-sud-mtn-8-cup",
        "anglia-championship",
        "anglia-3",
        "anglia-4",
        "anglia-5",
        "anglia-5",
        "anglia-6-nord",
        "anglia-6-sud",
        "anglia-premier-league-2-u21-",
        "arabia-saudita-1",
        "argentina-copa-de-la-liga-profesional",
        "argentina-2",
        "australia-ffa-cup",
        "australia-western",
        "australia-victoria",
        "australia-tasmania",
        "australia-queensl-",
        "australia-nort-nsw",
        "australia-nsw",
        "australia-capital",
        "austria-1",
        "austria-1",
        "austria-2",
        "azerbaidjan-1",
        "belarus-1",
        "belgia-1",
        "belgia-2",
        "bolivia-1",
        "bosnia-si-hert-1",
        "brazilia-1",
        "brazilia-cupa",
        "brazilia-copa-paulista",
        "brazilia-2",
        "brazilia-3",
        "brazilia-u20-",
        "bulgaria-1",
        "bulgaria-2",
        "cambodgia-1",
        "canada-1",
        "cehia-1",
        "cehia-1",
        "cehia-2",
        "cehia-3-msfl",
        "cehia-3-cfl-gr-a",
        "cehia-3-cfl-gr-b",
        "cehia-msd-a",
        "cehia-msd-b",
        "cehia-msd-c",
        "cehia-msd-e",
        "cehia-msd-f",
        "cehia-u19",
        "chile-1",
        "chile-2",
        "china-1",
        "china-1",
        "china-2",
        "columbia-1",
        "columbia-2",
        "coreea-de-sud-1",
        "coreea-de-sud-2",
        "coreea-de-sud-3",
        "costa-rica-1",
        "costa-rica-2",
        "croatia-1",
        "croatia-2",
        "danemarca-1",
        "danemarca-2",
        "danemarca-3",
        "danemarca-4",
        "ecuador-1",
        "elvetia-1",
        "elvetia-3",
        "estonia-1",
        "finlanda-1",
        "finlanda-2",
        "finlanda-3-a",
        "finlanda-3-b",
        "finlanda-3-c",
        "finlanda-3-c",
        "finlanda-1-f-",
        "franta-2",
        "georgia-1",
        "germania-2",
        "germania-4-v",
        "germania-4-n",
        "germania-4-sv",
        "guatemala-1",
        "honduras-1",
        "indonezia-1",
        "insule-feroe-1",
        "insule-feroe-2",
        "iordania-1",
        "irlanda-1",
        "irlanda-2",
        "irlanda-de-nord-1",
        "irlanda-de-nord-2",
        "islanda-1",
        "islanda-2",
        "islanda-3",
        "islanda-4",
        "israel-cupa-ligii",
        "italia-2",
        "japonia-1",
        "japonia-1",
        "japonia-2",
        "japonia-3",
        "kazahstan-1",
        "letonia-1",
        "liban-1",
        "lituania-1",
        "lituania-2",
        "luxemburg-1",
        "malaezia-1",
        "malawi-1",
        "mexic-1",
        "mexic-2",
        "mexic-1-f-",
        "moldova-1",
        "muntenegru-1",
        "nicaragua-1",
        "norvegia-1",
        "norvegia-2",
        "norvegia-2",
        "norvegia-3-gr-1",
        "norvegia-3-gr-2",
        "olanda-1",
        "olanda-2",
        "panama-1",
        "paraguay-1",
        "peru-1",
        "polonia-1",
        "polonia-cupa",
        "polonia-2",
        "polonia-2",
        "polonia-3_0",
        "polonia-4-gr-i",
        "polonia-4-gr-ii",
        "polonia-4-gr-iii",
        "polonia-4-gr-iv",
        "polonia-5-gr-mazowiecka",
        "polonia-5-gr-opolonia",
        "polonia-5-gr-swietokrzyska",
        "polonia-5-gr-podlaska",
        "polonia-5-gr-pomorska",
        "polonia-5-gr-slaska-i",
        "polonia-5-gr-slaska-ii",
        "polonia-5-gr-warminsko-mazurska",
        "polonia-5-gr-malopolonia",
        "polonia-5-gr-malopolonia",
        "polonia-5-gr-lodzka",
        "polonia-5-gr-dolnoslaska",
        "polonia-5-gr-lubelska",
        "polonia-5-gr-lubuska",
        "polonia-5-gr-wielkopolonia",
        "polonia-5-gr-zachodniopomorska",
        "polonia-5-gr-kujawsko-pomorska",
        "polonia-5-gr-podkarpacka",
        "portugalia-1",
        "portugalia-2",
        "portugalia-3",
        "portugalia-u19-",
        "portugalia-u19-",
        "rusia-1",
        "rusia-2",
        "scotia-1",
        "scotia-2",
        "scotia-3",
        "scotia-4",
        "serbia-1",
        "serbia-2",
        "singapore-1",
        "slovacia-1",
        "slovacia-2",
        "slovacia-3-est",
        "slovacia-3-vest",
        "slovacia-u19-",
        "slovenia-1",
        "slovenia-2",
        "spania-2",
        "spania-2",
        "sua-mls",
        "sua-usl-championship",
        "sua-mls-next-pro",
        "sua-usl-league-one",
        "suedia-1",
        "suedia-2",
        "suedia-3-sud",
        "suedia-3-nord",
        "tara-galilor-1",
        "tara-galilor-2-sud",
        "thailanda-1",
        "thailanda-2",
        "turcia-1",
        "turcia-2",
        "ucraina-1",
        "ucraina-2",
        "ungaria-1",
        "uzbekistan-1",
        "venezuela-1",
        "vietnam-1"
    ]
    let fortunaMatches = [{}];
    console.log(map);
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
        if (el == await fetchUrlNoRedirect(el)) {
            console.log('geniu');
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(fortunaDataFetch, "text/html");
            // console.log(xmlDoc);
            var matchDataContainer = xmlDoc.querySelectorAll(".link-event-icon.text-middle");
            var matchDataContainer1 = xmlDoc.querySelectorAll('.event-link.js-event-link');
            // var time = xmlDoc.querySelectorAll('.event-datetime');
            // console.log(matchDataContainer);

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
        if (index1 == map.length - 1) {
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
            if ((new Date(result.doc[0].data.time.uts * 1000 - Date.now())) / 1000 / 60 > 0 && fortunaOdds[key[index]].eFortunaUrl) {
                console.log(fortunaOdds[key[index]].eFortunaUrl);
                // console.log((new Date(result.doc[0].data.time.uts - Date.now())) / 1000 / 60);
                // console.log(Date.now() + " " + result.doc[0].data.time.uts);
                await scrapeFortunaMatchOdds2(fortunaOdds[key[index]].eFortunaUrl, fortunaOdds[key[index]].sportRadarID);
            }
        }
        if (key.length - 1 == index) {
            // setTimeout(getBetanoOdds(), 20000);
            // getBetanoOdds();
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
        console.log(allMarketH3);
        // console.log(matchOdds);
        //document.querySelector(
        //document.querySelectorAll(".market h3")
        let mapMarkets = [
            ' Pauza sau final pariaza pe rezultatul primei reprize sau rezultatul final (daca meciul nu este finalizat, pariurile vor fi anulate) ',
            ' Victorie fara egal Pariaza pe castigatoarea meciului. In caz de egalitate in timp regulamentar, se acorda cota 1.00 ',
            ' Total goluri / Total goluri asiatice Pariaza daca numarul total de goluri marcate in timpul regulamentar va fi sub sau peste valoarea indicata. ',
            ' Ambele echipe marcheaza sau peste goluri in meci ',
            ' Ambele marcheaza Pariaza daca ambele echipe vor inscrie fiecare cel putin un gol in timpul regulamentar ',
            ' Handicap / Handicap asiatic Pariaza pe castigatoarea meciului dupa aplicarea la scorul din timpul regulamentar a handicapului de goluri indicat echipei respective ',
            ' Prima repriza ',
            ' Pauza/final Pariaza pe rezultatul de la pauza si rezultatul de la finalul meciului in timpul regulamentar ',
            ' Meci: Par/ Impar ',
            {
                home: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(2) > a > span',
                away: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(4) > a > span',
                draw: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(3) > a > span',
                homeOrDraw: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(5) > a > span',
                drawOrAway: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(6) > a > span',
                homeOrAway: 'div.events-table-box.events-table-box--main-market > table > tbody > tr > td:nth-child(7) > a > span'
            },
            ' Total goluri / Total goluri asiatice Pariaza daca numarul total de goluri marcate in timpul regulamentar va fi sub sau peste valoarea indicata. '
        ];
        for (let index = 0; index < allMarketH3.length; index++) {
            // console.log(allMarketH3[index].innerText.replace(/\s{2,}/g, ' '));
            mapMarkets.forEach((el, index1) => {
                if (el == allMarketH3[index].innerText.replace(/\s{2,}/g, ' ')) {
                    // console.log(allMarketH3[index].innerText.replace(/\s{2,}/g, ' '));
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
                    else if (index1 == 4)
                        markets[index1] = {
                            marketName: ' Ambele marcheaza ',
                            allMarkets
                        }
                    else if (index1 == 5)
                        markets[index1] = {
                            marketName: ' Handicap Asiatic ',
                            allMarkets
                        }
                    else if (index1 == 7)
                        markets[index1] = {
                            marketName: ' Pauza/final ',
                            allMarkets
                        }
                    else if (index1 == 10)
                        markets[index1] = {
                            marketName: ' Peste/Sub ',
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

                    if (matchDataContainer.querySelector(mapMarkets[9].homeOrDraw).innerText != null) {
                        doc = matchDataContainer.querySelector(mapMarkets[9].homeOrDraw).innerText;
                        doc1 = matchDataContainer.querySelector(mapMarkets[9].drawOrAway).innerText;
                        doc2 = matchDataContainer.querySelector(mapMarkets[9].homeOrAway).innerText;
                        allMarkets = [];
                        markets[index1 + 2] = {
                            marketName: '1X-X2-12',
                            allMarkets: [{ oddValue: doc, oddName: '1X' }, { oddValue: doc1, oddName: 'X2' }, { oddValue: doc2, oddName: '12' }]
                        }
                    }

                }
                // setTimeout(() => {}, 2000);
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


async function compareFwithB() {
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
                // scrapeFortunaMatchOdds2(fortunaOdds[key[index]].sportRadarUrl, fortunaOdds[key[index]].sportRadarID)
                // index = index - 1;
            }
        }
        if (key.length - 1 == index) {
            // setTimeout(updateFortunaOdds(fortunaOdds), 20000);
        }
    }

}

async function startFotball() {
    await getBetanoOdds();
    await getFortunaOdds();
    await compareFwithB();
    await startFotballLoop();
    async function startFotballLoop() {
        await getBetanoOdds();
        await updateFortunaOdds(fortunaOdds);
        console.clear();
        await compareFwithB();
        await startFotballLoop();
    }

}
function calculateProfitForDrawNoBetDrawTeam1(DrawNoBet, Draw, Team1, bool) {
    let result, temp, temp1, temp2;
    let investment = 300;
    temp = investment / DrawNoBet;
    temp1 = investment / Team1;
    temp2 = investment - temp;
    result = temp2 / Draw;
    temp2 = temp2 - result;
    result = temp2 * Team1;
    result -= investment;
    console.log("Strategie 2");
    console.log(result);


    if (result > 0) {
        console.log("POZITIV");
    }
    if (bool = true) {
        return result;
    }


}
