import { util, wxApi, webApi, appConfig, APP_CONST, regeneratorRuntime } from '../../common/commonImport';
import md5 from '../../lib/md5.js';
import req from '../../utils/request';

Page({
  data: {
    dayOrder:88,
    dayIncome:128,
    allOrder:1428,
    allIncome:3238,
  },
  async onLoad() {
    try{      
      this.isUpdate();  //强制更新
      await this.isLogin();
      await webApi.loginState();
      let unlogin = wx.getStorageSync("UNLOGIN");//是否登录
      this.setData({ unlogin});
      this.initNum();
    }catch(e){
      console.log(e);
    }
  },
  initNum(){
    if(this.data.unlogin){
      this.changingNum(this.data.dayOrder,"dayOrder");
      this.changingNum(this.data.dayIncome,"dayIncome");
      this.changingNum(this.data.allOrder,"allOrder");
      this.changingNum(this.data.allIncome,"allIncome");
    }
  },
  changingNum(num,code){
    let time = 0;
    const inter = setInterval(()=>{
      time++;
      let numStr = String(num);
      let newNum = "";
      for(let i=0;i<numStr.length;i++){
        newNum += Math.floor(Math.random()*10);
      }
      this.setData({[code]:Number(newNum)})
      if(time>30){
        clearInterval(inter);
        this.updateNum(code);
      }
    },50)
  },
  updateNum(code){
    let speed = (Math.floor(Math.random()*11)+10)*100;
    const timer = setInterval(() => {
      let newCount = Math.floor(Math.random()*10); 
      let num = this.data[code];
      this.setData({[code]:num+newCount});
    }, speed);
  },
  async isUpdate(){
    //发布前更改后台版本号，
    // await webApi.setVersion({version:appConfig.version});
    let version = await webApi.getVersion();
    console.log(version);
    if(version==appConfig.version) return;
    //后台版本号与前端版本号不一时强制更新
    const updateManager = wx.getUpdateManager();
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
  },
  async isLogin(){
    try {
      //判断session_key是否有效
      let checkSession = await wxApi.checkSession();
      //有效是请求后台查看后台登录是否过期
      if (checkSession.errMsg != "checkSession:ok") {
        wx.reLaunch({ url: '/pages/login/login' });
      }
    } catch (e) {
      console.log(e)
    }
  },
  async toLogin(){
    wx.reLaunch({ url: '/pages/login/login' });
  },
})
