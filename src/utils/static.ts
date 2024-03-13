export interface Static {
  image: Image,
  fetchUrl: string
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
  },
  fetchUrl: 'https://asstatic.solocoo.tv/v1/showcase/Home?app=as'
}