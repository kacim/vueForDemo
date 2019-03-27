import router from './router/index'
import { Message } from 'element-ui';
export default {
    post (url,param,res) {
        axios({
            method: 'post',
            url,
            data:param,
            headers:{
                'access_token':localStorage.getItem("access_token")
            }
        }) .then(res=>{
            if(res.data.code=='801')
            {
                router.push('/login');
            }else if(res.data.code=='802')
            {
                Message('您没相关权限，请联系超级管理员');
            }
            return res;
        }).then(res)
            .catch(err=>{
                    console.log(err);
                }
            )
            // axios({
            //     method: 'post',
            //     url,
            //     datatype:'json',
            //     params:param,
            //     headers:{
            //         'access_token':localStorage.getItem("access_token")
            //     }
            // }).then(res=>{
            //     if(res.data.code=='801')
            //     {
            //         router.push('/login');
            //     }else if(res.data.code=='802')
            //     {
            //         Message('您没相关权限，请联系超级管理员');
            //     }
            //     return res;
            // })
            //     .then(res)
            //     .catch(err=>{
            //         console.log(err);
            //         }
            //     )
    },
    postdata (url,param,res) {
        axios({
            method: 'post',
            url,
            data:param,
            headers:{
                'access_token':localStorage.getItem("access_token")
            }
        }) .then(res=>{
                if(res.data.code=='801')
                {
                    router.push('/login');
                }else if(res.data.code=='802')
                {
                    Message('您没相关权限，请联系超级管理员');
                }
                return res;
            }).then(res)
            .catch(err=>{
                    console.log(err);
                }
            )
    },
    upload (url,param,res) {

        axios({
            method: 'post',
            url,
            data:param,
            headers:{
                'access_token':localStorage.getItem("access_token"),
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>
        {
            if(res.data.code=='801')
            {
                router.push('/login');
            }else if(res.data.code=='802')
            {
                Message('您没相关权限，请联系超级管理员');
            }
            return res;
        }).then(res)
          .catch(err=>{
                    console.log(err);
                }
            )
    },
    get (url,param,res) {

        axios({
            method: 'get',
            url,
            params:param,
            headers:{
                'access_token':localStorage.getItem("access_token")
            }
        }).then(res=>{
                if(res.data.code=='801')
                {
                    router.push('/login');
                }else if(res.data.code=='802')
                {
                    Message('您没相关权限，请联系超级管理员');
                }
                return res;
            }).then(res)
            .catch(err=>{
                console.log(err);
            }
        )
    }
}
