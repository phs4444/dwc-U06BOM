'use strict';

// windows contiene las ventanas de recursos creadas
const windows = [];


class ResourceWindow extends Window{
    constructor(production) {
        super();
        if (!(production instanceof Production)) throw new UninstantiatedObjectException('Production');
        let _name = production._title;
        let _production = production;
        let _url = 'new_window.html';
        let _options = 'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400';
    }

    //devuelve un divResources con los datos de la producción
    paintWindowResources() {
        let divResources = document.createElement('div');
        divResources.classList.add('alert', 'alert-dark');
        let h6 = document.createElement('h6');
        let h6TextNode = document.createTextNode('Recursos de la producción: ');
        h6.appendChild(h6TextNode);
        divResources.appendChild(h6);

        // si es una peli
        if (_production instanceof Movie && _production._resource) {
            let pDuration = document.createElement('p');
            let pTextNode = document.createTextNode('Duración: ' + _production._resource._duration + ' minutos.');
            pDuration.appendChild(pTextNode);
            divResources.appendChild(pDuration);
            let pLink = document.createElement('p');
            let pLinkTextNode = document.createTextNode('Descarga: ');
            pLink.appendChild(pLinkTextNode);
            let a = document.createElement('a');
            a.classList.add('alert-link');
            a.setAttribute('href', 'https://www.premiosgoya.com/33-edicion/');
            let aTextNode = document.createTextNode(_production._resource._resource._link);
            a.appendChild(aTextNode);
            pLink.appendChild(a);
            divResources.appendChild(pLink);

            let resourceAudios = _production._resource._resource._audios;
            if (resourceAudios) {
                let pAudios = document.createElement('p');
                let pAudiosTextNode = document.createTextNode('Audios disponibles: ' + resourceAudios);
                pAudios.appendChild(pAudiosTextNode);
                divResources.appendChild(pAudios);
            }
            let resourceSubtitulos = _production._resource._resource._subtitles;
            if (resourceSubtitulos) {
                let pSubtitulos = document.createElement('p');
                let pSubtitulosTextNode = document.createTextNode('Subtítulos disponibles: ' + resourceSubtitulos);
                pSubtitulos.appendChild(pSubtitulosTextNode);
                divResources.appendChild(pSubtitulos);
            }
        }

        if (_production instanceof Serie && _production._seasons.length) {
            _production._seasons.forEach(el => {
                let pSeasons = document.createElement('p');
                let pSeasonsText = el._title + ': episodios: ' + el.episodes[0].title;
                let pSeasonsTextNode = document.createTextNode(pSeasonsText);
                pSeasons.appendChild(pSeasonsTextNode);
                divResources.appendChild(pSeasons);
            })
        }


        let locations = _production._locations;
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
    open() {
        super.open(_url, _name, _options);
        this.addEventListener('load', this.writeNewWindow());
    }
    writeNewWindow() {
        
    }

}

//añade una ventana a windows[] si no existe : nº de ventanas en windows
function addResourceWindow(window) {
    let vPosition = windowPosition(window);
    if (vPosition == -1) windows.push(window);
    return windows.length;
}
// posición de una ventana con el nombre de la produccion en windows[] || -1 si la ventana no existe
function windowPosition (production) {
  let found = false;
  let nWindows = windows.length;
  if (nWindows == 0) return -1;
  let i = 0;
    do {
    (production._title == windows[i]._name) ? (found = true) : i++;
  } while (!found || i != nWindows);
  return (found) ? i : -1;
}

// abre ventana con nombre título de la producción
function openResourceWindow(production) {
    let vPosition = windowPosition(production);
        if (vPosition == -1) { //si no encuentra la ventana la crea y añade a windows[]
            vPosition = addResourceWindow(new ResourceWindow(production));
            windows[vPosition].open();
            windows[vPosition].addEventListener('load', writeNewWindow);
            windows[vPosition].open();
    }
    if (windows[vPosition].closed) {
        windows[vPosition].open();
        windows[vPosition].focus();
    } else {
        windows[vPosition].focus();
    }
    return windows[vPosition];
}










//en divResources pintamos todo
let divResources = document.createElement('div');


