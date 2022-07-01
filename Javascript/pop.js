export class Pop{
    constructor(id, necesidades, empresa, dinero, stock, poblacion){
        this.id=id;
        this.necesidades=necesidades; //Array de las necesidades de la POP
        //[[id_bien1, cantidad],[id_bien2, cantidad],...]
        this.empresa=empresa; //id de la empresa en la que trabajan
        this.dinero=dinero; //Cantidad de dinero disponible para compras
        this.stock=stock; //Array similar al de necesidades pero con Stocks de bienes
        this.poblacion=poblacion; //cantidad de personas pertenecientes a la pop
    }

    comprarBien(indice, cantidad){

    }//Funcion que permite a la pop comprar una cantidad determinada de un bien con su indice

    consumirBien(indice,cantidad){

    }//Funcion que permite consumir a la pop consumir una cierta cantidad de un bien
    //Resta 'cantidad' del stock del bien 'indice'
} 