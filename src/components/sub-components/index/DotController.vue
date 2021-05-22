<template>
    <q-card class="my-card" style="cursor:pointer">
        <q-card-actions vertical class="flex">
            <q-avatar :color="colorSwapper.four" text-color="white" @click="swapColor(4)">....</q-avatar>
        <q-separator></q-separator>
            <q-avatar :color="colorSwapper.three" text-color="white" @click="swapColor(3)">...</q-avatar>
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
    data(){
        return{
            defaultColor:"grey",
            colorSwapper:{
                three:"",
                four:""
            }
        }
    },
    methods:{
        swapColor(dots){
            this.colorSwapper.three = dots == 3 ? 'red' : this.defaultColor;
            this.colorSwapper.four = dots == 4 ? 'primary' : this.defaultColor;
            if(dots) this.$emit('dot-controller-event',{selectedDots:dots})
        },
    },
    created(){
        this.swapColor()
    }
}
</script>

<style>

</style>