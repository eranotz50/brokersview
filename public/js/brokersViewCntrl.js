function brokersViewCntrl(container){

  var brokerTemplate = 
  "<div class='broker'>"  
  +   "<div class='broker_header'><img src='{Img}'/></div>"
  +   "<div class='broker_body'>"
  +      "<div class='names'>" 
  +         "<div></div> <div>Broker</br>Rating</div><div>Maximum </br> Leverage </div><div>Regulation  </br> Authority</div><div>Minimum </br> Deposit</div><div>Minimum </br> Spread </div><div></div>" 
  +      "</div>" 
  +      "<div class='values'>"
  +         "<div class='col1'><img src='{Img}'/></div><div class='col2'>{Rating}</div><div class='col3'>{Leverage}</div><div class='col4'>{Regulatory}</div><div class='col5'>{MinDeposit}</div><div class='col6'>{Spreads}</div><div class='col7'><a target='_blank' href='https://www.fortrade.com?B=567&A=147174&mtId=567'> Open account </a></div>"
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
