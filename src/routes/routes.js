import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom"

import Login from "../pages/Auth/Login"

import Dashboard from "../pages/Dashboard/Dashboard"

const RoutesApp = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path='/dashboard' element={<Dashboard/>} />
            {/* <Route path="*" element={<Error/>} /> */}
        </Routes>
    
    )
}

export default RoutesApp