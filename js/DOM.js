'use strict';

const vs = VStreaming.getInstance();
vs.name = 'VStreaming';

function initPopulate() {

    //categorías
    let c01 = new Category('Ciencia Ficción', 'En el espacio nadie puede oirte gritar.'),
        c02 = new Category('Aventura', 'No seguimos mapas del tesoro y la X nunca, pero nunca, marca el lugar.'),
        c03 = new Category('Animación', 'Aunque a veces no lo recordemos, nada de lo que sucede se olvida.'),
        c04 = new Category('Comedia', 'Siempre echa azúcar en el café hasta que hace isla'),
        c05 = new Category('Crimen', 'Que yo recuerde, desde que tuve uso de razón quise ser un gángster'),
        c06 = new Category('Thriller', 'Si vas a parpadear, hazlo ahora.'),
        c07 = new Category('Drama', 'Y empiezo a olvidar. Y ya no sé si es un recuerdo o el recuerdo de un recuerdo lo que me queda.'),
        c08 = new Category('Fantasía', 'Mi abuela me decía que con los faunos hay que andarse con cuidado.'),
        c09 = new Category('Romance', 'Ciclo cardíaco correcto. Pulsaciones un poco altas. Presión arterial normal.'),
        c10 = new Category('Terror', 'Vamos a jugar a un juego...');
    let categorias = [c01, c02, c03, c04, c05, c06, c07, c08, c09];

    //recursos
    let r1 = new Resource(123, 'http://www.pourthethe.zd/r1', ['castellano', 'inglés'], ['castellano', 'inglés']),
        r2 = new Resource(123, 'http://www.pourthethe.zd/r2', ['castellano', 'portugués'], ['castellano', 'inglés']),
        r3 = new Resource(123, 'http://www.pourthethe.zd/r3', ['castellano', 'inglés'], ['castellano', 'inglés']);

    //Coordenada
    let coordenada01 = [new Coordinate(34.133931, -118.321389)];

    //películas
    let p01 = new Movie('Gattaca', 'EEUU', new Date(1998, 3, 20), 'Ambientada en una sociedad futura, en la que la mayor parte de los niños son concebidos in vitro y con técnicas de selección genética. Vincent (Ethan Hawke), uno de los últimos niños concebidos de modo natural, nace con una deficiencia cardíaca y no le auguran más de treinta años de vida. Se le considera un inválido y, como tal, está condenado a realizar los trabajos más desagradables. Su hermano Anton, en cambio, ha recibido una espléndida herencia genética que le garantiza múltiples oportunidades. Desde niño, Vincent sueña con viajar al espacio, pero sabe muy bien que nunca será seleccionado. Durante años ejerce toda clase de trabajos hasta que un día conoce a un hombre que le proporciona la clave para formar parte de la élite: suplantar a Jerome (Jude Law), un deportista que se quedó paralítico por culpa de un accidente. De este modo, Vincent ingresa en la Corporación Gattaca, una industria aeroespacial, que lo selecciona para realizar una misión en Titán. Todo irá bien, gracias a la ayuda de Jerome, hasta que el director del proyecto es asesinado y la consiguiente investigación pone en peligro los planes de Vincent.', 'https://m.media-amazon.com/images/M/MV5BNDQxOTc0MzMtZmRlOS00OWQ5LWI2ZDctOTAwNmMwOTYxYzlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg', r1, coordenada01);
    let p02 = new Movie('Interstellar', 'EEUU', new Date(1999, 11, 7), 'Al ver que la vida en la Tierra está llegando a su fin, un grupo de exploradores dirigidos por el piloto Cooper (McConaughey) y la científica Amelia (Hathaway) emprende una misión que puede ser la más importante de la historia de la humanidad: viajar más allá de nuestra galaxia para descubrir algún planeta en otra que pueda garantizar el futuro de la raza humana.', 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg', r3, coordenada01);
    let p03 = new Movie('Forrest Gump', 'EEUU', new Date(1994, 3, 11), 'Forrest Gump (Tom Hanks) sufre desde pequeño un cierto retraso mental. A pesar de todo, gracias a su tenacidad y a su buen corazón será protagonista de acontecimientos cruciales de su país durante varias décadas. Mientras pasan por su vida multitud de cosas en su mente siempre está presente la bella Jenny (Robin Wright), su gran amor desde la infancia, que junto a su madre será la persona más importante en su vida.', 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg', r3);
    let p04 = new Movie('El caballero oscuro', 'EEUU', new Date(2008, 8, 13), 'Batman/Bruce Wayne (Christian Bale) regresa para continuar su guerra contra el crimen. Con la ayuda del teniente Jim Gordon (Gary Oldman) y del Fiscal del Distrito Harvey Dent (Aaron Eckhart), Batman se propone destruir el crimen organizado en la ciudad de Gotham. El triunvirato demuestra su eficacia, pero, de repente, aparece Joker (Heath Ledger), un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos.', 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg', r3);
    let p05 = new Movie('Your Name', 'Japón', new Date(2016, 1, 3), 'Taki y Mitsuha descubren un día que durante el sueño sus cuerpos se intercambian, y comienzan a comunicarse por medio de notas. A medida que consiguen superar torpemente un reto tras otro, se va creando entre los dos un vínculo que poco a poco se convierte en algo más romántico.', 'https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_SY1000_SX675_AL_.jpg', r3);
    let producciones = [p01, p02, p03, p04, p05];

    //actores
    let a01 = new Person('Fernando', 'Tejero', 'Muñoz', new Date(1967, 2, 24), 'https://m.media-amazon.com/images/M/MV5BYzNiNWI1YmUtYzljOC00N2U1LWI0NDctODQxZWQ1MzZkZWJiXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg');
    let a02 = new Person('Ethan', 'Hawke', null, new Date(1970, 11, 6), 'https://m.media-amazon.com/images/M/MV5BMTk4NDMxMTI0MF5BMl5BanBnXkFtZTYwMjE3ODE0._V1_UY317_CR5,0,214,317_AL_.jpg');
    let a03 = new Person('Uma', 'Thurman', null, new Date(1970, 4, 29), 'https://m.media-amazon.com/images/M/MV5BMjMxNzk1MTQyMl5BMl5BanBnXkFtZTgwMDIzMDEyMTE@._V1_SY1000_CR0,0,665,1000_AL_.jpg');
    let d01 = new Person('Andrew', 'Niccol', null, new Date(1964, 6, 10), 'https://m.media-amazon.com/images/M/MV5BMTI5ODQ2ODU2M15BMl5BanBnXkFtZTcwNjM2NDg5Mg@@._V1_.jpg');
    let a04 = new Person('Matthew', 'McConaughey', null, new Date(1969, 11, 4), 'https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_SY1000_CR0,0,613,1000_AL_.jpg');
    let a05 = new Person('Anne', 'Hathaway', null, new Date(1982, 11, 12), 'https://m.media-amazon.com/images/M/MV5BNjQ5MTAxMDc5OF5BMl5BanBnXkFtZTcwOTI0OTE4OA@@._V1_SY1000_CR0,0,684,1000_AL_.jpg');
    let d02 = new Person('Christopher', 'Nolan', null, new Date(1970, 7, 30), 'https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_.jpg');
    let a06 = new Person('Tom', 'Hanks', null, new Date(1956, 7, 9), 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_SY1000_CR0,0,691,1000_AL_.jpg');
    let a07 = new Person('Robin', 'Wright', null, new Date(1966, 4, 8), 'https://m.media-amazon.com/images/M/MV5BMTU0NTc4MzEyOV5BMl5BanBnXkFtZTcwODY0ODkzMQ@@._V1_.jpg');
    let d03 = new Person('Robert', 'Zemeckis', null, new Date(1952, 5, 14), 'https://m.media-amazon.com/images/M/MV5BMTgyMTMzMDUyNl5BMl5BanBnXkFtZTcwODA0ODMyMw@@._V1_SY1000_CR0,0,665,1000_AL_.jpg');
    let a08 = new Person('Christian', 'Bale', null, new Date(1974, 1, 30), 'https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_SY1000_CR0,0,665,1000_AL_.jpg');
    let a09 = new Person('Heath', 'Ledger', null, new Date(1979, 4, 4), 'https://m.media-amazon.com/images/M/MV5BMTI2NTY0NzA4MF5BMl5BanBnXkFtZTYwMjE1MDE0._V1_.jpg');
    let d04 = new Person('Makoto', 'Shinkai', null, new Date(1973, 2, 9), 'https://m.media-amazon.com/images/M/MV5BN2IxMTg5YmEtMWQ5NC00NDQyLTliOWQtMjkxYTU5NDFmMmQyXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg');
    let a10 = new Person('Steve', 'Carell', null, new Date(1962, 8, 16), 'https://m.media-amazon.com/images/M/MV5BMjMyOTM2OTk1Ml5BMl5BanBnXkFtZTgwMTI3MzkyNjM@._V1_SY1000_CR0,0,669,1000_AL_.jpg');
    let a11 = new Person('Jenna', 'Fischer', null, new Date(1974, 3, 7), 'https://m.media-amazon.com/images/M/MV5BMTMyOTYzODQ5MF5BMl5BanBnXkFtZTcwMjE3MDgzMQ@@._V1_.jpg');
    let a12 = new Person('John', 'Krasinski', null, new Date(1979, 10, 20), 'https://m.media-amazon.com/images/M/MV5BMTc3MzY3MjQ3OV5BMl5BanBnXkFtZTcwODI3NjQxMw@@._V1_.jpg');
    let a13 = new Person('Jennifer', 'Aniston', null, new Date(1969, 2, 11), 'https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_.jpg');
    let a14 = new Person('Matthew', 'Perry', null, new Date(1969, 8, 19), 'https://m.media-amazon.com/images/M/MV5BMTMwODc5NjI3N15BMl5BanBnXkFtZTcwNDEyMTE3Mw@@._V1_.jpg');
    let a15 = new Person('Mackenzie', 'Davis', null, new Date(1987, 4, 1), 'https://m.media-amazon.com/images/M/MV5BMTc1NTc2NDI4MF5BMl5BanBnXkFtZTgwOTc5NDE5OTE@._V1_.jpg');
    let a16 = new Person('Lee', 'Pace', null, new Date(1979, 3, 25), 'https://m.media-amazon.com/images/M/MV5BMzk2NjE4NDgzNl5BMl5BanBnXkFtZTcwNTI3NTEzMQ@@._V1_.jpg');
    let a17 = new Person('Kerry', 'Bishé', null, new Date(1984, 5, 1), 'https://m.media-amazon.com/images/M/MV5BMjE5ODEyNDYzNF5BMl5BanBnXkFtZTgwMTA1NDU0NzE@._V1_.jpg');
    let a18 = new Person('Christine', 'Baranski', null, new Date(1952, 5, 2), 'https://m.media-amazon.com/images/M/MV5BMTUwMTYwMDUyM15BMl5BanBnXkFtZTcwNTk1MzQxMw@@._V1_.jpg');
    let a19 = new Person('Rose', 'Leslie', null, new Date(1987, 2, 9), 'https://m.media-amazon.com/images/M/MV5BMjUxMjI4MDEwM15BMl5BanBnXkFtZTgwNzMyODM0MTE@._V1_SY1000_CR0,0,666,1000_AL_.jpg');
    let a20 = new Person('Cush', 'Jumbo', null, new Date(1985, 9, 23), 'https://m.media-amazon.com/images/M/MV5BMzI0NDIxODQ5Ml5BMl5BanBnXkFtZTgwMjg0Mjk4NzE@._V1_SY1000_CR0,0,773,1000_AL_.jpg');
    let a21 = new Person('Julianna', 'Margulies', null, new Date(1966, 7, 8), 'https://m.media-amazon.com/images/M/MV5BMTQ2MTgxOTgxMl5BMl5BanBnXkFtZTgwMzIxOTAwMDE@._V1_.jpg');
    let a22 = new Person('Matt', 'Czuchry', null, new Date(1977, 5, 20), 'https://m.media-amazon.com/images/M/MV5BODRjNTA0NzEtMjgzNC00NWQ0LTgzNDctZDM0NDZiMWNhYjU0XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg');
    let a23 = new Person('Josh', 'Charles', null, new Date(1971, 11, 15), 'https://m.media-amazon.com/images/M/MV5BMjM2MTY1Mzg5OV5BMl5BanBnXkFtZTgwODk1MjkzMTI@._V1_.jpg');
    let actores = [a01, a02, a03, a04, a05, a06, a07, a08, a09, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23];
    let directores = [d01, d02, d03, d04];

    //temporadas y series
    let se1 = [new Season('Temporada 01', [{ title: 'El jefe', episode: r1 }])];
    let s1 = new Serie('The Office', 'EEUU', new Date(2005, 11), 'Corrosivo retrato de los miembros de una empresa. Versión americana de una popular serie británica de la BBC del mismo título.', 'https://m.media-amazon.com/images/M/MV5BMjE0YWE2MzMtMTQ4Yi00ODM0LTlhMzAtYTZkM2Q3YzU4OTgyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,706,1000_AL_.jpg', se1);
    let s2 = new Serie('Friends', 'EEUU', new Date(1996, 12), ' "Friends" narra las aventuras y desventuras de seis jóvenes de Nueva York. Rachel (Jennifer Aniston), Monica (Courteney Cox), Phoebe (Lisa Kudrow), Ross (David Schwimmer), Chandler (Matthew Perry) y Joey (Matt LeBlanc) forman una unida pandilla de amigos que viven en Manhattan y que suelen reunirse en sus apartamentos o en su bar habitual, el Central Perk. A pesar de los numerosos cambios que se producen en sus vidas, su amistad es inquebrantable en la dura batalla por salir adelante en sus periplos profesionales y personales.', 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg');
    let s3 = new Serie('Halt & Catch Fire', 'EEUU', new Date(2014, 6, 1), 'Ambientada a principios de los 80, la serie dramatiza el auge de los ordenadores a través de los ojos de un visionario, un ingeniero y un prodigio cuyas innovaciones se enfrentan directamente a los gigantes corporativos de la época.', 'https://m.media-amazon.com/images/M/MV5BMTczNjAyMDg1Nl5BMl5BanBnXkFtZTgwMDQyNTA2OTE@._V1_.jpg', se1);
    let s4 = new Serie('The good fight', 'EEUU', new Date(2017, 2, 20), 'The Good Fight es un spin-off de la ficción The Good Wife y se sitúa un un año después de los sucesos ocurridos en el episodio final. La trama gira en torno a la abogada Diane Lockart y a su joven aprendiz, Maia. Ambas se ven envueltas en una enorme estafa financiera que acaba por destrozar su reputación y dejarlas en bancarrota, por lo que se ven obligadas a abandonar Lockart&Lee.', 'https://m.media-amazon.com/images/M/MV5BYzlhZmRmYTItZjJhMy00ODcxLWIzZGUtM2E5MTVmYmNjMDNhXkEyXkFqcGdeQXVyNjA5MDYxODY@._V1_SY1000_CR0,0,712,1000_AL_.jpg', se1);
    let s5 = new Serie('The good wife', 'EEUU', new Date(2015, 10, 4), 'Peter es un popular político que acaba en la cárcel por malversación de fondos y escándalo sexual. A partir de entonces, la vida de Alicia Florrick (Julianna Margulies), su esposa durante 13 años, se desmorona. Deberá rehacer su vida, tras sufrir la humillación de comparecer en público a su lado. Para ello, reanuda su trabajo de abogada en un prestigioso bufete, sin descuidar por ello la vida familiar. De hecho, procurará por todos los medios que sus hijos adolescentes se mantengan al margen del escándalo. La serie se inspira en un caso real: el del Gobernador de Nueva York Eliot Spitzer, que perdió su cargo por un escándalo sexual con una prostituta de lujo.', 'https://m.media-amazon.com/images/M/MV5BMTI2OTk4MDk3OF5BMl5BanBnXkFtZTcwMTY3NTc3Mg@@._V1_.jpg', se1);
    producciones.push(s1, s2, s3, s4, s5);

    categorias.forEach(el => vs.addCategory(el));
    producciones.forEach(el => vs.addProduction(el));
    actores.forEach(el => vs.addActor(el));
    directores.forEach(el => vs.addDirector(el));

    //relacciones
    vs.assignCategory(p01, c01);
    vs.assignCategory(p02, c01);
    vs.assignCategory(p03, c02);
    vs.assignCategory(p04, c02);
    vs.assignCategory(p05, c03);
    vs.assignCategory(p05, c01);
    vs.assignCategory(p03, c04);
    vs.assignCategory(p04, c04);
    vs.assignCategory(p02, c05);
    vs.assignCategory(p02, c06);
    vs.assignCategory(p01, c07);
    vs.assignCategory(p02, c07);
    vs.assignCategory(p04, c07);
    vs.assignCategory(p05, c07);
    vs.assignCategory(p04, c08);
    vs.assignCategory(p05, c08);
    vs.assignCategory(p01, c09);
    vs.assignCategory(p03, c09);
    vs.assignCategory(p05, c09);
    vs.assignCategory(s1, c04);
    vs.assignCategory(s1, c09);
    vs.assignCategory(s2, c04);
    vs.assignCategory(s3, c07);
    vs.assignCategory(s4, c10);
    vs.assignCategory(s4, c06);
    vs.assignCategory(s5, c06);
    vs.assignCategory(s5, c10);

    vs.assignActor(p01, a01, 'Fermín Trujillo', true);
    vs.assignActor(p01, a02, 'Vincent Freeman', true);
    vs.assignActor(p01, a03, 'Irene Cassini', true);
    vs.assignActor(p02, a01, 'Fermín Trujillo', true);
    vs.assignActor(p02, a04, 'Joshep Cooper', true);
    vs.assignActor(p02, a05, 'Amelia Brand', true);
    vs.assignActor(p03, a06, 'Forrest Gump', true);
    vs.assignActor(p03, a07, 'Jenny Curran', true);
    vs.assignActor(p04, a08, 'Batman / Bruce Wayne', true);
    vs.assignActor(p04, a09, 'Joker', true);
    vs.assignActor(s1, a01, 'Fermín Trujillo', false);
    vs.assignActor(s1, a10, 'Michael Scott', true);
    vs.assignActor(s1, a11, 'Pam Beesley', true);
    vs.assignActor(s1, a12, 'Jim Halpert', true);
    vs.assignActor(s2, a01, 'Fermín Trujillo', false);
    vs.assignActor(s2, a13, 'Rachel Green', true);
    vs.assignActor(s2, a14, 'Chandler Bean', true);
    vs.assignActor(s3, a15, 'Cameron Howe', true);
    vs.assignActor(s3, a16, 'Joe MacMillan', true);
    vs.assignActor(s3, a17, 'Donna Clark', true);
    vs.assignActor(s4, a18, 'Diane Lockhart', true);
    vs.assignActor(s4, a19, 'Maia Rindell', true);
    vs.assignActor(s4, a20, 'Lucca Quinn', true);
    vs.assignActor(s5, a21, 'Alicia Florrick', true);
    vs.assignActor(s5, a22, 'Cary Agos', true)
    vs.assignActor(s5, a18, 'Diane Lockhart', true);
    vs.assignActor(s5, a20, 'Lucca Quinn', false);
    vs.assignActor(s5, a23, 'Will Garner', true);

    vs.assignDirector(p01, d01);
    vs.assignDirector(p02, d02);
    vs.assignDirector(p03, d03);
    vs.assignDirector(p04, d02);
    vs.assignDirector(p05, d04);
}

function showHomePage() {
    let contenedorPrincipal = document.getElementById('contenedor-principal');
    contenedorPrincipal.classList.add('bg-dark', 'text-light');
    clear(contenedorPrincipal);
    let h2 = document.createElement('h2');
    h2.classList.add('display-4');
    let h2TextNode = document.createTextNode('Categorías:');
    h2.appendChild(h2TextNode);
    contenedorPrincipal.appendChild(h2);
    //iteramos las categorías
    let categorias = vs.categories;
    let categoria = categorias.next();
    while (categoria.done !== true) {
        let section = document.createElement('section');
        section.setAttribute('id', categoria.value._name);
        let h3Section = document.createElement('h3');
        let h3SectionTextNode = document.createTextNode(categoria.value._name);
        h3Section.appendChild(h3SectionTextNode);
        let h5 = document.createElement('h5');
        h5.classList.add('badge', 'badge-secondary');
        let h5TextNode = document.createTextNode(categoria.value._description);
        h5.appendChild(h5TextNode);

        let divContainer = document.createElement('div');
        divContainer.classList.add('container-fluid');
        let divRow = document.createElement('div');
        divRow.classList.add('row');
        categoria.value.productions.forEach(function (pro) {
            let divCol = document.createElement('div');
            divCol.classList.add('col-4', 'col-md-3', 'col-lg-2');
            let img = document.createElement('img');
            img.classList.add('img-thumbnail');
            img.setAttribute('src', pro._image);
            img.setAttribute('alt', pro._title);
            img.style.width = '15em';

            img.style.cursor = 'pointer';
            divCol.appendChild(img);
            divRow.appendChild(divCol);
            img.addEventListener('click', () => showProduction(img.alt));
        });
        divContainer.appendChild(divRow);
        section.appendChild(h3Section);
        section.appendChild(h5);
        section.appendChild(divContainer);
        contenedorPrincipal.appendChild(section);

        categoria = categorias.next();
    }

}

function categoriesMenuPopulate() {
    let navElements = document.querySelectorAll('.nav-item .dropdown-menu');
    let divDropdownMenu = navElements[0];
    clear(divDropdownMenu);
    //iteramos las categorías
    let categorias = vs.categories;
    let categoria = categorias.next();
    while (categoria.done !== true) {
        let a = document.createElement('a');
        a.classList.add('dropdown-item');
        a.setAttribute('href', '#' + categoria.value._name);
        let aTextNode = document.createTextNode(categoria.value._name);
        a.appendChild(aTextNode);
        divDropdownMenu.appendChild(a);
        a.addEventListener('click', () => showProductions(a.innerHTML));

        categoria = categorias.next();
    }
}

function showActors() {
    let contenedorPrincipal = document.getElementById('contenedor-principal');
    clear(contenedorPrincipal);
    let h2 = document.createElement('h2');
    h2.classList.add('display-4');
    let h2TextNode = document.createTextNode('Actores:');
    h2.appendChild(h2TextNode);
    contenedorPrincipal.appendChild(h2);
    let divRow = document.createElement('div');
    divRow.classList.add('row', 'justify-content-center', 'text-dark');

    //iteramos las actores
    let actores = vs.actors;
    let actor = actores.next();
    while (actor.done !== true) {
        let section = document.createElement('section');
        section.classList.add('img-thumbnail', 'col-6', 'col-sm-4', 'col-md-3', 'col-lg-2', 'd-flex', 'flex-column', 'align-items-center', 'p-2', 'm-1', 'alert', 'alert-light');
        let imgActor = document.createElement('img');
        imgActor.style.width = '214px';
        imgActor.style.height = '317px';
        imgActor.classList.add('card-text', 'img-thumbnail');
        imgActor.setAttribute('src', actor.value._picture);
        imgActor.style.objectFit = 'cover';
        let actorFullName = actor.value._name + ' ' + actor.value._lastname1 + ((actor.value._lastname2) ? (' ' + actor.value._lastname2) : '');
        imgActor.setAttribute('alt', actorFullName);
        imgActor.style.cursor = 'pointer';
        imgActor.addEventListener('click', () => showActor(actorFullName));
        let a = document.createElement('a');
        a.classList.add('alert-link');
        a.setAttribute('href', '#');
        a.addEventListener('click', () => showActor(actorFullName));
        let aTextNode = document.createTextNode(actorFullName);
        a.appendChild(aTextNode);

        divRow.appendChild(section);
        section.appendChild(imgActor);
        section.appendChild(a);
        contenedorPrincipal.appendChild(divRow);
        actor = actores.next();
    }
}

function showDirectors() {
    let contenedorPrincipal = document.getElementById('contenedor-principal');
    clear(contenedorPrincipal);
    let h2 = document.createElement('h2');
    h2.classList.add('display-4');
    let h2TextNode = document.createTextNode('Directores:');
    h2.appendChild(h2TextNode);
    contenedorPrincipal.appendChild(h2);
    let divRow = document.createElement('div');
    divRow.classList.add('row', 'justify-content-center', 'text-dark');

    //iteramos los directores
    let directores = vs.directors;
    let actor = directores.next();
    while (actor.done !== true) {
        let section = document.createElement('section');
        section.classList.add('img-thumbnail', 'col-6', 'col-sm-4', 'col-md-3', 'col-lg-2', 'd-flex', 'flex-column', 'align-items-center', 'p-2', 'm-1', 'alert', 'alert-light');
        let imgActor = document.createElement('img');
        imgActor.style.width = '214px';
        imgActor.style.height = '317px';
        imgActor.classList.add('card-text', 'img-thumbnail');
        imgActor.setAttribute('src', actor.value._picture);
        imgActor.style.objectFit = 'cover';
        let actorFullName = actor.value._name + ' ' + actor.value._lastname1 + ((actor.value._lastname2) ? (' ' + actor.value._lastname2) : '');
        imgActor.setAttribute('alt', actorFullName);
        imgActor.style.cursor = 'pointer';
        imgActor.addEventListener('click', () => showDirector(actorFullName));
        let a = document.createElement('a');
        a.classList.add('alert-link');
        a.setAttribute('href', '#'); a.addEventListener('click', () => showDirector(actorFullName));
        let aTextNode = document.createTextNode(actorFullName);
        a.appendChild(aTextNode);

        divRow.appendChild(section);
        section.appendChild(imgActor);
        section.appendChild(a);
        contenedorPrincipal.appendChild(divRow);
        actor = directores.next();
    }
}

function showActor(actor) {
    let contenedorPrincipal = document.getElementById('contenedor-principal');
    clear(contenedorPrincipal);
    let h2 = document.createElement('h2');
    h2.classList.add('display-4');
    let h2TextNode = document.createTextNode(actor);
    h2.appendChild(h2TextNode);
    contenedorPrincipal.appendChild(h2);

    //iteramos actores
    let personas = vs.actors,
        persona = personas.next(),
        encontrado = false,
        personaFullName = '';
    while (!encontrado && !persona.done) {
        personaFullName = persona.value._name + ' ' + persona.value._lastname1 + ((persona.value._lastname2) ? (' ' + persona.value._lastname2) : '');
        (personaFullName === actor) ? encontrado = true : persona = personas.next();
    }
    let section = document.createElement('section');
    section.classList.add('img-thumbnail', 'd-flex', 'align-items-center', 'bg-secondary', 'text-light', 'p-2', 'm-1');
    section.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    let divImg = document.createElement('div');
    divImg.classList.add('m-3');
    let imgActor = document.createElement('img');
    imgActor.style.width = '321px';
    imgActor.style.height = '476px';
    imgActor.classList.add('card-text', 'img-thumbnail', 'rounded');
    imgActor.setAttribute('src', persona.value._picture);
    imgActor.style.objectFit = 'cover';
    imgActor.setAttribute('alt', personaFullName);
    divImg.appendChild(imgActor);

    let divDatos = document.createElement('div');
    divDatos.classList.add('m-3');
    let h4 = document.createElement('h4');
    let h4TextNode = document.createTextNode(personaFullName);
    h4.appendChild(h4TextNode);
    let p = document.createElement('p');
    let fechaNacimiento = 'Fecha de Nacimiento: ' + escribirFecha(persona.value._born) + ' ';
    let pTextNode = document.createTextNode(fechaNacimiento);
    p.appendChild(pTextNode);
    let edad = getAge(persona.value._born);
    let span = document.createElement('span');
    span.classList.add('badge', 'badge-warning');
    let spanTextNode = document.createTextNode(edad + ' años');
    span.appendChild(spanTextNode);
    p.appendChild(span);
    let h5Producciones = document.createElement('h5');
    let h5TextNode = document.createTextNode('Producciones:');
    h5Producciones.appendChild(h5TextNode);
    divDatos.appendChild(h4);
    divDatos.appendChild(p);
    divDatos.appendChild(h5Producciones);

    let divProducciones = document.createElement('div');
    divProducciones.classList.add('d-flex', 'p-2');
    persona.value.productions.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('d-flex', 'p-2', 'flex-column', 'align-items-center');
        let img = document.createElement('img');
        img.classList.add('rounded');
        img.setAttribute('src', element.production._image);
        img.setAttribute('alt', element.production._title);
        img.style.width = '143px';
        img.style.height = '211px';
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => showProduction(img.alt));
        let p = document.createElement('p');
        let aTextNode = document.createTextNode('as ' + element.character);
        p.appendChild(aTextNode);
        div.appendChild(img);
        div.appendChild(p);
        divProducciones.appendChild(div);
    });
    divDatos.appendChild(divProducciones);
    section.appendChild(divImg);
    section.appendChild(divDatos);
    contenedorPrincipal.appendChild(section);
}

function escribirFecha(date) {
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let resultado = date.getDate() + ' de ' + meses[date.getMonth()] + ' de ' + date.getFullYear();
    return resultado;
}

function getAge(born) {
    let today = new Date();
    let age = today.getFullYear() - born.getFullYear();
    (today.getMonth() > born.getMonth()) ? age-- : (today.getMonth() == born.getMonth() && (today.getDate() > born.getDate())) ? age-- : age;
    return age;
}

function showDirector(actor) {
    let contenedorPrincipal = document.getElementById('contenedor-principal');
    clear(contenedorPrincipal);
    let h2 = document.createElement('h2');
    h2.classList.add('display-4');
    let h2TextNode = document.createTextNode(actor);
    h2.appendChild(h2TextNode);
    contenedorPrincipal.appendChild(h2);
    let personas = vs.directors,
        persona = personas.next(),
        encontrado = false,
        personaFullName = '';
    while (!encontrado && !persona.done) {
        personaFullName = persona.value._name + ' ' + persona.value._lastname1 + ((persona.value._lastname2) ? (' ' + persona.value._lastname2) : '');
        (personaFullName === actor) ? encontrado = true : persona = personas.next();
    }
    let section = document.createElement('section');
    section.classList.add('img-thumbnail', 'd-flex', 'align-items-center', 'bg-info', 'text-dark', 'p-2', 'm-1');
    section.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    let divImg = document.createElement('div');
    divImg.classList.add('m-3');
    let divDatos = document.createElement('div');
    divDatos.classList.add('m-3');
    let imgActor = document.createElement('img');
    imgActor.style.width = '321px';
    imgActor.style.height = '476px';
    imgActor.classList.add('card-text', 'img-thumbnail', 'rounded');
    imgActor.setAttribute('src', persona.value._picture);
    imgActor.style.objectFit = 'cover';
    imgActor.setAttribute('alt', personaFullName);
    divImg.appendChild(imgActor);

    let h4 = document.createElement('h4');
    let h4TextNode = document.createTextNode(personaFullName);
    h4.appendChild(h4TextNode);
    let p = document.createElement('p');
    let fechaNacimiento = 'Fecha de Nacimiento: ' + escribirFecha(persona.value._born) + ' ';
    let pTextNode = document.createTextNode(fechaNacimiento);
    p.appendChild(pTextNode);
    let edad = getAge(persona.value._born);
    let span = document.createElement('span');
    span.classList.add('badge', 'badge-warning');
    let spanTextNode = document.createTextNode(edad + ' años');
    span.appendChild(spanTextNode);
    p.appendChild(span);
    let h5Producciones = document.createElement('h5');
    let h5TextNode = document.createTextNode('Producciones:');
    h5Producciones.appendChild(h5TextNode);
    divDatos.appendChild(h4);
    divDatos.appendChild(p);
    divDatos.appendChild(h5Producciones);

    let divProducciones = document.createElement('div');
    divProducciones.classList.add('d-flex', 'p-2');
    persona.value.productions.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('d-flex', 'p-2', 'flex-column', 'align-items-center');
        let img = document.createElement('img');
        img.setAttribute('src', element._image);
        img.setAttribute('alt', element._title);
        img.style.width = '143px';
        img.style.height = '211px';
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => showProduction(img.alt));
        let p = document.createElement('p');
        let aTextNode = document.createTextNode('as Director');
        p.appendChild(aTextNode);
        div.appendChild(img);
        div.appendChild(p);
        divProducciones.appendChild(div);
    });
    divDatos.appendChild(divProducciones);
    section.appendChild(divImg);
    section.appendChild(divDatos);
    contenedorPrincipal.appendChild(section);
}

