import {call,put,takeEvery} from "redux-saga/effects"

import {
    getPoke,
    postPoke,
    delPoke,
    putPoke
} from "../../helpers/backend"

import{
    listRicMorty,
    listRicMortySucces,
    listRicMortyError
} from "../api/action"

import{
    LIST_RICKMORTY,
} from "./actionsType"


function* listandoRickMorty({payload:{}}){
    try{
        const response = yield call(getPoke)
        yield put(listRicMortySucces(response.results))
    }catch(error){
        yield put(listRicMortyError(error))
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
function* updateCadastroRickMorty({payload:{id,data}}){
    try{
        const response = yield call(putPoke,id,{
            name: data.name
        })
        yield put(listRicMortySucces(response.data))
    }catch(error){
        yield put(listRicMortyError(error))
    }
}



function* apiSaga(){
    yield takeEvery(LIST_RICKMORTY,listandoRickMorty)
}

export default apiSaga