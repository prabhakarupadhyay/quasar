<template>
  <q-page id="playArea" @click="playAreaClickHandler">
      <h4>Play Area: total shapes({{shapeTotal}})</h4>
      <br>
      <dot-controller id="controller" @dot-controller-event="dotControllerEvent"></dot-controller>
        <component
            v-for="(component, index) in shapeCollection"
            :key="`shape_${index}`"
            :is="component"
            :selectedControllerDots="selectedControllerDots"
            :index="index"
            :shapeTotal="shapeTotal"
            @shape-collector-event="shapeCollectorEvent"
            :style="shapeCollectionStyle"
        />
  </q-page>
</template>

<script>
import ShapeCollector from '../components/sub-components/index/ShapeCollector'
import DotController from '../components/sub-components/index/DotController'

export default {
  name: 'PageIndex',
  data(){
    return{
      shapeCollection:[],
      selectedControllerDots: undefined,
      shapeTotal:0,
      shapeCollectionStyle:{}
    }
  },
  components: {
    "dot-controller":DotController
  },
  methods: {
    /*
    All mouse event functions are listed here
    */
    playAreaClickHandler(e){
      this.$root.$emit('triggerChildPlayHandler',{event:e})
    },

    /*
    All event emitter functions are listed here
    */
    dotControllerEvent(controllerObj){
      this.selectedControllerDots = controllerObj.selectedDots;
    },

    shapeCollectorEvent(collectorObj){
      //push one empty shape collection in the list when previous shape is completed
      if(collectorObj.isCompleted){
        this.shapeTotal += 1; 
        this.shapeCollection.push(ShapeCollector)
        }

        //push duplicate shape collection in the list when double clicked on shape
        if(collectorObj.index==0 || collectorObj.index){
          this.shapeTotal += 1; 
          this.shapeCollection.push(this.shapeCollection[collectorObj.index])
        }

        //push duplicate shape collection in the list when double clicked on shape
        if(collectorObj.top){
          this.shapeCollectionStyle = collectorObj
        }
    }
  },

  created(){
    this.shapeCollection.push(ShapeCollector)
  }

}
</script>

<style>
.my-card{
  width: 100%;
  max-width: 60px
}
</style>