import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import NotFoundPage from './../components/NotFoundPage';
import EditExpensePage from './../components/EditExpensePage';
import AddExpensePage from './../components/AddExpensePage';
import ExpenseDashBoard from './../components/ExpenseDashboard';
import HelpPage from './../components/HelpPage';
import Header from './../components/Header';

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
        <Route path='/' component={ExpenseDashBoard} exact={true}/>
        <Route path='/create' component={AddExpensePage}/>
        <Route path='/HelpPage' component={HelpPage}/>
        <Route path='/EditExpensePage/:id' component={EditExpensePage}/>
        <Route component={NotFoundPage} />

    </Switch>
    </div>
    
    </BrowserRouter>

);


export default AppRouter;
