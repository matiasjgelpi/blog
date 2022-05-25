export interface BlogPost {
  title: string
  movie?: Types.ObjectId
  content: string
  rating: number
  image?: string
  date: Date
}

export interface BlogPostUpdate extends Omit<BlogPost, 'date'> {
  title?: string
  movie?: Types.ObjectId
  content?: string
  rating?: number
  image?: string
}

export interface Movie {
  original_title: string
  country: string
  year: number
  duration: number
  director: string
  cast: string[]
}

export interface UpdateMovie {
  original_title?: string
  country?: string
  year?: number
  duration?: number
  director?: string
  cast?: string[]
}
