import { createStore } from 'vuex'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:4001'

const store = createStore({
    state() {
        return {
            mainList: [
                {
                    path: '/box',
                    table: '首页',
                    icon: 'House'
                },
                {
                    path: '/commodity',
                    table: '商品管理',
                    icon: 'ShoppingCart',
                    chiller: [
                        {
                            path: '/commodity/page1',
                            table: '商品信息'
                        },
                        {
                            path: '/commodity/page2',
                            table: '商品分类'
                        },
                        {
                            path: '/commodity/page3',
                            table: '商品设置'
                        }
                    ]
                },
                {
                    path: '/about',
                    table: '关于',
                    icon: 'QuestionFilled'
                },
                {
                    path: '/more',
                    table: '更多',
                    icon: 'MoreFilled'
                },
                {
                    path: '/set',
                    table: '设置',
                    icon: 'Setting'
                }
            ],
            circleUrl: {
                src: '../../../public/logo.png',
                name: 'yuyuyuyue'
            },
            toDoList: [], // 请求的商品列表
            message: [
                {
                    table: '商品库存',
                    namAll: '901',
                    size: 5,
                },
                {
                    table: '商品销售',
                    namAll: '99',
                    size: 6,

                },
                {
                    table: '商品总量',
                    namAll: '1000',
                    size: 13,

                },
                {
                    table: '昨日销量',
                    namAll: '99',
                    size: 5,

                },
                {
                    table: '总收入',
                    namAll: '990',
                    size: 6,

                },
                {
                    table: '昨日收入',
                    namAll: '990',
                    size: 13,

                }
            ], // 首页信息列表
            messages: [ //销售份额
                {
                    table: '8-16',
                    namAll: '22',
                },
                {
                    table: '8-17',
                    namAll: '55',
                },
                {
                    table: '8-18',
                    namAll: '33',
                }, {
                    table: '8-19',
                    namAll: '88',
                }, {
                    table: '8-20',
                    namAll: '66',
                }, {
                    table: '8-21',
                    namAll: '99',
                },
            ]
        }
    },
    mutations: {
        getTogoList(state, val) {
            state.toDoList = val
        }
    },
    actions: {
        togoList(commits) {
            axios.get('/get')
                .then(({ data: res }) => {
                    let data = JSON.parse(res.list)
                    commits.commit('getTogoList', data)
                })

        }
    }
})

export default store 
