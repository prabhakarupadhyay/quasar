<template>
  <div class='line'></div>
</template>

<script>
export default {
    props:{
        lineStyleObject: {
            type: Object
        }
    },
    mounted(){ 

  }
}
</script>

<style scoped>
/*line element*/
.line{
  background-color:grey;
  height:10px;
}
</style>