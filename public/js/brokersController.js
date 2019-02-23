function brokersController(container){
 
  var _brokerTemplate  = '';
  var _defered = $.Deferred();

   function ratingToStarsValue(rating){
        var starValue = 20;        
        var nStarsFraction = rating / starValue;

        if(nStarsFraction >= 4.5){
            return 4.5;
        }

        var nStars =  Utils.roundHalf(nStarsFraction);
        return nStars;
   } 

   function ratingToStars(starsElement,brokerRating){

        var nStars = ratingToStarsValue(brokerRating);
        console.log(brokerRating + ' -> N Stars : ' + nStars  );
              
        var IsHasfractional = nStars % 1 > 0;
        
        if(IsHasfractional){
            nStars--;
        }

        var starsActual = 0;
        for(var i = 0 ; i < nStars; i++){
            
            $(starsElement).append('<div class="fas fa-star"></div>');                                     
            starsActual++;
        }    

        if(IsHasfractional){
            $(starsElement).append('<div class="fas fa-star-half-alt my-icon"></div>');
            starsActual++;
        }        
        
        var diff = 5 - starsActual;

        for(var i = 0; i < diff; i++){
            $(starsElement).append('<div class="far fa-star"></div>');                            
        }         
   }


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
                        
                        var starsElement = $(html).find('#stars');    
                        ratingToStars(starsElement,e.Rating);
                                       

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


  







