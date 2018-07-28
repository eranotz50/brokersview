function brokersViewCntrl(container){

  var brokerTemplate = 
  "<div class='broker'>"  
  +   "<div class='broker_header'><img src='{Img}'/></div>"
  +   "<div class='broker_body'>"
  +      "<div class='names'>" 
  +         "<div class='col1'></div> <div class='col2'>Broker</br>Rating</div><div class='col3'>Maximum </br> Leverage </div><div class='col4'>Regulation  </br> Authority</div><div class='col5'>Minimum </br> Deposit</div><div class='col6'>Minimum </br> Spread </div><div class='col7'></div>" 
  +      "</div>" 
  +      "<div class='values'>"
  +         "<div class='col1'><img src='{Img}'/></div><div class='col2'> <div>{Rating} % </div> <div> stars </div><div> review </div></div><div class='col3'>{Leverage}</div><div class='col4'>{Regulatory}</div><div class='col5'>{MinDeposit}</div><div class='col6'>{Spreads}</div><div class='col7'><a target='_blank' href='https://www.fortrade.com?B=567&A=147174&mtId=567'> Open account </a></div>"
  +      "</div>"
  +"</div>"    
  

  return {
      
      populateView : function(){
          $.get('/brokers',function(data){


 
              //console.log('container -> ' + container);
                                                       
              $.each(data,function(i,e){        
                                            
                  var htmlStr = brokerTemplate.replace("{Img}",e.Img).replace("{Img}",e.Img)
                          .replace("{Rating}",e.Rating).replace("{Leverage}",e.Leverage)
                          .replace("{Regulatory}",e.Regulatory).replace("{MinDeposit}",e.MinDeposit)
                          .replace("{Spreads}",e.Spreads);

              //    console.log('appending --> \n' + htmlStr);

                  var trimedHtmlStr = $.trim(htmlStr)  ;

                  var html = $.parseHTML(trimedHtmlStr);
                  $(container).append(html);            
              })            
          });   

      }        
  }
  
}








/*
{
    Org: 'Fortrade',
    Product: 'Forex,MT4,CFD',
    Rating: '98',
    Spreads: '2',
    Regulatory: 'FCA',
    Leverage: '200',
    MinDeposit: '100',
    Img: '/wp-content/uploads/2017/11/Fortrade_logo.png'
  },
*/
