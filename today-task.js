window.TODAY_TASK = {
  date: '2026-10-24',
  title: 'United Nations Day: Share why accountable representation matters for Yewa North / Imeko-Afon',
  desc: 'Today is United Nations Day, marking the anniversary of the UN Charter and the ideals of peace, cooperation and accountable governance. Oluwadara Kehinde (Akan) believes representation must go beyond election season — the people must feel represented throughout the tenure through transparency, continuous engagement and delivery on youth empowerment, agriculture, education, entrepreneurship and rural welfare. Share this message with one friend or family member and invite them to join the movement.',
  image: '/gallery/Igan Okoto Engagement.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      'UNITED NATIONS DAY — ACCOUNTABLE REPRESENTATION STARTS AT HOME.',
      '',
      'On this United Nations Day, we remember that good governance and accountable leadership are the foundation of peace and progress.',
      '',
      'Oluwadara Kehinde (Akan), NDC candidate for Yewa North / Imeko-Afon, says: “The people must not only hear from their representative during elections; they must feel represented throughout the tenure.”',
      '',
      'His people-centred agenda:',
      '• Youth empowerment',
      '• Agriculture & value addition',
      '• Education & skills',
      '• Entrepreneurship & small business',
      '• Accountable representation',
      '• Infrastructure & rural welfare',
      '',
      'Today’s task: Tell one friend or family member why year-round, transparent representation matters. Invite them to join.',
      '',
      '“OK is Okay · NDC is Okay · Nigeria will be Okay.”',
      '',
      'Volunteer and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #UnitedNationsDay #PeterObi #NewNigeria'
    ].join('\n');
  }
};
