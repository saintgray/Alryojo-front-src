import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

const Home= lazy(()=>import('./pages/home/home'));

const Login= lazy(()=>import('./pages/common/login'));



class App extends React.Component{
    render(){
        return(
            <div id="wrap">
                <div className='gw'>
                    <Header />
                    <Suspense fallback={<div><h1>loading....</h1></div>}>
                    <Router>
                        <Routes>
                            <Route path='/' exact element={<Home/>}></Route>
                            <Route path='/login' exact element={<Login />}></Route>
                        </Routes>
                    </Router>
                    </Suspense>
                </div>
                <Footer />                
            </div>  
        )
    }
}

export default App;