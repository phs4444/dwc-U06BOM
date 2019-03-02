"use strict"

// Expresiones regulares
// namePattern -> nombres y apellidos(aceptamos un espacio en medio)
const namePattern = /^[a-z,A-Z,á,é,í,ó,ú,â,ê,ô,ã,õ,ç,Á,É,Í,Ó,Ú,Â,Ê,Ô,Ã,Õ,Ç,ü,ñ,Ü,Ñ]+[' ']?[a-z,A-Z,á,é,í,ó,ú,â,ê,ô,ã,õ,ç,Á,É,Í,Ó,Ú,Â,Ê,Ô,Ã,Õ,Ç,ü,ñ,Ü,Ñ]+$/;
// const urlPattern = /^https?:\/\/(www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}(\:(\d){2,4})?(\/[a-zA-Z0-9_.$%._\+~#]+)*(\?(\w+=.*)(\&(\w+=.+))*)?$/;
const urlPattern = /^a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}$/;
const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]$/;
const emailPattern = /^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]\@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
class Person {
    constructor(name, lastname1, lastname2 = null, born, picture = null) {
        //comprobamos el uso del operador new
        if (!(this instanceof Person)) throw new InvalidAccessConstructorException();

        //comprobamos que los parámetros son datos válidos. 
        //Usamos namePattern para comprobar nombre y apellidos y urlPattern para picture
        name = typeof name !== 'undefined' ? name : '';
        if (name === '') throw new EmptyValueException('name');
        if (!namePattern.test(name)) throw new InvalidValueException('name', name);
        lastname1 = typeof lastname1 !== 'undefined' ? lastname1 : '';
        if (lastname1 === '') throw new EmptyValueException('lastName1');
        if (!namePattern.test(lastname1)) throw new InvalidValueException('lastname1', lastname1);
        lastname2 = typeof lastname2 !== 'undefined' ? lastname2 : '';
        if ((lastname2 !== '') && !namePattern.test(lastname2)) throw new InvalidValueException('lastname2', lastname2);
        if (!born instanceof Date) throw new InvalidValueException('born', born);
        born = typeof born !== 'undefined' ? born : '';
        if (born === '') throw new EmptyValueException('born');
        picture = typeof picture !== 'undefined' ? picture : '';
        if (!urlPattern.test(picture) && (picture !== null)) throw new InvalidValueException('picture', picture);

        //Si los datos son validos, los usamos para inicializar los valores de "this"
        this._name = name;
        this._lastname1 = lastname1;
        this._lastname2 = lastname2;
        this._born = born;
        this._picture = picture;
    }
    //getters and setters
    get name() { return this._name; }
    set name(value) {
        if (value === 'undefined' || value === '') throw new EmptyValueException('name');
        if (!namePattern.test(value)) throw new InvalidValueException('name', value);
        this._name = value;
    }

    get lastname1() { return this._lastname1; }
    set lastname1(value) {
        if (value === 'undefined' || value === '') throw new EmptyValueException('lastname1');
        if (!namePattern.test(value)) throw new InvalidValueException('lastname1', value);
        this._lastname1 = value;
    }

    get lastname2() { return this._lastname2; }
    set lastname2(value) {
        if (value === 'undefined') throw new EmptyValueException('lastname2');
        this._lastname2 = value || '';
    }

    get born() { return this._born; }
    set born(value) {
        if (value === 'undefined' || value == null) throw new EmptyValueException('born');
        if (!value instanceof Date) throw new InvalidValueException('born', value);
        this._born = value;
    }

    get picture() { return this._picture; }
    set picture(value) {
        if (value === 'undefined') throw new EmptyValueException('picture');
        //al testearlo con el urlPattern no necesito mirar si es vacío
        if (!urlPattern.test(value) && (picture !== null)) throw new InvalidValueException('picture', value);
        this._picture = value;
    }

    //método toString
    toString() {
        return 'Person - Nombre: ' + this._name + ', Apellido1: ' + this._lastname1 + ', Apellido2: ' + this._lastname2 +
            ', Fecha de nacimiento: ' + this._born + ', Imagen: ' + this._picture;
    }
}

class Category {
    constructor(name, description = 'No hay descripción') {

        //comprobar uso del operador new
        if (!(this instanceof Category)) throw new InvalidAccessConstructorException();

        //comprobamos que los parámetros son datos válidos. 
        name = typeof name !== 'undefined' ? name : '';
        if (name === '') throw new EmptyValueException('name');
        description = description || '';

        //Si los datos son validos, los usamos para inicializar los valores de "this"
        this._name = name;
        this._description = description;

    }

    //getters & setters

    get name() { return this._name };
    set name(value) {
        if (value === 'undefined' || value == null) throw new EmptyValueException('name');
        this._name = value;
    }

    get description() { return this._description };
    set description(value) {
        if (value === 'undefined') throw new EmptyValueException('description');
        this._description = value;
    }

    //toString

    toString() { return 'Categoría - Nombre: ' + this._name + ', descripción: ' + this._description; }
}

