"use strict"

//Declaración objeto VStreaming mediante patrón Singleton
var VStreaming = (function () { //La función anónima devuelve un método getInstance que permite obtener el objeto único
    var instantiated; //Objeto con la instancia única VStreaming

    function init() { //Inicialización del Singleton

        //Declaración de la función constructora de la instancia VStreaming
        function VStreaming() {
            //La función se invoca con el operador new
            if (!(this instanceof VStreaming))
                throw new InvalidAccessConstructorException();

            //Definición de atributos privados del objeto
            var _name = name; //Nombre
            var _users = []; //array con los usuarios
            var _productions = []; //array con las producciones
            var _categories = []; //array con categorías
            var _actors = []; //array con los actores
            var _directors = []; //array con los directores


            /* getter y setter de name */

            Object.defineProperty(this, 'name', {
                get: function () {
                    return _name;
                },
                set: function (value) {
                    value = value || '';
                    if (value === '' || value === 'undefined') throw new EmptyValueException("name");
                    _name = value;
                }

            });


            /****  USERS: 
                         *      Iterador de usuario
                         *      function getUserPosition(user) => posición de user o -1 según username
                         *      function getUserEMailPosition(user) => posición de user o -1 según email
                         *      addUser => Number con el número de elementos
                         *      removeUser => Number con el número de elementos
                        */

            //  Iterador de usuarios
            Object.defineProperty(this, 'users', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _users.length ?
                                { value: _users[nextIndex++], done: false } :
                                { done: true };
                        }
                    }
                }
            });

            // function getUserPosition(user) => posición de user o -1
            function getUserPosition(user) {
                if (!(user instanceof User)) throw new InvalidAccessConstructorException();
                function compareElements(element) {
                    return (element.username === user.username);
                }
                return _users.findIndex(compareElements);
            }

            // function getUserEMailPosition(user) => posición de user o -1
            function getUserEMailPosition(user) {
                if (!(user instanceof User)) throw new InvalidAccessConstructorException();
                function compareElements(element) {
                    return (element.email === user.email)
                }
                return _users.findIndex(compareElements);
            }

            // addUser => Number con el número de elementos
            this.addUser = function (user) {
                if (!(user instanceof User)) throw new InvalidAccessConstructorException();
                if (user === null) throw new NullElementException('user');
                var UserPositionByUserName = getUserPosition(user);
                var UserPositionByEMail = getUserEMailPosition(user);
                if ((UserPositionByUserName !== -1) || (UserPositionByEMail !== -1)) throw new ElementAlreadyExistException('user');
                return _users.push(user);
            }

            // removeUser => Number con el número de elementos
            this.removeUser = function (user) {
                if (!(user instanceof User)) throw new InvalidAccessConstructorException();
                if (user === null) throw new NullElementException('user');
                var UserPosition = getUserPosition(user);
                if (UserPosition === -1) throw new NotExistsElementException('user');
                _users.splice(UserPosition, 1);
                return _users.length;
            }

            /****  PRODUCTIONS: 
                         *      Iterador de producción
                         *      function getProductionPosition(production) => posición de production o -1 según username
                         *      addProduction => Number con el número de elementos
                         *      removeProduction => Number con el número de elementos
                        */

            //  Iterador de producciones
            Object.defineProperty(this, 'productions', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _productions.length ?
                                { value: _productions[nextIndex++], done: false } :
                                { done: true };
                        }
                    }
                }
            });

            // function getProductionPosition(production) => posición de production o -1
            function getProductionPosition(production) {
                if (!(production instanceof Production)) throw new InvalidAccessConstructorException();
                function compareElements(element) {
                    return (element.title === production.title)
                }
                return _productions.findIndex(compareElements);
            }

            // addProduction => Number con el número de elementos
            this.addProduction = function (production) {
                if (!(production instanceof Production)) throw new InvalidAccessConstructorException();
                if (production === null) throw new NullElementException('production');
                var productionPosition = getProductionPosition(production);
                if (productionPosition !== -1) throw new ElementAlreadyExistException('production');
                return _productions.push(production);
            }

            // removeProduction => Number con el número de elementos
            this.removeProduction = function (production) {
                if (!(production instanceof Production)) throw new InvalidAccessConstructorException();
                if (production === null) throw new NullElementException('production');
                var productionPosition = getProductionPosition(production);
                if (productionPosition === -1) throw new NotExistsElementException('production');
                _productions.splice(productionPosition, 1);
                return _productions.length;
            }

            /****  CATEGORIAS: 
                 *      Iterador de categorías
                 *      function getCategoryPosition(category) => posición de category o -1
                 *      addCategory => Number con el número de elementos
                 *      removeCategory => Number con el número de elementos
                */

            //  Iterador de categorías
            Object.defineProperty(this, 'categories', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _categories.length ?
                                { value: _categories[nextIndex++], done: false } :
                                { done: true };
                        }
                    }
                }
            });

            // function getCategoryPosition(category) => posición de category o -1
            function getCategoryPosition(category) {
                if (!(category instanceof Category)) throw new InvalidAccessConstructorException();
                function compareElements(element) {
                    return (element.name === category.name)
                }
                return _categories.findIndex(compareElements);
            }

            // addCategory => Number con el número de elementos
            this.addCategory = function (category) {
                if (!(category instanceof Category)) throw new InvalidAccessConstructorException();
                if (category === null) throw new NullElementException('category');
                var categoryPosition = getCategoryPosition(category);
                if (categoryPosition !== -1) throw new ElementAlreadyExistException('category');
                return _categories.push(category);
            }

            // removeCategory => Number con el número de elementos
            this.removeCategory = function (category) {
                if (!(category instanceof Category)) throw new InvalidAccessConstructorException();
                if (category === null) throw new NullElementException('category');
                var categoryPosition = getCategoryPosition(category);
                if (categoryPosition === -1) throw new NotExistsElementException('caterory');
                _categories.splice(categoryPosition, 1);
                return _categories.length;
            }

            /****  ACTORS: 
                                     *      Iterador de actores
                                     *      function getActorPosition(actor) => posición de actor o -1 según name
                                     *      addActor => Number con el número de elementos
                                     *      removeActor => Number con el número de elementos
                                    */

            //  Iterador de actores
            Object.defineProperty(this, 'actors', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _actors.length ?
                                { value: _actors[nextIndex++], done: false } :
                                { done: true }; //primero devuelvo y luego sumo 1
                        }
                    }
                }
            });

            // function getActorPosition(actor) => posición de user o -1
            function getActorPosition(actor) {
                if (!(actor instanceof Person)) throw new InvalidAccessConstructorException();
                function compareElements(element) {
                    return ((element.name === actor.name) && (element.lastname1 === actor.lastname1)
                        && (element.lastname1 === actor.lastname1));
                }
                return _actors.findIndex(compareElements);
            }

            // addActor => Number con el número de elementos
            this.addActor = function (actor) {
                if (!(actor instanceof Person)) throw new InvalidAccessConstructorException();
                if (actor === null) throw new NullElementException('actor');
                var actorPosition = getActorPosition(actor);
                if (actorPosition !== -1) throw new ElementAlreadyExistException('actor');
                return _actors.push(actor);
            }

            // removeActor => Number con el número de elementos
            this.removeActor = function (actor) {
                if (!(actor instanceof Person)) throw new InvalidAccessConstructorException();
                if (actor === null) throw new NullElementException('actor');
                var actorPosition = getActorPosition(actor);
                if (actorPosition === -1) throw new NotExistsElementException('actor');
                _actors.splice(actorPosition, 1);
                return _actors.length;
            }

            /****  DIRECTORS: 
                         *      Iterador de directores
                         *      function getDirectorPosition(director) => posición de director o -1 según name
                         *      addDirector => Number con el número de elementos
                         *      removeDirector => Number con el número de elementos
                        */

            //Iterador de directores
            Object.defineProperty(this, 'directors', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _directors.length ?
                                { value: _directors[nextIndex++], done: false } :
                                { done: true };
                        }
                    }
                }
            });

            // function getDirectorPosition(director) => posición de director o -1
            function getDirectorPosition(director) {
                if (!(director instanceof Person)) throw new InvalidAccessConstructorException();
                function compareElements(element) {
                    return ((element.name === director.name) && (element.lastname1 === director.lastname1)
                        && (element.lastname1 === director.lastname1));
                }
                return _directors.findIndex(compareElements);
            }

            // addDirector => Number con el número de elementos
            this.addDirector = function (director) {
                if (!(director instanceof Person)) throw new InvalidAccessConstructorException();
                if (director === null) throw new NullElementException('director');
                var directorPosition = getDirectorPosition(director);
                if ((directorPosition !== -1)) throw new ElementAlreadyExistException('director');
                return _directors.push(director);
            }

            // removeDirector => Number con el número de elementos
            this.removeDirector = function (director) {
                if (!(director instanceof Person)) throw new InvalidAccessConstructorException();
                if (director === null) throw new NullElementException('director');
                var directorPosition = getDirectorPosition(director);
                if (directorPosition === -1) throw new NotExistsElementException('director');
                _directors.splice(directorPosition, 1);
                return _directors.length;
            }

            //getProductionInProductions => encuentra la posición de una producción en un array de producciones. Ó -1
            this.getProductionInProductions = function (production, productions) {
                function compareElements(element) { return (element.title === production.title) };
                return productions.findIndex(compareElements);
            }

            /**
             * Métodos de CATEGORÍAS
             *      assignCategory => Asigna una producción a una categoría. Devuelve num de producciones q tiene
             *      deassignCategory => Desasigna una producción a una categoría. Devuelve el número de producciones que le quedan
             *      getProductionsCategory => iterador de las producciones de una categoría determinada
             */

            //assignCategory => Asigna una producción a una categoría. Si éstas no existen se añaden al sistema. Devuelve num de producciones q tiene
            this.assignCategory = function (production, category) {
                //compruebo que no son nulos y que son del tipo esperado
                if (category === null) throw new NullElementException('category');
                if (production === null) throw new NullElementException('production');
                if (!(category instanceof Category)) throw new InvalidAccessConstructorException();
                if (!(production instanceof Production)) throw new InvalidAccessConstructorException();
                //busco a ver si es cierto que están en el sistema
                var categoryPosition = getCategoryPosition(category);
                var productionPosition = getProductionPosition(production);
                //si la categoría no existe la añado y ya se que su posición será la última del array (no uso addCategory porque redunda)
                if (categoryPosition === -1) categoryPosition = _categories.push(category) - 1;
                //igual con la producción. actualizamos la nueva posición aunque no es necesario
                if (productionPosition === -1) productionPosition = _productions.push(production) - 1;
                //buscamos en la categoría la producción por si ya está incluida
                let i = 0;
                let encontrado = false;
                while (i < _categories[categoryPosition].length && !encontrado) {
                    if (_categories[categoryPosition].productions[i].title === production.title) {
                        encontrado = true;
                    }
                    i++;
                }
                //si lo he encontrado => lanzo excepción
                if (encontrado) throw new ElementAlreadyExistException('production');
                //si no => la añado y devuelvo el nuevo número de elementos. Además si no existe productions lo creo
                if (_categories[categoryPosition].productions === undefined) _categories[categoryPosition].productions = [];
                return _categories[categoryPosition].productions.push(production);
            }

            //deassignCategory => Desasigna una producción a una categoría. Devuelve el número de producciones que le quedan
            this.deassignCategory = function (production, category) {
                //compruebo que no son nulos y que son del tipo esperado
                if (category === null) throw new NullElementException('category');
                if (production === null) throw new NullElementException('production');
                if (!(category instanceof Category)) throw new InvalidAccessConstructorException();
                if (!(production instanceof Production)) throw new InvalidAccessConstructorException();
                //busco a ver si es cierto que están en el sistema
                var categoryPosition = getCategoryPosition(category);
                var productionPosition = getProductionPosition(production);
                //si obtengo algún -1 excepción
                if (categoryPosition === -1) throw new NotExistsElementException('category');
                if (productionPosition === -1) throw new NotExistsElementException('production');
                //ahora debo encontrar la posición de la producción en la categoría o -1
                let proInCatPosition = this.getProductionInProductions(production, _categories[categoryPosition].productions);
                //si es -1 es que no existe. Excepción
                if (proInCatPosition === -1) throw new ElementNotFoundException('production', 'category');
                //si no ha sido -1 la desasigno y devuelvo el nuevo número de elementos
                _categories[categoryPosition].productions.splice(proInCatPosition, 1);
                return _categories[categoryPosition].productions.length;
            }

            //getProductionsCategory iterador de las producciones de una categoría
            this.getProductionsCategory = function (category) {
                //compruebo que no son nulos y que son del tipo esperado
                if (category === null) throw new NullElementException('category');
                if (!(category instanceof Category)) throw new InvalidAccessConstructorException();
                var categoryPosition = getCategoryPosition(category);
                //si obtengo algún -1 excepción
                if (categoryPosition === -1) throw new NotExistsElementException('category');
                var nextIndex = 0;
                return {
                    next: function () {
                        return nextIndex < _categories[categoryPosition].productions.length ?
                            { value: _categories[categoryPosition].productions[nextIndex++], done: false } :
                            { done: true };
                    }
                }
            }

            /**
             * Métodos de DIRECTORES
             *      assignDirector => Asigna una producción a una director. Devuelve num de producciones q tiene
             *      deassignDirector => Desasigna una producción a una director. Devuelve el número de producciones que le quedan
             *      getProductionsDirector => iterador de las producciones de un director determinado
             */

            //assignDirector => Asigna una producción a una director. Si éstas no existen se añaden al sistema. Devuelve num de producciones q tiene
            this.assignDirector = function (production, director) {
                //compruebo que no son nulos y que son del tipo esperado
                if (director === null) throw new NullElementException('director');
                if (production === null) throw new NullElementException('production');
                if (!(director instanceof Person)) throw new InvalidAccessConstructorException();
                if (!(production instanceof Production)) throw new InvalidAccessConstructorException();
                //busco a ver si es cierto que están en el sistema
                var directorPosition = getDirectorPosition(director);
                var productionPosition = getProductionPosition(production);
                //si la director no existe lo añado y ya se que su posición será la última del array (no uso addDirector porque redunda)
                if (directorPosition === -1) directorPosition = _directors.push(director) - 1;
                //igual con la producción. actualizamos la nueva posición aunque no es necesario
                if (productionPosition === -1) productionPosition = _productions.push(director) - 1;
                //buscamos en el director la producción por si ya está incluida
                let i = 0;
                let encontrado = false;
                while (i < _directors[directorPosition].length && !encontrado) {
                    if (_directors[directorPosition].productions[i].title === production.title) {
                        encontrado = true;
                    }
                    i++;
                }
                //si lo he encontrado => lanzo excepción
                if (encontrado) throw new ElementAlreadyExistException('production');
                //si no => la añado y devuelvo el nuevo número de elementos. Además si no existe productions lo creo
                if (_directors[directorPosition].productions === undefined) _directors[directorPosition].productions = [];
                if (_productions[productionPosition].directors === undefined) _productions[productionPosition].directors = [];
                _productions[productionPosition].directors.push(director);
                return _directors[directorPosition].productions.push(production);
            }

            //deassignDirector => Desasigna una producción a un director. Devuelve el número de producciones que le quedan
            this.deassignDirector = function (production, director) {
                //compruebo que no son nulos y que son del tipo esperado
                if (director === null) throw new NullElementException('director');
                if (production === null) throw new NullElementException('production');
                if (!(director instanceof Person)) throw new InvalidAccessConstructorException();
                if (!(production instanceof Production)) throw new InvalidAccessConstructorException();
                //busco a ver si es cierto que están en el sistema
                var directorPosition = getDirectorPosition(director);
                var productionPosition = getProductionPosition(production);
                //si obtengo algún -1 excepción
                if (directorPosition === -1) throw new NotExistsElementException('director');
                if (productionPosition === -1) throw new NotExistsElementException('production');
                //ahora debo encontrar la posición de la producción en la director o -1
                let proInDirPosition = this.getProductionInProductions(production, _directors[directorPosition].productions);
                //si es -1 es que no existe. Excepción
                if (proInDirPosition === -1) throw new ElementNotFoundException('production', 'director');
                //si no ha sido -1 la desasigno y devuelvo el nuevo número de elementos
                _directors[directorPosition].productions.splice(proInDirPosition, 1);
                return _directors[directorPosition].productions.length;
            }

            //getProductionsDirector iterador de las producciones de un director
            this.getProductionsDirector = function (director) {
                //compruebo que no son nulos y que son del tipo esperado
                if (director === null) throw new NullElementException('director');
                if (!(director instanceof Director)) throw new InvalidAccessConstructorException();
                var directorPosition = getDirectorPosition(director);
                //si obtengo algún -1 excepción
                if (directorPosition === -1) throw new NotExistsElementException('director');
                var nextIndex = 0;
                return {
                    next: function () {
                        return nextIndex < _directors[directorPosition].productions.length ?
                            { value: _directors[directorPosition].productions[nextIndex++], done: false } :
                            { done: true };
                    }
                }
            }

            /**
             * Métodos de ACTORES
             *      assignActor => Asigna una producción a un actor. Devuelve num de producciones q tiene
             *      deassignActor => Desasigna una producción a una actor. Devuelve el número de producciones que le quedan
             *      getProductionsActor => iterador de las producciones de un actor determinado
             */

            //assignActor => Asigna una producción a una actor. Si éstas no existen se añaden al sistema. Devuelve num de producciones q tiene
            this.assignActor = function (production, actor, character, main) {
                //compruebo que no son nulos y que son del tipo esperado
                if (actor === null) throw new NullElementException('actor');
                if (production === null) throw new NullElementException('production');
                if (!(actor instanceof Person)) throw new InvalidAccessConstructorException();
                if (!(production instanceof Production)) throw new InvalidAccessConstructorException();
                //busco a ver si es cierto que están en el sistema
                var actorPosition = getActorPosition(actor);
                var productionPosition = getProductionPosition(production);
                //si la actor no existe lo añado y ya se que su posición será la última del array (no uso addActor porque redunda)
                if (actorPosition === -1) actorPosition = _actors.push(actor) - 1;
                //igual con la producción. actualizamos la nueva posición aunque no es necesario
                if (productionPosition === -1) productionPosition = _productions.push(production) - 1;
                //buscamos en el actor la producción por si ya está incluida
                let i = 0;
                let encontrado = false;
                while (i < _actors[actorPosition].length && !encontrado) {
                    if (_actors[actorPosition].productions[i].title === production.title) {
                        encontrado = true;
                    }
                    i++;
                }
                //si lo he encontrado => lanzo excepción
                if (encontrado) throw new ElementAlreadyExistException('production');
                //si no => la añado y devuelvo el nuevo número de elementos. Además si no existe productions lo creo
                if (_actors[actorPosition].productions === undefined) _actors[actorPosition].productions = [];
                if (_productions[productionPosition].casting === undefined) _productions[productionPosition].casting = [];
                _productions[productionPosition].casting.push(
                    {
                        actor: actor,
                        character: character,
                        main: main
                    });
                return _actors[actorPosition].productions.push(
                    {
                        production: production,
                        character: character,
                        main: main
                    }
                );
            }

            //deassignActor => Desasigna una producción a un actor. Devuelve el número de producciones que le quedan
            this.deassignActor = function (production, actor) {
                //compruebo que no son nulos y que son del tipo esperado
                if (actor === null) throw new NullElementException('actor');
                if (production === null) throw new NullElementException('production');
                if (!(actor instanceof Person)) throw new InvalidAccessConstructorException();
                if (!(production instanceof Production)) throw new InvalidAccessConstructorException();
                //busco a ver si es cierto que están en el sistema
                var actorPosition = getActorPosition(actor);
                var productionPosition = getProductionPosition(production);
                //si obtengo algún -1 excepción
                if (actorPosition === -1) throw new NotExistsElementException('actor');
                if (productionPosition === -1) throw new NotExistsElementException('production');
                //ahora debo encontrar la posición de la producción en la actor o -1
                let proInActPosition = this.getProductionInProductions(production, _actors[actorPosition].productions);
                //si es -1 es que no existe. Excepción
                if (proInActPosition === -1) throw new ElementNotFoundException('production', 'actor');
                //si no ha sido -1 la desasigno y devuelvo el nuevo número de elementos
                _actors[actorPosition].productions.splice(proInActPosition, 1);
                return _actors[actorPosition].productions.length;
            }

            //getProductionsActor iterador de las producciones de un actor
            this.getProductionsActor = function (actor) {
                //compruebo que no son nulos y que son del tipo esperado
                if (actor === null) throw new NullElementException('actor');
                if (!(actor instanceof Actor)) throw new InvalidAccessConstructorException();
                var actorPosition = getActorPosition(actor);
                //si obtengo algún -1 excepción
                if (actorPosition === -1) throw new NotExistsElementException('actor');
                var nextIndex = 0;
                return {
                    next: function () {
                        return nextIndex < _actors[actorPosition].productions.length ?
                            { value: _actors[actorPosition].productions[nextIndex++], done: false } :
                            { done: true };
                    }
                }
            }


        } //Fin constructor VStreaming
        VStreaming.prototype = {};
        VStreaming.prototype.constructor = VStreaming;

        var instance = new VStreaming();//Devolvemos el objeto VStreaming para que sea una instancia única.
        Object.freeze(instance);
        return instance;
    } //Fin inicialización del Singleton
    return {
        // Devuelve un objeto con el método getInstance
        getInstance: function () {
            if (!instantiated) { //Si la variable instantiated es undefined, priemera ejecución, ejecuta init.
                instantiated = init(); //instantiated contiene el objeto único
            }
            return instantiated; //Si ya está asignado devuelve la asignación.
        }
    };
})();