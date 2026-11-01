window.TODAY_TASK = {
  date: '2026-11-01',
  title: '76 days to election: Share Oluwadara Kehinde’s recent grassroots engagement in Joga-Iboro ward',
  desc: 'With 76 days until 16 January 2027, today’s task is to amplify the ongoing ground work. Oluwadara Kehinde (Akan) continues direct engagement with communities across Yewa North and Imeko-Afon. Share this recent image from Joga-Iboro ward with friends and family, and invite them to support the people-centred agenda for our constituency.',
  image: '/gallery/Joga-Iboro ward Oct 2026.jpeg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '76 DAYS TO ELECTION — GRASSROOTS ENGAGEMENT CONTINUES',
      '',
      'Oluwadara Kehinde (Akan) is on the ground in Yewa North / Imeko-Afon. Recent engagement in Joga-Iboro ward shows the commitment to year-round representation, not just election-time visits.',
      '',
      'Homegrown leadership focused on:',
      '• Youth empowerment and skills',
      '• Agriculture and value addition',
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
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #JogaIboro #PeterObi #NewNigeria #NigeriaWillBeOK #76Days #Grassroots'
    ].join('\n');
  }
};
