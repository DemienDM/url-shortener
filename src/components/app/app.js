import React from "react";
import { Switch, Route, useLocation } from 'react-router-dom';

import Header from "components/header";
import MinifyPage from "components/pages/minify";
import RedirectPage from "components/pages/redirect";

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