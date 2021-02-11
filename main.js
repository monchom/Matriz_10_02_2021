


// const array = [
//     ["Lunes","Dar Clases"],
//     "Martes",
//     "Miercoles",
//     "Jueves",
//     "Sabado",
//     "Domingo"
// ];

// int array = int[2][2];


const matriz = [];
let bandera = true, vacion = null;
for (let i = 0; i <= 10; i++) {
    let data = new Array(11).fill(vacion,0,11);
    for (let x = 0; x <= 10; x++) {
        if(i==3 && bandera){
            data = new Array(5).fill(vacion,0,6);
            data.unshift(vacion,"Adrian","Apellido",50,true,"Calle 102c");
            bandera = false;
        }
    }
    matriz[i] = data;
}
console.log(matriz); 



