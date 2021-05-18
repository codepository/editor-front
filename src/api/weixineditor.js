import axios from '@/libs/api.request'
// getEditorData 获取数据通用接口
export const getEditorData = ( method,params ) => {
      return axios.request({
            url: '/weixineditor/getData',
            data: {
                  body: {
                        method: method,
                        params: params
                  }
            },
            method: 'post'
      })
}
// 上传样式
export const uploadStyle = ( params ) => {
      return getEditorData("exec/frames/create",params)
}
// 获取样式
export const findAllStyle = (params) => {
      return getEditorData("visit/frames/findAllByPaged",params)
}
// 更新样式
export const updateStyle = (params) => {
      return getEditorData("exec/frames/update", params)
}
// 删除样式
export const delStyleByID = (id) => {
      return getEditorData("exec/frames/delByID",{"id":id})
}