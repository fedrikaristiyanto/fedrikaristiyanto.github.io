var vm = new Vue({
            el: '#computed_props',
            data: {
               kilograms : 0,
               grams:0
            },
            methods: {
            },
            computed :{
            },
            watch : {
               kilograms:function(val) {
                  this.kilograms = val;
                  this.grams = val * 1000;
               },
               grams : function (val) {
                  this.kilograms = val/ 1000;
                  this.grams = val;
               }
            }
         });
