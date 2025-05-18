

export async function getData() {
  try {
    const api_key = process.env.API_KEY

    const res = await fetch(`https://jsonplaceholder.typicode.com/${api_key}`)
  
    if (!res.ok) throw new Error('Error al obtener datos')
    return res.json()
  }
  catch (error) {
    console.error('Error:', error)
  }
  
  }