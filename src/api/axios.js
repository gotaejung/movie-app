// axios: json 문법으로 알아서 바꿔줌(파싱), 대체재는 Fetch API
//JavaScript에서 HTTP 요청을 보낼 수 있게 해주는 라이브러리입니다. 주로 클라이언트(브라우저) 또는 서버(Node.js)에서 API와 통신할 때 많이 사용
import axios from 'axios';
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/', 
    params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY
    }
})

export default api;