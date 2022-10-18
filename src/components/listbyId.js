import React,{useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux"
import {
    Form,
    Button,
    Card,
    Container
} from "react-bootstrap"
import {listRicMortyId} from "../store/api/action"

const ListById = () => {
    const [id,setId] = useState("")

    const dispatch = useDispatch()

    const {personagemId,resp,error} = useSelector(state => ({
        personagemId:state.Rickmorty.personagemId,
        resp: state.Rickmorty.resp,
        error:state.Rickmorty.error,
    }))

    //Pegando por id
    const getById = () => {
        dispatch(listRicMortyId(id))
    }

    return(
        <React.Fragment>

            <Container>

                <Card>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="text" placeholder="Enter id" onChange={(texto) => setId(texto.target.value)}/>
                            </Form.Group>
                            <Button variant="primary" onClick={getById}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                {personagemId !== [] ? 
                personagemId.map((item,index)=>{
                    return <div key={index}>
                        <p>{item.name}</p>
                    </div>
                })
                :null}
            </Container>

        </React.Fragment>
    )
}

export default ListById
