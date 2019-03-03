'use strict';

// windows contiene las ventanas de recursos creadas
const windows = [];

//devuelve un divResources con los datos de la producción
function paintWindowResources(production) {
    let divResources = document.createElement('div');
    divResources.classList.add('alert', 'alert-dark', 'mx-auto');
    let divImg = document.createElement('div');
    divImg.classList.add('img-rounded');
    divImg.style.height = '18em';
    divImg.style.backgroundImage = 'linear-gradient(to top, rgba(255,255,255,0) 20%, rgba(255,255,255,1)), url(' + production._image + ')';
    divImg.style.backgroundSize = 'cover';
    divImg.style.opacity = '0.9';

    divResources.appendChild(divImg);
    let h3 = document.createElement('h3');
    let h3TextNode = document.createTextNode('Recursos de ' + production._title);
    h3.appendChild(h3TextNode);
    divResources.appendChild(h3);

    // si es una peli
    if (production instanceof Movie && production._resource) {
        let pDuration = document.createElement('p');
        let pTextNode = document.createTextNode('Duración: ' + production._resource._duration + ' minutos.');
        pDuration.appendChild(pTextNode);
        divResources.appendChild(pDuration);
        let pLink = document.createElement('p');
        let pLinkTextNode = document.createTextNode('Descarga: ');
        pLink.appendChild(pLinkTextNode);
        let a = document.createElement('a');
        a.classList.add('alert-link');
        a.setAttribute('href', 'https://www.premiosgoya.com/33-edicion/');
        let aTextNode = document.createTextNode(production._resource._link);
        a.appendChild(aTextNode);
        pLink.appendChild(a);
        divResources.appendChild(pLink);

        let resourceAudios = production._resource._audios;
        if (resourceAudios) {
            let pAudios = document.createElement('p');
            let pAudiosTextNode = document.createTextNode('Audios disponibles: ' + resourceAudios);
            pAudios.appendChild(pAudiosTextNode);
            divResources.appendChild(pAudios);
        }
        let resourceSubtitulos = production._resource._subtitles;
        if (resourceSubtitulos) {
            let pSubtitulos = document.createElement('p');
            let pSubtitulosTextNode = document.createTextNode('Subtítulos disponibles: ' + resourceSubtitulos);
            pSubtitulos.appendChild(pSubtitulosTextNode);
            divResources.appendChild(pSubtitulos);
        }
    }

    if (production instanceof Serie && production._seasons.length) {
        production._seasons.forEach(el => {
            let pSeasons = document.createElement('p');
            let pSeasonsText = el._title + ': episodios: ' + el.episodes[0].title;
            let pSeasonsTextNode = document.createTextNode(pSeasonsText);
            pSeasons.appendChild(pSeasonsTextNode);
            divResources.appendChild(pSeasons);
        })
    }

    let locations = production._locations;
    if (locations) {
        let divLocations = document.createElement('div');
        let pLocations = document.createElement('p');
        let pLocationsTextNode = document.createTextNode('Localizaciones: ' + locations);
        pLocations.appendChild(pLocationsTextNode);
        divLocations.appendChild(pLocations);
        divResources.appendChild(divLocations);
    }
    return divResources;
}

function openResourceWindow(production) {
    let vPosition = windowPosition(production);
    if (vPosition == -1) { //si no encuentra la ventana la crea y añade a windows[]
        windows.push(window.open('new_window.html', production._title, 'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=540'));
        vPosition = windowPosition(production); //reasignamos vPosition una vez añadida la ventana nueva
        windows[vPosition].addEventListener('load', () => writeNewWindow(production));
    } else if (windows[vPosition].closed) {
        windows[vPosition].open;
        windows[vPosition].focus();
    } else {
        windows[vPosition].focus();
    }
    return windows[vPosition];
}

// posición de una ventana con el nombre de la produccion en windows[] || -1 si la ventana no existe
function windowPosition(production) {
    let found = false;
    let nWindows = windows.length;
    if (nWindows == 0) return -1;
    let i = 0;
    do {
        (production._title == windows[i].name) ? found = true : i++;
    } while (!(found || i == nWindows));
    return (found) ? i : -1;
}

function writeNewWindow(production) {
    let container = windows[windowPosition(production)].document.getElementById('container');
    let divResources = paintWindowResources(production);
    container.appendChild(divResources);
}


closeWindowsBtn.addEventListener('click', closeAllWindows);

function closeAllWindows() {
    windows.forEach((e) => e.close())
}