#记录
---

##`vue-router`
> 使用了`vue-router`，不过只是使用了`router-link`标签的跳转功能，然后可app.js中watch '$route'，得到当前路由地址然后更改实例的`type`属性，再通过计算属性从而得到一个当前需要显示的数组。

##引入'vue-route'后
> 由于'vue-route'需要挂载到一个实例，所以不能先创建实例对象，可以先定义路由不挂载，然后统一在创建实例时指定路由

```
window.App = new Vue({
	// 这是不能指定el属性，因为后面会使用$mount挂载
    // el: '.todoapp',
    router: router,
    data: ···,
    methods: ···,
    watch: ···,
    computed: ···
  })
  .$mount('.todoapp')
```
