import decode from 'jwt-decode'; // required to decode and read tokens

class AuthService {

    login(sessionToken) {
        // Saves user token to localStorage and reloads the application for logged in status to take effect
        localStorage.setItem('session_token', sessionToken);
        window.location.assign('/app/projects');
    };

    // gets token from local storage
    getToken() {
        return localStorage.getItem('session_token')
    };
    
    // decode the user data from the token
    getUser() {
        return decode(this.getToken());
    };

    // returns true if token exists
    loggedIn() {
        const token = this.getToken();
        return token ? true : false;
    };

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('session_token');
        // this will reload the page and reset the state of the application
        window.location.reload();
    };
};

export default new AuthService();