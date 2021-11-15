import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import inicio from '../Inicio/inicio';
import login from '../login/login';
import Ruta_error from '../ruta-error/ruta-error';




export default function AppRouter(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={inicio} />
                <Route path="/login" component={login} />
                <Route path="/*" component={Ruta_error} />
            </Switch>
        </Router>
    )
}
