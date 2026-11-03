import Card from '../common/Card'
import Button from '../common/Button'
import ProductArt from '../common/ProductArt'
import useModal from '../../hooks/useModal'

export default function ProductCard({ product }) {
  const { openProduct } = useModal()

  return (
    <Card as="article" className="group flex h-full flex-col">
      <div className="grid aspect-[1/0.82] place-items-center bg-[radial-gradient(circle_at_50%_40%,color-mix(in_srgb,var(--brand)_16%,var(--surface)),var(--surface)_70%)]">
        <ProductArt
          name={product.art}
          className="w-[56%] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col items-start gap-1.5 p-5">
        <small className="text-sm text-muted">{product.category}</small>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="mt-auto pt-2.5">
          <Button size="sm" onClick={() => openProduct(product)}>
            View details
          </Button>
        </div>
      </div>
    </Card>
  )
}
