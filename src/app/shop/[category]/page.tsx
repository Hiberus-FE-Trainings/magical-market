import { ItemsContainer } from '@/components/items-container/items-container'

export default function MagicShop() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>🪄 Diagon Alley Magic Market</h1>
      <p>
        Welcome to the Magic Market, where you'll find the most fascinating
        items for witches, wizards, and all lovers of magic.
      </p>
      <ItemsContainer />
    </div>
  )
}
