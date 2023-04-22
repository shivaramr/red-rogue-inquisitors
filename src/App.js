import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingPage from "./Components/LoadingPage";
import Layout from "./Components/Layout";
import "./App.css";

const Home = lazy(() => import("./Pages/Home"));
const Blogs = lazy(() => import("./Pages/Blogs"));
const Players = lazy(() => import("./Pages/Players"));
const News = lazy(() => import("./Pages/News"));
const About = lazy(() => import("./Pages/About"));
const Merchandises = lazy(() => import("./Pages/Merchandises"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          {/* <Route exact path="/" element={<LoadingPage />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/players" element={<Players />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/merchandises" element={<Merchandises />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
