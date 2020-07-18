import React from "react";
import * as Pages from  '../Pages/index'

import {
  Switch,
  Route,
} from "react-router-dom";

function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Pages.Home}/>
            <Route path="/news" exact component={Pages.News}/>
            <Route path="/blog" exact component={Pages.Blog}/>
            <Route path="*" exact component={Pages.NotFound}/>            
        </Switch>
    )
}
export default Routes