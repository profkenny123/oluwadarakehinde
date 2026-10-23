window.TODAY_TASK = {
  date: '2026-10-23',
  title: '85 days to election: Share Oluwadara Kehinde’s people-centred agenda with one friend or family member',
  desc: 'With 85 days left until 16 January 2027, and the NDC Campaign Council inauguration set for Monday 26 October, today’s task is local and personal. Tell one friend or family member about Oluwadara Kehinde (Akan)’s clear agenda for Yewa North / Imeko-Afon: youth empowerment, agriculture & value addition, education & skills, entrepreneurship & small business, accountable representation, and infrastructure & rural welfare. Homegrown leadership that stays accessible year-round. Share your referral link and invite them to join the movement.',
  image: '/gallery/Joga-Iboro ward Oct 2026.jpeg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '85 DAYS TO ELECTION — THE WORK CONTINUES AT HOME.',
      '',
      'While the NDC prepares to inaugurate the Obi-Kwankwaso Campaign Council on 26 October, Oluwadara Kehinde (Akan) is already on the ground in Yewa North / Imeko-Afon.',
      '',
      'His people-centred agenda:',
      '• Youth empowerment & skills',
      '• Agriculture & value addition',
      '• Education & digital skills',
      '• Entrepreneurship & small business',
      '• Accountable, year-round representation',
      '• Infrastructure & rural welfare',
      '',
      'Today’s task: Tell one friend or family member why a homegrown, accessible representative matters. Invite them to join.',
      '',
      '“OK is Okay · NDC is Okay · Nigeria will be Okay.”',
      '',
      'Volunteer and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #85Days #PeterObi #NewNigeria'
    ].join('\n');
  }
};
