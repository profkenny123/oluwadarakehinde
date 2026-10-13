window.TODAY_TASK = {
  date: '2026-10-13',
  title: '95 days to go: mobilize one voter today',
  desc: 'Election day is 95 days away — 16 January 2027 at 9:00am Nigerian time for Yewa North / Imeko-Afon. Oluwadara Kehinde (Akan), NDC candidate, asks supporters to talk to one person today who still needs a Permanent Voter’s Card (PVC) or who is undecided, and share this reminder so our constituency is ready. Every conversation counts.',
  image: '/assets/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '95 DAYS TO ELECTION DAY – 16 JANUARY 2027.',
      '',
      'Oluwadara Kehinde (Akan) — NDC candidate for Yewa North/Imeko-Afon.',
      'Homegrown leadership. Transparent representation. Tech-driven solutions.',
      '',
      'Today’s task: speak to one friend, family member or neighbour who needs a PVC or who has not decided.',
      'Tell them why OK is Okay — accountable representation that works year-round, not only at election time.',
      '',
      'The people must not only hear from their representative during elections; they must feel represented throughout the tenure.',
      '',
      'OK is Okay · NDC is Okay · Nigeria will be Okay',
      'Join and share: ' + link,
      '#OKisOkay #NDC2027 #95DaysToGo #YewaNorth #ImekoAfon #GetYourPVC'
    ].join('\n');
  }
};
