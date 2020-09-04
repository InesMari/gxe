// packages/personal/income/income.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"",
    //假数据
    "orderList": [
      {
        "createUserId": 1210,
        "orderId": 6112034,
        "orderInState": 2,
        "cityStartName": "石家庄市",
        "paySts": 1,
        "signDate": null,
        "payConsignorId": -1,
        "paymentType": 3,
        "payConsignorState": 2,
        "consigneeBill": "18898413054",
        "consignorId": 9,
        "sourceCounty": null,
        "destAddress": "111",
        "orderOutStateName": "待分配",
        "sourceStreet": null,
        "destCounty": 201861877,
        "consigneeId": 1053,
        "sourceCity": 12102,
        "destStreet": null,
        "customerTenantId": 219,
        "collectTime": null,
        "sourceAddress": "商会大厦",
        "destCity": 20186,
        "showTime": "2020-08-26 16:11:56",
        "destProvince": 20,
        "billingDate": "2020-08-26 16:11:56",
        "showTypeList": [
          1,
          2
        ],
        "cityEndName": "杭州市",
        "trackingNum": 882008260406,
        "orderOutState": 2,
        "sourceProvince": 12,
        "cancelTime": null,
        "payFlag": 1
      },
      {
        "createUserId": 1210,
        "orderId": 6091403,
        "orderInState": 2,
        "cityStartName": "北京市",
        "paySts": 1,
        "signDate": null,
        "payConsignorId": -1,
        "paymentType": 3,
        "payConsignorState": 2,
        "consigneeBill": "18898413054",
        "consignorId": 16,
        "sourceCounty": 101001000,
        "destAddress": "天安门",
        "orderOutStateName": "待分配",
        "sourceStreet": null,
        "destCounty": 101001000,
        "consigneeId": 16,
        "sourceCity": 10100,
        "destStreet": null,
        "customerTenantId": 219,
        "collectTime": null,
        "sourceAddress": "天安门",
        "destCity": 10100,
        "showTime": "2020-08-14 15:23:02",
        "destProvince": 10,
        "billingDate": "2020-08-14 15:23:02",
        "showTypeList": [
          1,
          2
        ],
        "cityEndName": "北京市",
        "trackingNum": 882008140143,
        "orderOutState": 2,
        "sourceProvince": 10,
        "cancelTime": null,
        "payFlag": 1
      },
      {
        "createUserId": 1210,
        "orderId": 6090089,
        "orderInState": 2,
        "cityStartName": "北京市",
        "paySts": 1,
        "signDate": null,
        "payConsignorId": -1,
        "paymentType": 1,
        "payConsignorState": 2,
        "consigneeBill": "18898413054",
        "consignorId": 16,
        "sourceCounty": 101001000,
        "destAddress": "天安门",
        "orderOutStateName": "待分配",
        "sourceStreet": null,
        "destCounty": 101001000,
        "consigneeId": 16,
        "sourceCity": 10100,
        "destStreet": null,
        "customerTenantId": 219,
        "collectTime": null,
        "sourceAddress": "天安门",
        "destCity": 10100,
        "showTime": "2020-08-13 16:55:47",
        "destProvince": 10,
        "billingDate": "2020-08-13 16:55:47",
        "showTypeList": [
          1,
          2,
          7
        ],
        "cityEndName": "北京市",
        "trackingNum": 882008130318,
        "orderOutState": 2,
        "sourceProvince": 10,
        "cancelTime": null,
        "payFlag": 1
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindDateChange(e){
    let value = e.detail.value;
    this.setData({date:value});
  },
})