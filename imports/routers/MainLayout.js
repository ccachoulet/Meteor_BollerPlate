import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import Landing from '/imports/pages/Landing'
import Signup from '/imports/pages/Signup'
import Signin from '/imports/pages/Signin'
import MyProducts from '/imports/pages/MyProducts'
import NewProduct from '/imports/pages/NewProduct'
import NotFound from '/imports/pages/NotFound'

// Admin Route

import AdminUsers from '/imports/pages/admin/AdminUsers'

function MainLayout(props) {
    return(
        <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/my_products" component={MyProducts} />
            <Route path="/new_product" component={NewProduct} />
            <Route path="/admin/users" component={AdminUsers} />
            <Route path="*" component={NotFound} />
            <Route path="/" exact component={Landing} />
        </Switch>
    )
}


export default MainLayout