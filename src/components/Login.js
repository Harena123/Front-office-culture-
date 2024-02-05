import React, { useState } from "react";
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("Jack@gmail.com");
  const [mdp, setPassword] = useState("J1");

  const handleLogin = () => {
    // Perform any client-side validation if needed

    // Call the onLogin prop with user credentials
    onLogin({ email, mdp });
  };

  return (
    <div>
      <section id="page">
        <header></header>
        <nav></nav>
        <main>
          <div id="bloc">
            <div className="co">
              <h1>Login</h1>
            </div>
            <div className="user">
              <label htmlFor="username">Nom :</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="username"
                id="username"
                placeholder=" Enter your email..."
              ></input>
            </div>
            <div className="pass">
              {" "}
              <label htmlFor="password">Mot de passe :</label>
              <input
                type="password"
                value={mdp}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
                placeholder=" Enter your password..."
              ></input>
            </div>
            <div className="actions">
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </main>
        <footer></footer>
      </section>
    </div>
  );
};

export default Login;
