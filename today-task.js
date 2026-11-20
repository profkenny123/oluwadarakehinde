window.TODAY_TASK = {
  date: '2026-11-20',
  title: 'Share Obi’s education record and Oluwadara Kehinde’s local agenda — 57 days to election',
  desc: 'With 57 days to the 16 January 2027 election, today’s task is to share Peter Obi’s ‘Go and Verify’ series on Anambra education investments (classroom blocks in 177 communities, computers, teacher recruitment, exam rankings) and pair it with Oluwadara Kehinde (Akan)’s people-centred agenda for education, skills, youth empowerment and rural welfare in Yewa North / Imeko-Afon. Engage friends and family. Get your PVC. A New Nigeria is Possible.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '57 DAYS TO ELECTION — OBI’S EDUCATION RECORD + LOCAL AGENDA',
      '',
      'Peter Obi is sharing his Anambra record: five-classroom blocks in nearly all 177 communities, ~40,000 computers (22,500+ HP laptops), Microsoft Academies, internet connectivity, teacher recruitment, and top exam rankings. Education as the foundation of development.',
      '',
      'Pair the national vision with Oluwadara Kehinde (Akan)’s local agenda for Yewa North / Imeko-Afon:',
      '• Education & Skills',
      '• Youth Empowerment',
      '• Agriculture & Value Addition',
      '• Entrepreneurship & Small Business',
      '• Accountable Representation',
      '• Infrastructure & Rural Welfare',
      '',
      'Get your PVC. Engage friends and family. Vote Oluwadara Kehinde (Akan).',
      'OK is Okay. NDC is Okay. Nigeria will be Okay.',
      '',
      'See more and join: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #57Days #Education'
    ].join('\n');
  }
};
