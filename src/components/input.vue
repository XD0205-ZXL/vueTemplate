<template>
    <div>
        <span class="asLabel" v-show="label" :style="{width:zlabelwidth}">{{label}}</span>
        <input ref="zinput" type="text" :value="value" @input="throwValue($event)" @change="returnChangeval"/>
    </div>
</template>

<script>
import $emitVue from './$emit.vue';
export default {
    props:["label","labelwidth","value"],
    data(){
        return{

        }
    },
    methods:{
       
    },
    computed:{
       
    }
}
</script>

<style scoped>
.asLabel{
    display: inline-block;
    text-align: right;
    font-size: 16px;
}
</style>