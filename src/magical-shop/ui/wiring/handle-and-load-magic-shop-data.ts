import { getCategories } from '@/magical-shop/api/get-categories'

export const handleAndLoadMagicShopData = async (category: string) => {
  const categories = await getCategories()
  if (categories.includes(category)) return undefined
}
