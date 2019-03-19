<template>
      <div class="toast" v-if="isShow">
        <div class="toast-div">{{ text }}{{ppo}}</div>
        <el-button @click='sendMsgToParent'>默认按钮</el-button>
        <el-button @click='alert1'>测试按钮</el-button>
        <el-button @click=''>测试按钮2</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            duration: 1500
        }
    },
    methods: {

        sendMsgToParent: function() {
            this.$emit('listenTo', 'hi hello')
            this.isShow = false;
        },
        alert1: function() {
            this.$emit('alert1', 'hi alert')
            alert(111)
        }


    },
    props: {

        ppo: {

        },
        isShow: {
            default: true
        },
        text: {
            type: String,
            default: "我是默认值"
        },
        acacacac: {
            type: String,
            default: () => {
                return '默认值'
            }
        }
    },
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
}

.toast-div{
  color: black;
}

.toast {
    color:black;
    margin-left: 200px;
    width: 400px;
    height: 200px;
    transform: translate(-50%, 0);
    margin-top: 5rem;
    line-height: 0.7rem;
    color: #FFFFFF;
    padding: 0 0.2rem;
    border-radius: 0.2rem;
    z-index: 10;
}
</style>