/* ./는 이 파일이 속한 폴더의 절대 경로를 나타낸다. */
import logo from './../logo.svg';
import search from './../img_searchicon.svg';
import './header.css';


let searchiconstyle={
  height:"100%"
}
let searchinputstyle={
  borderLeft: "0"
}

function Header() {
  /* JSX 문법을 사용하여 작성 */
  /* Overview 개요에 적었듯이 class 키워드는 HTML 의 속성값과 자바스크립트의 class 키워드와 충돌이 발생하므로
     class 속성 이름은 className 으로, 더불어 inline-style의 속성을 주고자 할 때는
     변수에 스타일을 지정한 후에 {변수이름} 으로 불러와야 한다 */
  return (
    <header className="App" id="headerwrap"> 
      <ul className="container d-flex">
        <li className="mr-auto p-2 d-flex flex-wrap">
          <img src={logo} id="logo" />
          <div className="input-group inner" id="search">
              <div className="input-group-prepend">
                <img className="input-group-text" style={searchiconstyle} src={search} />
              </div>
              <input id="searchbar" style={searchinputstyle} type="text" className="form-control" aria-label="Amount (to the nearest dollar)"
                placeholder="어떤 서비스가 필요하세요?" />
          </div>
        </li>
      </ul>
    </header>
  )
}






export default Header;
