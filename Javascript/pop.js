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
        let precio=productos[indice].precio
        let compra= cantidad * precio; //variable que determina el precio de la compra
        if(this.dinero>=compra){
            for(i in empresas){//'empresas' es el array global de empresas
                if(empresas[i].bien == indice){ //Si la empresa produce el bien que queremos comprar
                    if(empresas[i].produccion >= cantidad){ //Si su producción es mayor que la demandamos
                        this.dinero -= compra; //Nos restamos el precio de la compra
                        empresas[i].dinero += compra; //Se lo damos a la empresa
                        this.stock[indice]+= cantidad; //Nos sumamos el stock correspondiente
                        empresas[i].stock[indice] -= cantidad; //Le restamos el stock a la empresa
                        cantidad=0; //La cantidad que queda por comprar es 0
                    }else{
                        let cantidadParcial = empresas[i].produccion; //la cantidad a comprar será el stock de la empresa
                        let compraParcial=cantidadParcial * precio; //el valor de la compra parcial
                        this.dinero -= compraParcial;
                        empresas[i].dinero += compraParcial;
                        this.stock[indice] += cantidadParcial;
                        empresas[i].stock[indice] += cantidadParcial
                        cantidad-=cantidadParcial; //La cantidad que queda por comprar
                    }
                    if(cantidad==0) break; //Si ya compramos todo, salimos del loop
                }
            }
        }
        return cantidad; //Retornamos la cantidad que quedó sin comprar
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

