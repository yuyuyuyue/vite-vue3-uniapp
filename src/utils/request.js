/**
 * @param {string} url 路径
 * @param {object} data 数据
 * @param {string} method 类型
 */
export const request = (url,data,method = 'post',baseUrl) =>{

    return new Promise((res,rej)=>{
        uni.request({
            url:baseUrl + url,
            data,
            method,
            header:{
                'content-type':'application/x-www-form-urlencoded',
                // 'content-type':'application/json'
            },
            timeout:60000,
            dataType:'json',
            success:(data)=>{
                res(data)
            },
            fail:(err)=>{
                rej(err)
            }   
        })
    })
}