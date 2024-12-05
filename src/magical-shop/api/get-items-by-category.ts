import { Item } from '../domain/items'

type ApiItem = {
  id: string
  approval_status: string
  category: string
  description: string
  image_url: string
  name: string
  price: number
  seller_id: number
  seller_name: string
}

const ITEMS_URL = 'localhost:8001/items/category'

export const getItemsByCategory = async (category: string): Promise<Item[]> => {
  const items = (await fetch(`${ITEMS_URL}/${category}`).then((res) =>
    res.json(),
  )) as ApiItem[]
  return items.map((item) => ({
    id: item.id,
    image: item.image_url,
    price: item.price,
    title: item.name,
    description: item.description,
    sellerId: item.seller_id,
    sellerName: item.seller_name,
  }))
}
