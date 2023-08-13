export const generateImageUrl = (file: File) => {
  if (!file.type.includes('image')) return
  const imgUrl = URL.createObjectURL(file)
  return imgUrl
}
