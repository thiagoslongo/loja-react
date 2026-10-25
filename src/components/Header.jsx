import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import useCarrinho from "../hooks/useCarrinho";

function Header() {
  const {quantidadeTotal} = useCarrinho()

  return (
    <header className="header">
      <div className="header-conteudo">
        <nav>
          <Link to="/">
            <img src={Logo} alt="Logo Casa Nativa" />
          </Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/carrinho">Carrinho {quantidadeTotal}</Link>
        </nav>
        <span className="nome-loja">Onde o aconchego encontra o design</span>
      </div>
    </header>
  );
}

export default Header;
