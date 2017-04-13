<template>
  <div id="table">
    <h2>车辆预约单统计</h2>
    <el-table :data="reservationStatistic" border style="width: 100%"
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
      reservationStatistic: [
        {id: 3, createDt: '2017-03-24 11:46:19', startpoint: '无线科技大楼', endpoint: '北斗产业园', 'schedule-start': '2017-03-24 12:00:00', 'schedule-end': '2017-03-24 16:30:00', car: '红色奥德赛', applicant: '黄加华', driver: '黄加华'},
        {id: 7, createDt: '2017-03-27 16:01:13', startpoint: '无线科技大楼', endpoint: '海格产业园', 'schedule-start': '2017-03-27 16:15:00', 'schedule-end': '2017-03-27 16:45:00', car: '红色奥德赛', applicant: '黄加华', driver: '黄加华'},
        {id: 12, createDt: '2017-04-01 08:40:08', startpoint: '无线科技大楼', endpoint: '无线科技大楼', 'schedule-start': '2017-04-01 11:30:00', 'schedule-end': '2017-04-01 14:00:00', car: '白色锐界', applicant: '刘荣', driver: '刘荣'}
      ],
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
  }
}
</script>

<style>
  #table{
    margin: 1em;
    text-align: center;
  }
</style>
