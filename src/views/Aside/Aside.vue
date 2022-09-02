<template>
  <el-row class="tac" >
    <el-col :span="100">
      <h5 class="mb-2">分类管理与设置</h5>
      <el-menu class="el-menu-vertical-demo" :default-active="$route.path" :router="router">
        <el-menu-item :index="'/main'+item.path" :key="'/main'+item.path" v-for="(item) in noMainList">
          <el-icon >
            <component :is="item.icon" />
          </el-icon>
          <span>{{ item.table }}</span>
        </el-menu-item>
        <el-sub-menu :index="'/main'+item.path" :key="'/main'+item.path" v-for="(item) in toMainList">
          <template #title>
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.table }}</span>
          </template>
          <el-menu-item-group v-for="itemx in item.chiller" :key="'/main'+itemx.path" >
            <el-menu-item :index="'/main'+itemx.path" >{{ itemx.table  }}-1</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-col>

  </el-row>
</template>
<style scoped>
.el-row {
  width: 100% !important;
}

.el-menu {
  border: 0;
}

.el-col {
  width: 100%;
}

.el-sub-menu {
  border: 0px;
}
</style>
<script>

import { mapState } from 'vuex'
export default {
  name: 'MyAside',
  data:()=>({
    router:true
  }),
  computed: {
    ...mapState(['mainList']),
    toMainList() {
      return this.mainList.filter(item => item.chiller)
    },
    noMainList() {
      return this.mainList.filter(item => !item.chiller)
    }
  }, 
  components:{
  }
}


</script>
