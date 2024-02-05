import axios from 'axios';

const BASE_URL = 'http://localhost:8081';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/utilisateurs/login`, credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
};

export const getAllCultures = () => {
  return axios.get(`${BASE_URL}/cultures`);
};

export const addCulture = (culture) => {
  return axios.post(`${BASE_URL}/cultures`, culture);
};

export const updatePrix = (id_Culture, newPrix) => {
  return axios.put(`${BASE_URL}/cultures/${id_Culture}/updatePrix?newPrix=${newPrix}`);
};

export const getAllCultureParcelles = () => {
  return axios.get(`${BASE_URL}/culture_parcelle`);
};

export const getAllPhotoTerrains = () => {
  return axios.get(`${BASE_URL}/photo`);
};

export const getAllSimulations = () => {
  return axios.get(`${BASE_URL}/simulations`);
};

export const getAllTerrains = () => {
  return axios.get(`${BASE_URL}/terrains`);
};

export const findTerrainNonValide = () => {
  return axios.get(`${BASE_URL}/terrains/nonValide`);
};

export const findTerrainValide = () => {
  return axios.get(`${BASE_URL}/terrains/valide`);
};

export const validerTerrain = (id_Terrain) => {
  return axios.post(`${BASE_URL}/terrains/valider/${id_Terrain}`);
};

export const refuserTerrain = (id_Terrain) => {
  return axios.delete(`${BASE_URL}/terrains/${id_Terrain}/refuser`);
};

export const getAllUtilisateurs = () => {
  return axios.get(`${BASE_URL}/utilisateurs`);
};

export const getUtilisateurById = (id) => {
  return axios.get(`${BASE_URL}/utilisateurs/${id}`);
};

export const saveUtilisateur = (utilisateur) => {
  return axios.post(`${BASE_URL}/utilisateurs`, utilisateur);
};

export const deleteUtilisateur = (id) => {
  return axios.delete(`${BASE_URL}/utilisateurs/${id}`);
};

export const loginUtilisateur = (email, mdp) => {
  return axios.post(`${BASE_URL}/utilisateurs/login?email=${email}&mdp=${mdp}`);
};
