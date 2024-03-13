import {Root} from "../models.ts";
import {data} from "./static.ts";

export const toJson = (response: Response) => response.json()

export const transform = (root: Root) => {
  const target = data.image.replacement.target
  const replaceWith = data.image.replacement.replaceWith

  root.showcase.forEach((showcase, index) => {
    if (index === 0) {
      showcase.imageType = 'la';
    }
    if (index === 4 || index === 5) {
      showcase.imageType = 'la';
    }
    const imageType = showcase.imageType
    showcase.assets.forEach(asset => {
      asset.images = asset.images.filter(image => image.type === imageType)
      asset.images.forEach(image => {
        image.url = image.url.replace(target, replaceWith)
      })
    })
  })
  return root
}
