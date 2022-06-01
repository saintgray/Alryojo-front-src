import React,{useState} from 'react';
import axios from 'axios';





function getLocations(){
    
        axios.get('/locations')
         .then(function(response){
            console.log(response);
            var data=response.data;
            return data;
            
         })
         .catch(function(error){
             console.log('cated err...');
             console.log(error.response);
             return null;
         });


}



function locationQuickSearch(){
    /* useState 를 통한 데이터 바인딩 */
    /* 변수를 통하여 중괄호 안에 데이터를 넣어 저장한다는 점은 같으나 useState 를 사용할 경우
    데이터의 갱신이나 변경, 추가가 일어날 시에 자동으로 해당 state 를 사용하는 가상 DOM 을 자동으로 재 랜더링을 하여
    실시간으로 데이터가 변화하는 기능을 제공하고 있다. */

    /* 최종 프로젝트에서 사용했던 MySQL Database 에서 지역 테이블의 모든 정보를 받아와서 출력해보자 */

    /* axios 라이브러리를 사용하여 JQuery 와 유사한 문법으로 서버와 비동기 통신을 할 수 있지만
     CORS 정책으로 인해 요청이 block 되는 점을 해결하여야 한다.
     
        CORS 정책 : 브라우저마다 정하는 교차 출처 리소스 공유에 관한 정책 (Cross origin resource sharing ) 
        우리가 만든 react App 은 localhost:3000 이라는 주소를 가지고 있으나
        요청하려는 주소는 localhost:8080 으로 요청했기 때문에 요청을 거부하는 브라우저 정책이다.(다른 출처에 관한 데이터 공유 금지) 
        
        해결하는 방법은 React 단에서, 혹은 Spring 단에서 해결할 수 있으나(pacakage.json 에서 proxy 설정) 전자의 경우 개발 서버에서는 적용되지만
        실제 서비스에서는 적용되지 않기 때문에 Spring 단에서 설정해주어야 한다.
        
        Spring 단에서 설정하는 방법은 다음과 같다.
        WebMvcConfigurationSupport 클래스를 상속하는 클래스 파일 생성
        WebMvcConfigurationSupport 의 addCorsMapping 메소드를 오버라이딩 하여 
        기본으로 설정된 어떤 도메인을 허가할지 커스터마이징 하면 된다 (allowedOrigins)
        그리고 어떤 방식으로 들어오는 요청에 대해서 허가할 지도 설정이 가능하다 (allowedMethod)
        */
        
    getLocations();

        

        


    

   // let [location,setLocation] =  useState(getLocations);
   // var locArr=location;
    /* for(let i=0; i<location.length; i++){
        locArr.push(<div className="mx-3 my-2">
                        <span className="d-none">location[i]</span>
                        <span className="locName btn btn-orange rounded-pill"></span>
                    </div>
                        );
    } */

    return(

       
        <div></div>
           

    );
}

export default locationQuickSearch