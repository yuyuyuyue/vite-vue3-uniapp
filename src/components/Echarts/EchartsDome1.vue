<template>
    <div id="main">

    </div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 引入vuex

export default {
    name: 'EsDome',

    data() {
        return {
            myChart: null,
            message:this.$store.state.messages
        };
    },
    created() {
        // 注册必须的组件
        echarts.use([
            TitleComponent,
            TooltipComponent,
            GridComponent,
            DatasetComponent,
            TransformComponent,
            BarChart,
            LabelLayout,
            UniversalTransition,
            CanvasRenderer
        ]);
    },
    mounted() {
        // 基于准备好的dom，初始化echarts实例
        this.myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        let colors = []
        let option = {
            title: {
                text: '商品销量'
            },
            tooltip: {},
            xAxis: {
                data: this.message.map(item => item.table)
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: this.message.map(item => item.namAll),
                    itemStyle: {
                        color: params => colors[params.index] || "#fac858"
                    }
                }
            ]
        }
        this.myChart.setOption(option)
    },
    computed: {
    },
    watch: {
        message: {
            handler() {
                // 监听message的变化 更新视图
                this.myChart.setOption({
                    xAxis: {
                        data: message.map(item => item.table)

                    },
                    series: [{
                        data: this.message.map(item => item.namAll)
                    }]
                })
            }
        }
    },
    methods: {

    },
};
</script>

<style lang="less" scoped>
#main {
    width: 700px;
    height: 400px;
}
</style>