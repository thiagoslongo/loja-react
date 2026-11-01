import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

function useCarrinho() {

    return useContext(CarrinhoContext);

}

export default useCarrinho