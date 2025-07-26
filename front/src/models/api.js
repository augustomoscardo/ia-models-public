import ImageCaptioner from "./ImageCaptioner";

export async function generateCaption(imgSrc) {
  return ImageCaptioner.generateCaption(imgSrc)
}

export async function translateCaption(captionENG) {
  return fetch("http://localhost:3333/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: captionENG })
  }).then(response => response.json())
}