
let tokenGmt = 'GMT';
let tokenGst = 'GST';

/-------------------------BTC-----------------------------------/

axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR,USD')
  .then(function (response) {
    let coinValeur = response.data;
    let coinValeurEur = coinValeur.EUR;
    let coinValeurUsd = coinValeur.USD;
    let divBtc = document.getElementById('div-btc');
    let printBtcEur = document.createElement('p');
    let printBtcUsd = document.createElement('p');
    let textBtcEur = document.createTextNode('EUR :'+ coinValeurEur);
    let textBtcUsd = document.createTextNode('USD :'+ coinValeurUsd);
    printBtcEur.appendChild(textBtcEur);
    printBtcUsd.appendChild(textBtcUsd);
    divBtc.appendChild(printBtcEur);
    divBtc.appendChild(printBtcUsd);
  })
  .catch(function (error) {
    console.log(error);
  });

  /-------------------------ETH-----------------------------------/

  axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR,USD')
    .then(function (response) {
      let coinValeur = response.data;
      let coinValeurEur = coinValeur.EUR;
      let coinValeurUsd = coinValeur.USD;
      let divEth = document.getElementById('div-eth');
      let printEthEur = document.createElement('p');
      let textEthEur = document.createTextNode('EUR :'+ coinValeurEur);
      printEthEur.appendChild(textEthEur);
      let printEthUsd = document.createElement('p');
      let textEthUsd = document.createTextNode('USD :'+ coinValeurUsd);
      printEthUsd.appendChild(textEthUsd);
      divEth.appendChild(printEthEur);
      divEth.appendChild(printEthUsd);
    })
    .catch(function (error) {
      console.log(error);
    });

    /-------------------------SOL-----------------------------------/

  axios.get('https://min-api.cryptocompare.com/data/price?fsym=SOL&tsyms=EUR,USD')
    .then(function (response) {
      let coinValeur = response.data;
      let coinValeurEur = coinValeur.EUR;
      let coinValeurUsd = coinValeur.USD;
      let divSol = document.getElementById('div-sol');
      let printSolEur = document.createElement('p');
      let textSolEur = document.createTextNode('EUR :'+ coinValeurEur);
      printSolEur.appendChild(textSolEur);
      divSol.appendChild(printSolEur);
      let printSolUsd = document.createElement('p');
      let textSolUsd = document.createTextNode('USD :'+ coinValeurUsd);
      printSolUsd.appendChild(textSolUsd);
      divSol.appendChild(printSolUsd);
    })
    .catch(function (error) {
      console.log(error);
    });

    /-------------------------APE-----------------------------------/

    axios.get('https://min-api.cryptocompare.com/data/price?fsym=APE&tsyms=EUR,USD')
      .then(function (response) {
        let coinValeur = response.data;
        let coinValeurEur = coinValeur.EUR;
        let coinValeurUsd = coinValeur.USD;
        let divApe = document.getElementById('div-ape');
        let printApeEur = document.createElement('p');
        let textApeEur = document.createTextNode('EUR :'+ coinValeurEur);
        printApeEur.appendChild(textApeEur);
        divApe.appendChild(printApeEur);
        let printApeUsd = document.createElement('p');
        let textApeUsd = document.createTextNode('USD :'+ coinValeurUsd);
        printApeUsd.appendChild(textApeUsd);
        divApe.appendChild(printApeUsd);
      })
      .catch(function (error) {
        console.log(error);
      });

      /-------------------------GMT-----------------------------------/

    axios.get('https://min-api.cryptocompare.com/data/price?fsym=GMT&tsyms=EUR,USD')
      .then(function (response) {
        let coinValeur = response.data;
        let coinValeurEur = coinValeur.EUR;
        let coinValeurUsd = coinValeur.USD;
        let divGmt = document.getElementById('div-gmt');
        let printGmtEur = document.createElement('p');
        let textGmtEur = document.createTextNode('EUR :'+ coinValeurEur);
        printGmtEur.appendChild(textGmtEur);
        divGmt.appendChild(printGmtEur);
        let printGmtUsd = document.createElement('p');
        let textGmtUsd = document.createTextNode('USD :'+ coinValeurUsd);
        printGmtUsd.appendChild(textGmtUsd);
        divGmt.appendChild(printGmtUsd);
      })
      .catch(function (error) {
        console.log(error);
      });

      /-------------------------GST-----------------------------------/

    axios.get('https://min-api.cryptocompare.com/data/price?fsym=GST&tsyms=EUR,USD')
      .then(function (response) {
        let coinValeur = response.data;
        let coinValeurEur = coinValeur.EUR;
        let coinValeurUsd = coinValeur.USD;
        let divGst = document.getElementById('div-gst');
        let printGstEur = document.createElement('p');
        let textGstEur = document.createTextNode('EUR :'+ coinValeurEur);
        printGstEur.appendChild(textGstEur);
        divGst.appendChild(printGstEur);
        let printGstUsd = document.createElement('p');
        let textGstUsd = document.createTextNode('USD :'+ coinValeurUsd);
        printGstUsd.appendChild(textGstUsd);
        divGst.appendChild(printGstUsd);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    
    
  
