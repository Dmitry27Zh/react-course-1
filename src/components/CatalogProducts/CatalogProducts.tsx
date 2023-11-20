import useStore from '../../hooks/useStore'
import CatalogProduct from '../CatalogProduct'

export default function () {
  const { products } = useStore()
  const { data } = products

  return (
    <div className="d-flex flex-wrap gap-4">
      {data.map((product) => (
        <CatalogProduct id={product.id} price={product.price} title={product.title} key={product.id} />
      ))}
    </div>
  )
}
