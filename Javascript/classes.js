import {Bienes} from './bienes.js';
import {Empresa} from './empresa.js';
import {Pop} from './pop.js';

//DECLARACIÓN DE EMPRESAS
const E1= new Empresa(1, 1000, 1, [1,2,3], [0,0,0], 700);
const E2= new Empresa(2, 5000, 2, [1,2,3], [0,0,0], 400);
const E3= new Empresa(3, 3000, 1, [1,2,3], [0,0,0], 500);
const E4= new Empresa(4, 4000, 3, [1,2,3], [0,0,0], 200);

//DECLARACIÓN DE POPS
const P1= new Pop(1, [1,2,3], 1, 1000000, [0,0,0], 123000);
const P2= new Pop(2, [2,1,2], 3, 2000000, [0,0,0], 237000);
const P3= new Pop(3, [3,3,2], 2, 4000000, [0,0,0], 127500);

//DECLARACIÓN DE BIENES
const B1= new Bienes(1, 10);
const B2= new Bienes(2, 15);
const B3= new Bienes(3, 17);

//ARRAYS GLOBALES
const productos= [B1,B2,B3]; //Array con todos los objetos de clase Bienes
const empresas= [E1,E2,E3,E4]; //Array con todos los objetos de clase Empresa
const pops= [P1,P2,P3]; //Array con todos los objetos de clase Pop

const empresasIndex = document.querySelector(".empresas-js"); //Seleccionamos el div de empresas
const popsIndex = document.querySelector(".pops-js"); //Seleccionamos el div de pops
const productosIndex = document.querySelector(".productos-js"); //Seleccionamos el div de productos

function mostrarEmpresas(empresas){
    const fragmento = document.createDocumentFragment(); 
    //Creamos un fragmento de documento para agilizar la pagina
    for(let i in empresas){ //Recorremos la matriz de empresas
        const empresaI = document.createElement("LI"); //Por cada empresa creamos un li
        empresaI.innerHTML = `ID: ${empresas[i].id}; 
                                Producción: ${empresas[i].produccion}; 
                                Bien: ${empresas[i].bien}`;
        //mostramos algunos atributos como ejemplo
        fragmento.appendChild(empresaI); //agregamos la empresa al fragmento
    }
    empresasIndex.appendChild(fragmento); //Agregamos el fragmento al index.html
}

mostrarEmpresas(empresas);

function mostrarPops(pops){
    const fragmento = document.createDocumentFragment(); 
    //Creamos un fragmento de documento para agilizar la pagina
    for(let i in pops){ //Recorremos la matriz de pops
        const popI = document.createElement("LI"); //Por cada pop creamos un li
        popI.innerHTML = `ID: ${pops[i].id}; 
                            Dinero: ${pops[i].dinero}; 
                            Poblacion: ${pops[i].poblacion}`;
        //mostramos algunos atributos como ejemplo
        fragmento.appendChild(popI); //agregamos la pop al fragmento
    }
    popsIndex.appendChild(fragmento); //Agregamos el fragmento al index.html
}

mostrarPops(pops);

function mostrarBienes(productos){
    const fragmento = document.createDocumentFragment(); 
    //Creamos un fragmento de documento para agilizar la pagina
    for(let i in productos){ //Recorremos la matriz de Bienes
        const bienI = document.createElement("LI"); //Por cada bien creamos un li
        bienI.innerHTML = `ID: ${productos[i].id}; 
                            Precio: ${productos[i].precio}`;
        //mostramos los atributos
        fragmento.appendChild(bienI); //agregamos el bien al fragmento
    }
    productosIndex.appendChild(fragmento); //Agregamos el fragmento al index.html
}

mostrarBienes(productos);


///TESTS
console.log(P3.necesidades)
P3.determinarNecesidades();
console.log(P3.necesidades)
let test1 = document.createElement("P");
let nece = P3.necesidadesFinales;
let necenf = P3.necesidades;
test1.innerHTML = `NF: ${nece}; N: ${necenf}`;
popsIndex.appendChild(test1)
P3.llenarNecesidades(productos, empresas);
let test2 = document.createElement("P");
test2.innerHTML = `Necesidades insatisfechas: ${P3.necesidadesInsatisfechas}`;
popsIndex.appendChild(test2);

/*
Estado actual:
La función llenar necesidades no funciona porque al llamar a la función
comprarBien() esta no compra los bienes
*/