class Resource {
    constructor(duration, link, audios = null, subtitles = null) {

        //comprobar uso del operador new
        if (!(this instanceof Resource)) throw new InvalidAccessConstructorException();

        //comprobamos que los parámetros son datos válidos. 
        duration = typeof duration !== 'undefined' ? Number(duration).valueOf() : NaN;
        if (Number.isNaN(duration) || duration < 0) throw new InvalidValueException('duration', duration);
        link = typeof link !== 'undefined' ? link : '';
        if (link === '') throw new EmptyValueException('link');
        if (!urlPattern.test(link)) throw new InvalidValueException('link', link);

        //Si los datos son validos, los usamos para inicializar los valores de "this"
        this._duration = duration;
        this._link = link;
        this._audios = audios || [];
        this._subtitles = subtitles || [];
    }

    //getters & setters

    get duration() { return this._duration };
    set duration(value) {
        value = typeof value !== 'undefined' ? Number(value).valueOf() : NaN;
        if (Number.isNaN(duration) || duration < 0) throw new InvalidValueException('duration', value);
        this._duration = value;
    }

    get link() { return this._link };
    set link(value) {
        if (value === 'undefined' || null) throw new EmptyValueException('link');
        if (!urlPattern.test(value)) throw new InvalidValueException('link', value);
        this._link = value;
    }

    get audios() { return this._audios };
    set audios(value) {
        value = typeof value !== 'undefined' ? value : '';
        if (value === '') throw new EmptyValueException('audios');
        this._audios = value;
    }

    get subtitles() { return this._subtitles };
    set subtitles(value) {
        value = typeof value !== 'undefined' ? value : '';
        if (value === '') throw new EmptyValueException('subtitles');
        this._subtitles = value;
    }

    toString() {
        return 'Recurso - Duración: ' + this._duration + ', link: ' + this._link + ', Audios: ' +
            this._audios + ', Subtítulos: ' + this._subtitles;
    }


}

class Production {
    constructor(title, nationality = null, publication, synopsis = null, image = null) {
        //comprobar uso del operador new
        if (!(this instanceof Production)) throw new InvalidAccessConstructorException();
        //comprobamos para que sea abstracta
        if (this.constructor === Production) throw new AbstractClassException('Production');

        //comprobamos que los parámetros son datos válidos. 
        title = typeof title !== 'undefined' ? title : '';
        if (title === '') throw new EmptyValueException('title');
        nationality = nationality || '';
        if (!publication instanceof Date) throw new InvalidValueException('publication', publication);
        publication = typeof publication !== 'undefined' ? publication : '';
        if (publication === '') throw new EmptyValueException('publication');
        synopsis = synopsis || '';
        image = typeof image !== 'undefined' ? image : '';
        if (!urlPattern.test(image) && (image !== null)) throw new InvalidValueException('image', image);

        //Si los datos son validos, los usamos para inicializar los valores de "this"
        this._title = title;
        this._nationality = nationality;
        this._publication = publication;
        this._synopsis = synopsis;
        this._image = image;
    }

    //getters and setters
    get title() { return this._title };
    set title(value) {
        if (value === 'undefined' || null) throw new EmptyValueException('title');
        this._title = value;
    }

    get nationality() { return this._nationality };
    set nationality(value) {
        if (value === 'undefined') throw new EmptyValueException('nationality');
        this._nationality = value;
    }

    get publication() { return this._publication };
    set publication(value) {
        if (value === 'undefined' || value == null) throw new EmptyValueException('publication');
        if (!value instanceof Date) throw new InvalidValueException('publication', value);
        this._publication = value;
    }

    get synopsis() { return this._synopsis };
    set synopsis(value) {
        if (value === 'undefined') throw new EmptyValueException('synopsis');
        this._synopsis = value;

    }

    get image() { return this._image };
    set image(value) {
        if (value === 'undefined') throw new EmptyValueException('image');
        if (!urlPattern.test(value) && (value !== null)) throw new InvalidValueException('image', value);
        this._image = value;

    }

    toString() {
        return 'Título: ' + this._title + ' , Nacionalidad: ' + this._nationality +
            ' , Fecha de publicación: ' + this._publication + ' , Synopsis: ' + this._synopsis +
            ' , Imagen: ' + this._image;
    }
}

class Movie extends Production {
    constructor(title, nationality, publication, synopsis, image, resource = null, locations = null) {
        //comprobar uso del operador new
        super(title, nationality, publication, synopsis, image);
        if (!(this instanceof Movie)) throw new InvalidAccessConstructorException();

        //comprobamos validez de los parámetros exclusivos de Movie
        resource = resource || '';
        if ((resource !== '') && (!resource instanceof Resource)) throw new InvalidValueException('resource', resource);
        locations = typeof locations !== 'undefined' ? locations : [];

        //asignamos valores al "this"
        this._resource = resource;
        this._locations = locations;
    }

    //setters & getters

    get resource() { return this._resource };
    set resource(value) {

        if (value === 'undefined') throw new EmptyValueException('resource');
        if (!value instanceof Resource) throw new InvalidValueException('resource', value);
        this._resource = value;
    }

