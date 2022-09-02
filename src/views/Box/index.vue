<template>
    <div style="height:100%">
        <div class="main-box" v-if="!message.length">
            <el-empty image-size="400" class="empty" description="无数据" :image="$store.state.circleUrl.src" />
        </div>
        <div class="main-box" v-else>
            <div class="box-user">
                <el-row  :gutter="22">
                    <el-col :span="item.size" v-for="item in message">
                        <el-card shadow="hover"> {{item.table}}  : 
                        <br>
                        <p class="text">{{item.namAll}}</p>
                        </el-card>
                    </el-col>
                    <EchartsDome1></EchartsDome1>
                </el-row>
               
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import EchartsDome1 from '../../components/Echarts/EchartsDome1.vue'

export default {
    name: 'VIndex',

    data() {
        return {

        };
    },

    mounted() {

    },
    computed: {
        ...mapState(['message'])
    },

    methods: {

    },
    components:{
        EchartsDome1
    }
};
</script>

<style lang="less" scoped>


.box-user {
    width: 100%;
    border-bottom: 1px solid #ccc;
    margin: 10px 10px 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.el-row {
    display: flex;
    width: 100%;
    margin: 10px 0 10px 0;
}
.el-col{
    margin: 0;
    // height: 100px;
    .el-card {
        height: 130px;
        border-radius: 10px;
        margin: 10px;
    }
}
.empty {
    margin-top: 100px;

    opacity: .8;
}
.text {
    padding: 0px 0 0 0;
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    color: rgb(255, 64, 64);
}
</style>