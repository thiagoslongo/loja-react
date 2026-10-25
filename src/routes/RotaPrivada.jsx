import { Navigate } from "react-router-dom";
import useCarrinho from "../hooks/useCarrinho";

function RotaPrivada({ children }) {
  const { itens } = useCarrinho();

  if (itens.length === 0) {
    return <Navigate to="/carrinho" replace />;
  }

  return <>{children}</>;
}

export default RotaPrivada;
