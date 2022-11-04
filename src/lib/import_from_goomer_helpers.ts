import * as types from "../API"

export const goomerInfoUrl = (link: string) =>
  `https://api-go.goomer.app/v2/establishments/${goomerStoreSlug(link)}/info?mode=slug&provider=ggo`

const goomerStoreSlug = (link: string) => link.split("//")[1].split(".")[0]

export const getGroups = (
  placeId: string,
  products: any,
  groups: types.CreateMenuGroupInput[] = []
): types.CreateMenuGroupInput[] => {
  if (products.length == 0) {
    return groups
  }

  const group: types.CreateMenuGroupInput = {
    name: products[0].group_name,
    items: [],
    placeMenuGroupsId: placeId,
  }

  for (let i = 0; i < products.length; i++) {
    const product = products[i]
    if (product.group_name !== group.name) continue

    if (!product.images) debugger
    const item: types.MenuItemInput = {
      name: product.name,
      description: product.description,
      price: product.price_tag,
      images: {
        small: product.images.small,
        medium: product.images.medium,
        large: product.images.large,
      },
    }
    group.items?.push(item)
    products.splice(i, 1)
    i--
  }

  groups.push(group)

  return getGroups(placeId, products, groups)
}
