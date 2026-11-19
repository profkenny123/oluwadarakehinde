window.TODAY_TASK = {
  date: '2026-11-19',
  title: 'Share Obi’s US visit clarification: Focus on democracy, credible elections and local agenda',
  desc: 'With 58 days to the 16 January 2027 election, today’s task is to share Peter Obi’s clarification that his Washington, DC meetings with US lawmakers were about Nigeria’s development, stronger democratic institutions, and free, fair, transparent and credible elections — not to seek personal endorsement. Pair it with Oluwadara Kehinde (Akan)’s people-centred agenda for Yewa North / Imeko-Afon. Engage friends and family. Get your PVC. A New Nigeria is Possible.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '58 DAYS TO ELECTION — OBI FOCUSES ON DEMOCRACY AND CREDIBLE ELECTIONS',
      '',
      'Peter Obi clarified that his recent US visit and meetings with lawmakers were not to seek endorsement, but to discuss Nigeria’s development, citizens’ welfare, stronger democratic institutions, and free, fair, transparent and credible elections that reflect the will of the people.',
      '',
      'Pair the national vision with Oluwadara Kehinde (Akan)’s local agenda for Yewa North / Imeko-Afon:',
      '• Youth Empowerment',
      '• Agriculture & Value Addition',
      '• Entrepreneurship & Small Business',
      '• Education & Skills',
      '• Accountable Representation',
      '• Infrastructure & Rural Welfare',
      '',
      'Get your PVC. Engage friends and family. Vote Oluwadara Kehinde (Akan).',
      'OK is Okay. NDC is Okay. Nigeria will be Okay.',
      '',
      'See more and join: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #58Days #CredibleElections'
    ].join('\n');
  }
};
