window.TODAY_TASK = {
  date: '2026-11-16',
  title: '61 days to election: Share Obi’s condemnation of violence against Kwankwaso’s convoy',
  desc: 'With 61 days until 16 January 2027, today’s task is to share Peter Obi’s strong condemnation of the attack on NDC running mate Rabiu Kwankwaso’s convoy in Kano and his call for immediate investigation and arrests. Pair it with Oluwadara Kehinde (Akan)’s people-centred agenda for Yewa North / Imeko-Afon. Democracy is not warfare. Engage friends and family. A New Nigeria is Possible.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '61 DAYS TO ELECTION — DEMOCRACY IS NOT WARFARE',
      '',
      'Peter Obi has strongly condemned the reported attack on his brother and running mate Rabiu Kwankwaso’s convoy in Bichi, Kano. Several were injured and vehicles vandalised. He has called for an immediate investigation and arrests of those responsible, including any sponsors.',
      '',
      'Political differences must never justify violence. Every Nigerian has the right to participate without fear.',
      '',
      'Pair the national stand with Oluwadara Kehinde (Akan)’s local agenda for Yewa North / Imeko-Afon:',
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
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #61Days'
    ].join('\n');
  }
};
