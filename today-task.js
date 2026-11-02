window.TODAY_TASK = {
  date: '2026-11-02',
  title: '75 days to election: Share Oluwadara Kehinde’s people-centred agenda for Yewa North / Imeko-Afon',
  desc: 'With 75 days until 16 January 2027, today’s task is to promote the local agenda. Oluwadara Kehinde (Akan) brings homegrown leadership focused on youth empowerment, agriculture and value addition, entrepreneurship, education and skills, accountable representation, and infrastructure. Share this message and the candidate profile with friends and family in the constituency and beyond.',
  image: '/assets/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '75 DAYS TO ELECTION — PEOPLE-CENTRED AGENDA FOR YEWA NORTH / IMEKO-AFON',
      '',
      'Oluwadara Kehinde (Akan) is the NDC candidate bringing homegrown, transparent and tech-driven representation to our constituency.',
      '',
      'His agenda focuses on:',
      '• Youth empowerment and skills development',
      '• Agriculture and value addition',
      '• Entrepreneurship and small business',
      '• Education and skills',
      '• Accountable representation',
      '• Infrastructure and rural welfare',
      '',
      '"The people must not only hear from their representative during elections; they must feel represented throughout the tenure."',
      '',
      'Today’s task: Share this with one friend or family member. Let them know OK is already working for our communities.',
      '',
      'OK is Okay · NDC is Okay · Nigeria will be Okay.',
      '',
      'Join and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #NigeriaWillBeOK #75Days #PeopleCentred'
    ].join('\n');
  }
};
