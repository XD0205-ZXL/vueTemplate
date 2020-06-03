<template>
    <thead>
        <th v-for="(item,index) in cols" :key="index">
            {{item.key}}
        </th>
    </thead>
</template>

<script>
export default {
    props:['cols'],
    data(){
        return {
            
        }
    },
    mounted(){
        console.log(this.cols)
    }
}
</script>

<style scoped>

</style>