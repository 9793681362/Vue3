import request from '@/utils/request'

export const registrationRequest = (
  username,
  password,
  email,
  phone_number
) => {
  request.post(
    'api/create_user',
    { username, password, email, phone_number },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}
