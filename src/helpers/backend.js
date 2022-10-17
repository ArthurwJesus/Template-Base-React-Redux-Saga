import {get,post,put,del} from "./api"
import * as url from "./url"

const getPoke = config => get(url.GET_API,{headers:config})

const postPoke = data => post(url.POST_API,data)

const putPoke = (data,config,id) => put(url.PUT_API + id,data,{headers:config})

const delPoke = (data,id) => del(url.DEL_API+ id,data)


export {
    getPoke,
    postPoke,
    putPoke,
    delPoke
}