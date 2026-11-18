window.TODAY_TASK = {
  date: '2026-11-18',
  title: 'Engage friends and family: Share why Oluwadara Kehinde (Akan) is the right choice for Yewa North/Imeko-Afon',
  desc: 'With 59 days to the 16 January 2027 election, today’s task is to share a simple message about Oluwadara Kehinde (Akan)’s people-centred agenda. Talk to friends, family and neighbours about youth empowerment, agriculture and value addition, entrepreneurship, education and skills, accountable representation, and infrastructure and rural welfare. Pair it with the national NDC vision of a New Nigeria. Get your PVC and invite others to join the OK-Coins campaign.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      'WHY I SUPPORT OLUWADARA KEHINDE (AKAN) — NDC FOR YEWA NORTH / IMEKO-AFON 2027',
      '',
      'Homegrown leadership. Transparent representation. Tech-driven solutions.',
      '',
      'His agenda for our constituency:',
      '• Youth Empowerment',
      '• Agriculture & Value Addition',
      '• Entrepreneurship & Small Business',
      '• Education & Skills',
      '• Accountable Representation',
      '• Infrastructure & Rural Welfare',
      '',
      'Together with Peter Obi and the NDC, we can build a New Nigeria that works for everyone.',
      '',
      'Get your PVC. Engage one friend or family member today. Vote Oluwadara Kehinde (Akan).',
      'OK is Okay. NDC is Okay. Nigeria will be Okay.',
      '',
      'Join and see more: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #AkanForHouse'
    ].join('\n');
  }
};
