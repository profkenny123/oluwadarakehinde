window.TODAY_TASK = {
  date: '2026-11-08',
  title: '69 days to election: Share Joga-Iboro ward engagement from the gallery',
  desc: 'With 69 days until 16 January 2027, today\'s task uses a recent gallery photo of ward-level engagement in Joga-Iboro. Oluwadara Kehinde (Akan) continues people-centred mobilisation across Yewa North / Imeko-Afon. Share the image with friends and family, highlight the local agenda on youth, agriculture, education and infrastructure, and invite them to join the NDC movement. A New Nigeria is Possible.',
  image: '/gallery/Joga-Iboro ward Oct 2026.jpeg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '69 DAYS TO ELECTION — JOGA-IBORO WARD ENGAGEMENT',
      '',
      'Oluwadara Kehinde (Akan) is on the ground in Yewa North / Imeko-Afon. See the recent engagement in Joga-Iboro ward.',
      '',
      'Homegrown leadership. Transparent representation. People-centred agenda:',
      '• Youth empowerment',
      '• Agriculture & value addition',
      '• Education & skills',
      '• Accountable representation',
      '• Infrastructure & rural welfare',
      '',
      'Pair this local work with Peter Obi and Kwankwaso\'s national vision. Get your PVC and vote NDC.',
      '',
      'OK is Okay. NDC is Okay. Nigeria will be Okay.',
      '',
      'Join and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #JogaIboro #PeterObi #NewNigeria #69Days'
    ].join('\n');
  }
};
