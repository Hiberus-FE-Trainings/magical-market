type ApiCategory = {
  id: string
  name: string
  description: string
}

const CATEGORIES_URL = 'http://localhost:8003/categories'
export const getCategories = async () => {
  const categories = (await fetch(CATEGORIES_URL).then((res) =>
    res.json(),
  )) as ApiCategory[]
  return categories.map((category) => category.name.toLowerCase())
}
