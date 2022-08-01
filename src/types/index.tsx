export type Item = {
  id: string
  title: string
  price: number
  thumbnail: string
}

export type Search = {
  site_id: string
  query?: string
  results: Item[]
}
