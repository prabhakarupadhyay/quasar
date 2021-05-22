<template>
    <div :ref="`shape_${index}`" @click="duplicateShape" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)" v-on:dragenter="dragenter($event)">
        <component
            v-for="(component, index) in dotsItemStorage"
            :key="`dot_${index}`"
            :is="component"
            :dotStyleObject="dotStyleArray[index]"
            :index="index"
            :style="dotStyleArray[index]"
        />
        <component
            v-for="(component, index) in lineItemStorage"
            :key="`Line_${index}`"
            :is="component"
            :lineStyleObject="lineStyleArray[index]"
            :style="lineStyleArray[index]"
        />
    </div>
</template>

<script>
import Dots from './Dots'
import Lines from './Lines'
import DotInfo from '../../../helper-functions/dotInfo.js'
import LineInfo from '../../../helper-functions/lineInfo.js'
import ShapeInfo from '../../../helper-functions/ShapeInfo.js'
import {isDoubleClick} from '../../../helper-functions/helper.js'

export default {
    data(){
        return{
            dotsItemStorage:[],
            dotStyleArray:[],
            lineItemStorage:[],
            lineStyleArray:[],
            shapeInfoObj:{}
        }
    },
    props:{
        selectedControllerDots:{
            type: Number
        },
        index:{
            type: Number
        },
        shapeTotal:{
            type: Number
        }
    },
    methods:{
        playAreaClickHandler(event){
            //return if the cursor is not in the playzone and no controller is selected
            if(!event.target.id || !this.selectedControllerDots) return
            //gets new dot position for placement
            let dotInfo = new DotInfo(event.clientX,event.clientY)
            if(this.dotsItemStorage.length > 0){
                //Get new line positions for placement between 2 dots
                let lineInfo = new LineInfo(event.clientX,event.clientY,this.dotStyleArray[this.dotStyleArray.length - 1])
                this.createLine(lineInfo);
            }
            this.createDot(dotInfo);
            //adjoin the final line once condition is met
            if(this.dotsItemStorage.length >= this.selectedControllerDots) return this.finalLineJoin()
            
        },
        //Fn to create dots
        createDot(dotInfo){
            this.dotStyleArray.push(dotInfo.getStyle())
            this.dotsItemStorage.push(Dots)
        },

        //Fn to create lines
        createLine(lineInfo){
            this.lineStyleArray.push(lineInfo.getStyle())
            this.lineItemStorage.push(Lines)
        },

        // Fn to connect final line between the first and the last dot
        finalLineJoin(){
            let endDot = this.dotStyleArray[this.dotStyleArray.length - 1];
            let dotIndex = this.dotsItemStorage.length - this.selectedControllerDots
            let startDot = this.dotStyleArray[dotIndex]
            let lineInfo = new LineInfo(parseInt(endDot.left.split('px')[0]),parseInt(endDot.top.split('px')[0]),startDot)
            this.createLine(lineInfo);
            this.$emit('shape-collector-event',{isCompleted:true})
        },
        duplicateShape(){
            if(isDoubleClick()) this.$emit('shape-collector-event',{index:this.index})
        },
        dragstart(e){
            this.shapeInfoObj = 
            new ShapeInfo(
                {x:e.clientX,y:e.clientY},
                {top:this.$refs[`shape_${this.index}`].offsetTop,
                left:this.$refs[`shape_${this.index}`].offsetLeft}
                )
        },
        dragend(e){
            this.shapeInfoObj.setStartPosition = {x:e.clientX,y:e.clientY}
            let currentShapeStyleObj = this.shapeInfoObj.getStyle()
            this.$emit('shape-collector-event',currentShapeStyleObj);
        },
        dragenter(e){
            console.log("Entered Dragg")
        },
    },
    created(){
        this.$root.$on('triggerChildPlayHandler',(data)=>{
            //always work on the updated shape collection
            if(this.index != this.shapeTotal) return
            
            this.playAreaClickHandler(data.event)
        })
    }
}
</script>

<style>

</style>