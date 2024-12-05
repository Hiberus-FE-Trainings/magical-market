import CategoryTabBar from '@/components/category-tabbar/category-tabbar'
import { ItemsContainer } from '@/components/items-container/items-container'

export default function MagicShop({
  params,
}: {
  params: { category: string }
}) {
  const { category } = params

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>🪄 Diagon Alley Magic Market</h1>
      <p>
        Welcome to the Magic Market, where youll find the most fascinating items
        for witches, wizards, and all lovers of magic.
      </p>
      <ItemsContainer />
      <CategoryTabBar categoryFromURL={category} />
    </div>
  )
}
