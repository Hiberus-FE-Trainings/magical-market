import { Item } from '@/magical-shop/domain/items'
import CategoryTabBar from '@/magical-shop/ui/category-tabbar/category-tabbar'
import { ItemsContainer } from '@/magical-shop/ui/items-container/items-container'
import { Category } from '../domain/catergory'

export type MagicShopProps = {
  categories: Category[]
  categoryFromUrl: string
  items: Item[]
}

export default function MagicShopWrapper({
  categories,
  categoryFromUrl,
  items,
}: MagicShopProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>🪄 Diagon Alley Magic Market</h1>
      <p>
        Welcome to the Magic Market, where youll find the most fascinating items
        for witches, wizards, and all lovers of magic.
      </p>
      <CategoryTabBar
        categories={categories}
        categoryFromURL={categoryFromUrl}
      />
      <ItemsContainer items={items} />
    </div>
  )
}
