import React from "react";
import Header from "../header";
import MinifyPage from "../pages/minify";
import RedirectPage from "../pages/redirect";
import { Switch, Route, useLocation } from 'react-router-dom';

const App = () => {
    return (
        <main className="container">
            <Header />
            <section className="content">
                <Switch>
                    <Route path="/" exact>
                        <MinifyPage />
                    </Route>
                    <Route>
                        <RedirectPage path={useLocation()}/>
                    </Route>
                </Switch>
            </section>
        </main>
    );
};

export default App;