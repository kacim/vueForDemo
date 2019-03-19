<template>
    <div class="error-page">
        <div class="error-code">4<span>0</span>4</div>
        <div class="error-desc">啊哦~ 你所访问的页面不存在</div>
        <div class="error-handle">
            <router-link to="/">
                <el-button type="primary" size="large">返回首页</el-button>
            </router-link>
            <el-button class="error-btn" type="primary" size="large" @click="goBack">返回上一页</el-button>
        </div>
    </div>
</template>
<script>
export default {
    created() {

         // this.$axios.post('http://192.168.49.160/AutoPRViewer/CarsIdAction?method=getCarsId').then((res) => {
         //            console.info(res)
         //            return res.data.list;
         //        })
       
       // let url = 'http://192.168.49.160/AutoPRViewer/CarsIdAction?method=getCarsId';
       // let params= JSON.stringify({
       //  name:'name',
       //  age:['a','b']
       // })

       //接口
       this.COMMON.post(url,params,res =>{console.info(res)})
         
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        testWeb(url, param, res) {
            
            this.$axios.post(url, {
                    page: '1'
                }).then((res) => {
                    console.info(res)
                    return res.data.list;
                })

        },
    }


}
</script>
<style scoped>
.error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #f3f3f3;
    box-sizing: border-box;
}

.error-code {
    line-height: 1;
    font-size: 250px;
    font-weight: bolder;
    color: #2d8cf0;
}

.error-code span {
    color: #00a854;
}

.error-desc {
    font-size: 30px;
    color: #777;
}

.error-handle {
    margin-top: 30px;
    padding-bottom: 200px;
}

.error-btn {
    margin-left: 100px;
}
</style>