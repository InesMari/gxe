import { util, wxApi, webApi, regeneratorRuntime,appConfig, APP_CONST } from '../../../common/commonImport';
import req from '../../../utils/request';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{},
    headImg:"/common/images/u3395.png",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    this.doQuery();
  },
  async queryStorage() {
    let unlogin = wx.getStorageSync("UNLOGIN");//是否登录
    let headImg = wx.getStorageSync(APP_CONST.STORAGE.AVATARURL);//获取微信头像
    this.setData({ unlogin,headImg,ver:appConfig.ver });
  },
  async doQuery() {
    try{
      await this.queryStorage();
      let info = await webApi.getPersonalInfo();
      let { cfgValue } = await webApi.getConfig({ cfgName: "CONSUMER_HOTLINE" });
      this.setData({ info, cfgValue });
    } catch (e) {
      console.log(e)
    }
  },
  // 点击注册/登录
  toLogin(){
    req.reLogin();
  },
  // 退出登录
  async relogin(){
    let { confirm } = await wxApi.showModal({ title: '提示', content: '确定退出登录？' });
    let content = await webApi.relogin();
    if (content == 0) {
      req.reLogin();
    }
  },
  // 拨打电话
  call(){
    wx.makePhoneCall({
      phoneNumber: this.data.info.customerUserPhone
    })
  },
})