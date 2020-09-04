// packages/plan/pickerGoods/pickerGoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  onLoad: function (options) {

  },
  
  //扫码
  getCode(){
    let _this = this;
    wx.scanCode({
      success(res) {
        console.log(res);
      }
    })
  },
})