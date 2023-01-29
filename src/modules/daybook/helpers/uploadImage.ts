import axios from 'axios'

export const uploadImage = async (file: string) => {
  if (!file) return
  try {

    const formData = new FormData()
    formData.append('upload_preset', 'dev-notes')
    formData.append('file', file)

    const url = 'https://api.cloudinary.com/v1_1/brandon-rs/image/upload'
    const { data } = await axios.post(url, formData)

    return data.secure_url

  } catch (error) {
    console.log('Error to load image')
    console.error(error)
    return null
  }
}
