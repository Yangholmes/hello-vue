<template>
  <div id="query">
    <h2>车辆预约单查询统计</h2>

    <div id="key-form">
      <el-form :inline="true" :model="reservation" class="demo-form-inline">
        <el-form-item label="选择车辆">
          <el-select v-model="reservation.car" placeholder="点选车辆">
            <el-option label="任意" value="%"></el-option>
            <el-option label="白福" value="98"></el-option>
            <el-option label="白奥" value="97"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预约人">
          <el-input v-model="reservation.applicant" placeholder="预约人"></el-input>
        </el-form-item>
        <el-form-item label="司机">
          <el-input v-model="reservation.driver" placeholder="司机"></el-input>
        </el-form-item>
        <el-form-item label="随行人员">
          <el-input v-model="reservation.accompanist" placeholder="随行人员"></el-input>
        </el-form-item>
        <el-form-item label="选择月份">
          <el-select v-model="reservation.month" placeholder="选一月">
            <el-option label="1月" value="1"></el-option>
            <el-option label="2月" value="2"></el-option>
            <el-option label="3月" value="3"></el-option>
          </el-select>
        </el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div id="query-table">
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

  </div>
</template>

<script>
export default {
  data () {
    return {
      reservation: {
          car: '',
          applicant: '',
          driver: '',
          accompanist: '',
          month: ''
      },
      loading: false,
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
        { prop: "driver", label: "司机" },
        { prop: "accompanist", label: "随行人员" },
        { prop: "returnDt", label: "实际返回时刻" }
      ]
    }
  },
  methods: {
    search: function(){
      this.loading = true;
      console.log(this.reservation);
      let reservation = {};
      for( let r in this.reservation ){
        if( typeof this.reservation[r] != 'function' )
          // console.log( this.reservation[r].toString() );
          reservation[r] = this.reservation[r].toString();
      }
      console.log(reservation);
      this.$http.post('http://localhost/dingding/td-car/server/statistic/reservationStatistic.php', reservation,{
        emulateJSON: true,
        headers: {
            'Content-Type': 'enctype="application/x-www-form-urlencoded; charset=utf-8"'
        }
    }).then(function(response){
        this.reservationStatistic = response.data;
        this.loading = false;
      }, function(response){
        console.log(response);
        this.loading = false;
      });
    }
  },
  mounted: function(){
    
  }
}
</script>

<style>
  #query{
    margin: 1em;
    text-align: center;
  }
</style>
