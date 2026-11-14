window.TODAY_TASK = {
  date: '2026-11-14',
  title: '63 days to election: Share the NDC focus on real issues — economy, not distractions',
  desc: 'With 63 days until 16 January 2027, today’s task is to share the NDC’s call for focus on economic hardship facing Nigerians instead of political distractions, paired with Oluwadara Kehinde (Akan)’s people-centred agenda for Yewa North / Imeko-Afon. Engage friends and family. A New Nigeria is Possible.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '63 DAYS TO ELECTION — FOCUS ON THE ISSUES THAT MATTER',
      '',
      'The NDC has urged leaders to stop distractions and address the economic hardship facing ordinary Nigerians. Leadership must prioritise the cost of living, security, education, healthcare and opportunities for youth.',
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
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #63Days'
    ].join('\n');
  }
};
