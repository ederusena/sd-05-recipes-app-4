import React, { useState, useContext } from 'react';
import './index.css';
import AppContext from '../../context/AppContext';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [clickOk, setClickOk] = useState(false);

  // const {setUser} = useContext(AppContext);

  const emailregex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

  const clickSubmit = () => {
    // setUser(email)
    localStorage.setItem("user", {"email": email});
    localStorage.setItem("mealsToken", 1);
    localStorage.setItem("cocktailsToken", 1);
    setClickOk(true);
  }

return(

  <div>
    {clickOk && <Redirect to="/comidas" />}
    <h1 className="login">Login</h1>
    <form>
      <input
        data-testid="email-input"
        className="email"
        type="email"
        name="email"
        placeholder="Email"
        onChange={ (e)=> setEmail(e.target.value) }
      />
      <input
        data-testid="password-input"
        className="password"
        type="password"
        name="password"
        placeholder="Senha"
        onChange={ (e)=> setSenha(e.target.value) }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        className="login-btn"
        disabled={!(email.match(emailregex) && senha.length >= 6)}
        onClick={() => clickSubmit()}
        value="Entrar"
      >
        Entrar
      </button>
    </form>
  </div>
);
}

export default Login;
