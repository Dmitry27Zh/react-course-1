import Products from '../../store/Products'
import { checkId } from '../../utils'

export const getProduct = (productsStore: Products, id: string) => {
  if (checkId(id)) {
    return productsStore.getById(Number(id))
  }
}
