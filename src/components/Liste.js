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
                                <h1>Se Connecter</h1>
                            </div>
                            <br></br>
                                <div class="content">
                                    <div class="parcelle"><input type="text" class="input1" placeholder="Parcelle"></input></div>
                                    <div class="culture"><input type="text"  class="input2" placeholder="Culture"></input></div>
                                    <div class="proprio"><input type="text"  class="input2" placeholder="Propriétaire"></input></div>
                                    <div class="butt"><input type="submit"  class="btt" placeholder="Propeiétaire"></input></div>

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
  