    get locations() { return this._locations };
    set locations(value) {
        if (value === 'undefined') throw new EmptyValueException('locations');
        this._locations = value;
    }

    toString() {
        return 'Película - ' + super.toString() + ' , Recurso: ' + this._resource + ' , Localizaciones: ' + this._locations;
    }

}

class Serie extends Production {
    constructor(title, nationality, publication, synopsis, image, seasons = null) {
        //comprobar uso del operador new
        super(title, nationality, publication, synopsis, image);
        if (!(this instanceof Serie)) throw new InvalidAccessConstructorException();

        //asignamos valores
        this._seasons = seasons || [];
    }

    //setters & getters
    get seasons() { return this._seasons };
    set seasons(value) {
        value = typeof Season !== 'undefined' ? value : '';
        if (value === '') throw new EmptyValueException('seasons');
        this._seasons = value;
    }

    toString() {
        return 'Serie - ' + super.toString() + ' , Temporadas: ' + this._seasons;
    }

}

class Season {
    constructor(title, episodes = null) {
        //comprobar uso del operador new
        if (!(this instanceof Season)) throw new InvalidAccessConstructorException();

        //comprobamos que los parámetros son datos válidos. 
        title = typeof title !== 'undefined' ? title : '';
        if (title === '') throw new EmptyValueException('title');

        //asignamos valores a "this"
        this._title = title;
        this._episodes = episodes || [];
    }

    //setters & getters
    get title() { return this._title };
    set title(value) {
        value = typeof value !== 'undefined' ? value : '';
        if (value === '' || value === null) throw new EmptyValueException('title');
        this._title = value;
    }

    get episodes() { return this._episodes };
    set episodes(value) {
        value = typeof value !== 'undefined' ? value : '';
        if (value === '') throw new EmptyValueException('episodes');
        this._episodes = value;
    }

    toString() {
        return 'Season - Título: ' + this._title + ' , episodios ' + this._episodes;
    }
}

class User {
    constructor(username, email, password) {
        //comprobar uso del operador new
        if (!(this instanceof User)) throw new InvalidAccessConstructorException();


        //comprobamos validez de datos entrada
        username = typeof username !== 'undefined' ? username : '';
        if (!usernamePattern.test(username)) throw new InvalidValueException('username', username);
        email = typeof email !== 'undefined' ? email : '';
        if (!emailPattern.test(email)) throw new InvalidValueException('email', email);
        password = typeof password !== 'undefined' ? password : '';
        if (password === '') throw new EmptyValueException('password');

        //asignamos valores a "this"
        this._username = username;
        this._email = email;
        this._password = password;
    }

    //setter & getters
    get username() { return this._username };
    set username(value) {
        if (value === 'undefined' || value === null) throw new EmptyValueException('username');
        if (!usernamePattern.test(value)) throw new InvalidValueException('username', value);
        this._username = value;
    }
    get email() { return this._email };
    set email(value) {
        if (value === 'undefined' || value === null) throw new EmptyValueException('email');
        if (!emailPattern.test(value)) throw new InvalidValueException('email', value);
        this._email = value;
    }
    set password(value) {
        if (value === 'undefined' || value === null) throw new EmptyValueException('password');
        if (value === '') throw new EmptyValueException('password');
        this._password = value;
    }
    toString() {
        return 'Usuario - Username: ' + this._username + ', email: ' + this._email + ', password: *****';
    }

}

class Coordinate {
    constructor(latitude, longitude) {
        //comprobar uso operador new
        if (!(this instanceof Coordinate)) throw new InvalidAccessConstructorException();

        //comprobación parámetros constructor
        latitude = typeof latitude !== 'undefined' ? Number(latitude).valueOf() : NaN;
        if (Number.isNaN(latitude) || latitude < -90 || latitude > 90)
            throw new InvalidValueException('latitude', latitude);
        longitude = typeof longitude !== 'undefined' ? Number(longitude).valueOf() : NaN;
        if (Number.isNaN(longitude) || longitude < -180 || longitude > 180)
            throw new InvalidValueException('longitude', longitude);

        //asignar valores a "this"
        this._latitude = latitude;
        this._longitude = longitude;
    }
    //getters & setters
    get latitude() { return this._latitude };
    set latitude(value) {
        if (value === 'undefined' || value === null) throw new EmptyValueException('latitude');
        if (Number.isNaN(value) || Number.isNaN(value) < -90 || Number.isNaN(value) > 90)
            throw new InvalidValueException('latitude', value);
        this._latitude = value;
    }
    get longitude() { return this._longitude };
    set longitude(value) {
        if (value === 'undefined' || value === null) throw new EmptyValueException('longitude');
        if (Number.isNaN(value) || Number.isNaN(value) < -180 || Number.isNaN(value) > 180)
            throw new InvalidValueException('longitude', value);
        this._longitude = value;
    }

    toString() {
        return 'Coordenadas - Latitud: ' + this._latitude + ', Longitud: ' + this._longitude;
    }
}