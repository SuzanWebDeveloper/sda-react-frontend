export type Category = {
  categoryId: string
  name: string
  slug: string
  description: string
  products: Product[]
  createdAt: string
}

export type CategoryState = {
  categories: Category[]
  //totalPages: number
  category: Category | null
  error: null | string
  isLoading: boolean
}

export type Product = {
  productId: string
  name: string
  slug: string
  image: string
  description: string
  price: number
  soldQuantity: number
  stock: number
  //color: string
  //categories: Category[]
  category: Category
  categoryId: string
  categoryName: string
  createdAt: string
}

export type ProductState = {
  products: Product[]
  totalPages: number
  product: Product | null
  error: null | string
  isLoading: boolean
}

export type User = {
  userId?: string
  name: string
  email: string
  password: string
  phone: number
  address?: string
  role?: string
}

export type UserState = {
  users: User[]
  totalPages: number
  token: null | string
  userData: null | User
  error: null | string
  isLoading: boolean
  isLoggedIn: boolean
}

export type LoginFormData = {
  email: string
  password: string
}

export type LoginData = {
  token: string
  userData: null | User
  isLoggedIn: boolean
}

export type RegisterFormData = {
  name: string
  email: string
  password: string
  phone: number
  address: string
}

export type UpdateProfileFormData = {
  name: string
  phone: number
  address: string
}

export type CreateCategoryFormData = {
  name: string
  description: string
}

export type CreateProductFormData = {
  image: FileList
  name: string
  description: string
  price: number
  stock: number
  categoryName: string
  categoryId: string
}

export type CreateProductFormBackEnd = {
  image: string
  name: string
  description: string
  price: number
  stock: number
  //categoryName: string
  categoryId: string
}

export type Order = {
  orderId: string
  date: string
  totalPrice: number
  orderStatus: string
  userName: string
}

export type OrderState = {
  orders: Order[]
  totalPages: number
  error: null | string
  isLoading: boolean
}

export type MiniDrawerState = {
  open: boolean
}