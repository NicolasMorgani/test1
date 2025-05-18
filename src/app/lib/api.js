export const obtenerDatos = async (pais) => {
    const api_key = process.env.API_KEY
    if (!api_key) {
        console.error('API key no está definida')
        return
    }
    try {
        const res = await fetch(`https://api.countrylayer.com/v2/name/${pais}?access_key=${api_key}&fullText=true`)
        if (!res.ok) throw new Error('Error al obtener datos')
        return res.json()
    } catch (error) {
        console.error('Error:', error)
    }

}
