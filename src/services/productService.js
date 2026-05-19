const API_URL = "http://localhost:4000/api"

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/productos`)
  return await response.json()
}

export const getCategories = async () => {
  const response = await fetch(`${API_URL}/categorias`)
  return await response.json()
}

export const getBrands = async () => {
  const response = await fetch(`${API_URL}/marcas`)
  return await response.json()
}