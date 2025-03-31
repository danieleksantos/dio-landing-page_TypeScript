import { useContext } from "react";
import { AuthContext } from "../context/auth";

export const useAuth = () => {
     const context =  useContext(AuthContext);

     if (!context) {
        throw Error ('Não existe o contexto de autenticação')
     }
     
     return context;
}