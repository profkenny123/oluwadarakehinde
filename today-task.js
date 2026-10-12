window.TODAY_TASK = {
  date: '2026-10-12',
  title: 'Share the accountable representation agenda',
  desc: 'Oluwadara Kehinde (Akan), NDC candidate for Yewa North/Imeko-Afon, believes representation must be transparent and year-round. Today’s task: tell one friend or family member about his commitment to accountable representation — oversight, feedback loops, and accessibility to every ward. Share this so more people know why OK is Okay.',
  image: '/assets/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      'ACCOUNTABLE REPRESENTATION FOR YEWA NORTH & IMEKO-AFON.',
      '',
      'Oluwadara Kehinde (Akan) — NDC candidate.',
      'Homegrown. Experienced. Chartered Accountant.',
      '',
      'He will push for transparent, year-round engagement. Not only during campaigns.',
      'Oversight. Feedback. Accessible to every ward.',
      '',
      'The people must not only hear from their representative during elections; they must feel represented throughout the tenure.',
      '',
      'OK is Okay · NDC is Okay · Nigeria will be Okay',
      'Join and share: ' + link,
      '#OKisOkay #NDC2027 #AccountableRepresentation #YewaNorth #ImekoAfon'
    ].join('\n');
  }
};
