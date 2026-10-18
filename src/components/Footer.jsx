import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-conteudo">
        <p>© 2026 Casa Nativa. Todos os direitos reservados</p>
        <p>
          Projeto desenvolvido para fins educacionais - Thiago Resmini Slongo
        </p>
        <p>Qualquer dúvida entre em contato conosco pelos contatos abaixo:</p>
        <p>E-mail: contato@casanativa.com.br</p>
        <p>Telefone: (49) 3444-4444</p>
        <nav>
          <Link to="/produtos">Produtos</Link>
          <Link to="/carrinho">Carrinho</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
