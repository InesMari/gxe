import { util, wxApi, webApi, regeneratorRuntime, APP_CONST } from '../../../common/commonImport';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    intervalList:[],  //定时器储存数组
    // 假数据
    list: [
      {
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
      {
        "dateTime": 323333,
        "createUserId": 1210,
        "consigneeLinkmanName": "111",
        "orderId": 6065301,
        "preBeginPickupDate": null,
        "orderInState": 88,
        "payConsignorRefundRemark": null,
        "cityStartName": "北京北京市东城区",
        "paySts": 1,
        "payConsignorName": null,
        "payConsignorId": -1,
        "paymentType": 3,
        "payConsignorState": 2,
        "consigneeBill": "18898413054",
        "orderIncome": 0,
        "consignorId": 16,
        "sourceCounty": 101001000,
        "destAddress": "111",
        "orderOutStateName": "已取消",
        "productTypeName": null,
        "sourceStreet": null,
        "destCounty": 201861877,
        "consigneeId": 1053,
        "sourceCity": 10100,
        "productType": 0,
        "destStreet": null,
        "customerTenantId": 219,
        "sourceAddress": "天安门",
        "consigorName": "肯德基",
        "destCity": 20186,
        "weight": 1,
        "preEndPickupDate": null,
        "destProvince": 20,
        "billingDate": "2020-07-03 11:35:05",
        "showTypeList": [
          5
        ],
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getTimeDown();
  },

  // 倒计时逻辑  
  getTimeDown(){
    //获取需要倒计时的时间
    this.data.list.forEach((item, index) => {
      if (util.isNotBlank(item.dateTime) && Number(item.dateTime)>0){
        this.cutDown(item.dateTime,index);
      }
    })
  },
  //清空倒计时的循环器
  clearTimeDown(){
    this.data.intervalList.forEach(el => {
      clearInterval(el);
    })
  },
  cutDown(time,index){
    time = parseInt(time);
    this.data.intervalList[index] = setInterval(() => {
      time--;
      let second = time%60%60;
      let min = parseInt(time/60)%60;
      let hour = parseInt(time/60/60)%24
      let day = parseInt(time/60/60/24);
      if (second < 10) second = '0' + second;
      if (min < 10) min = '0' + min;
      if (hour < 10) hour = '0' + hour;
      if (day>0){
        day = day + "天";
      }else{
        day = ''
      }
      let timeDown = day + hour + ':' + min + ':' + second;
      this.setData({ ['list['+index+'].timeDown']: timeDown})
    },1000)
  },
})