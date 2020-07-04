import axios,{AxiosError} from '../../src/index'
// 接口响应时间是3000 设置超时时间为2000 会报错 Error: Timeout of 2000 ms exceeded!
axios({
  method:'post',
  url:'/base/timeout',
  data:{
    a:'3',
    b:'4'
  },
  timeout:2000
}).then((res)=>{
  console.log(res) // 返回的data是个字符串
}).catch((e:AxiosError)=>{
  console.log(e.code)
  console.log(e.config)
  console.log(e.message)
  console.log(e.response)
  console.log(e.request)
})

// get111的路由不存在  错误代码404 Request failed with status code 404
axios({
  method:'get',
  url:'/base/get111',
}).then((res)=>{
  console.log(res) // 返回的data是个对象
}).catch((error)=>{
  console.log(error)
})

// 在代码运行之前断掉网络就会触发 network error 的报错
setTimeout(function(){
  axios({
    method:'post',
    url:'/base/post',
    data:{
      a:'3',
      b:'4'
    },
  }).then((res)=>{
    console.log(res) // 返回的data是个字符串
  }).catch((e:AxiosError)=>{
    console.log(e.code)
    console.log(e.config)
    console.log(e.message)
    console.log(e.response)
    console.log(e.request)
  })
},5000)