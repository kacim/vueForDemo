

<script type="text/javascript">
import axios from 'axios';
// 定义一些公共的属性和方法
const httpUrl = 'http://39.105.17.99:8080/'

function commonFun() {
    console.log("公共方法")
}

// 暴露出这些属性和方法

export default {
    httpUrl,
    post(url,param,res,err) {
      axios({
                method: 'post',
                url:httpUrl+url,
                data: param,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                return res;
            }).then(res)
            .catch(err => {
                console.log(err);
            })
    },
    get(url,res,param) {
      axios({
                method: 'get',
                url,
                data: param,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                return res;
            }).then(res)
            .catch(err => {
                console.log(err);
            })
    }

}
</script>