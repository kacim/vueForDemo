<template>
    <!--<div class="personPop">-->
    <!--单选-->
    <!--<div class="top">-->
    <!--已选择：-->
    <!--<el-checkbox-group v-model="main">-->
    <!--<el-checkbox v-for="position in mainList"-->
    <!--:label="position.id"-->
    <!--:key="position.id"-->
    <!--@change="cancel()">-->
    <!--{{position.name}}-->
    <!--</el-checkbox>-->
    <!--</el-checkbox-group>-->
    <!--</div>-->
    <!--<div class="personCon">-->
    <!--<div class="left">-->
    <!--<ul>-->
    <!--<li v-for="(list,index) in personList" @click="selectCon(index)">{{list.name}}</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--<div class="right" style="margin-left: 10px">-->
    <!--<ul>-->
    <!--<li v-for="(list,index) in personTypeList">-->
    <!--<div class="name">{{list.name}}</div>-->
    <!--<el-checkbox-group v-model="selectmain"-->
    <!--:min="0"-->
    <!--:max="1">-->
    <!--<el-checkbox v-for="position in list.childs"-->
    <!--:label="position.id"-->
    <!--:key="position.id"-->
    <!--:name="position.name"-->

    <!--@change="handleChange($event,position.id,position.name)">-->
    <!--{{position.name}}-->
    <!--</el-checkbox>-->
    <!--</el-checkbox-group>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->
    <!--<el-button @click="submit">提交</el-button>-->
    <!--</div>-->

    <div class="personPop">
        <div class="top">
            <div class="name"><span>选择职业</span>
                <small>最多选择4项</small>
            </div>
            <div class="selected of">
                <div class="text fl"> 已选择：</div>
                <div class="fl selectPerson">
                    <el-checkbox-group v-model="secondary">
                        <el-checkbox v-for="position in secondaryList"
                                     :label="position.id"
                                     :key="position.id"
                                     @change="secondaryCancel(position.id)">
                            {{position.name}}
                        </el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
        </div>
        <div class="personCon pr">
            <div class="left">
                <ul>
                    <li v-for="(list,index) in personList" :class="{active:index=ins}" @click="selectCon(index)">{{list.name}}</li>
                </ul>
            </div>
            <div class="right">
                <ul>
                    <li v-for="(list,index) in personTypeList">
                        <div class="name">{{list.name}}</div>
                        <el-checkbox-group v-model="selectsecondary"
                                           :min="0"
                                           :max="4">
                            <el-checkbox v-for="position in list.childs"
                                         :label="position.id"
                                         :key="position.id"
                                         :name="position.name"
                                         @change="secondaryChange($event,position.id,position.name)">
                                {{position.name}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </li>
                </ul>
            </div>
        </div>
        <el-button @click="submit">提交</el-button>
    </div>
</template>

<script>
   // import NetWork from "../../../NetWork";

    export default {
        name: "selectCon",
        data() {
            return {
                ins:0,
                personList: [],
                personTypeList: [],
                selectmain: [],
                main: [],
                mainList: [],
                selectsecondary: [],
                secondary: [],
                secondaryList: []
            }
        },
        created() {
            this.positionList()
        },
        methods: {
            //职位类型
            positionList() {
                NetWork.get("/bgd/base/personType/list", {lan: localStorage.lang, special: 0}, res => {
                    if (res.data.code == 0) {
                        this.personList = res.data.data;
                        this.personTypeList = this.personList[0].subTypes;
                    }
                })
            },
            selectCon(index) {
                this.ins=index;
                this.personTypeList = this.personList[index].subTypes;
            },
            //点击添加
            handleChange(is, id, name) {
                if (is == true) {
                    this.main.push(id)
                    this.mainList.push({
                        id: id,
                        name: name
                    })
                } else {
                    this.main = [];
                    this.mainList = [];
                    this.selectPerson = [];
                }
            },
            //点击取消
            cancel() {
                this.main = [];
                this.mainList = [];
                this.selectPerson = [];
            },
            //确认提交
            submit() {
                console.log(this.secondary)
                console.log(this.secondaryList)
            },
            //多选
            secondaryChange(is, id, name) {
                if (is == true) {
                    this.secondary.push(id)
                    this.secondaryList.push({
                        id: id,
                        name: name
                    })
                } else {
                    for (let i = 0; i < this.secondary.length; i++) {
                        if (id == this.secondary[i]) {
                            this.secondary.splice(i, 1)
                        }
                    }
                    for (let i = 0; i < this.secondaryList.length; i++) {
                        if (id == this.secondaryList[i].id) {
                            this.secondaryList.splice(i, 1)
                        }
                    }
                    for (let i = 0; i < this.selectsecondary.length; i++) {
                        if (id == this.selectsecondary[i].id) {
                            this.selectsecondary.splice(i, 1)
                        }
                    }

                }
            },
            secondaryCancel(id) {
                for (let i = 0; i < this.secondary.length; i++) {
                    if (id == this.secondary[i]) {
                        this.secondaryList.splice(i, 1)
                    }
                }
                for (let i = 0; i < this.secondaryList.length; i++) {
                    if (id == this.secondaryList[i].id) {
                        this.secondaryList.splice(i, 1)
                    }
                }
                for (let i = 0; i < this.selectsecondary.length; i++) {
                    if (id == this.selectsecondary[i]) {
                        this.selectsecondary.splice(i, 1)
                    }
                }
            }
        },

    }
</script>

<style scoped>
    .personPop {
        width: 980px;
        height: 560px;
        position: absolute;
        -webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
        border: #ccc 3px solid;
        top: 50%;
        left: 50%;
        z-index: 10000;
        margin: -280px 0 0 -490px;
        background: #fff;
    }

    .personPop .top .name {
        width: 100%;
        height: 30px;
        color: #333;
        line-height: 30px;
        text-indent: 15px;
        background: #fff;
        border-bottom: #ccc 1px dotted;
    }

    .personPop .selected {
        padding: 5px 15px;
    }

    .personPop .selected .text {
        font-size: 14px;
    }

    .personCon .left {
        float: left;
    }

    .personCon .right {
        float: left;
    }

    .fl {
        float: left;
    }

    .fr {
        float: right;
    }

    .of {
        overflow: hidden;
    }

    .pr {
        position: relative;
    }

    .pa {
        position: absolute;
    }

    .pf {
        position: fixed;
    }

    .personCon {
        width: 100%;
        height: 480px;
        position: relative;
        padding: 5px 0;
    }

    .personCon .left {
        width: 160px;
        position: absolute;
        z-index: 2;
        float: left;
    }

    .personCon .left li {
        width: 100%;
        height: 36px;
        line-height: 36px;
        cursor: pointer;
        color: #666;
        text-indent: 15px;
        border-bottom: #eee 1px solid;
    }

    .personCon .right {
        width: calc(815px - 20px);
        padding: 10px;
        margin-left: 159px;
        height: 469px;
        overflow: auto;
        border: #eee 1px solid;
        float: left;
        background: #fff;
    }

    .personCon .right .name {
        padding-bottom: 10px;
        border-bottom: 1px dashed #dddddd;
    }

    .personCon .right .el-checkbox-group {
        margin: 10px 0;
    }

    .personCon .right .el-checkbox-group label {
        width: 25%;
        margin-left: 0;
    }

    .personCon .left.active {
        color: red;
    }
</style>
