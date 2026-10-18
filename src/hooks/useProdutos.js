import{ useEffect, useState }  from 'react'
import { apiGet } from '../services/api'

function useProdutos() {
    const [produtos, setProdutos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchProdutos() {
            setLoading(true)

            apiGet('produtos')
                .then((dados) => setProdutos(dados))
                .catch((error) => setError(error.message))
                .finally(() => setLoading(false))
        }
    
        fetchProdutos()
    }, [])

    return { produtos, loading, error }
}

export default useProdutos