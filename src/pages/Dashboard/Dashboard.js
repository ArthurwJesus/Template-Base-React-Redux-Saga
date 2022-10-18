import React from "react";
import Lista from "../../components/lista";
import ListById from "../../components/listbyId";


const Dashboard = () =>{
    return(
        <React.Fragment>
            <p>GET ALL:</p>
            <Lista/>
            <p>GET BY ID:</p>
            <ListById/>
        </React.Fragment>
    )
}

export default Dashboard
