var brokerRepo = {
    get : function(){
       return [
        {
          Org: 'Fortrade',
          Product: 'Forex,MT4,CFD',
          Rating: '98',
          Spreads: '2',
          Regulatory: 'FCA',
          Leverage: '200',
          MinDeposit: '100',
          Img: '/images/Fortrade_logo.png'
        },
        {
          Org: 'Avatrade',
          Product: 'Forex,MT4,CFD,Social',
          Rating: '94',
          Spreads: '1',
          Regulatory: 'FCA,FSMA',
          Leverage: '400',
          MinDeposit: '100',
          Img: '/images/Market-logo.png'
        },
        {
          Org: 'Etoro',
          Product: 'Forex,CFD,Social',
          Rating: '96',
          Spreads: '2',
          Regulatory: 'FCA,CySEC',
          Leverage: '400',
          MinDeposit: '500',
          Img: '/images/360_Logo-003.png'
        },
        {
          Org: '24option',
          Product: 'MT4,CFD',
          Rating: '95',
          Spreads: '1.5',
          Regulatory: 'CySEC',
          Leverage: '400',
          MinDeposit: '250',
          Img: '/images/24_op.png'
        },
        {
          Org: 'UFX',
          Product: 'Forex,MT4,CFD',
          Rating: '94',
          Spreads: '2',
          Regulatory: 'CySEC',
          Leverage: '400',
          MinDeposit: '100',
          Img: '/images/Ufx_logo-005.png',
          marketing: '&afp=',
          Website: 'http://goaff.ufx.com/visit/?bta=37054&brand=ufx',
          Chat: 'http://goaff.ufx.com/visit/?bta=37054&brand=ufx',
          Email: 'http://goaff.ufx.com/visit/?bta=37054&brand=ufx',
          RatingStarsImage: '/images/4_stars.png'
        },
        {
          Org: 'Trade360',
          Product: 'Forex,MT4,CFD,Social',
          Rating: '92',
          Spreads: '1.8',
          Regulatory: 'CySEC',
          Leverage: '400',
          MinDeposit: '250',
          Img: '/images/360_Logo-003.png'
        },
        {
          Org: 'IronFX',
          Product: 'Forex,MT4,CFD',
          Rating: '84',
          Spreads: '0.5',
          Regulatory: 'FCA,CySEC,ASIC',
          Leverage: '200',
          MinDeposit: '100',
          Img: '/images/ironfx.png'
        },
        {
          Org: 'IQ Option',
          Product: 'MT4,CFD',
          Rating: '72',
          Spreads: '0.5',
          Regulatory: 'CySEC',
          Leverage: '500',
          MinDeposit: '10',
          Img: '/images/Iqoption_logo.png'
        }
      ]
    }
}

module.exports = brokerRepo;