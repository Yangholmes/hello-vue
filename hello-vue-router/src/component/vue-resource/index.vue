<template>
  <div id="vue-resource">
    <h2>车辆预约单统计</h2>
    <h3>数据来自服务器</h3>

    <el-table :data="reservationStatistic" border style="width: 100%"
      v-loading="loading" element-loading-text="玩儿命加载中……"
      :default-sort = "{prop: 'id'}" fit>
      <el-table-column v-for="col in columns"
        :prop="col.prop"
        :label="col.label"
        :sortable="col.sortable"
        :width="col.width">
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      reservationStatistic: [ ],
      columns: [
        { prop: "id", label: "序号", sortable: true},
        { prop: "createDt", label: "创建时间", sortable: true, width: "180" },
        { prop: "startpoint", label: "出发地点" },
        { prop: "endpoint", label: "目的地点" },
        { prop: "schedule-start", label: "预计出发时刻", sortable: true, width: "180" },
        { prop: "schedule-end", label: "预计返回时刻", sortable: true, width: "180" },
        { prop: "car", label: "车辆型号" },
        { prop: "applicant", label: "预约人" },
        { prop: "driver", label: "司机" }
      ]
    }
  },
  mounted: function(){
    this.$http.get('http://localhost/dingding/td-car/server/statistic/reservationStatistic.php', {}).then(function(response){
      // 这里是处理正确的回调
      this.reservationStatistic = response.data;
      this.loading = false;
    }, function(response){
      console.log(response);
      this.loading = false;
    })
  }
}
</script>

<style>
  #vue-resource{
    margin: 1em;
    text-align: center;
  }
</style>
