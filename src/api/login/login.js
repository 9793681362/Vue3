import request from '@/utils/request'

// 注册接口
export const registrationRequest = async (
  username,
  password,
  email,
  phone_number
) => {
  try {
    const response = await request.post(
      'api/create_user',
      { username, password, email, phone_number },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    return response // 返回响应对象
  } catch (error) {
    console.error('注册失败', error) // 打印错误信息
    throw error // 抛出错误
  }
}

// 登录接口
export const loginRequest = async (username, password) => {
  try {
    const response = await request.post('api/login_view', {
      username,
      password
    })
    return response
  } catch (error) {
    console.log('登录失败', error) // 打印错误信息
    throw error
  }
}