function showProductions(categoria) {
    let contenedorPrincipal = document.getElementById('contenedor-principal');
    clear(contenedorPrincipal);
    let categorias = vs.categories,
        cat = categorias.next(),
        encontrado = false;
    while (!encontrado && !cat.done) {
        (categoria === cat.value._name) ? encontrado = true : cat = categorias.next();
    }
    let h2 = document.createElement('h2');
    h2.classList.add('display-4');
    let h2TextNode = document.createTextNode(cat.value._name);
    h2.appendChild(h2TextNode);
    contenedorPrincipal.appendChild(h2);
    let h5 = document.createElement('h5');
    h5.classList.add('badge', 'badge-secondary');
    let h5TextNode = document.createTextNode(cat.value._description);
    h5.appendChild(h5TextNode);
    contenedorPrincipal.appendChild(h5);
    let section = document.createElement('section');
    section.classList.add('img-thumbnail', 'container-fluid', 'p-2', 'm-1', 'alert', 'alert-light');
    section.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';

    let divRow = document.createElement('div');
    divRow.classList.add('row');
    cat.value.productions.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('d-flex', 'p-2', 'flex-column', 'align-items-center');
        let img = document.createElement('img');
        img.classList.add('img-thumbnail');
        img.setAttribute('src', element._image);
        img.setAttribute('alt', element._title);
        img.style.width = '215px';
        img.style.height = '317px';
        let a = document.createElement('a');
        a.classList.add('alert-link');
        a.setAttribute('href', '#');
        let aTextNode = document.createTextNode(element._title);
        a.appendChild(aTextNode);
        div.appendChild(img);
        div.appendChild(a);
        divRow.appendChild(div);
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => showProduction(img.alt));
        a.addEventListener('click', () => showProduction(img.alt));
    });
    section.appendChild(divRow);
    contenedorPrincipal.appendChild(section);
}

