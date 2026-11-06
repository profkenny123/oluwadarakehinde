window.TODAY_TASK = {
  date: '2026-11-06',
  title: 'Share Oluwadara Kehinde\'s people-centred agenda with 71 days to election',
  desc: 'With 71 days until 16 January 2027, today\'s task is to engage friends and family on the local agenda. Oluwadara Kehinde (Akan) focuses on youth empowerment, agriculture and value addition, entrepreneurship, education and skills, accountable representation, and infrastructure across Yewa North / Imeko-Afon. Pair it with the national NDC vision of a New Nigeria under Peter Obi and Kwankwaso. A New Nigeria is Possible.',
  image: '/assets/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '71 DAYS TO ELECTION — PEOPLE-CENTRED AGENDA FOR YEWA NORTH / IMEKO-AFON',
      '',
      'Oluwadara Kehinde (Akan), NDC candidate for Yewa North/Imeko-Afon Federal Constituency 2027.',
      '',
      'Homegrown leadership focused on:',
      '• Youth empowerment & skills',
      '• Agriculture & value addition',
      '• Entrepreneurship & small business',
      '• Education & accountable representation',
      '• Infrastructure & rural welfare',
      '',
      'Representation that listens year-round, not only at election time. Pair this local agenda with Peter Obi’s national vision for unity, security, education and productivity.',
      '',
      'OK is Okay. NDC is Okay. Nigeria will be Okay.',
      '',
      'Join and share the movement: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #NigeriaWillBeOK #71Days #PeopleCentred'
    ].join('\n');
  }
};
