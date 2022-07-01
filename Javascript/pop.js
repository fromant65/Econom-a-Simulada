export class Pop{
    constructor(id, necesidades, empresa, dinero, stock, poblacion){
        this.id=id;
        this.necesidades=necesidades; //Array de las necesidades de la POP por persona
        //[cantidad_bien1, cantidad_bien2,...]
        //El array es exhaustivo en todas las IDs de bienes y respeta el orden de la lista de bienes
        this.empresa=empresa; //id de la empresa en la que trabajan
        this.dinero=dinero; //Cantidad de dinero disponible para compras
        this.stock=stock; //Array similar al de necesidades pero con cantidad de Stocks de bienes
        this.poblacion=poblacion; //cantidad de personas pertenecientes a la pop
    }

    comprarBien(indice, cantidad){

    }//Funcion que permite a la pop comprar una cantidad determinada de un bien con su indice

    consumirBien(indice,cantidad){
        if(this.stock[indice]>cantidad){
            this.stock[indice]-=cantidad;
            //Si el stock alcanza, lo consumimos
        }else{
            //Si el stock no alcanza:
            //->Decidir si se tira una alerta, 
            //si se modifica alguna variable (por ejemplo se reduce "felicidad") sin consumir stock
            //o si se consume todo el stock disponible ademas de alguna de las anteriores;
            //o alguna otra variante
        }
    }//Funcion que permite consumir a la pop consumir una cierta cantidad de un bien
    //Resta 'cantidad' del stock del bien 'indice'

    determinarNecesidades(){
        for(i in this.necesidades){
            this.necesidadesFinales[i] = this.necesidades[i]*this.poblacion;
            /*Las necesidades finales del bien en la posicion 'i' son iguales a 
            la cantidad unitaria * la población
            */
        }
    }//Funcion que determina los bienes que necesitará la POP de acuerdo a su población

    llenarNecesidades(){

    }//Funcion que compra los bienes que necesita la Pop y los consume
} 

var Pops= []; //Array con todos los objetos de clase Pop