"use strict"
//heredamos de Error y sobreescribimos el toString
//Excepción base para ir creando el resto de excepciones.
function BaseException() {
}
BaseException.prototype = new Error(); //Herencia del objeto Error.
BaseException.prototype.constructor = BaseException; //Definimos el constructor
//Sobrescribimos el método toString para personalizarlos
BaseException.prototype.toString = function(){
	// note that name and message are properties of Error
	return this.name + ": " + this.message;
};

//Excepciones de validación de parámetros. Reutilizables en todas las clases
function ParameterValidationException() {
	this.name = "ParameterValidationException";
	this.message = "Error: Parameter Validation Exception.";
}
ParameterValidationException.prototype = new BaseException(); //Heredamos de BaseException
ParameterValidationException.prototype.constructor = ParameterValidationException;

//Excepción de valor inválido
function InvalidValueException(param, value) {
	this.name = "InvalidValueException";
	this.message = "Error: The parameter " + param + " has an invalid value. (" + param + ": " + value + ")";
}
InvalidValueException.prototype = new ParameterValidationException(); //Heredamos de ParameterValidationException
InvalidValueException.prototype.constructor = InvalidValueException;

//Excepción personalizada para indicar valores vacios.
function EmptyValueException(param) {
	this.name = "EmptyValueException";
	this.message = "Error: The parameter " + param + " can't be empty.";
}
EmptyValueException.prototype = new ParameterValidationException(); //Heredamos de ParameterValidationException
EmptyValueException.prototype.constructor = EmptyValueException;

//Excepción acceso inválido a constructor
function InvalidAccessConstructorException() {
	this.name = "InvalidAccessConstructorException";
	this.message = "Constructor can’t be called as a function.";
}
InvalidAccessConstructorException.prototype = new BaseException(); 
InvalidAccessConstructorException.prototype.constructor = InvalidAccessConstructorException;

//Excepción acceso inválido a constructor
function UninstantiatedObjectException(param) {
	this.name = "UninstantiatedObjectException";
	this.message = "You can't instantiate a " + param + " object";
}
UninstantiatedObjectException.prototype = new BaseException(); 
UninstantiatedObjectException.prototype.constructor = UninstantiatedObjectException;

//Excepción intento de instacia clase abstracta
function AbstractClassException(classValue) {
	this.name = "AbstractClassException";
	this.message = classValue + " is a abstract class.";
}
AbstractClassException.prototype = new BaseException(); 
AbstractClassException.prototype.constructor = AbstractClassException;

//Excepción el objeto es nulo
function NullElementException(param) {
	this.name = "NullElementException";
	this.message = "Object " + param + " is null. Unexpected.";
}
NullElementException.prototype = new BaseException(); 
NullElementException.prototype.constructor = NullElementException;

//Excepción el objeto ya existe en la lista
function ElementAlreadyExistException(param) {
	this.name = "ElementAlreadyExistException";
	this.message = "Object " + param + " is already in the list.";
}
ElementAlreadyExistException.prototype = new BaseException(); 
ElementAlreadyExistException.prototype.constructor = ElementAlreadyExistException;

//Excepción el objeto no existe en la lista
function NotExistsElementException(param) {
	this.name = "NotExistsElementException";
	this.message = "Object " + param + " doesn't exist in the list.";
}
NotExistsElementException.prototype = new BaseException(); 
NotExistsElementException.prototype.constructor = NotExistsElementException;
