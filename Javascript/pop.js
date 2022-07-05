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

    set setNecesidadesFinales(necesidades){
        this.necesidadesFinales=necesidades;
    } //Setter de necesidades finales

    set setNecesidadesInsatisfechas(necesidades){
        this.necesidadesInsatisfechas=necesidades;
    } //Setter de necesidades insatisfechas

    determinarNecesidades(){
        let necesidadesFinales=this.necesidades;
        for(let i in this.necesidades){
            necesidadesFinales[i] *= this.poblacion;
            /*Las necesidades finales del bien en la posicion 'i' son iguales a 
            la cantidad unitaria * la población
            */
        }
        this.necesidadesFinales=necesidadesFinales;
    }//Funcion que determina los bienes que necesitará la POP de acuerdo a su población

    comprarBien(indice, cantidad, productos, empresas){
        let precio=productos[indice].precio
        let compra= cantidad * precio; //variable que determina el precio de la compra
        if(this.dinero>=compra){
            for(let i in empresas){//'empresas' es el array global de empresas
                if(empresas[i].bien == indice){ //Si la empresa produce el bien que queremos comprar
                    if(empresas[i].produccion >= cantidad){ //Si su producción es mayor que la demandamos
                        this.dinero -= compra; //Nos restamos el precio de la compra
                        empresas[i].dinero += compra; //Se lo damos a la empresa
                        this.stock[indice]+= cantidad; //Nos sumamos el stock correspondiente
                        empresas[i].stocks[indice] -= cantidad; //Le restamos el stock a la empresa
                        cantidad=0; //La cantidad que queda por comprar es 0
                    }else{
                        let cantidadParcial = empresas[i].produccion; //la cantidad a comprar será el stock de la empresa
                        let compraParcial=cantidadParcial * precio; //el valor de la compra parcial
                        this.dinero -= compraParcial;
                        empresas[i].dinero += compraParcial;
                        this.stock[indice] += cantidadParcial;
                        empresas[i].stocks[indice] += cantidadParcial
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
            return 0; 
            //La proporción de consumo no satisfecho es 0
        }else{
            let proporcion=1-this.stock[indice]/cantidad;
            //Definimos la proporción de consumo no satisfecho
            this.stock[indice]=0;
            //Disminuimos el stock a 0
            return proporcion;
            //Devolvemos la proporción de consumo no satisfecho
        }
    }//Funcion que permite consumir a la pop consumir una cierta cantidad de un bien
    //Resta 'cantidad' del stock del bien 'indice'

    llenarNecesidades(productos, empresas){
        //COMPRAR
        let cantidades=productos;
        for(let i in this.necesidadesFinales){
            //if(this.necesidadesFinales[i]!=0){ //Si el bien que estamos viendo lo necesita la Pop
                cantidades[i]=this.comprarBien(i, this.necesidadesFinales[i],productos,empresas);
                //Compramos la cantidad del bien que necesita
            //}
        }//Esto compra los bienes linealmente, lo que implica que posiblemente 
        //los bienes finales de la lista no sean comprados por falta de dinero

        ///TEST///
        console.log(cantidades);
        ///TEST///

        //CONSUMIR
        let necesidadesInsatisfechas=this.necesidadesFinales;
        //Declaramos una variable para necesidades insatisfechas
        for(let i in this.stock){
            necesidadesInsatisfechas[i]=this.consumirBien(i,this.necesidadesFinales[i]);
            //Consumimos los bienes guardando el valor de necesidades insatisfechas de cada uno
        }
        this.necesidadesInsatisfechas=necesidadesInsatisfechas;
        //Guardamos el valor en una variable de la Pop
    }//Funcion que compra los bienes que necesita la Pop y los consume
} 

