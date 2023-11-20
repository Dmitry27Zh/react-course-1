import useStore from '../../hooks/useStore'
import CatalogProductCard from '../CatalogProductCard'

export default function () {
  const { products } = useStore()
  const { data } = products

  return (
    <div className="d-flex flex-wrap gap-4">
      {data.map((product) => (
        <CatalogProductCard id={product.id} price={product.price} title={product.title} key={product.id} />
      ))}
    </div>
  )
}
