window.TODAY_TASK = {
  date: '2026-11-09',
  title: '68 days to election: Share Oluwadara Kehinde’s people-centred agenda',
  desc: 'With 68 days until 16 January 2027, today’s task is to engage friends and family with Oluwadara Kehinde (Akan)’s clear local agenda for Yewa North / Imeko-Afon. Homegrown, transparent, tech-driven solutions focused on youth empowerment, agriculture and value addition, entrepreneurship, education and skills, accountable representation, and infrastructure. Pair it with Peter Obi and Kwankwaso’s national vision. A New Nigeria is Possible.',
  image: '/assets/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '68 DAYS TO ELECTION — OLUWADARA KEHINDE (AKAN)’S AGENDA',
      '',
      'Homegrown leadership for Yewa North / Imeko-Afon.',
      'Transparent representation. People-centred development.',
      '',
      'Our focus:',
      '• Youth empowerment',
      '• Agriculture & value addition',
      '• Entrepreneurship & small business',
      '• Education & skills',
      '• Accountable representation',
      '• Infrastructure & rural welfare',
      '',
      'Join the NDC movement. Get your PVC. Vote Oluwadara Kehinde (Akan).',
      'Pair the local agenda with Peter Obi & Kwankwaso’s national vision.',
      '',
      'OK is Okay. NDC is Okay. Nigeria will be Okay.',
      '',
      'Learn more and join: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #68Days'
    ].join('\n');
  }
};
