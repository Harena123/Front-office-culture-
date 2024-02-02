const Page= () => {
    return (
        <div>
            <section id="page">
                <header>
                </header>
                <nav></nav>
                    <main>  
                    <div id="bloc">
                            <div class="co">
                                <h1>Se connecter</h1>
                            </div>

                            <form class="login" action="" method="post"> 
                                    <div class="user"><label for="username">Username :</label>
                                        <input type="text" name="username" id="username" placeholder=" Enter your email..." />
                                    </div>
                                    <div class="pass"> <label for="password">Password :</label> 
                                        <input type="password" name="password" id="password" placeholder=" Enter your password..." />
                                    </div>
                                            <div class="actions">
                                                <input type="submit" name="login" value="Valider" /> 
                                            </div>
                            </form>

                    </div>
                    </main>
                <footer></footer>
            </section>
        </div>
    );
  };
  
  export default Page;
  