window.TODAY_TASK = {
  date: '2026-11-15',
  title: '62 days to election: Share Kwankwaso’s praise for Peter Obi’s integrity',
  desc: 'With 62 days until 16 January 2027, today’s task is to share NDC Vice Presidential candidate Rabiu Kwankwaso’s description of Peter Obi as incorruptible and their shared pledge for free education, paired with Oluwadara Kehinde (Akan)’s people-centred agenda for Yewa North / Imeko-Afon. Engage friends and family. A New Nigeria is Possible.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '62 DAYS TO ELECTION — INTEGRITY IN LEADERSHIP',
      '',
      'NDC Vice Presidential candidate Rabiu Kwankwaso has described Peter Obi as incorruptible: “He’s not somebody that you can go and start thinking of corruption around him, and that is very key in governance.” They pledged free education so no child is left behind.',
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
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #62Days'
    ].join('\n');
  }
};
