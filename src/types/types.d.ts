export interface BlogPost {
  title: string
  movie?: Types.ObjectId
  content: string
  rating: number
  image?: string
  date: Date
}

export interface Movie {
  original_title: string
  country: string
  year: number
  duration: number
  director: string
  cast: string[]
}
