import {
    LIST_RICKMORTY,
    LIST_RICKMORTY_SUCCESS,
    LIST_RICKMORTY_ERROR
} from "./actionsType"


export const listRicMorty = () =>{
    return{
        type: LIST_RICKMORTY,
        payload: []
    }
}

export const listRicMortySucces = response => {
    return{
        type: LIST_RICKMORTY_SUCCESS,
        payload: response
    }
}

export const listRicMortyError = error =>{
    return{
        type: LIST_RICKMORTY_ERROR,
        payload: error
    }
}


// export const createRicMorty = values => {
//     return{
//         type: CRIAR_RICKMORTY,
//         payload: {values}
//     }
// }