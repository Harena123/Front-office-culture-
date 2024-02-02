import React from 'react';
const Culture= () => {
    return (

<div>
            <div id="wrapper">
    <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
                <div class="brand-logo">
                <a href="index.html">
                </a>
            </div>
        <ul class="sidebar-menu do-nicescrol">
            <li class="sidebar-header"></li>
                    <li>
                    <a href="Dashboard.js">
                        <i class="zmdi zmdi-view-dashboard"></i> <span>Dashboard</span>
                    </a>
                    </li>
    
                    <li  class="active">
                    <a href="Culture.js" class="active">
                        <i class="zmdi zmdi-invert-colors"></i> <span>Culture</span>
                    </a>
                    </li>

                    <li>
                    <a href="Validation.js">
                        <i class="zmdi zmdi-grid"></i> <span>Validation</span>
                    </a>
                    </li>
                    <li >
                    <a href="Login.js">
                        <i class="zmdi zmdi-lock"></i> <span>Log out</span>
                    </a>
                    </li>
        </ul>
    </div>
            <section id="page">
                <header>
                </header>
                <nav></nav>
                    <main>  
                    <div id="bloc">
                            <div class="co">
                                <h1>Insertion Culture</h1>
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
</div>

    );
  };
  
  export default Culture;
  