window.TODAY_TASK = {
  date: '2026-10-15',
  title: 'Support our farmers — agriculture is the backbone of Yewa North and Imeko-Afon',
  desc: 'Oluwadara Kehinde (Akan), NDC candidate for Yewa North/Imeko-Afon, prioritises agriculture and value addition so farmers can earn more and food is available. With World Food Day tomorrow (16 October), today share with one friend or family member why supporting local farmers, processing and modern practices matters. Homegrown leadership means year-round attention to rural livelihoods.',
  image: '/gallery/Igan%20Okoto%20Engagement.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      'AGRICULTURE & FOOD FOR YEWA NORTH / IMEKO-AFON.',
      '',
      'Oluwadara Kehinde (Akan) — NDC candidate.',
      'Homegrown leadership. Transparent representation. Tech-driven solutions.',
      '',
      'Today’s task: tell one person why we must support our farmers — better practices, value addition, and opportunities so rural communities thrive. Tomorrow is World Food Day; let’s start now.',
      '',
      '“Farming remains a major livelihood. Advocate for modern practices, processing, value addition, and better opportunities for grassroots farmers and agribusiness.”',
      '',
      'OK is Okay · NDC is Okay · Nigeria will be Okay',
      'Join, volunteer and share: ' + link,
      '#OKisOkay #NDC2027 #AgricultureFirst #YewaNorth #ImekoAfon #PeterObi #WorldFoodDay'
    ].join('\n');
  }
};
