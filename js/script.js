'use strict'
//Загрузка страницы с конвертером
let ratePage = document.getElementById('rate-text');
let requestOfRate = new XMLHttpRequest();
let c;
let audRate = document.querySelector('#aud-rate');
let aznRate = document.querySelector('#azn-rate');
let gbpRate = document.querySelector('#gbp-rate');
let amdRate = document.querySelector('#amd-rate');
let bynRate = document.querySelector('#byn-rate');
let bgnRate = document.querySelector('#bgn-rate');
let brlRate = document.querySelector('#brl-rate');
let hufRate = document.querySelector('#huf-rate');
let hkdRate = document.querySelector('#hkd-rate');
let dkkRate = document.querySelector('#dkk-rate');
let usdRate = document.querySelector('#usd-rate');
let eurRate = document.querySelector('#eur-rate');
let inrRate = document.querySelector('#inr-rate');
let kztRate = document.querySelector('#kzt-rate');
let cadRate = document.querySelector('#cad-rate');
let kgsRate = document.querySelector('#kgs-rate');
let cnyRate = document.querySelector('#cny-rate');
let mdlRate = document.querySelector('#mdl-rate');
let nokRate = document.querySelector('#nok-rate');
let plnRate = document.querySelector('#pln-rate');
let ronRate = document.querySelector('#ron-rate');
let xdrRate = document.querySelector('#xdr-rate');
let sgdRate = document.querySelector('#sgd-rate');
let tjsRate = document.querySelector('#tjs-rate');
let tryRate = document.querySelector('#try-rate');
let tmtRate = document.querySelector('#tmt-rate');
let uzsRate = document.querySelector('#uzs-rate');
let uahRate = document.querySelector('#uah-rate');
let czkRate = document.querySelector('#czk-rate');
let sekRate = document.querySelector('#sek-rate');
let chfRate = document.querySelector('#chf-rate');
let zarRate = document.querySelector('#zar-rate');
let krwRate = document.querySelector('#krw-rate');
let jpyRate = document.querySelector('#jpy-rate');
let mainDate = document.querySelector('#main-date');
let saveRates = document.querySelector('.save-rates');
let clearRates = document.querySelector('.clear-rates-storage')
  //Получение данных от сервера с курсами валют
fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(function(response) {
  response.json().then(function(text) {
    c = text;
    let localValutes = {
        RUB: 1,
        AUD: c.Valute.AUD.Value,
        AZN: c.Valute.AZN.Value,
        GBP: c.Valute.GBP.Value,
        AMD: c.Valute.AMD.Value,
        BYN: c.Valute.BYN.Value,
        BGN: c.Valute.BGN.Value,
        BRL: c.Valute.BRL.Value,
        HUF: c.Valute.HUF.Value,
        HKD: c.Valute.HKD.Value,
        DKK: c.Valute.DKK.Value,
        USD: c.Valute.USD.Value,
        EUR: c.Valute.EUR.Value,
        INR: c.Valute.INR.Value,
        KZT: c.Valute.KZT.Value,
        CAD: c.Valute.CAD.Value,
        KGS: c.Valute.KGS.Value,
        CNY: c.Valute.CNY.Value,
        MDL: c.Valute.MDL.Value,
        NOK: c.Valute.NOK.Value,
        PLN: c.Valute.PLN.Value,
        RON: c.Valute.RON.Value,
        XDR: c.Valute.XDR.Value,
        SGD: c.Valute.SGD.Value,
        TJS: c.Valute.TJS.Value,
        TRY: c.Valute.TRY.Value,
        TMT: c.Valute.TMT.Value,
        UZS: c.Valute.UZS.Value,
        UAH: c.Valute.UAH.Value,
        CZK: c.Valute.CZK.Value,
        SEK: c.Valute.SEK.Value,
        CHF: c.Valute.CHF.Value,
        ZAR: c.Valute.ZAR.Value,
        KRW: c.Valute.KRW.Value,
        JPY: c.Valute.JPY.Value,
      }
      //Работа с сохранением данных в памяти браузера
    saveRates.addEventListener('click', function() {
      localStorage.setItem('aud-rates', JSON.stringify(c.Valute.AUD.Value));
      localStorage.setItem('azn-rates', JSON.stringify(c.Valute.AZN.Value));
      localStorage.setItem('gbp-rates', JSON.stringify(c.Valute.GBP.Value));
      localStorage.setItem('amd-rates', JSON.stringify(c.Valute.AMD.Value));
      localStorage.setItem('byn-rates', JSON.stringify(c.Valute.BYN.Value));
      localStorage.setItem('bgn-rates', JSON.stringify(c.Valute.BGN.Value));
      localStorage.setItem('brl-rates', JSON.stringify(c.Valute.BRL.Value));
      localStorage.setItem('huf-rates', JSON.stringify(c.Valute.HUF.Value));
      localStorage.setItem('hkd-rates', JSON.stringify(c.Valute.HKD.Value));
      localStorage.setItem('dkk-rates', JSON.stringify(c.Valute.DKK.Value));
      localStorage.setItem('usd-rates', JSON.stringify(c.Valute.USD.Value));
      localStorage.setItem('eur-rates', JSON.stringify(c.Valute.EUR.Value));
      localStorage.setItem('inr-rates', JSON.stringify(c.Valute.INR.Value));
      localStorage.setItem('kzt-rates', JSON.stringify(c.Valute.KZT.Value));
      localStorage.setItem('cad-rates', JSON.stringify(c.Valute.CAD.Value));
      localStorage.setItem('kgs-rates', JSON.stringify(c.Valute.KGS.Value));
      localStorage.setItem('cny-rates', JSON.stringify(c.Valute.CNY.Value));
      localStorage.setItem('mdl-rates', JSON.stringify(c.Valute.MDL.Value));
      localStorage.setItem('nok-rates', JSON.stringify(c.Valute.NOK.Value));
      localStorage.setItem('pln-rates', JSON.stringify(c.Valute.PLN.Value));
      localStorage.setItem('ron-rates', JSON.stringify(c.Valute.RON.Value));
      localStorage.setItem('xdr-rates', JSON.stringify(c.Valute.XDR.Value));
      localStorage.setItem('sgd-rates', JSON.stringify(c.Valute.SGD.Value));
      localStorage.setItem('tjs-rates', JSON.stringify(c.Valute.TJS.Value));
      localStorage.setItem('try-rates', JSON.stringify(c.Valute.TRY.Value));
      localStorage.setItem('tmt-rates', JSON.stringify(c.Valute.TMT.Value));
      localStorage.setItem('uzs-rates', JSON.stringify(c.Valute.UZS.Value));
      localStorage.setItem('uah-rates', JSON.stringify(c.Valute.UAH.Value));
      localStorage.setItem('czk-rates', JSON.stringify(c.Valute.CZK.Value));
      localStorage.setItem('sek-rates', JSON.stringify(c.Valute.SEK.Value));
      localStorage.setItem('chf-rates', JSON.stringify(c.Valute.CHF.Value));
      localStorage.setItem('zar-rates', JSON.stringify(c.Valute.ZAR.Value));
      localStorage.setItem('krw-rates', JSON.stringify(c.Valute.KRW.Value));
      localStorage.setItem('jpy-rates', JSON.stringify(c.Valute.JPY.Value));
      localStorage.setItem('main-date', JSON.stringify(mainDate.textContent));
      openJournal.style.backgroundColor = '#BD7CCF';
    });
    openJournal.addEventListener('click', function() {
      audRateStorage.textContent = localStorage.getItem('aud-rates');
      aznRateStorage.textContent = localStorage.getItem('azn-rates');
      gbpRateStorage.textContent = localStorage.getItem('gbp-rates');
      amdRateStorage.textContent = localStorage.getItem('amd-rates');
      bynRateStorage.textContent = localStorage.getItem('byn-rates');
      bgnRateStorage.textContent = localStorage.getItem('bgn-rates');
      brlRateStorage.textContent = localStorage.getItem('brl-rates');
      hufRateStorage.textContent = localStorage.getItem('huf-rates');
      hkdRateStorage.textContent = localStorage.getItem('hkd-rates');
      dkkRateStorage.textContent = localStorage.getItem('dkk-rates');
      usdRateStorage.textContent = localStorage.getItem('usd-rates');
      eurRateStorage.textContent = localStorage.getItem('eur-rates');
      inrRateStorage.textContent = localStorage.getItem('inr-rates');
      kztRateStorage.textContent = localStorage.getItem('kzt-rates');
      cadRateStorage.textContent = localStorage.getItem('cad-rates');
      kgsRateStorage.textContent = localStorage.getItem('kgs-rates');
      cnyRateStorage.textContent = localStorage.getItem('cny-rates');
      mdlRateStorage.textContent = localStorage.getItem('mdl-rates');
      nokRateStorage.textContent = localStorage.getItem('nok-rates');
      plnRateStorage.textContent = localStorage.getItem('pln-rates');
      ronRateStorage.textContent = localStorage.getItem('ron-rates');
      xdrRateStorage.textContent = localStorage.getItem('xdr-rates');
      sgdRateStorage.textContent = localStorage.getItem('sgd-rates');
      tjsRateStorage.textContent = localStorage.getItem('tjs-rates');
      tryRateStorage.textContent = localStorage.getItem('try-rates');
      tmtRateStorage.textContent = localStorage.getItem('tmt-rates');
      uzsRateStorage.textContent = localStorage.getItem('uzs-rates');
      uahRateStorage.textContent = localStorage.getItem('uah-rates');
      czkRateStorage.textContent = localStorage.getItem('czk-rates');
      sekRateStorage.textContent = localStorage.getItem('sek-rates');
      chfRateStorage.textContent = localStorage.getItem('chf-rates');
      zarRateStorage.textContent = localStorage.getItem('zar-rates');
      krwRateStorage.textContent = localStorage.getItem('krw-rates');
      jpyRateStorage.textContent = localStorage.getItem('jpy-rates');
      mainDateStorage.textContent = localStorage.getItem('main-date');
    });
    clearRates.addEventListener('click', function() {
      localStorage.removeItem('aud-rates');
      localStorage.removeItem('azn-rates');
      localStorage.removeItem('gbp-rates');
      localStorage.removeItem('amd-rates');
      localStorage.removeItem('byn-rates');
      localStorage.removeItem('bgn-rates');
      localStorage.removeItem('brl-rates');
      localStorage.removeItem('huf-rates');
      localStorage.removeItem('hkd-rates');
      localStorage.removeItem('dkk-rates');
      localStorage.removeItem('usd-rates');
      localStorage.removeItem('eur-rates');
      localStorage.removeItem('inr-rates');
      localStorage.removeItem('kzt-rates');
      localStorage.removeItem('cad-rates');
      localStorage.removeItem('kgs-rates');
      localStorage.removeItem('cny-rates');
      localStorage.removeItem('mdl-rates');
      localStorage.removeItem('nok-rates');
      localStorage.removeItem('pln-rates');
      localStorage.removeItem('ron-rates');
      localStorage.removeItem('xdr-rates');
      localStorage.removeItem('sgd-rates');
      localStorage.removeItem('tjs-rates');
      localStorage.removeItem('try-rates');
      localStorage.removeItem('tmt-rates');
      localStorage.removeItem('uzs-rates');
      localStorage.removeItem('uah-rates');
      localStorage.removeItem('czk-rates');
      localStorage.removeItem('sek-rates');
      localStorage.removeItem('chf-rates');
      localStorage.removeItem('zar-rates');
      localStorage.removeItem('krw-rates');
      localStorage.removeItem('jpy-rates');
      localStorage.removeItem('main-date');
      audRateStorage.textContent = '';
      aznRateStorage.textContent = '';
      gbpRateStorage.textContent = '';
      amdRateStorage.textContent = '';
      bynRateStorage.textContent = '';
      bgnRateStorage.textContent = '';
      brlRateStorage.textContent = '';
      hufRateStorage.textContent = '';
      hkdRateStorage.textContent = '';
      dkkRateStorage.textContent = '';
      usdRateStorage.textContent = '';
      eurRateStorage.textContent = '';
      inrRateStorage.textContent = '';
      kztRateStorage.textContent = '';
      cadRateStorage.textContent = '';
      kgsRateStorage.textContent = '';
      cnyRateStorage.textContent = '';
      mdlRateStorage.textContent = '';
      nokRateStorage.textContent = '';
      plnRateStorage.textContent = '';
      ronRateStorage.textContent = '';
      xdrRateStorage.textContent = '';
      sgdRateStorage.textContent = '';
      tjsRateStorage.textContent = '';
      tryRateStorage.textContent = '';
      tmtRateStorage.textContent = '';
      uzsRateStorage.textContent = '';
      uahRateStorage.textContent = '';
      czkRateStorage.textContent = '';
      sekRateStorage.textContent = '';
      chfRateStorage.textContent = '';
      zarRateStorage.textContent = '';
      krwRateStorage.textContent = '';
      jpyRateStorage.textContent = '';
      mainDateStorage.textContent = '';
      openJournal.style.backgroundColor = '#ffffff';
    });
    //Прогрузка страницы с курсами
    audRate.textContent = (Math.floor(localValutes.AUD * 100) / 100);
    aznRate.textContent = (Math.floor(localValutes.AZN * 100) / 100);
    gbpRate.textContent = (Math.floor(localValutes.GBP * 100) / 100);
    amdRate.textContent = (Math.floor(localValutes.AMD * 100) / 100);
    bynRate.textContent = (Math.floor(localValutes.BYN * 100) / 100);
    bgnRate.textContent = (Math.floor(localValutes.BGN * 100) / 100);
    brlRate.textContent = (Math.floor(localValutes.BRL * 100) / 100);
    hufRate.textContent = (Math.floor(localValutes.HUF * 100) / 100);
    hkdRate.textContent = (Math.floor(localValutes.HKD * 100) / 100);
    dkkRate.textContent = (Math.floor(localValutes.DKK * 100) / 100);
    usdRate.textContent = (Math.floor(localValutes.USD * 100) / 100);
    eurRate.textContent = (Math.floor(localValutes.EUR * 100) / 100);
    inrRate.textContent = (Math.floor(localValutes.INR * 100) / 100);
    kztRate.textContent = (Math.floor(localValutes.KZT * 100) / 100);
    cadRate.textContent = (Math.floor(localValutes.CAD * 100) / 100);
    kgsRate.textContent = (Math.floor(localValutes.KGS * 100) / 100);
    cnyRate.textContent = (Math.floor(localValutes.CNY * 100) / 100);
    mdlRate.textContent = (Math.floor(localValutes.MDL * 100) / 100);
    nokRate.textContent = (Math.floor(localValutes.NOK * 100) / 100);
    plnRate.textContent = (Math.floor(localValutes.PLN * 100) / 100);
    ronRate.textContent = (Math.floor(localValutes.RON * 100) / 100);
    xdrRate.textContent = (Math.floor(localValutes.XDR * 100) / 100);
    sgdRate.textContent = (Math.floor(localValutes.SGD * 100) / 100);
    tjsRate.textContent = (Math.floor(localValutes.TJS * 100) / 100);
    tryRate.textContent = (Math.floor(localValutes.TRY * 100) / 100);
    tmtRate.textContent = (Math.floor(localValutes.TMT * 100) / 100);
    uzsRate.textContent = (Math.floor(localValutes.UZS * 100) / 100);
    uahRate.textContent = (Math.floor(localValutes.UAH * 100) / 100);
    czkRate.textContent = (Math.floor(localValutes.CZK * 100) / 100);
    sekRate.textContent = (Math.floor(localValutes.SEK * 100) / 100);
    chfRate.textContent = (Math.floor(localValutes.CHF * 100) / 100);
    zarRate.textContent = (Math.floor(localValutes.ZAR * 100) / 100);
    krwRate.textContent = (Math.floor(localValutes.KRW * 100) / 100);
    jpyRate.textContent = (Math.floor(localValutes.JPY * 100) / 100);
    let data = new Date();
    let year = data.getFullYear();
    let month = data.getMonth();
    let day = data.getDate();
    const date = (day + '.' + (month + Number(1)) + '.' + year);
    mainDate.textContent = 'Дата: ' + date;
    //Расчёт курса
    let val = document.getElementById('val');
    let currency1 = document.getElementById('cur1');
    let currency2 = document.getElementById('cur2');
    let result = document.getElementsByClassName('convert_result')[0]; //
    function sum() {
      let finalSum = (localValutes[currency1.value] / localValutes[currency2.value]) * val.value;
      result.innerText = '= ' + (Math.floor(finalSum * 100) / 100);
    }
    val.oninput = function() {
      sum();
    };
    currency1.onchange = function() {
      sum();
    };
    currency2.onchange = function() {
      sum();
    }
  });
});
//Открытие и закрытие журнала
let openJournal = document.querySelector('.open-journal');
let closeJournal = document.querySelector('.close-journal');
let journalInfo = document.querySelector('.journal-info');
let audRateStorage = document.querySelector('#aud-rate-storage');
let aznRateStorage = document.querySelector('#azn-rate-storage');
let gbpRateStorage = document.querySelector('#gbp-rate-storage');
let amdRateStorage = document.querySelector('#amd-rate-storage');
let bynRateStorage = document.querySelector('#byn-rate-storage');
let bgnRateStorage = document.querySelector('#bgn-rate-storage');
let brlRateStorage = document.querySelector('#brl-rate-storage');
let hufRateStorage = document.querySelector('#huf-rate-storage');
let hkdRateStorage = document.querySelector('#hkd-rate-storage');
let dkkRateStorage = document.querySelector('#dkk-rate-storage');
let usdRateStorage = document.querySelector('#usd-rate-storage');
let eurRateStorage = document.querySelector('#eur-rate-storage');
let inrRateStorage = document.querySelector('#inr-rate-storage');
let kztRateStorage = document.querySelector('#kzt-rate-storage');
let cadRateStorage = document.querySelector('#cad-rate-storage');
let kgsRateStorage = document.querySelector('#kgs-rate-storage');
let cnyRateStorage = document.querySelector('#cny-rate-storage');
let mdlRateStorage = document.querySelector('#mdl-rate-storage');
let nokRateStorage = document.querySelector('#nok-rate-storage');
let plnRateStorage = document.querySelector('#pln-rate-storage');
let ronRateStorage = document.querySelector('#ron-rate-storage');
let xdrRateStorage = document.querySelector('#xdr-rate-storage');
let sgdRateStorage = document.querySelector('#sgd-rate-storage');
let tjsRateStorage = document.querySelector('#tjs-rate-storage');
let tryRateStorage = document.querySelector('#try-rate-storage');
let tmtRateStorage = document.querySelector('#tmt-rate-storage');
let uzsRateStorage = document.querySelector('#uzs-rate-storage');
let uahRateStorage = document.querySelector('#uah-rate-storage');
let czkRateStorage = document.querySelector('#czk-rate-storage');
let sekRateStorage = document.querySelector('#sek-rate-storage');
let chfRateStorage = document.querySelector('#chf-rate-storage');
let zarRateStorage = document.querySelector('#zar-rate-storage');
let krwRateStorage = document.querySelector('#krw-rate-storage');
let jpyRateStorage = document.querySelector('#jpy-rate-storage');
let mainDateStorage = document.querySelector('#main-date-storage');
openJournal.addEventListener('click', function(event) {
  journalInfo.style.display = 'flex';
});
closeJournal.addEventListener('click', function(event) {
  journalInfo.style.display = 'none';
});
