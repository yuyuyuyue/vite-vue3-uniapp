<template>
    <view @click="setTitle"> {{title}}</view>
</template>

<script>
import { onMounted } from "vue";
import { useIndex } from "@/store/index";
import { storeToRefs } from "pinia";
export default {
    name: "ViteVue3UniappIndex",
    setup(props, context) {
        const store = useIndex();
        const {title} = storeToRefs(store);
        console.log(`setup`, props, context);
        function setTitle(){
          store.setNum()
        }
        return {
          title,
          setTitle
        }
    },
};
</script>

<style lang="sass" scoped>
</style>