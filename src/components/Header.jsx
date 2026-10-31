import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import useCarrinho from "../hooks/useCarrinho";

const linkBase =
  "rounded-full border border-[#4B3F33] px-3 py-1 text-sm";

function Header() {
  const { quantidadeTotal } = useCarrinho();

  return (
    <header className="bg-[#CEBEA4]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
        <NavLink to="/produtos">
          <img className="h-16 w-auto sm:h-20" src={Logo} alt="Logo Casa Nativa" />
        </NavLink>
        <p className="hidden text-xs uppercase tracking-widest text-[#4B3F33] lg:block">
          Onde o aconchego encontra o design
        </p>

        <nav
          aria-label="Principal"
          className="flex items-center gap-2 sm:gap-3"
        >
          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-[#4B3F33] text-white" : ""}`
            }
          >
            Produtos
          </NavLink>

          <NavLink
            to="/carrinho"
            className={({ isActive }) =>
              `${linkBase} flex items-center gap-2 ${isActive ? "bg-[#4B3F33] text-white" : ""}`
            }
          >
            Carrinho
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#4B3F33] px-1 text-xs text-white">
              {quantidadeTotal}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
