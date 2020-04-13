import axios from 'axios'
const http = axios.create({
    baseURL:'http://localhost:3000/'
})


let api = {
    categoryData:() => http.get('move/chrome_category'),  //获取插件分类数据
    viewData:(str) => http.get('/chrome/views' + str), //视图数据筛选
    inputLike:(str) => http.post('/inputLike',str)
}

export default api

