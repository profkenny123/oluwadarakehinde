window.TODAY_TASK = {
  date: '2026-11-10',
  title: '67 days to election: Share recent Joga-Iboro ward engagement',
  desc: 'With 67 days until 16 January 2027, today’s task is to share the recent gallery image of ward-level engagement in Joga-Iboro. Oluwadara Kehinde (Akan) continues ground mobilisation across Yewa North / Imeko-Afon. Attach the local photo when sharing with friends and family so the constituency stays visible. Pair it with Peter Obi’s national vision of accountability and productivity. A New Nigeria is Possible.',
  image: '/gallery/Joga-Iboro ward Oct 2026.jpeg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '67 DAYS TO ELECTION — JOGA-IBORO WARD ENGAGEMENT',
      '',
      'Oluwadara Kehinde (Akan) continues people-centred mobilisation on the ground in Yewa North / Imeko-Afon.',
      'Recent engagement in Joga-Iboro shows the work happening at ward level.',
      '',
      'Homegrown leadership. Transparent representation.',
      'Youth empowerment · Agriculture · Entrepreneurship · Education · Accountability · Infrastructure.',
      '',
      'Get your PVC. Engage friends and family. Vote Oluwadara Kehinde (Akan).',
      'Pair the local work with Peter Obi & Kwankwaso’s national vision.',
      '',
      'OK is Okay. NDC is Okay. Nigeria will be Okay.',
      '',
      'See more and join: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #JogaIboro #PeterObi #NewNigeria #67Days'
    ].join('\n');
  }
};
