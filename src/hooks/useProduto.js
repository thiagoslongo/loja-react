import { useEffect, useState } from 'react'
import { apiGet } from '../services/api'

function useProduto(id) {
    const [produto, setProduto] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchProduto() {
            setLoading(true)
            setError(null)

            try {
                const dados = await apiGet(`produtos/${id}`)
                setProduto(dados)
            } catch (erro) {
                setError(erro.message)
            } finally {
                setLoading(false)
            }
        }

        fetchProduto()
    }, [id])

    return { produto, loading, error }
}

export default useProduto