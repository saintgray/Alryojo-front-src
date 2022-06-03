import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const Home = lazy(() => import("./pages/home/home"));
const Login = lazy(() => import("./pages/common/login"));

class App extends React.Component {
  render() {
    return (
      <Suspense fallback={
          <div>
            <h1>loading....</h1>
          </div>
        }>
        <Router>
          <div id="wrap">
            <div className="gw">
              <Header />
              <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/login" exact element={<Login />}></Route>
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </Suspense>
    );
  }
}
export default App;
