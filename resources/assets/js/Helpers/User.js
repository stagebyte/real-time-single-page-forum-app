import Token from "./Token";
import AppStorage from "./AppStorage";

class User {
    login(data) {
        axios
            .post("/api/auth/login", data)
            //.then(res => console.log(res.data))
            //.then(res => {
            //console.log(res.data.access_token);
            //Token.payload(res.data.access_token);
            // })
            .then(res => this.responseAfterLogin(res))
            .catch(error => console.log(error.response.data));
    }

    // store the username and token
    responseAfterLogin(res) {
        const access_token = res.data.access_token;
        const username = res.data.user;

        if (Token.isValid(access_token)) {
            //console.log(access_token);
            AppStorage.store(username, access_token);
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();

        if (storedToken) {
            //console.log(storedToken);
            return Token.isValid(storedToken) ? true : false;
        }

        return false;
    }

    loggedIn() {
        return this.hasToken();
    }

    logout() {
        AppStorage.clear();
    }

    name() {
        if (this.loggedIn()) {
            return AppStorage.getUser();
        }
    }

    id() {
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken());
            return payload.sub;
        }
    }
}

export default User = new User();
