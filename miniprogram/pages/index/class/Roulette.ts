// es6 class类
// let util = require('../../../utils/util.js');
class Roulette {
  // public url: string = 'http://localhost/rouletteData/rouletteData.php?action=read'//公有的
  // public resType: any
  // private _cb:any

  // constructor(url: string, resType: any,_cb:any) {
  //   this._cb = _cb;
  //   this.url = url;
  //   this.resType = resType;
  // }
  // getImgs(_cb:any){
  //   this._cb = _cb;
  //   util.getData(this.url,this.resType,this.getImgData.bind(this));
  // }
  // getImgData(data:any){
  //   this._cb(data);
  // }
  // //点击后旋转
  // onRotate(): void {
  //   let num: number = 360 / 7;
  //   let degrees: number = this.getRandom(1800, 3600);//获取随机度数
  //   this.getAnimation(3000, degrees);
  //   // console.log(degrees)
  //   if (degrees % 360 <= num * 1) {
  //     this.onShowModal('免分期服务费');
  //   } else if (degrees % 360 <= num * 2) {
  //     this.onShowModal('提高白条额度');
  //   } else if (degrees % 360 <= num * 3) {
  //     this.onShowModal('未中奖');
  //   } else if (degrees % 360 <= num * 4) {
  //     this.onShowModal('免单4999元');
  //   } else if (degrees % 360 <= num * 5) {
  //     this.onShowModal('免单50元');
  //   } else if (degrees % 360 <= num * 6) {
  //     this.onShowModal('免单10元');
  //   } else if (degrees % 360 <= num * 7) {
  //     this.onShowModal('免单5元');
  //   }
  // }
  // //中奖信息弹窗动画
  // onShowModal(str: string) {
  //   setTimeout(() => {
  //     wx.showModal({
  //       title: '中奖信息',
  //       content: str,
  //       success: (): void => {
  //         this.getAnimation(0, 0);
  //       }
  //     })
  //   }, 3000)
  // }
  // //全局动画函数，秒数和旋转度数传参可复用
  // getAnimation(s: number, degrees: number) {
  //   let animation: any = wx.createAnimation({//定义全局初始化动画
  //     duration: s,//定义动画持续的时间
  //     timingFunction: 'ease',//定义动画的进行
  //   })
  //   animation.rotate(degrees).step();//旋转到n度
  // }
  // //随机度数
  // getRandom(min: number, max: number): number {
  //   let i: number = max - min + 1;
  //   return Math.floor(Math.random() * i) + min;//设置随机旋转的度数
  //   // return Math.floor(Math.random()*1801)+1800;
  // }
}

// export {Roulette}
//any是不指定类型，随便传参。泛型是传什么类型，ts检测成什么类型。
//本来想改成class的形式，可惜引入模块时一直报错，而且路径也并无错误，目前的测试以失败而告终，但es6语法与ts的结合已经没有太大的问题！