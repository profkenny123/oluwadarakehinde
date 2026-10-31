window.TODAY_TASK = {
  date: '2026-10-31',
  title: '77 days to election: Share Oluwadara Kehinde’s people-centred agenda for Yewa North / Imeko-Afon',
  desc: 'With 77 days until 16 January 2027, today’s task is to share Oluwadara Kehinde (Akan)’s core agenda with friends and family. Homegrown, experienced Chartered Accountant focused on youth empowerment, agriculture and value addition, entrepreneurship, education and skills, accountable representation, and infrastructure. Invite them to join the OK Campaign for a New Nigeria that works for everyone in our constituency.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '77 DAYS TO ELECTION — NIGERIA WILL BE OK',
      '',
      'Oluwadara Kehinde (Akan) is the NDC candidate for Yewa North / Imeko-Afon. Homegrown from Owode Ketu and Ayetoro. Chartered Accountant with a decade of public financial management experience.',
      '',
      'His people-centred agenda:',
      '• Youth Empowerment — skills, jobs, digital training',
      '• Agriculture & Value Addition — better opportunities for farmers',
      '• Entrepreneurship & Small Business — support for traders and startups',
      '• Education & Skills — practical learning for the modern economy',
      '• Accountable Representation — year-round engagement, not only at election time',
      '• Infrastructure & Rural Welfare — roads, water, power, community welfare',
      '',
      '"The people must not only hear from their representative during elections; they must feel represented throughout the tenure."',
      '',
      'Today’s task: Share this with one friend or family member. Invite them to volunteer and support the movement.',
      '',
      'OK is Okay · NDC is Okay · Nigeria will be Okay.',
      '',
      'Join and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #NigeriaWillBeOK #77Days #AccountableRepresentation'
    ].join('\n');
  }
};
