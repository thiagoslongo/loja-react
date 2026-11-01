import db from "../../db.json"

const BASE_URL = 'http://localhost:3001'
const USAR_API = import.meta.env.VITE_USAR_API === 'true'

function buscarNoDb(endpoint) {
    const [colecao, id] = endpoint.split('/')
    const lista = db[colecao]

    if(!id) {
        return lista
    }

    const item = lista.find((registro) => String(registro.id) === id)

    if (!item) {
        throw new Error(`Erro ao buscar ${endpoint}: 404`)
    }

    return item
}

export async function apiGet(endpoint) {
    if (!USAR_API) {
        return buscarNoDb(endpoint)
    }
    
    const response = await fetch(`${BASE_URL}/${endpoint}`)

    if (!response.ok) {
        throw new Error(`Erro ao buscar ${endpoint}: ${response.status}`)
    }

    return response.json()
}