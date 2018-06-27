<template>
  <div>
    <ul>
      <li v-for='item in slider'><img :src="item.picUrl" alt=""></li>
    </ul>
    <ul>
      <li v-for='item in slider'><img src="item.linkUrl" alt=""></li>
    </ul>
  </div>
</template>
<script>
import {getRecommend} from './recommend.js'
import {getPro} from './recommend.js'

import {ERR_OK} from './configj.js'

export default {
  data(){
    return{
      slider:[],
    }
  },
  mounted () {
    //在created中也可
    this._getRecommend();
    this._getPro();
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data)
          this.slider=res.data.slider;
        }
      })
    },
    _getPro () {
      getPro().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data)
          // this.slider=res.data.slider;
        }
      })
    },
  }
}
</script>

