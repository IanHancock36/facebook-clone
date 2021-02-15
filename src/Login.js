import React from "react";
import "./Login.css";
import Button from '@material-ui/core/Button';
import {auth, provider} from "./firebase"
function Login() {
  const signIn = ()=> {
    auth.signInWithPopup(provider)
    .then(result => {
      console.log(result);
    })
    .catch((error) => alert(error.message));
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIG21pheSoV74pSdOr4AuF1g4tIONePA2dLw&usqp=CAU " alt ="facebooklogo" />
       <img src ="https://img.pngio.com/facebook-login-icon-png-5-png-image-facebook-login-icon-png-1400_420.png"
            alt ="facebooklogin" />
      </div>
     
      <Button type = "submit" onClick={signIn} variant="outlined">Sign In</Button>
    </div>
  );
}

export default Login;
