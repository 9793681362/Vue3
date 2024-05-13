import request from '@/utils/request'

export const getMessage = () => request.get('/api/get_nav_value/')
