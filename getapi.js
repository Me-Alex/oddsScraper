



const options = {
    method: 'GET',
    headers: {
        cookie: 'sticky=stx52.531; __cf_bm=RjI2SaJAReaVg0gxxMCGeozyaV5zo7yNdmPVX7xoMPE-1668875847-0-AYNoAeQrP8TDRRO1jRVTaG7KJ1hlxwZwCXgM2vmbWxWpXh%2FWvFB9hzoQw%2FDxn7xuQSQRfRgV9EaueGAqNLiveRg%3D',
        cookie: 'SESSION=OWRjNjQwODQtMzAwOS00ZmQxLTkzYjktYWNmNTRhZDI3ZDcz'
    }
};



var links = {
    link: [],
    i: [],
    j: [],

}

async function showToFrontEnd() {
    var theUrl = "https://api.efortuna.ro/live3/api/live/matches/overview";
    let urlBetano = "https://ro.betano.com/api/sport/fotbal/meciurile-urmatoare-de-azi/";
    let urlBetano1 = "https://ro.betano.com/api/sport/fotbal/urmatoarele-24-ore/?sort=Leagues";
    let anurl = "http://crm.motumaregalimob.ro/adminsystem/property_list.asp";
    let poateURl = "/cote/salford-city-peterborough/betbuilder/29452376/";

    const betano = await fetch(urlBetano, options)
        .then(response => response.json())
        .catch(err => console.error(err));
    console.log(betano);

    let body = document.querySelector('body');

    let copyContainer = document.querySelector('.container');
    let link=document.querySelector(".pariaza-aici");

    copyContainer.outerHTML = "";
    console.log(link);
    var ddata = {
        data1: [],
    };
    console.log(copyContainer);
    const betano1 = await fetch(urlBetano1, options)
        .then(response => response.json())
        .catch(err => console.error(err));
    vreauJSON1 = betano1;
    let nr = 0;
    for (let i = 0; i < vreauJSON1.data.blocks.length; i++) {
        for (let j = 0; j < vreauJSON1.data.blocks[i].events.length; j++) {
            //mai jos recuperez lincul pentru nicun pariu pe egal
            let UrlPariuEgal = "https://ro.betano.com/api";
            let UrlNiciunPariuPeEgal = vreauJSON1.data.blocks[i].events[j].url;
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
    for (let ii = 0; ii < 200; ii++) {
        fetch(links.link[ii], options)
            .then(response => response.json())
            .then((response) => {
                ddata.data1[ii] = response;

            }).then(() => {
                copyContainer.childNodes[1].innerHTML = ddata.data1[ii].data.event.name + "-> BETANO";
                //primele 3 cote   1  X  2
                copyContainer.childNodes[3].childNodes[1].childNodes[3].innerHTML = ddata.data1[ii].data.event.markets[0].selections[0].price;
                // console.log(ddata.data1[ii].data.event.markets[0].selections[0].price);
                copyContainer.childNodes[3].childNodes[3].childNodes[3].innerHTML = ddata.data1[ii].data.event.markets[0].selections[1].price;
                copyContainer.childNodes[3].childNodes[5].childNodes[2].innerHTML = ddata.data1[ii].data.event.markets[0].selections[2].price;

                for (let j = 0; j < ddata.data1[ii].data.event.markets.length; j++) {

                    if (ddata.data1[ii].data.event.markets[j].name == "Niciun pariu pe egal") {
                        copyContainer.childNodes[5].childNodes[1].childNodes[3].innerHTML = ddata.data1[ii].data.event.markets[j].selections[0].price;
                        copyContainer.childNodes[5].childNodes[5].childNodes[2].innerHTML = ddata.data1[ii].data.event.markets[j].selections[1].price;
                      let parseLink=links.link[ii].split("/api");
                    //   console.log(parseLink);
                        link.href=parseLink[0]+parseLink[1];
                        body.innerHTML += copyContainer.outerHTML;
                        console.log("an ahybs su aici");
                        break;
                    }


                }
            })
            .catch(err => console.error(err));
    }


}

showToFrontEnd();