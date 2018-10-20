$(document).ready(function(){

    var grid = $('.dataGrid');

    var brokersCtrl = new brokersController(grid);
    brokersCtrl.init().then( res => console.log('Init complete -> ' + res));    
});
   

   



