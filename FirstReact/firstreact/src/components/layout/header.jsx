import './../../style/header.css';
import React,{useState} from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component{
  /* JSX 문법을 사용하여 작성 */
  /* Overview 개요에 적었듯이 class 키워드는 HTML 의 속성값과 자바스크립트의 class 키워드와 충돌이 발생하므로
     class 속성 이름은 className 으로, 더불어 inline-style의 속성을 주고자 할 때는
     변수에 스타일을 지정한 후에 {변수이름} 으로 불러와야 한다 */
  /* 단 각각의 Component 들은 하나의 큰 태그로 담아야 하며, 여러개의 큰 태그들을 사용할 수 없다. */
  render(){
    return (
      <div className="App" id="headerwrap">
        <ul className="container d-flex">
          <li className="mr-auto p-2 d-flex flex-wrap">
            <Link to='/'>
              <img src='/images/logo.svg' id="logo" />
            </Link>
            <div className="input-group inner" id="search">
                <div className="input-group-prepend">
                  <img className="input-group-text" id='searchicon' src='/images/searchicon.svg' />
                </div>
                <input id="searchbar" type="text" className="form-control" aria-label="Amount (to the nearest dollar)"
                  placeholder="어떤 서비스가 필요하세요?" />
            </div>
          </li>
        </ul>
      </div> 
    );
  }
}

export default Header;
