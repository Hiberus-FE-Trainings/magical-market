const BASE_IMAGE_CLOUD_URL =
  'https://magical-market-images.s3.eu-central-1.amazonaws.com/'
export const generateImageURL = (imagePath: string) =>
  `${BASE_IMAGE_CLOUD_URL}${imagePath}`
