<template>
    <div class="vuex">
        count {{ $store.state.count }}/ {{ count1 }}
        <button type="button" name="button" @click="increate">增加</button>
        <button type="button" name="button" @click="decreate">删减</button>
    </div>

</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
    computed:{
        count1(){
            return this.$store.state.count;
        }
    },
    methods:mapActions([
        'increate',
        'decreate'
    ])
}
</script>
<style scoped>

</style>

