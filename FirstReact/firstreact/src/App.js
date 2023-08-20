import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@shared/component/Header";
import Footer from "@shared/component/Footer";

const Home = lazy(() => import("./alj001/component/Main"));
const Login = lazy(() => import("./alj002/component/Login"));

class App extends Component {
  
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log(this.props);
  }
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
