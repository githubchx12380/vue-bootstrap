import axios from 'axios'
const http = axios.create({
    baseURL:'http://localhost:3000/'
})


let api = {
    categoryData:() => http.get('move/chrome_category'),  //获取插件分类数据
    viewData:(str) => http.get('/chrome/views' + str), //视图数据筛选
    inputLike:(str) => http.post('/inputLike',str),  //搜索数据
    detailDatas:(id) => http.get('/detail/' + id)  //详情页
}

export default api

