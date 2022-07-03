export class Empresa{
    constructor(id, produccion, bien, insumos, stocks, dinero){
        this.id=id;
        this.produccion=produccion; //Cantidad de producción en stock
        this.bien=bien; //id del bien producido
        this.insumos=insumos; //Array con los insumos que requiere la empresa por trabajador
        //[cantidad_insumo1, cantidad_insumo2,...]
        //El array es exhaustivo en todas las IDs de bienes y respeta el orden de la lista de bienes
        this.stocks=stocks; //Array con los stocks de insumos que posee la empresa, similar al de insumos
        this.dinero=dinero; //Cantidad de dinero disponible en caja
    }

    determinarEmpleados(){
        for(i in pops){
            if(this.id==pops[i].empresa){
                this.empleados+=pops[i].población;
            }
        }
    }//Funcion que determina la cantidad de empleados de la empresa.
    /*Posiblemente problematica:
    1- Corre en O(n)
    2- Usa variables globales no declaradas en este archivo
    
    Posibles soluciones: ordenar a las Pops por id de la empresa en la que trabajan
    para agilizar la busqueda de pops en esta función en O(log n)*/

    determinarInsumos(){
        for(i in this.insumos){
            this.insumosFinales[i] = this.insumos[i]*this.empleados;
            /*La cantidad de insumos finales del bien en la posicion 'i' son iguales a 
            la cantidad unitaria * la cantidad de empleados
            */
        }
    }

    comprarInsumos(indice, cantidad){
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
    }//Funcion que compra insumos

    producir(){

    }//Funcion que se encarga de la producción de la empresa, 
    //sumando la producción a la variable 'produccion', 
    //y consumiendo los insumos necesarios
} 

