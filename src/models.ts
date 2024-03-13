export interface Root {
  showcase: Showcase[]
}

export interface Showcase {
  title: string
  type: string
  imageType: string
  assets: Asset[]
}

export interface Asset {
  type: string
  id: string
  title: string
  desc: string
  images: Image[]
  params: Params
}

export interface Image {
  type: string
  url: string
}

export interface Params {
  owner: string
  age: number
  ratingCategories: any[]
  genres: Genre[]
  newlyAdded?: boolean
  year: number
  qualities: string[]
  duration?: number
  countries?: any[]
  languages?: Language[]
  credits?: Credit[]
  newEpisodes?: boolean
  lastChance?: boolean
}

export interface Genre {
  title: string
}

export interface Language {
  code: string
  type: string
  tracks: Track[]
}

export interface Track {
  audioQuality?: string
  subtitlePurpose?: string
  original?: boolean
  dubbed?: boolean
}

export interface Credit {
  role: string
  person: string
}

export interface SectionData {
  sectionSpotlight: Showcase | undefined,
  sectionMovies: Showcase | undefined,
  sectionTop: Showcase | undefined,
  sectionAustria: Showcase | undefined,
  sectionAction: Showcase | undefined,
  sectionCrime: Showcase | undefined,
}

export type Style = 'top' | 'classic'
