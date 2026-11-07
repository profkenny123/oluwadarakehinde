window.TODAY_TASK = {
  date: '2026-11-07',
  title: '70 days to election: Engage friends and family on the people-centred agenda',
  desc: 'With 70 days until 16 January 2027, today\'s task is to share Oluwadara Kehinde (Akan)\'s homegrown agenda for Yewa North / Imeko-Afon with friends and family. Focus on youth empowerment, agriculture and value addition, entrepreneurship, education and skills, accountable representation, and infrastructure. Pair it with Peter Obi and Kwankwaso\'s national vision for a New Nigeria. Get your PVC and vote NDC.',
  image: '/assets/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '70 DAYS TO ELECTION — PEOPLE-CENTRED AGENDA FOR YEWA NORTH / IMEKO-AFON',
      '',
      'Oluwadara Kehinde (Akan), NDC candidate for Yewa North/Imeko-Afon Federal Constituency 2027.',
      '',
      'Homegrown leadership focused on:',
      '• Youth empowerment & skills',
      '• Agriculture & value addition',
      '• Entrepreneurship & small business',
      '• Education & accountable representation',
      '• Infrastructure & rural welfare',
      '',
      'Representation that listens year-round, not only at election time. Pair this local agenda with Peter Obi’s national vision for unity, security, education and productivity.',
      '',
      'OK is Okay. NDC is Okay. Nigeria will be Okay.',
      '',
      'Join and share the movement: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #NigeriaWillBeOK #70Days #PeopleCentred'
    ].join('\n');
  }
};
