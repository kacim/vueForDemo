<template>
    <div>
         <div>同路由参数变化demo</div>
         <router-link tag="a" :to="{path:'/detailTest',query:{aId:0}}">详情页1</router-link>
         <router-link tag="a" :to="{path:'/detailTest',query:{aId:1}}">详情页2</router-link>
        <div>check-box模型</div>
        <el-table :data="todoList" :show-header="false" height="304" style="width: 100%;font-size:14px;">
            <el-table-column width="40">
                <template slot-scope="scope">
                    <el-checkbox @click.native='showlist' v-model="scope.row.status"></el-checkbox>
                </template>
            </el-table-column>
            <el-table-column>
                <template slot-scope="scope">
                    <div class="todo-item" :class="{'todo-item-del': scope.row.status}">{{scope.row.title}}</div>
                    <div>{{scope.row}}</div>
                </template>
            </el-table-column>
        </el-table>
        <div>check-box联动</div>
        <el-row :gutter="20">
            <el-col v-for="nameItem in testList" :span="6" @click.native="testCancel(nameItem.index)" class="inline">
                <div class="grid-content bg-purple">{{nameItem.name}}</div>
            </el-col>
        </el-row>
        <el-checkbox-group v-model="checkedCities">
            <el-checkbox v-for="(city,index) in cities" :label="index" :key="city" @change="testCheck(city,index)">{{city}}</el-checkbox>
        </el-checkbox-group>
        <div>表单以及提交联动</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name" required>
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region" required>
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <div class="block">
            <span class="demonstration">默认 Hover 指示器触发</span>
            <el-carousel height="150px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="block">
            <span class="demonstration">Click 指示器触发</span>
            <el-carousel trigger="click" height="150px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div>移动端适配假设设计图是1080时rem比例1:100</div>
        <div class='red'></div>
        <el-button @click='showToast'>隐藏</el-button>
        <el-row>
            <el-col :span="24">
                <tools :text='testWord' :ppo='testppo' :isShow='show' v-on:listenTo='showMsg' @alert1='showAlert' @ttt="open" @testGet='getDate'></tools>
            </el-col>
        </el-row>

    </div>
</template>
<script>
import tools from '../common/Tools.vue';
import rem from '../common/rem';

rem();
window.onresize = function(){
    rem();
}
let cityOptions = ['上海', '北京', '广州', '深圳'];
var alist;
export default {
    name: 'test',
    data() {
        return {
            testList: [],
            checkedCities: [],
            cities: cityOptions,
            testppo: '传值模型',
            testWord: '父子组件',
            show: true,
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
            },
            todoList: [{
                    title: '今天要修复100个bug',
                    status: false,
                },
                {
                    title: '今天要修复100个bug',
                    status: false,
                },
                {
                    title: '今天要写100行代码加几个bug吧',
                    status: false,
                }, {
                    title: '今天要修复100个bug',
                    status: false,
                },
                {
                    title: '今天要修复100个bug',
                    status: true,
                },
                {
                    title: '今天要写100行代码加几个bug吧',
                    status: true,
                }
            ],
        }
    },
    components: {
        tools
    },
    methods: {
        showlist(){
            console.info(this.todoList)
        },
        getDate(date) {
            alert(date)
        },
        testCancel(indexs) {
            let newChangeList = new Array();
            let checkList = this.testList;
            console.info('index=' + indexs)
            this.checkedCities = [];
            if (checkList.length == 1) {
                this.testList = '';
            } else {
                for (var i = 0; i < checkList.length; i++) {
                    console.info(checkList[i].index)

                    if (checkList[i].index != indexs) {
                        let indexb = checkList[i].index
                        newChangeList.push({ 'name': cityOptions[indexb], 'index': indexb })
                        this.checkedCities.push(indexb)
                    }
                }
                this.testList = newChangeList;
            }
        },
        testCheck(name, index) {
            alist = new Array();
            var list = this.checkedCities;
            for (var i = 0; i < list.length; i++) {
                var indexv = list[i]
                alist.push({ 'name': cityOptions[indexv], 'index': list[i] })
            }
            this.testList = alist;
        },
        open: function() {
            alert('open')
        },
        yourTest: function() {
            alert('open')
        },
        showToast() {
            this.$tool(); //现在就可以调用了
        },
        showMsg: function(data) {
            console.log(data)
        },
        showAlert: function() {
            alert('fu')
        },
        submitForm(formName) {
            console.info(this.ruleForm)
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    alert('submit!');
                    alert(this.ruleForm.type);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }


    }
}
</script>
<style lang='scss'>

div{
    font-size: 14px;
}

.red{
    width: 1rem;
    height:1rem;
    background-color:#fe5453;
}

.inline {
    div {
        color: white;
        text-align: center;
        line-height: 35px;

        &:hover {
            background: #666;
        }
    }

}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.el-row {
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
    cursor: pointer;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>