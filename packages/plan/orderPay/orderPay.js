import { util, wxApi, webApi, regeneratorRuntime, APP_CONST } from '../../../common/commonImport';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    intervalList:[],  //定时器储存数组
    code_url:"",  //二维码内容
    showCode:false, //是否展示付款二维码
    refreshCode:false,  //二维码过期遮罩层
    // 假数据
    info: {
        "dateTime":323333,
        "createUserId": 1210,
        "consigneeLinkmanName": "志明",
        "orderId": 6065316,
        "preBeginPickupDate": null,
        "orderInState": 2,
        "payConsignorRefundRemark": null,
        "cityStartName": "北京北京市东城区",
        "paySts": 2,
        "payConsignorName": null,
        "payConsignorId": -1,
        "paymentType": 1,
        "payConsignorState": 2,
        "consigneeBill": "15592800093",
        "orderIncome": 0.01,
        "consignorId": 16,
        "sourceCounty": 101001000,
        "destAddress": "白云大道210号",
        "orderOutStateName": "待分配",
        "productTypeName": null,
        "sourceStreet": null,
        "destCounty": 282972815,
        "consigneeId": 914,
        "sourceCity": 10100,
        "productType": 0,
        "destStreet": null,
        "customerTenantId": 219,
        "sourceAddress": "天安门",
        "consigorName": "肯德基",
        "destCity": 28297,
        "weight": 1,
        "preEndPickupDate": null,
        "destProvince": 28,
        "billingDate": "2020-07-08 14:48:08",
        "showTypeList": [
          2
        ],
        "cityEndName": "广东广州市白云区",
        "trackingNum": 82007080006,
        "orderOutState": 2,
        "sourceProvince": 10,
        "pickupDate": null,
        "payFlag": 2,
        "showCancel": true,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad (options) {
    // this.initCode();
  },
  // 初始化二维码
  async initCode(){
    this.setData({refreshCode:false});
    let loginRes = await wxApi.login();
    let orderId = Number(13966);
    let res = await webApi.pay({ orderId, js_code: loginRes.code,trade_type:"NATIVE"}); //获取支付二维码内容
    let code_url = "http://qr.topscan.com/api.php?text="+res.code_url;  //生成二维码链接
    this.setData({code_url,showCode:true,flowId:res.flowId});
    this.checkPay();
  },
  //轮询一分钟订单状态
  async checkPay(){
    let time = 0;
    const timer = setInterval(async() => {
      time += 2;
      if(time>60){
        this.setData({refreshCode:true});
        clearInterval(timer);
      }else{
        let res = await webApi.payStatus({flowId:this.data.flowId});
        if(res.payStatus == 3){
          clearInterval(timer);
          await wxApi.showModal("支付成功");
          wx.navigateBack();
        }
      }
    }, 2000);
  },
  async doPay() {
    let loginRes = await wxApi.login();
    let orderId = Number(this.data.orderId);
    let res = await webApi.pay({ orderId, js_code: loginRes.code}); //支付测试
    let timeStamp = new Date().getTime().toString();  //时间戳
    let prepay_id = 'prepay_id=' + res.prepay_id; //与支付ID
    let obj = {
      appId: "wxbb9e6757232356eb",
      timeStamp,
      nonceStr: res.nonce_str,
      package: prepay_id,
      signType: "MD5",
    }
    obj = util.sort_ASCII(obj);   //ASCII码排序
    //对象传字符串（appId=1&timeStamp=2）格式
    let objStr = JSON.stringify(obj).replace(/[\''"{}]/g, "").replace(/,/g, '&').replace(/:/g, '=');
    //转义后再加上商户秘钥
    objStr += "&key=FA05BCEF08F214ED3D495D3D132CB97B";
    //md5加密并大写
    let paySign = md5(objStr).toUpperCase();
    let _this = this;
    wx.requestPayment({
      timeStamp,
      nonceStr: res.nonce_str,
      package: prepay_id,
      signType: 'MD5',
      paySign,
      success(result) {
        _this.doNext(res.flowId)
      },
      fail(result) {
        console.log(res);
      }
    })
  },
})