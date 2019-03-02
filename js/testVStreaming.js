// testeo de VStreaming
function testVStreaming() {

    console.log('Creación de personas y muestra por consola:');

    try {
        var p1 = new Person('Antonio', 'Recio', 'Matamoros', new Date(1977, 01, 01), 'http://www.mipic.jpdg');
        var p2 = new Person('Javier', 'Camara', 'Rodríguez', new Date(1967, 01, 19), 'http://www.mifoto.jspg');
        var p3 = new Person('Verónica', 'Fernández', 'Echegaray', new Date(1983, 06, 16), null);
        console.log('Personas:');
        console.log(p1.toString());
        console.log(p2.toString());
        console.log(p3.toString());
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Creación de persona erronea:');
        var p4 = new Person('Juan');
        console.log(p4.toString());

    } catch (er) {
        console.log(er.toString());
    }
    console.log('------------------------------Creación de categorías y muestra por consola:');

    try {
        var c1 = new Category('Ciencia Ficción');
        var c2 = new Category('Bélica');
        var c3 = new Category('Aventura', 'La vida es para los aventureros');
        console.log('Categorías:');
        console.log(c1.toString());
        console.log(c2.toString());
        console.log(c3.toString());
    } catch (er) {
        console.log(er.toString());
    }



    try {
        console.log('-----------------------------Creación de categoría erronea:');
        var c4 = new Categoría(new Date(1999, 23));
        console.log(c4.toString());

    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('------------------------------Creación de recursos:');
        var r1 = new Resource(123, 'http://www.pourthethe.zd/r1', ['castellano', 'inglés'], ['castellano', 'inglés']);
        var r2 = new Resource(123, 'http://www.pourthethe.zd/r2', ['castellano', 'portugués'], ['castellano', 'inglés']);
        var r3 = new Resource(123, 'http://www.pourthethe.zd/r3', ['castellano', 'inglés'], ['castellano', 'inglés']);

        console.log(r1.toString());
        console.log(r2.toString());
        console.log(r3.toString());

    } catch (er) {
        console.log(er.toString());
    }

    try {
        console.log('------------------------------Creación de recurso erroneo:');
        var r4 = new Resource(123, 'dsfhttp://www.pourthethe.zd/r1', ['castellano', 'inglés'], ['castellano', 'inglés']);

        console.log(r4.toString());

    } catch (er) {
        console.log(er.toString());
    }

    try {
        console.log('------------------------------Creación de producciones (da error al ser abstracta):');
        var r4 = new Resource(123, 'http://www.pourthethe.zd/r1', ['castellano', 'inglés'], ['castellano', 'inglés']);
        var pro1 = new Production('Amanece que no es poco', 'Spain', new Date(1989, 01, 17), 'todos somos contingentes');
        var pro2 = new Production('7 vidas', 'Spain', new Date(1999, 01, 17), 'quién podría imaginar', 'http://www.7vidas.edk');
        console.log(pro1.toString());

    } catch (er) {
        console.log(er.toString());
    }

    try {
        console.log('------------------------------Creación de película:');
        var m1 = new Movie('Interstellar', 'EEUU', new Date(1999, 11, 7), 'la gravedad y el tiempo', 'http://interestellar.dkf', r3);

        console.log(m1.toString());


    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('------------------------------Creación de película erronea:');
        var m1 = new Movie();

        console.log(m1.toString());

    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('------------------------------Creación de Temporadas:');
        var se1 = new Season('Temporada 01', [{ title: 'El jefe', episode: r1 }]);

        console.log(se1.toString());

    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('------------------------------Creación de series:');

        var s1 = new Serie('The Office', 'EEUU', new Date(2005, 11), null, null, se1);
        var s2 = new Serie('Friends', 'EEUU', new Date(1996, 12), null, null);
        console.log(s1.toString());
        console.log(s2.toString());
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('------------------------------Creación de serie erronea:');

        var s1 = new Serie();

        console.log(s1.toString());
    } catch (er) {
        console.log(er.toString());
    }

    try {
        console.log('------------------------------Creación de usuarios:');

        var u1 = new User('Benito', 'benito@perrote.com', 'bendDfs$7si');
        var u2 = new User('Manolo', 'manolo@jumilla.dom', 'mansdfS4<olo');

        console.log(u1.toString());
        console.log(u2.toString());
    } catch (er) {
        console.log(er.toString());
    }

    try {
        console.log('------------------------------Creación de usuario erroneo:');

        var u3 = new User('Benito');
        
        console.log(u3.toString());
    } catch (er) {
        console.log(er.toString());
    }

    try {
        var vs = VStreaming.getInstance();
        vs.name = 'VStreaming';
        console.log('------------------------------Gestor de contenidos multimedia: ' + vs.name);

    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Añadir a categoría: ' + c1.name +': ' + vs.addCategory(c1));
        console.log('Añadir a categoría: ' + c2.name +': ' + vs.addCategory(c2));
        console.log('Añadir a categoría: ' + c3.name +': ' + vs.addCategory(c3));
      
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Añadir a categoría (ya existe en ella):');
        console.log('Añadir a categoría (ya existe en ella): ' + c1.name +': ' + vs.addCategory(c1));
        
    } catch (er) {
        console.log(er.toString());
    }

    try {
        console.log('Eliminar de categoría: ' + c1.name +': ' + vs.removeCategory(c1));
      
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Eliminar de categoría (no se encuentra en ella):');
        console.log('Salta error porque no existe: ' + c1.name + ': ' + vs.removeCategory(c1));
        
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Mostrar categorías:');
        var categorias = vs.categories;
        var categoria = categorias.next();
	while (categoria.done !== true){
		console.log ('' + categoria.value);
		categoria = categorias.next();
	}
        
    } catch (er) {
        console.log(er.toString());
    }



    try {
        console.log('Añadir a usuarios: ' + u1.username +': ' + vs.addUser(u1));
        console.log('Añadir a usuarios: ' + u2.username +': ' + vs.addUser(u2));
      
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Añadir a usuarios (ya existe en ella):');
        console.log('Añadir a usuarios (ya existe en ella): ' + u1.username +': ' + vs.addUser(u1));
        
    } catch (er) {
        console.log(er.toString());
    }

    try {
        console.log('Eliminar de usuarios: ' + u1.username +': ' + vs.removeUser(u1));
      
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Eliminar de usuarios (no se encuentra en ella):');
        console.log('Salta error porque no existe: ' + u1.username + ': ' + vs.removeUser(u1));
        
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Mostrar usuarios:');
        var usuarios = vs.users;
        var usuario = usuarios.next();
	while (usuario.done !== true){
		console.log ('' + usuario.value);
		usuario = usuarios.next();
	}
        
    } catch (er) {
        console.log(er.toString());
    }

console.log('PRODUCCIONES');
try {
        console.log('Añadir a producciones: ' + m1.title + ': ' + vs.addProduction(m1));
        console.log('Añadir a producciones: ' + s1.title + ': ' + vs.addProduction(s1));
        console.log('Añadir a producciones: ' + s2.title + ': ' + vs.addProduction(s2));
      
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Añadir a producciones (ya existe en ella):');
        console.log('Añadir a producciones (ya existe en ella): ' + s1.title + ': ' + vs.addProduction(s1));
        
    } catch (er) {
        console.log(er.toString());
    }

    try {
        console.log('Eliminar de producciones: ' + s1.title + ': ' + vs.removeProduction(s1));
      
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Eliminar de producciones (no se encuentra en ella):');
        console.log('Salta error porque no existe: ' + s1.title + ': ' + vs.removeProduction(s1));
        
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Mostrar producciones:');
        var producciones = vs.productions;
        var produccion = producciones.next();
	while (produccion.done !== true){
		console.log ('' + produccion.value);
		produccion = producciones.next();
	}
        
    } catch (er) {
        console.log(er.toString());
    }

    try {
        console.log('Añadir a actores: ' + p1.name + ': ' + vs.addActor(p1));
        console.log('Añadir a actores: ' + p2.name + ': ' + vs.addActor(p2));
        console.log('Añadir a actores: ' + p3.name + ': ' + vs.addActor(p3));
      
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Añadir a actores (ya existe en ella):');
        console.log('Añadir a actores (ya existe en ella): ' + p2.name + ': ' + vs.addActor(p2));
    } catch (er) {
        console.log(er.toString());
    }

    try {
        console.log('Eliminar de actores: ' + p1.name + ': ' + vs.removeActor(p1));
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Eliminar de actores (no se encuentra en ella):');
        console.log('Salta error porque no existe: ' + p1.name + ': ' + vs.removeActor(p1));

    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Mostrar actores:');
        var actores = vs.actors;
        var actor = actores.next();
	while (actor.done !== true){
		console.log ('' + actor.value);
		actor = actores.next();
	}
        
    } catch (er) {
        console.log(er.toString());
    }

    try {
        console.log('Añadir a directores: ' + p1.name + ': ' + vs.addDirector(p1));
        console.log('Añadir a directores: ' + p2.name + ': ' + vs.addDirector(p2));
        console.log('Añadir a directores: ' + p3.name + ': ' + vs.addDirector(p3));
      
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Añadir a directores (ya existe en ella):');
        console.log('Añadir a directores (ya existe en ella): ' + p2.name + ': ' + vs.addDirector(p2));
    } catch (er) {
        console.log(er.toString());
    }

    try {
        console.log('Eliminar de directores: ' + p1.name + ': ' + vs.removeDirector(p1));
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Eliminar de directores (no se encuentra en ella):');
        console.log('Salta error porque no existe: ' + p1.name + ': ' + vs.removeDirector(p1));

    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Mostrar directores:');
        var directores = vs.directors;
        var director = directores.next();
	while (director.done !== true){
		console.log ('' + director.value);
		director = directores.next();
	}
        
    } catch (er) {
        console.log(er.toString());
    }
    console.log ('--------------------------------Asignar produccion a categoría --------------------');


    try {
        console.log('Asignamos a producciones: ' + m1.title + 'a ' + c1.name + ' : ' + vs.assignCategory(m1, c1));
        console.log('Asignamos a producciones: ' + s1.title + 'a ' + c1.name + ' : ' + vs.assignCategory(s1, c1));
        console.log('Asignamos a producciones: ' + s2.title + 'a ' + c2.name + ' : ' + vs.assignCategory(s2, c2));
      
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Añadir a producciones (ya existe en ella):');
        console.log('Añadir a producciones (ya existe en ella): ' + s1.title + ': ' + vs.addProduction(s1));
        
    } catch (er) {
        console.log(er.toString());
    }

    try {
        console.log('Eliminar de producciones: ' + s1.title + ': ' + vs.removeProduction(s1));
      
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Eliminar de producciones (no se encuentra en ella):');
        console.log('Salta error porque no existe: ' + s1.title + ': ' + vs.removeProduction(s1));
        
    } catch (er) {
        console.log(er.toString());
    }
    try {
        console.log('Mostrar producciones:');
        var producciones = vs.productions;
        var produccion = producciones.next();
	while (produccion.done !== true){
		console.log ('' + produccion.value);
		produccion = producciones.next();
	}
        
    } catch (er) {
        console.log(er.toString());
    }


    
}
window.onload = testVStreaming;