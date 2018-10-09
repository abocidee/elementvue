
Vue.component('todo-item', {
    props:['todo'],
    template: '<li>{{todo.name}}</li>'
  })
var app=new Vue({
   el:"#app",
   data:{
       info:"hello lunongyun",
       message:"the number you havae dsaf    dialed is busy ",
       seen :false,  
       list :[
           {
            name:"lunongyun",
           },
           {
            name:"liwanting",
           },
           {
            name:"mingzhanghui",
           },
           {
            name:"caolinzuo",
           },
           {
            name:"chegnjunxue",
           },
          
       ]  
   } ,
   methods:{
    reverse :function(){
        console.log(this);
        this.message = this.message.split('').reverse().join('')
    }

   }
  
});
console.log(app);
app.seen=true;
