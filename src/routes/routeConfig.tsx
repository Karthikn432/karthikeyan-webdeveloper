import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routePath } from "./routePath";
import AppLayout from "../layouts/AppLayout";
import About from "../screens/About";
import Projects from "../screens/Projects";
import Contact from "../screens/Contact";
import NotFound from "../screens/NotFound"; import Home from "../screens/Home";
``




const RouteConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routePath.home} element={<AppLayout />}>
                    <Route path={`${routePath.app.home}`} element={<Suspense fallback={null}><Home /></Suspense>} />
                    <Route path={`${routePath.app.about}`} element={<Suspense fallback={null}><About /></Suspense>} />
                    <Route path={`${routePath.app.projects}`} element={<Suspense fallback={null}><Projects /></Suspense>} />
                    <Route path={`${routePath.app.contact}`} element={<Suspense fallback={null}><Contact /></Suspense>} />
                    <Route path='*' element={<Suspense fallback={null}><NotFound /></Suspense>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteConfig;
