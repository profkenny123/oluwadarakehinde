window.TODAY_TASK = {
  date: '2026-11-05',
  title: 'Share recent ground mobilisation: Joga-Iboro ward engagement with Oluwadara Kehinde',
  desc: 'With 72 days to the election, today\'s task highlights ongoing ward-level work. Share this recent image from Joga-Iboro ward engagement in October 2026. Oluwadara Kehinde (Akan) continues listening and mobilising across Yewa North / Imeko-Afon. Pair it with the national NDC vision of a New Nigeria.',
  image: '/gallery/Joga-Iboro ward Oct 2026.jpeg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '72 DAYS TO ELECTION — YEWA NORTH / IMEKO-AFON MOBILISATION CONTINUES',
      '',
      'Recent engagement at Joga-Iboro ward with Oluwadara Kehinde (Akan), NDC candidate for Yewa North/Imeko-Afon Federal Constituency.',
      '',
      'Homegrown leadership that shows up in the wards, not only on campaign days. Listening to farmers, traders, youth and families.',
      '',
      'OK is Okay. NDC is Okay. Nigeria will be Okay.',
      '',
      'Support the people-centred agenda: youth empowerment, agriculture, education, accountable representation and infrastructure.',
      '',
      'Join the movement and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #JogaIboro #PeterObi #NewNigeria #NigeriaWillBeOK #72Days'
    ].join('\n');
  }
};
