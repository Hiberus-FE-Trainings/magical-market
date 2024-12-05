import { getCategories } from '@/magical-shop/api/get-categories'
import { getItemsByCategory } from '@/magical-shop/api/get-items-by-category'
import { notFound } from 'next/navigation'
import { MagicShopProps } from '../magic-shop.wrapper'

export const handleAndLoadMagicShopData = async (
  category: string,
): Promise<MagicShopProps> => {
  const categories = await getCategories()
  if (categories.includes(category)) return notFound()

  const items = await getItemsByCategory(category)
  return { items, categories, categoryFromUrl: category }
}