function showProduction(production) {
    let contenedorPrincipal = document.getElementById('contenedor-principal');
    clear(contenedorPrincipal);
    let h2 = document.createElement('h2');
    h2.classList.add('display-4');
    let h2TextNode = document.createTextNode(production);
    h2.appendChild(h2TextNode);
    contenedorPrincipal.appendChild(h2);
    let elementos = vs.productions,
        elemento = elementos.next(),
        encontrado = false;
    while (!encontrado && !elemento.done) {
        (production === elemento.value._title) ? encontrado = true : elemento = elementos.next();
    }
    let section = document.createElement('section');
    section.classList.add('img-thumbnail', 'bg-secondary', 'text-white', 'row', 'd-flex', 'align-items-center', 'p-1');
    section.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    let divImg = document.createElement('div');
    divImg.classList.add('col-12', 'col-md-4');
    divImg.classList.add('m-3');
    let divDatos = document.createElement('div');
    divDatos.classList.add('col-12', 'col-md-7', 'm-3');
    let img = document.createElement('img');
    img.classList.add('img-thumbnail', 'card-text');
    img.setAttribute('src', elemento.value._image);
    img.setAttribute('width', '400px');
    img.style.objectFit = 'cover';
    img.setAttribute('alt', elemento.value._title);
    divImg.appendChild(img);

    let h4 = document.createElement('h4');
    let h4TextNode = document.createTextNode(elemento.value._title);
    h4.appendChild(h4TextNode);
    divDatos.appendChild(h4);

    let pPais = document.createElement('p');
    let pPaisTextNode = document.createTextNode('País: ' + elemento.value._nationality);
    pPais.appendChild(pPaisTextNode);
    divDatos.appendChild(pPais);

    let pYear = document.createElement('p');
    let pYearTextNode = document.createTextNode('Año: ' + elemento.value._publication.getFullYear());
    pYear.appendChild(pYearTextNode);
    divDatos.appendChild(pYear);

    if (elemento.value._synopsis) {
        let pSynopsis = document.createElement('p');
        let pSynoTextNode = document.createTextNode('Synopsis: ' + elemento.value._synopsis);
        pSynopsis.appendChild(pSynoTextNode);
        divDatos.appendChild(pSynopsis);
    }

    //pintamos el botón de recursos con el evento de abrir ventana de recursos
    let resourceButton = document.createElement('button');
    resourceButton.setAttribute('type', 'button');
    resourceButton.classList.add('btn', 'btn-dark', 'mb-3');
    resourceButton.addEventListener('click', () => openResourceWindow(elemento.value));
    let resourceButtonTextNode = document.createTextNode('Recursos');
    resourceButton.appendChild(resourceButtonTextNode);
    divDatos.appendChild(resourceButton);


    let h5Casting = document.createElement('h5');
    let h5CastTextNode = document.createTextNode('Casting:');
    h5Casting.appendChild(h5CastTextNode);

    divDatos.appendChild(h5Casting);
    let divProducciones = document.createElement('div');
    divProducciones.classList.add('d-flex', 'p-2');
    let h6Directors = document.createElement('h6');
    if (elemento.value.directors) {
        let h6DirTextNode = document.createTextNode('Directores:');
        h6Directors.appendChild(h6DirTextNode);
        divProducciones.appendChild(h6Directors);

        elemento.value.directors.forEach(element => {
            let div = document.createElement('div');
            div.classList.add('d-flex', 'p-2', 'flex-column', 'align-items-center');
            let img = document.createElement('img');
            img.classList.add('rounded');
            img.setAttribute('src', element._picture);
            let personaFullName = element._name + ' ' + element._lastname1 + ((element._lastname2) ? (' ' + element._lastname2) : '');
            img.setAttribute('alt', personaFullName);
            img.style.width = '143px';
            img.style.height = '211px';
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => showDirector(img.alt));
            let p = document.createElement('p');

            let pTextNode = document.createTextNode(personaFullName);
            p.appendChild(pTextNode);
            div.appendChild(img);
            div.appendChild(p);
            divProducciones.appendChild(div);
        });
    }

    let h6Actors = document.createElement('h6');
    if (elemento.value.casting) {
        let h6ActTextNode = document.createTextNode('Actores:');
        h6Actors.appendChild(h6ActTextNode);
        divProducciones.appendChild(h6Actors);
        let divMain = document.createElement('div');
        divMain.classList.add('d-flex');
        let divNoMain = document.createElement('div');
        divNoMain.classList.add('d-flex');
        elemento.value.casting.forEach(element => {
            let div = document.createElement('div');
            div.classList.add('d-flex', 'p-2', 'flex-column', 'align-items-center');
            let img = document.createElement('img');
            img.classList.add('rounded');
            img.setAttribute('src', element.actor._picture);
            let personaFullName = element.actor._name + ' ' + element.actor._lastname1 + ((element.actor._lastname2) ? (' ' + element.actor._lastname2) : '');
            img.setAttribute('alt', personaFullName);
            img.style.objectFit = 'cover';
            img.style.width = '143px';
            img.style.height = '211px';
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => showActor(img.alt));
            let p = document.createElement('p');
            let pTextNode = document.createTextNode(personaFullName + ' as ' + element.character);
            p.appendChild(pTextNode);
            div.appendChild(img);
            div.appendChild(p);
            (element.main) ? divMain.appendChild(div) : divNoMain.appendChild(div);
        });
        divProducciones.appendChild(divMain);
        divProducciones.appendChild(divNoMain);
    }
    divDatos.appendChild(divProducciones);
    section.appendChild(divImg);
    section.appendChild(divDatos);
    contenedorPrincipal.appendChild(section);
}
function clear(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
//eventos
document.getElementById('principal').addEventListener('click', showHomePage);
document.getElementById('boton-actores').addEventListener('click', showActors);
document.getElementById('boton-directores').addEventListener('click', showDirectors);
$(document).ready(function () {
    $('#mibtn').popover
        ({ title: "<h5>&copy; Las imágenes pueden estar protegidas por derechos de autor.<h5>", content: "<p>Information courtesy of IMDb (<a href='http://www.imdb.com'>http://www.imdb.com</a>). Used with permission.</p>", html: true, placement: "right" });
});
function init() {
    initPopulate();
    showHomePage();
    categoriesMenuPopulate();
}
window.onload = init;