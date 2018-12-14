import http from './http-service.js';

class AuthService {
    
    login(email, password) {
        return http.post('/auth/login', { email, password }) //ovo nam je body { email, password } - ako je post, put metoda..
            .then(({ data }) => data); //zato sto smo raspakovali response moramo ovaj then blok pisati, inace bi response raspakivali u storu
    }

    setAuthHeaders(token) {
        if(!token) { //ako se user izlogovao
            delete http.defaults.headers.common['Authorization']; //ako nema tokena onda usera izbaci iz hedera na axios instanci
            return; //izadji iz if-a
        }
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`; //setovali smo token na axios u samim hederima
    }
}

const checkForInitialToken = (authService) => { //kad reloadujemo stranicu da nam salje token
    const token = localStorage.getItem('token');
    if(token) {
        authService.setAuthHeaders(token);
    }
}


export const authService = new AuthService();

checkForInitialToken(authService);
