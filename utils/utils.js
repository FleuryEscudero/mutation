'use strict'
// Metodos que seran usados por diferentes archivos

function hasMutation(matriz) { // este debe de ir porque es un requerimiento, viene n las instrucciones
    // bandera que validara si detecta mutacion
    let flag = true;
    // Recorremos el arreglo de manera horizontal
    matriz.forEach(adn => {
        // aqui validamos la cadena y guardamos el resultado en el modelo 
        flag = this.validateADN(adn); // si en algun momento regresa una cadena incorrecta regresara false
        console.log(adn);
        console.log(flag);
    });

    let vertical = this.getVert(matriz);
    vertical.forEach(adn => {
        // aqui validamos la cadena y guardamos el resultado en el modelo 
        flag = this.validateADN(adn); // si en algun momento regresa una cadena incorrecta regresara false
        console.log(adn);
        console.log(flag);
    });
    return flag;
}

function validateADN(adn) {
    const regex = /[ATCG]{6}/gm;

    let m;
    let flag = false;

    while ((m = regex.exec(adn)) !== null) {
        // para evitar loops infinitos en caso de no encontrar ninguna validacion correcta
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // El resultado se guarda en la variable m
        m.forEach((match, groupIndex) => {
            //console.log(`Found match, group ${groupIndex}: ${match}`);
            flag = true;
        });
    }
    return flag;
}

function getVert (matriz){
    var vertical = [];
    // Recorremos el array       
    matriz.forEach((adn1, ind) => {
     var nombre ='';
     matriz.forEach((adn) => {
        nombre += adn.substr(ind, 1);
      });
      vertical.push(nombre);
    });
    return vertical;
    console.log('aqui pase',vertical);
}

module.exports = {
    getVert,
    hasMutation,
    validateADN
}