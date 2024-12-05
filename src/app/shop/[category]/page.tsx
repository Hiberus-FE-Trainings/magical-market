import MagicShopWrapper from '@/magical-shop/ui/magic-shop.wrapper'
import { handleAndLoadMagicShopData } from '@/magical-shop/ui/wiring/handle-and-load-magic-shop-data'

export default async function MagicShopRSC({
  params,
}: {
  params: { category: string }
}) {
  const { category } = params

  const data = handleAndLoadMagicShopData(category)

  return <MagicShopWrapper {...data} categoryFromUrl={category} />
}
