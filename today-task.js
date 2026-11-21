window.TODAY_TASK = {
  date: '2026-11-21',
  title: 'Share Peter Obi’s Onitsha call to defend every vote — 56 days to election',
  desc: 'With 56 days to the 16 January 2027 election, today’s task is to share Peter Obi’s message from the Anambra NDC town hall in Onitsha: voters must come out in large numbers, stay at polling units until votes are counted and transmitted, and be ready to match electoral fraudsters fire for fire. Pair it with Oluwadara Kehinde (Akan)’s local call for accountable representation in Yewa North / Imeko-Afon. Engage friends and family. Get your PVC. A New Nigeria is Possible.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '56 DAYS TO ELECTION — DEFEND EVERY VOTE',
      '',
      'Peter Obi at the Onitsha NDC town hall: Come out in large numbers. Stay at your polling unit until votes are counted and transmitted. We will match electoral fraudsters fire for fire.',
      '',
      'Pair the national call with Oluwadara Kehinde (Akan)’s local agenda for Yewa North / Imeko-Afon:',
      '• Accountable Representation',
      '• Youth Empowerment',
      '• Education & Skills',
      '• Agriculture & Value Addition',
      '• Infrastructure & Rural Welfare',
      '',
      'Get your PVC. Engage friends and family. Vote Oluwadara Kehinde (Akan).',
      'OK is Okay. NDC is Okay. Nigeria will be Okay.',
      '',
      'See more and join: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #56Days #DefendYourVote'
    ].join('\n');
  }
};
