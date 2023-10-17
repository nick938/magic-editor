<template>
  <m-editor
    v-model="dsl"
    :menu="menu"
    :runtime-url="runtimeUrl"
    :props-configs="propsConfigs"
    :props-values="propsValues"
    :component-group-list="componentGroupList"
  >
    <template #workspace-content>
      <DeviceGroup ref="deviceGroup" v-model="stageRect"></DeviceGroup>
    </template>
  </m-editor>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',

  setup() {
    return {
      menu: ref({
        left: [
          // 顶部左侧菜单按钮
        ],
        center: [
          // 顶部中间菜单按钮
        ],
        right: [
          // 顶部右侧菜单按钮
        ],
      }),

      dsl: ref({
        // 初始化页面数据
        type: 'app',
        // 必须加上ID，这个id可能是数据库生成的key，也可以是生成的uuid
        id: 1,
        items: [],
      }),

      runtimeUrl: 'http://localhost:8078/',

      propsConfigs: [
        // 组件属性列表
      ],
      propsValues: [
        // 组件默认值
      ],

      componentGroupList: ref([
        // 组件列表
        {
          title: '组件列表',
          items: [
            {
              icon: 'https://vfiles.gtimg.cn/vupload/20220614/9cc3091655207317835.png',
              text: 'HelloWorld',
              type: 'hello-world',
            },
          ],
        },
      ]),
    }
  },
})
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
}

.m-editor {
  flex: 1;
  height: 100%;
}
</style>
