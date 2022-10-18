import {call,put,takeEvery} from "redux-saga/effects"

import {
    getPoke,
    getPokeId,
    postPoke,
    delPoke,
    putPoke
} from "../../helpers/backend"

import{
    listRicMortySucces,
    listRicMortyError,
    listRicMortyIdSuccess,
    listRicMortyIdError
} from "../api/action"

import{
    LIST_RICKMORTY,
    LIST_RICKMORTY_ID
} from "./actionsType"


function* listandoRickMorty({payload:{}}){
    try{
        const response = yield call(getPoke)
        yield put(listRicMortySucces(response.results))
    }catch(error){
        yield put(listRicMortyError(error))
    }
}

function* listandoRickMortyById({payload:{id}}){
    try{
        const response = yield call(getPokeId,id)
        yield put(listRicMortyIdSuccess(response.results))
    }catch(error){
        yield put(listRicMortyIdError(error))
    }
}

//Post Exemplo
// function* cadastroRickMorty({payload:{values}}){
//     try{
//         const response = yield call (postPoke,{
//             name:values.name
//         })

//         yield put(listRicMortySucces(response))

//     }catch(error){
//         yield put(listRicMortyError(error))
//     }
// }


// Update example
// function* updateCadastroRickMorty({payload:{id,data}}){
//     try{
//         const response = yield call(putPoke,id,{
//             name: data.name
//         })
//         yield put(listRicMortySucces(response.data))
//     }catch(error){
//         yield put(listRicMortyError(error))
//     }
// }



function* apiSaga(){
    yield takeEvery(LIST_RICKMORTY,listandoRickMorty)
    yield takeEvery(LIST_RICKMORTY_ID,listandoRickMortyById)
}

export default apiSaga
