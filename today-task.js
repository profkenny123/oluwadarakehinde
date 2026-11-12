window.TODAY_TASK = {
  date: '2026-11-12',
  title: '65 days to election: Share the hunger-free vision and Oluwadara Kehinde’s agenda',
  desc: 'With 65 days until 16 January 2027, today’s task is to share Peter Obi’s pledge from Makurdi that no Nigerian will go to bed hungry, paired with Oluwadara Kehinde (Akan)’s people-centred agenda for Yewa North / Imeko-Afon. Focus on youth empowerment, agriculture, education, accountable representation and rural welfare. Engage friends and family. A New Nigeria is Possible.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '65 DAYS TO ELECTION — NO NIGERIAN GOES TO BED HUNGRY',
      '',
      'Peter Obi in Makurdi: We seek office so people can go to bed without being hungry. We will unite and secure Nigeria.',
      '',
      'Pair the national vision with Oluwadara Kehinde (Akan)’s local agenda for Yewa North / Imeko-Afon:',
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
      'OK is Okay. NDC is Okay. Nigeria will be Okay.',
      '',
      'See more and join: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #65Days #HungerFreeNigeria'
    ].join('\n');
  }
};
