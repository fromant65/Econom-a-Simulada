export class Empresa{
    constructor(id, produccion, bien, insumos, stocks){
        this.id=id;
        this.produccion=produccion; //Cantidad de producción en stock
        this.bien=bien; //id del bien producido
        this.insumos=insumos; //Array con los insumos que requiere la empresa por trabajador
        //[cantidad_insumo1, cantidad_insumo2,...]
        //El array es exhaustivo en todas las IDs de bienes y respeta el orden de la lista de bienes
        this.stocks=stocks; //Array con los stocks de insumos que posee la empresa, similar al de insumos
    }

    determinarEmpleados(){
        for(i in Pops){
            if(this.id==Pops[i].empresa){
                this.empleados+=Pops[i].población;
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

    }//Funcion que compra insumos

    producir(){

    }//Funcion que se encarga de la producción de la empresa, 
    //sumando la producción a la variable 'produccion', 
    //y consumiendo los insumos necesarios
} 

