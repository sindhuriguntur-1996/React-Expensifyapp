import React from 'react';
import {Router,Route,Switch,Link,NavLink} from 'react-router-dom';
import NotFoundPage from './../components/NotFoundPage';
import EditExpensePage from './../components/EditExpensePage';
import AddExpensePage from './../components/AddExpensePage';
import ExpenseDashBoard from './../components/ExpenseDashBoard';
import LoginPage from './../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
   
    <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true}/>
        <PrivateRoute path='/DashBoard' component={ExpenseDashBoard}/>
        <PrivateRoute path='/create' component={AddExpensePage}/>
        <PrivateRoute path='/EditExpensePage/:id' component={EditExpensePage}/>
        <Route component={NotFoundPage} />

    </Switch>
    </div>
    
    </Router>

);


export default AppRouter;
