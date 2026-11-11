window.TODAY_TASK = {
  date: '2026-11-11',
  title: '66 days to election: Share Oluwadara Kehinde’s people-centred agenda',
  desc: 'With 66 days until 16 January 2027, today’s task is to share Oluwadara Kehinde (Akan)’s homegrown, transparent agenda with friends and family. Focus on youth empowerment, agriculture and value addition, entrepreneurship and small business, education and skills, accountable representation, and infrastructure and rural welfare for Yewa North / Imeko-Afon. Pair it with Peter Obi’s national vision of unity, security and production. A New Nigeria is Possible.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '66 DAYS TO ELECTION — SHARE THE PEOPLE-CENTRED AGENDA',
      '',
      'Oluwadara Kehinde (Akan) offers homegrown, transparent representation for Yewa North / Imeko-Afon.',
      '',
      'His agenda focuses on:',
      '• Youth Empowerment',
      '• Agriculture & Value Addition',
      '• Entrepreneurship & Small Business',
      '• Education & Skills',
      '• Accountable Representation',
      '• Infrastructure & Rural Welfare',
      '',
      'The people must not only hear from their representative during elections; they must feel represented throughout the tenure.',
      '',
      'Get your PVC. Engage friends and family. Vote Oluwadara Kehinde (Akan).',
      'Pair the local agenda with Peter Obi & Kwankwaso’s national vision of unity and security.',
      '',
      'OK is Okay. NDC is Okay. Nigeria will be Okay.',
      '',
      'See more and join: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #66Days'
    ].join('\n');
  }
};
