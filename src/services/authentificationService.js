import axios from 'axios';

class AuthentificationService {

    baseUrl = "http://localhost:8080/";

    authentificate(username,password) {
        return axios.post(this.baseUrl+"auth",{
            username:username,
            password:password
        });
    }
}

export default AuthentificationService;