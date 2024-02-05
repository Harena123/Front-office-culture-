import React, { useState } from "react";
import { addCulture } from "../springApi";
import { useNavigate } from "react-router-dom";

const Culture= () => {
    const navigate = useNavigate();
    const [nom, setNom] = useState("");
    const [prix, setPrix] = useState("");
  
    const handleInsertCulture = async () => {
      try {
        // Ensure that both nom and prix are entered
        if (nom !== "" && prix !== "" && prix >= 0) {
          // Use the addCulture function to insert a new culture
          const response = await addCulture({ nom, prix: parseFloat(prix) });
  
          // Log the inserted culture
          console.log("Inserted Culture:", response.data);
  
          // Clear the form fields
          setNom("");
          setPrix("");
          navigate("/culture");
        } else {
          console.error("Please enter a name and price for the new culture.");
        }
      } catch (error) {
        console.error("Error inserting culture:", error);
      }
    };
  
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
            <header></header>
        <nav></nav>
        <main>
          <div id="bloc">
            <div className="co">
              <h1>Insertion Culture</h1>
            </div>

            <form className="login" method="post">
              <div className="user">
                <label htmlFor="username">Name :</label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  placeholder=" Enter culture name..."
                />
              </div>
              <div className="pass">
                {" "}
                <label htmlFor="password">Price :</label>
                <input
                  type="number"
                  value={prix}
                  onChange={(e) => setPrix(e.target.value)}
                  placeholder=" Enter your price..."
                />
              </div>
              <div className="actions">
                <button type="button" onClick={handleInsertCulture}>
                  Insert Culture
                </button>
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
  