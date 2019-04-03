<template>
    <div class="hello">
        <p>click {{getcount}} times,count is {{evenOrOdd}},test num is {{testWord}}</p>
        <el-row>
            <el-button @click="increment">+</el-button>
            <el-button @click="decrement">-</el-button>
            <el-button @click="fixedvalue(123)">固定值</el-button>
            <el-button @click="changeNum">修改值</el-button>
            <el-button type="primary" @click="incrementIfOdd">increment if odd</el-button>
            <el-button type="primary" @click="incrementAsync">increment async</el-button>
        </el-row>
        <div>显示网络数据</div>
        <div>{{list}}</div>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
export default {
    name: "HelloWorld",
    data() {
        return {
            testWord: '',
            list:'123'
        }
    },
    created() {
           this.testWord = this.getcount;
           this.getTestDate()
    },
    computed: {
        ...mapState(["count"]),
        ...mapGetters(["evenOrOdd", "getcount"]),

        // count() {
        //   return this.$store.state.count;
        // },
        // evenOrOdd() {
        //   return this.$store.getters.evenOrOdd;
        // }
    },
    methods: {
        ...mapActions(["incrementIfOdd", "incrementAsync", "fixedvalue"]),
        ...mapMutations(["increment", "decrement"]),

        changeNum(){
              this.fixedvalue(456);
        },
        getTestDate(){

            this.COMMON.post('http://192.168.49.160/AutoPRViewer/SalesMarketAction?method=getProvince&begintime=201804&endtime=201811','',res =>{console.info(res)})
        }

        // increment() {// 函数名称要跟mutations中一致才可以
        //            写成 ...mapMutations(["increment", "decrement"])
        //   this.$store.commit("INCREMENT");
        // },
        // decrement() {
        //   this.$store.commit("DECREMENT");
        // },
        // // 只有是奇数才加1
        // incrementIfOdd() {
        //   this.$store.dispatch("incrementIfOdd"); //触发store中对应的action调用
        // },
        // // 过两秒才加1
        // incrementAsync() {
        //   this.$store.dispatch("incrementAsync");// 函数名称要跟action中一致才可以
        //                 写成 ...mapActions(["incrementIfOdd", "incrementAsync"])
        // }
    }
};
</script>