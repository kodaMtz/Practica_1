const objVehiculo = {
    color: "rojo",
    modelo: "Vento",
    marca: "Ferrari",
    km: 345,

    mostrarDatos: function(){
        console.log("Yo muestro los datos!!");
    }
}

objVehiculo.mostrarDatos();
console.log(objVehiculo.modelo);

const electronico = new Object();
electronico.marca = "Iphone";
electronico.modelo = "7789";
electronico.ram = 12;
electronico.dd = 256;

electronico.getModelo = function(){
    console.log("El modelo del celular es: " + this.modelo);
}

console.log(electronico);
electronico.getModelo();
console.log(electronico.marca);



class Proyecto {
    constructor(nombre, duracion, responsable, costo, tipoProyecto){
        this.nombre = nombre;
        this.duracion = duracion;
        this.responsable = responsable
        this.costo = costo;
        this.tipoProyecto= tipoProyecto;
    }

    getNombreProyecto(){
        //return this.nombre;  <--aqui solo devolveremos el dato
        return `El nombre del proyecto es ${this.nombre}`; 
    }

}

//CREACION DE UN OBJETO EN JS
const proyecto1 = new Proyecto();
console.log(proyecto1);

const proyecto2 = new Proyecto("Vivienda", 8, "Keyla",2000,"Local");
console.log(proyecto2);

console.log(proyecto2.getNombreProyecto());