export class Bienes{
    constructor(id){
        this.id=id;
    }

    determinarOferta(){

    }//Funcion que determina la oferta global del bien
    //a partir de la suma de la producción de cada empresa

    determinarDemanda(){

    }//Funcion que determina la demanda global del bien
    //a partir de la suma de demandas de empresas y Pops

    determinarPrecio(){
        if(this.demanda>this.oferta){
            this.precio*=1.005;
        }else if(this.demanda<this.oferta){
            this.precio/=1.005;
        }
    }//Funcion que hace variar el precio en caso de que la oferta o la demandda no sean iguales
} 

var productos= []; //Array con todos los objetos de clase Bienes