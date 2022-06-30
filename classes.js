class POP{
    constructor(id, necesidades, empresa){
        this.id=id;
        this.necesidades=necesidades; //Array de las necesidades de la POP
        //[[id_bien1, cantidad],[id_bien2, cantidad],...]
        this.empresa=empresa //id de la empresa en la que trabajan
    }
}

class EMPRESA{
    constructor(id, stock, bien){
        this.id=id;
        this.stock=stock; //Cantidad de producción en stock
        this.bien=bien; //id del bien producido
    }
}

class BIENES{
    constructor(id){
        this.id=id;
    }
}