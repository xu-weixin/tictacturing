import auth0 from 'auth0-js';

const authDomain = 'xuweixin.auth0.com';
const clientID = 'cU5hYRTxdzS3StZ5VcRujdRJIUstgETT';

export default class Auth {
	constructor(){
	this.auth0 = new auth0.WebAuth({
	    domain: authDomain,
	    clientID,
	    redirectUri: 'http://localhost:3000/profile',
	    audience: 'https://xuweixin.auth0.com/userinfo',
	    responseType: 'token id_token',
	    scope: 'openid email'
	  });
	}
  
	handleAuthentication = () => {
		this.auth0.parseHash((err,authResult)=>{
			if(authResult && authResult.accessToken && authResult.idToken){
				this.setSession(authResult);
				history.replace('/home');
			} else if(err) {
				history.replace('/home');
				console.log(err);
			}
		})
	}

	setSession = (authResult) => {
		 // Set the time that the access token will expire at
	    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
	    localStorage.setItem('access_token', authResult.accessToken);
	    localStorage.setItem('id_token', authResult.idToken);
	    localStorage.setItem('expires_at', expiresAt);
	    // navigate to the home route
	    history.replace('/home');
	}

	logout=()=> {
	    // Clear access token and ID token from local storage
	    localStorage.removeItem('access_token');
	    localStorage.removeItem('id_token');
	    localStorage.removeItem('expires_at');
	    // navigate to the home route
	    history.replace('/home');
	  }

	  isAuthenticated=()=> {
	    // Check whether the current time is past the 
	    // access token's expiry time
	    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
	    return new Date().getTime() < expiresAt;
	  }

  login=()=> {
    this.auth0.authorize();
  }
}