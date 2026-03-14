import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomeComponent = lazy(() => import("./components/Home/HomeComponent"));
const AboutComponent = lazy(() => import("./components/About/AboutComponent"));
const ContactComponent = lazy(() => import("./components/Contact/ContactComponent"));
const PlatformComponent = lazy(() => import("./components/Platform/PlatformComponent"));
const NotFoundComponent = lazy(() => import("./components/NotFound/NotFoundComponent"));


export function AppRoutes() {
    return (
        <Suspense fallback={<div />}>
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/about" element={<AboutComponent />} />
                <Route path="/contact" element={<ContactComponent />} />

                {/* Single route declaration that still matches /platform/<tab> */}
                <Route path="/platform/*" element={<PlatformComponent />} />

                <Route path="*" element={<NotFoundComponent />} />
            </Routes>
        </Suspense>
    );
}
