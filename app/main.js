// 发布订阅模式
// 案例，卖烧饼
/**
 * 简单订阅模式
var shop = {
  list:[],
  addClient: function(fn) {
    this.list.push(fn)
  },
  substrie: function() {
    for(var i=0,fn;fn=this.list[i++];) {
      fn.apply(this,arguments)
    }
  }
}

shop.addClient(function(price,name){
  console.log('小红买了'+price+'元'+name)
})
shop.addClient(function(price,name){
  console.log('小明买了'+price+'元'+name)
})
shop.substrie(10,'香辣烧饼')
 */

//  个性化的定制
 var shop = {
  clienList: {},
  addClient:function(key, fn) {
    if(!this.clienList[key]){
      this.clienList[key] = [];
    }
    this.clienList[key].push(fn);
  },
  trigger: function() {
    var key = [].shift.call(arguments),
      fns = this.clienList[key];
    if(!fns || fns.length === 0) {
      return false;
    }
    for(var i=0,fn;fn=fns[i++];){
        fn.apply(this,arguments)
    }
  }
}

shop.addClient('xiangla',function(price,name){
  console.log("小红喜欢吃"+price+name)
})
shop.addClient('xiangla',function(price,name){
  console.log("小白喜欢吃"+price+name)
})
shop.addClient('hongshao',function(price,name){
  console.log("小绿喜欢吃"+price+name)
})

shop.trigger('xiangla', '10元', '小龙虾')
shop.trigger('hongshao', '20元', '猪蹄')


