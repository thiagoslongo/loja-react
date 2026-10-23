import{ useEffect, useState }  from 'react'
import { apiGet } from '../services/api'

function useProduto(id) {
    const [produto, setProduto] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchProduto() {
            setLoading(true)

            apiGet(`produtos/${id}`)
                .then((dados) => setProduto(dados))
                .catch((error) => setError(error.message))
                .finally(() => setLoading(false))
        }
    
        fetchProduto()
    }, [id])

    return { produto, loading, error }
}

export default useProduto