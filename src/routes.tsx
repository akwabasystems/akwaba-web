import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeComponent from "./components/Home/HomeComponent";
/*import AboutComponent from "./components/About/AboutComponent";
import ContactComponent from "./components/Contact/ContactComponent";
import PlatformComponent from "./components/Platform/PlatformComponent";*/
import NotFoundComponent from "./components/NotFound/NotFoundComponent";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            {/*<Route path="/about" element={<AboutComponent />} />
            <Route path="/contact" element={<ContactComponent />} />*/}

            {/* Single route declaration that still matches /platform/<tab> */}
            {/*<Route path="/platform/*" element={<PlatformComponent />} />*/}

            <Route path="*" element={<NotFoundComponent />} />
        </Routes>
    );
}
