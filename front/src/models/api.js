import ImageCaptioner from "./ImageCaptioner";


export async function generateCaption(imgSrc) {
  console.log(imgSrc);

  return ImageCaptioner.generateCaption(imgSrc)
}