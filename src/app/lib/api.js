export const obtenerDatos = async () => {
    try {
        const res = await fetch(`https://api.countrylayer.com/v2/name/argentina?access_key=${process.env.API_KEY}&fullText=true`)
        if (!res.ok) throw new Error('Error al obtener datos')
        return res.json()
    } catch (error) {
        console.error('Error:', error)
    }

}
