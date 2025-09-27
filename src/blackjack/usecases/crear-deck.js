import _ from 'underscore';

// export const miNombre = 'Juan';

/**
 * esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEpeciales ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEpeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0)
         throw new error('TiposDeCarta es obligatorio como un arreglo de string');

    if (!tiposEpeciales || tiposEpeciales.length === 0)
         throw new error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEpeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;