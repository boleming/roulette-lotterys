// 请求图片数据
type callBack = (data:any[]) => void;
export const  getData  = (url: string, resType: any,callBack:callBack) =>{
  wx.request({
    url: url,
    method: resType,
    header: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    success: (res: any) => {
      callBack(res.data.imgs)
      // this.setData({
      //   imgs: res.data.imgs
      // })
      // console.log(this.data.imgs)
    },
    fail: (err) => {
      console.log(err);
    }
  })
}