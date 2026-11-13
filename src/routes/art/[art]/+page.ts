import { ArtData } from "$lib"

export const load = async ({ params }: { params: any }) => {
  let title = params.art;
  return ArtData[title]
}
