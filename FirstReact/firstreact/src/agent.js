import axios from 'axios';

const agent = axios.create({
    baseUrL : 'http://localhost/',
    headers:{
        Authorization : ''
    }
});



// config interceptors
agent.interceptors.request.use(request =>{
    console.log('request is intercepted..');
    console.log('method is .. '+request.method);

    let token = localStorage.getItem('jwt');
    token = token==null?'':token;
    
    // request.headers.Authorization='Bearer '+token;
    console.log(request.headers);
    return request;
})
agent.interceptors.response.use(response =>{
    console.log('response status is ... ' + response.status);
})

export default agent;