import { Route, Switch } from "wouter";

import { InitialPage } from '../pages/home';
import { Login } from '../pages/login';
import { Cadaster } from '../pages/cadaster';
import { Presentation } from '../pages/presentation';
import { PageContainer } from '../components/pageContainer';
import { UseProtectedPages } from "../hooks/useProtectedPages";


export const Routes = () => {
    return (
        <>
            <Switch>
                <PageContainer>
                    <Route path='/' component={Presentation} />
                    <Route path='/login' component={Login} />
                    <Route path='/cadaster' component={Cadaster} />

                    <UseProtectedPages>
                        <Route path='/home' component={InitialPage} />
                    </UseProtectedPages>
                </PageContainer>
            </Switch>
        </>
    )
}