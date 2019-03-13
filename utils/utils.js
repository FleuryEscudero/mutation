'use strict'
// Metodos que seran usados por diferentes archivos

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
            console.log(`Found match, group ${groupIndex}: ${match}`);
            flag = true;
        });
    }
    return flag;
}

module.exports = {
    validateADN
}