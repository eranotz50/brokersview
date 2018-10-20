$(document).ready(function(){

    var grid = $('.dataGrid');

    var brokersViewCtrl = new brokersViewCntrl(grid);
    brokersViewCtrl.init().then( res => console.log('Init complete -> ' + res));    
});
   

   



