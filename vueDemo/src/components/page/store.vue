<template>
    <div class="hello">
        <p>click {{getcount}} times,count is {{evenOrOdd}}</p>
        <el-row>
            <el-button @click="increment">+</el-button>
            <el-button @click="decrement">-</el-button>
            <el-button @click="fixedvalue">固定值</el-button>
            <el-button type="primary" @click="incrementIfOdd">increment if odd</el-button>
            <el-button type="primary" @click="incrementAsync">increment async</el-button>
        </el-row>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
export default {
  name: "HelloWorld",
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["evenOrOdd","getcount"])
    // count() {
    //   return this.$store.state.count;
    // },
    // evenOrOdd() {
    //   return this.$store.getters.evenOrOdd;
    // }
  },
  methods: {
    ...mapActions(["incrementIfOdd", "incrementAsync","fixedvalue"]),
    ...mapMutations(["increment", "decrement"])
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