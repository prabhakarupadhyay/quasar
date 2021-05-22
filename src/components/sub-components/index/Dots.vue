<template>
  <div class="dot"></div>
</template>

<script>
export default {

  props:{
    dotStyleObject:{
      type: Object
    },
    index:{
      type: Number
    }
  },
  watch:{
    dotStyleObject(val){

    },
  },
  created(){//@click="$emit('dots-event',{index:index})"
  }

}
</script>

<style scoped>
.dot {
  z-index: 1;
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>