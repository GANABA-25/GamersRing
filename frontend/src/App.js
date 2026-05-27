import { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./fonts/Font.css";

import HomePage from "./pages/homepage/HomePage";
const Ps3Games = lazy(() => import("./pages/ps3/Ps3Games"));
const Ps4Games = lazy(() => import("./pages/ps4/Ps4Games"));
const Ps5Games = lazy(() => import("./pages/ps5/Ps5Games"));
const Downloads = lazy(() => import("./pages/downloads/Downloads"));
const SearchResultPage = lazy(() => import("./pages/SearchResultPage"));

function App() {
  return (
    <Fragment>
      <BrowserRouter fallback={<div>Loading....</div>}>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Ps3Games" element={<Ps3Games />} />
            <Route path="/Ps4Games" element={<Ps4Games />} />
            <Route path="/Ps5Games" element={<Ps5Games />} />
            <Route path="/Downloads" element={<Downloads />} />
            <Route path="/SearchResultPage" element={<SearchResultPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
