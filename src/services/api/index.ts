import axios from 'axios'
import jsSHA from 'jssha'

const $http = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism',
  timeout: 3000,
})

const AppID = 'af9cbd66c2b94b71bb8c3cf33c02a045'
const AppKey = '0yYCEmoolz2IYLFtCbeKQlcxLB0'
const GMTString = new Date().toUTCString()
const ShaObj = new jsSHA('SHA-1', 'TEXT')
ShaObj.setHMACKey(AppKey, 'TEXT')
ShaObj.update('x-date: ' + GMTString)
const HMAC = ShaObj.getHMAC('B64')
const Authorization =
  'hmac username="' +
  AppID +
  '", algorithm="hmac-sha1", headers="x-date", signature="' +
  HMAC +
  '"'

$http.defaults.headers.common['Authorization'] = Authorization
$http.defaults.headers.common['X-Date'] = GMTString

$http.interceptors.response.use(
  res => {
    if (res.status === 200) {
      const { data } = res
      return Promise.resolve(data)
    }
    return Promise.resolve(res)
  },
  error => Promise.reject(error)
)

export default $http
