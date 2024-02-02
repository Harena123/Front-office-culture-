const Login= () => {
    return (
        <div>
             <section id="page">
                <header>
                </header>
                <nav></nav>
                    <main>  
                    <div id="bloc">
                            <div class="co">
                                <h1>Login</h1>
                            </div>
                                            <form class="login" action="" method="post"> 
                                        <div class="user"><label for="username">Nom :</label>
                                            <input type="text" name="username" id="username" placeholder=" Enter your email..."></input>
                                        </div>
                                        <div class="pass"> <label for="password">Prix :</label> 
                                            <input type="number" name="password" id="password" placeholder=" Enter your password..."></input>
                                        </div>
                                                <div class="actions">
                                                    <input type="submit" name="login" value="Valider"></input>
                                                </div>
                                </form>
                    </div>
                    </main>
                <footer></footer>
            </section>
        </div>
    );
  };
  
  export default Login;
  