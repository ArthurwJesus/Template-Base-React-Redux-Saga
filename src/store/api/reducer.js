import {
    LIST_RICKMORTY,
    LIST_RICKMORTY_SUCCESS,
    LIST_RICKMORTY_ERROR
} from "./actionsType"

const initialState = {
    personagens: [],
    resp: "",
    error:""
}

const Rickmorty = (state = initialState,action) => {
    switch(action.type){
        case LIST_RICKMORTY:
            state ={
                ...state,
                personagens: [],
            }
        break

        case LIST_RICKMORTY_SUCCESS:
            state={
                ...state,
                resp: action.payload,
                personagens:action.payload
            }
        break

        case LIST_RICKMORTY_ERROR:
            state ={
                ...state,
                error: action.payload
            }
        break

        // case LIST_RICKMORTY_UPDATE:
        //     state ={
        //         ...state
        //     }
        // break
    }
    return state
}

export default Rickmorty