import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import routes from '~/routes';

import DefaultLayout from './components/DefaultLayout';

function App() {
    const adminRoutes = routes.adminRoutes;
    return (
        <Router>
            <div className="App">
                <Routes>
                    {adminRoutes.map((route, index) => {
                        const Page = route.component;
                        if (!route.defaultLayout) {
                            return <Route key={index} path={route.path} element={<Page />} />;
                        } else {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <DefaultLayout>
                                            <Page />
                                        </DefaultLayout>
                                    }
                                />
                            );
                        }
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
