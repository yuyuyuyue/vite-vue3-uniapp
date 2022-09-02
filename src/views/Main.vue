<template>
    <div>
        <header class="header">
            <Header></Header>
        </header>
        <main class="main">
            <nav class="nav-left">
                <Aside></Aside>
            </nav>
            <section class="box">
                <router-view></router-view>
            </section>
        </main>
    </div>
</template>

<script>
import Aside from './Aside/Aside.vue'
import Header from '../components/Header/Header.vue'
export default {
    name: 'ViteMain',

    data() {
        return {

        };
    },
    
    components: {
        Aside,
        Header,
    }
};
</script>

<style lang="less" scoped>

.main {
    display: flex;
}

.box {
    flex: 1;
    display: flex;
    flex-direction: column;
}



.nav-left {
    width: 200px;
    height: 100vh;
    border-right: 1px solid #ccc;
}

.header {
    background-color: #fff;
    border-bottom: 2px solid rgb(139, 154, 156);
    padding: 2px 0;
}
</style>