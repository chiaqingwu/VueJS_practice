new Vue({
  el: '#app1',
  data: {
    message: 'hello, world!'
  },
  methods:{
    changeWord: function(e){
      e.target.innerText = "you";
    },
    changeWord2: function(e){
      this.$refs.my_button.innerText = "Ken";
    }
  }
})

var vm1 = new Vue({
  data: {
    message: 'mount!'
  }
})

vm1.$mount('#app2')

// --------------------------

Vue.component('hello123', {
  template: '<h1>hihi</h1>'
});

new Vue({ el: '#app3' })
