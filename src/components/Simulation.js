import {produit} from '../data';
import Items from './Items';
const Liste= () => {
    return (
        <div>
            <section >
                <header>
                </header>
                <nav></nav>
                    <main>  
                    <div id="bloc2">
                            <div class="connection">
                                <h1>Se Deconnecter</h1>
                            </div>
                            <br></br>
                                <div class="content">
                                        <div className="title"><h1>Vos Simulations</h1></div>
                                    <br></br>
                                                <div className="product-row">
                                                    {
                                                        produit.map((prod)=>(
                                                            <Items produit={prod}/>
                                                        ))
                                                    }
                                                </div>
                                </div>
                               
                        </div>
                    </main>
                <footer></footer>
            </section>
        </div>
    );
  };
  export default Liste;
  