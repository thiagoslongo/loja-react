import { useEffect, useState } from 'react'
import { apiGet } from '../services/api'

function useProdutos() {
    const [produtos, setProdutos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchProdutos() {
            setLoading(true)
            setError(null)

            try {
                const dados = await apiGet('produtos')
                setProdutos(dados)
            } catch (erro) {
                setError(erro.message)
            } finally {
                setLoading(false)
            }
        }

        fetchProdutos()
    }, [])

    return { produtos, loading, error }
}

export default useProdutos