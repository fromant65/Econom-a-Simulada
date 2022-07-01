export class Empresa{
    constructor(id, stock, bien){
        this.id=id;
        this.stock=stock; //Cantidad de producción en stock
        this.bien=bien; //id del bien producido
    }
} 

var empresas= []; //Array con todos los objetos de clase Empresa