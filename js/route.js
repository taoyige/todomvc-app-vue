(function(exports, Vue, VueRouter) {
  'use strict';

  // var Foo = { template: '<div>foo</div>' }
  // var Bar = { template: '<div>bar</div>' }

  var routes = [
    // { path: '/foo', component: Foo },
    // { path: '/bar', component: Bar },
  ]

  exports.router = new VueRouter({
    routes // （缩写）相当于 routes: routes
  })

  /*var app = new Vue({
    router
  }).$mount(App)*/

  // 现在，应用已经启动了！

})(window, Vue, VueRouter)
