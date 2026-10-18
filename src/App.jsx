import { Routes, Route, Navigate } from "react-router-dom"

import Layout from './components/Layout'
import Produtos from './pages/Produtos'
import Carrinho from './pages/Carrinho'
import DetalheProduto from './pages/DetalheProduto'
import Falha from './pages/Falha'
import NaoEncontrada from './pages/NaoEncontrada'
import Sucesso from './pages/Sucesso'
import Pagamento from './pages/Pagamento'

function App() {

  return (
    <Routes>

      <Route element={<Layout />}>
      
      <Route path="/" element={<Navigate to="/produtos" replace />} />

      <Route path="/produtos" element={<Produtos />} />

      <Route path="/produtos/:id" element={<DetalheProduto />} />

      <Route path="/carrinho" element={<Carrinho />} />

      <Route path="/pagamento" element={<Pagamento />} />

      <Route path="/sucesso" element={<Sucesso />} />

      <Route path="/falha" element={<Falha />} />

      <Route path="*" element={<NaoEncontrada />} />
      
      </Route>

    </Routes>
  )
}

export default App
