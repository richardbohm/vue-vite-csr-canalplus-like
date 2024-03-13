export interface Static {
  image: Image
}

export interface Image {
  replacement: Replacement
  href: string,
  type: Type
}

export interface Replacement {
  target: string
  replaceWith: string
}

export interface Type {
  landscape: string,
  portrait: string
}


export const data: Static = {
  image: {
    replacement: {
      target: 'https://static-originals.solocoo.tv',
      replaceWith: 'https://static-content.solocoo.tv/'
    },
    href: 'https://livetv.hdaustria.at/asset/',
    type: {
      landscape: 'la',
      portrait: 'po'
    }
  }
}