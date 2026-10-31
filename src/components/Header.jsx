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
          <img className="h-24 w-auto" src={Logo} alt="Logo Casa Nativa" />
          </Link>
          <span className="uppercase tracking-widest text-xs flex-1 text-center">Onde o aconchego encontra o design</span>
        </div>
        <nav className="flex justify-center gap-6 py-2 font-medium">
          <Link className="rounded-full border border-[#4A3B32] px-4 py-1 hover:bg-[#4A3B32] hover:text-white" to="/produtos">Produtos</Link>
          <Link className="rounded-full border border-[#4A3B32] px-4 py-1 hover:bg-[#4A3B32] hover:text-white" to="/carrinho">Carrinho {quantidadeTotal}</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
