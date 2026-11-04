window.TODAY_TASK = {
  date: '2026-11-04',
  title: 'Promote the candidacy: Share Oluwadara Kehinde’s people-centred agenda with friends and family',
  desc: 'With 73 days to go, today’s task is a simple call to action. Use the excerpt from the about section and agenda pillars to engage one friend or family member. Let them know why OK is the right choice for Yewa North / Imeko-Afon and why NDC offers a path to a New Nigeria.',
  image: '/assets/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '73 DAYS TO ELECTION — SUPPORT OLUWADARA KEHINDE (AKAN) FOR YEWA NORTH / IMEKO-AFON',
      '',
      'Homegrown leadership. Transparent representation. Tech-driven solutions.',
      '',
      'Oluwadara Kehinde (Akan) is the NDC candidate. Chartered Accountant (ICAN), NIM member, with a decade in Ogun State civil service and experience in cybersecurity governance. Deeply rooted in Owode Ketu and Ayetoro.',
      '',
      'His people-centred agenda focuses on:',
      '• Youth empowerment and skills',
      '• Agriculture and value addition',
      '• Entrepreneurship and small business',
      '• Education and skills',
      '• Accountable representation',
      '• Infrastructure and rural welfare',
      '',
      '“The people must not only hear from their representative during elections; they must feel represented throughout the tenure.”',
      '',
      'Today’s task: Share this with one friend or family member. Invite them to join the movement. OK is Okay. NDC is Okay. Nigeria will be Okay.',
      '',
      'Join and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #NigeriaWillBeOK #73Days'
    ].join('\n');
  }
};
