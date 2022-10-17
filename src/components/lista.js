import React,{useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import {listRicMorty} from "../store/api/action"

const Lista = () => {

    const dispatch = useDispatch()

    const {personagens,resp,error} = useSelector(state => ({
        personagens:state.Rickmorty.personagens,
        resp: state.Rickmorty.resp,
        error:state.Rickmorty.error,
    }))

    useEffect(() => {
        dispatch(listRicMorty())
    },[])

    return (
        <>
        {personagens.map((item,index)=>{
            return <div key={index}>
                {/* <img src={item.image}/> */}
                <h4>{item.name}</h4>
            </div> 
            
        })}
        </>
    )
}

export default Lista