$(document).ready(function(){

    var grid = $('.broker-grid'); // .gridItems

    var brokersCtrl = new brokersController(grid);
    brokersCtrl.init().then( res => console.log('Init complete -> ' + res));    
});
   

   



