import {
    LIST_RICKMORTY,
    LIST_RICKMORTY_SUCCESS,
    LIST_RICKMORTY_ERROR,
    LIST_RICKMORTY_ID,
    LIST_RICKMORTY_ID_SUCCESS,
    LIST_RICKMORTY_ID_ERROR
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

export const listRicMortyId = (id) => {
    return{
        type: LIST_RICKMORTY_ID,
        payload: {id}
    }
}

export const listRicMortyIdSuccess = response => {
    return{
        type: LIST_RICKMORTY_ID_SUCCESS,
        payload: response
    }
}

export const listRicMortyIdError = error => {
    return{
        type: LIST_RICKMORTY_ID_ERROR,
        payload: error
    }
}


// export const createRicMorty = values => {
//     return{
//         type: CRIAR_RICKMORTY,
//         payload: {values}
//     }
// }
