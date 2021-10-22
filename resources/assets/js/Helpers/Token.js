class Token {
    isValid(token) {
        const payload = this.payload(token);
        if (payload) {
            return payload.iss == "http://127.0.0.1:8000/api/auth/login" ||
                "http://127.0.0.1:8000/api/auth/signup"
                ? //return payload.iss == "http://realtimeapp.dey/api/auth/login"
                  true
                : false;
        }

        return false;
    }

    // get the payload
    payload(token) {
        const payload = token.split(".")[1];
        //console.log(token);
        //console.log(payload);
        //console.log(this.decode(payload));
        return this.decode(payload);
    }

    decode(payload) {
        return JSON.parse(atob(payload));
    }
}

export default Token = new Token();
