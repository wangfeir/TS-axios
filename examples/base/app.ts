import axios from '../../src/index'

// axios({
//   method:'get',
//   url:'/base/get',
//   params:{
//     foo:['bar','baz']
//   }
// })
// axios({
//   method:'get',
//   url:'/base/get',
//   params:{
//     foo:{
//       bar:'baz'
//     }
//   }
// })
// const data = new Date()
// axios({
//   method:'get',
//   url:'/base/get',
//   params:{
//     data
//   }
// })
// axios({
//   method:'get',
//   url:'/base/get',
//   params:{
//     foo:'@:$  '
//   }
// })
// axios({
//   method:'get',
//   url:'/base/get',
//   params:{
//     foo:'bar',
//     baz:null,
//   }
// })
// axios({
//   method:'get',
//   url:'/base/get#hash',
//   params:{
//     foo:'bar1',
//   }
// })
// axios({
//   method:'get',
//   url:'/base/get?foo=bar',
//   params:{
//     bar:'baz',
//   }
// })

axios({
  method:'post',
  url:'/base/post',
  data:{
    bar:'baz',
  }
})
const arr = new Int32Array([22,23])
axios({
  method:'post',
  url:'/base/buffer',
  data:arr
})

axios({
  method:'post',
  url:'/base/post',
 
  headers:{
    'content-type':'application/json',
    'Accept':'application/json,test/plain'
  },
  data:{
    a:'1',
    b:'2'
  },
})