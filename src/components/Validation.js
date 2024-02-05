import React, { useState, useEffect } from "react";
import {
  findTerrainNonValide,
  validerTerrain,
  refuserTerrain,
} from "../springApi";

const Validation= () => {
  const [nonValideTerrains, setNonValideTerrains] = useState([]);

  useEffect(() => {
    // Fetch non-validated terrains when the component mounts
    const fetchNonValideTerrains = async () => {
      try {
        const response = await findTerrainNonValide();
        setNonValideTerrains(response.data);
      } catch (error) {
        console.error("Error fetching non-validated terrains:", error);
      }
    };

    fetchNonValideTerrains();
  }, []);

  const handleValiderTerrain = async (id) => {
    try {
      console.log(id);
      // Use validerTerrain function to validate the terrain
      await validerTerrain(id);

      // Update the list of non-validated terrains
      const updatedTerrains = nonValideTerrains.filter(
        (terrain) => terrain.id_Terrain !== id
      );
      setNonValideTerrains(updatedTerrains);

      console.log(`Terrain with ID ${id} has been validated.`);
    } catch (error) {
      console.error("Error validating terrain:", error);
    }
  };

  const handleRefuserTerrain = async (id) => {
    try {
      // Use refuserTerrain function to refuse the terrain
      await refuserTerrain(id);

      // Update the list of non-validated terrains
      const updatedTerrains = nonValideTerrains.filter(
        (terrain) => terrain.id_Terrain !== id
      );
      setNonValideTerrains(updatedTerrains);

      console.log(`Terrain with ID ${id} has been refused.`);
    } catch (error) {
      console.error("Error refusing terrain:", error);
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
    
                    <li  >
                    <a href="Culture.js" >
                        <i class="zmdi zmdi-invert-colors"></i> <span>Culture</span>
                    </a>
                    </li>

                    <li class="active">
                    <a href="Validation.js" class="active">
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
                    <div class="card-body">
                <h2 class="card-title">Validation d'insertion terrain</h2>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Invoce</th>
                      <th>Customer</th>
                      <th>Ship</th>
                      <th>Price</th>
                      <th>Price</th>
                      <th>Price</th>

                    </tr>
                  </thead>
                  <tbody>
                    {nonValideTerrains.map((terrain) => (
                      <tr key={terrain.id_Terrain}>
                      <th scope="row">1001</th>
                        <td>{terrain.description}</td>
                        <td>{terrain.nomUtilisateur}</td>
                        <td>{terrain.prix}</td>
                        <td>{terrain.nb_Parcelle}</td>
                        <td>
                          <button
                            onClick={() =>
                              handleValiderTerrain(terrain.id_Terrain)
                            }
                          >
                            Valider
                          </button>
                          <button
                            onClick={() =>
                              handleRefuserTerrain(terrain.id_Terrain)
                            }
                          >
                            Refuser
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
      </div>
      </div>

                    </main>
                <footer></footer>
            </section>
</div>
</div>

    );
  };
  
  export default Validation;
  