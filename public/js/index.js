$(document).ready(function(){

    var grid = $('.grid-body');

    var brokersCtrl = new brokersController(grid);
    brokersCtrl.init().then( res => console.log('Init complete -> ' + res));    
});
   

   



