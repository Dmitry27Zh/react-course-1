import { Product } from '../../types'

export type Props = Omit<Product, 'id' | 'rest'>
