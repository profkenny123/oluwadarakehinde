window.TODAY_TASK = {
  date: '2026-10-11',
  title: '97 days to go – mobilize one voter',
  desc: 'Election morning is 97 days away — 16 January 2027 at 9:00am. Oluwadara Kehinde (Akan), NDC candidate for Yewa North/Imeko-Afon, is ready. Today’s task is simple: talk to one friend, family member or neighbour who may not have a PVC. Help them understand why getting registered and voting matters. Share this reminder so more people in Yewa North and Imeko-Afon are ready.',
  image: '/assets/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '97 DAYS TO ELECTION DAY.',
      '',
      '16 January 2027 · 9:00am Nigerian time',
      'Yewa North / Imeko-Afon',
      '',
      'Oluwadara Kehinde (Akan) — NDC candidate.',
      'Homegrown. Experienced. Chartered Accountant. Ready to represent.',
      '',
      'Today: talk to one person. Help them get a PVC. Stay until votes are counted.',
      '',
      'OK is Okay · NDC is Okay · Nigeria will be Okay',
      'Join the movement: ' + link,
      '#OKisOkay #NDC2027 #97Days #YewaNorth #ImekoAfon'
    ].join('\n');
  }
};
