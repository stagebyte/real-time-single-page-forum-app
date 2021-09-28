class AppStorage {
    constructor() {
        let token;
        this.token;
    }
    //store user token
    storeToken(token) {
        localStorage.setItem("token", token);
    }

    // store user name
    storeUser(user) {
        localStorage.setItem("user", user);
    }

    // call storeUser and storeToken as one method
    store(user, token) {
        this.storeToken(token);
        this.storeUser(user);
    }

    // clear token when a user logs out
    clear() {
        localStorage.removeItem(token);
        localStorage.removeItem(user);
    }

    //how to know if token & user are available and get that from local storage

    getToken() {
        let token;
        //if (token) {
        return localStorage.getItem("token", token);
        //}
    }

    getUser() {
        return localStorage.getItem("user", user);
    }
}

export default AppStorage = new AppStorage();
