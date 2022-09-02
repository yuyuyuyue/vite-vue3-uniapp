<template>
    <div class="page1" v-for="item in toDoList" :key="item.id">
        <div class="page-box">
            <img class="page-img" :src="item.img_list_url"
                alt="显示失败" />
            <h4>{{item.title}}</h4>
            <span style="color:red;">{{item.price}}</span>
            <div class="btn">
                <button>+</button>
                <span>{{item.nice||'0'}}</span>
                <button>-</button>
            </div>
        </div>
        <p class="page-bottom"><span>{{item.type_one}}</span><span>{{item.type_two}}</span></p>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    name: 'Vite002Page1',

    data() {
        return {
        };
    },
    watch: {
        todoList(val) {
            this.todoList = val
        }
    },
    computed: {
        ...mapState(['toDoList'])
    },
    methods: {

    },
};
</script>

<style lang="less" scoped>
.page1 {
    display: flex;
    flex-direction: column;
    height: 180px;
    box-shadow: 0 0 1px;
    margin-bottom: 10px;

    .page-box {
        position: relative;
        height: 130px;
        display: flex;

        &>span {
            position: absolute;
            left: 240px;
            bottom: 20px;
            font-weight: 700;
            font-size: 20px;
        }

        .btn {
            position: absolute;
            bottom: 10px;
            right: 50px;


            button {
                border: 0;
                width: 40px;
                height: 30px;
                margin: 15px;
                font-size: 16px;
                color: #ccc;

                &:hover {
                    border: 1px solid #ccc;
                    color: red;
                }
            }
        }

    }

    .page-bottom {
        span {
            background-color: rgb(220, 255, 124);
            color: rgb(121, 121, 121);
            padding: 2px 5px;
            border-radius: 5px;
            margin: 0 10px;
        }
    }

    .page-img {
        height: 100%;
        width: 130px;
    }
}
</style>