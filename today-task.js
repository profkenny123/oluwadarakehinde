window.TODAY_TASK = {
  date: '2026-10-20',
  title: 'Tell one person why Oluwadara Kehinde is ready — even as the national campaign council date shifts to 26 October',
  desc: 'The NDC has postponed the formal inauguration of the Obi-Kwankwaso Presidential Campaign Council to 26 October because of Peter Obi’s overseas engagements (including the Paris roundtable). Meanwhile, work continues on the ground. Today’s task: share with a friend or family member in Yewa North or Imeko-Afon why Oluwadara Kehinde (Akan) — the homegrown chartered accountant already listening in the wards — is the representative who will deliver competent, people-centred leadership right here. OK is Okay.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      'WHILE THE NATIONAL STRUCTURE IS FINALISED, THE WORK AT HOME CONTINUES.',
      '',
      'The NDC has moved the Obi-Kwankwaso Presidential Campaign Council inauguration to 26 October so Peter Obi can complete important overseas engagements (including his Paris roundtable on building a production-focused Nigeria).',
      '',
      'In Yewa North / Imeko-Afon, Oluwadara Kehinde (Akan) is already on the ground.',
      'Homegrown. Chartered Accountant (ICAN). Decade of public-finance experience. Focused on youth empowerment, agriculture & value addition, education & skills, small business, and rural welfare.',
      '',
      'Today’s task: Tell one person why our constituency needs a representative who is accessible every day — not only when the cameras arrive.',
      '',
      '“OK is Okay · NDC is Okay · Nigeria will be Okay.”',
      '',
      'Join, volunteer and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #AccountableRepresentation'
    ].join('\n');
  }
};
