<template>
  <div >
     <input type="text" value="地区" id="zone">
     <input type="text" value="行业" id="cate">
     <input type='button' @click="show_my_value( ('#zone'))" value='...'/>
     {{message}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 步骤1: 这里定义了变量 message 的初始值
      message: "你好Vue! 本消息来自于变量"
    };
  },
  methods: {
    show_my_value: function(name) {
      // 注意下面的　this.my_value, 要用到this这个关键字．
      alert("my_value: " + name);
    }
  }
};
</script>

<style>
</style>