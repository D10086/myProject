<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
export default {
  data () {
    return {
      cdata: [
        {
          // 名字需要与 “common/map/fujian.js” 地图数据文件里面定义的一一对应，不能是 “福州” 或者 “闽” 之类的缩写
          name: '郑州市',
          value: 17,
          elseData:{
            // 这里放置地图 tooltip 里想显示的数据
          }
        },
        {
          name: '开封市',
          value: 16,
        },
        {
          name: '洛阳市',
          value: 15,
        },
        {
          name: '平顶山市',
          value: 14,
        },
        {
          name: '安阳市',
          value: 13,
        },
        {
          name: '鹤壁市',
          value: 12,
        },
        {
          name: '新乡市',
          value: 11,
        },
        {
          name: '焦作市',
          value: 10,
        },
        {
          name: '濮阳市',
          value: 9,
        },
        {
          name: '许昌市',
          value: 8,
        },
        {
          name: '漯河市',
          value: 7,
        },
        {
          name: '三门峡市',
          value: 6,
        },
        {
          name: '南阳市',
          value: 5,
        },
        {
          name: '商丘市',
          value: 4,
        },
        {
          name: '信阳市',
          value: 3,
        },
        {
          name: '周口市',
          value: 2,
        },
        {
          name: '驻马店市',
          value: 1,
        }
      ]
    }
  },
  components: {
    Chart,
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>