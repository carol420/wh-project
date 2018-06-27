import jsonp from './tryJsonp'
import { commonParams, options } from './configj'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5', uin: 0, needNewCode: 1
  })
  // 这里返回一个promise对象
  return jsonp(url, data, options)
}
export function getPro(){
	const url = 'http://www.weather.com.cn/data/cityinfo/101010100.html'
	const data = Object.assign({}, commonParams, {
    platform: 'h5', uin: 0, needNewCode: 1
  })
  return jsonp(url, data, options)
}

// 作者：control_T
// 链接：https://www.jianshu.com/p/1cf01fcd0446
// 來源：简书
// 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。