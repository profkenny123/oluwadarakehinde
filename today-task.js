window.TODAY_TASK = {
  date: '2026-10-08',
  title: '100 days to election morning — share the card',
  desc: 'Thursday, 8 October is the 100-day mark to 16 January 2027, 9:00am Nigerian time. Share the countdown card. Ask one friend, one family member, and one neighbour to get their PVC, vote NDC, and stay until the votes are counted.',
  image: '/assets/100-days-ok-2026-10-08.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '100 DAYS TO GO.',
      '',
      '16 January 2027. 9:00am Nigerian time.',
      'Yewa North / Imeko-Afon.',
      '',
      'Oluwadara Kehinde (Akan) is the NDC candidate for the House of Representatives.',
      'Homegrown. Chartered accountant. A decade in Ogun public finance.',
      'Roads, water, power, and classrooms that work.',
      '',
      'Ask one friend, one family member, and one neighbour:',
      'Get your PVC. Vote NDC. Stay until the votes are counted.',
      '',
      'Peter Obi, NDC Global Digital Townhall:',
      'No tribe buys bread cheaper. No tribe buys fuel cheaper.',
      '',
      'OK is Okay | NDC is Okay | Nigeria will be Okay',
      'Join: ' + link,
      '#OKisOkay #NDC2027 #100Days #YewaNorth #ImekoAfon'
    ].join('\n');
  }
};
