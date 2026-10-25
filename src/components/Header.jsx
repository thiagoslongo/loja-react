import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import useCarrinho from "../hooks/useCarrinho";

function Header() {
  const { quantidadeTotal } = useCarrinho();

  return (
    <header>
      <div className="bg-[#CEBEA4] px-4 py=2">
        <div className="flex items-center gap-3">
          <Link to="/">
          <img className="h-16 w-auto" src={Logo} alt="Logo Casa Nativa" />
          </Link>
          <span className="uppercase tracking-widest text-xs">Onde o aconchego encontra o design</span>
        </div>
        <nav className="flex justify-center gap-6 py-2 font-medium">
          <Link to="/"></Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/carrinho">Carrinho {quantidadeTotal}</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
