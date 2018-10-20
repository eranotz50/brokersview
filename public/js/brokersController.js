function brokersController(container){
 
  var _brokerTemplate  = '';
  var _defered = $.Deferred();

  var initInternal = function() {

            $.get('/view/broker.html').then(function(brokerTemplate){
                _brokerTemplate = brokerTemplate;

                $.get('/brokers').then(function(brokers){

                    $.each(brokers,function(i,e){        
                                            
                        var htmlStr = brokerTemplate.replace("{Img}",e.Img).replace("{Img}",e.Img)
                            .replace("{Rating}",e.Rating).replace("{Leverage}",e.Leverage)
                            .replace("{Regulatory}",e.Regulatory).replace("{MinDeposit}",e.MinDeposit)
                            .replace("{Spreads}",e.Spreads);    
                                                
                        var trimedHtmlStr = $.trim(htmlStr)  ;

                        var html = $.parseHTML(trimedHtmlStr);
                        $(container).append(html);                             

                        _defered.resolve('Broker table created');
                });
            });               
        })        

    }
    
this.init =  function(){
        initInternal();
        return _defered.promise();                                        
    }      
}


  







