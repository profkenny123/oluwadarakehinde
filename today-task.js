window.TODAY_TASK = {
  date: '2026-10-17',
  title: '91 days to election: Share why Oluwadara Kehinde’s year-round representation matters',
  desc: '91 days until 16 January 2027. Oluwadara Kehinde (Akan), NDC candidate for Yewa North/Imeko-Afon, is committed to people-centred, accessible representation. Share with one friend or family member why his focus on youth empowerment, education and skills, accountable representation and rural welfare will make a difference in our constituency. OK is Okay.',
  image: '/gallery/Engagement%20at%20Ilara%2020260905.jpeg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '91 DAYS TO ELECTION DAY — 16 JANUARY 2027.',
      '',
      'Oluwadara Kehinde (Akan) — NDC candidate for Yewa North/Imeko-Afon.',
      'Homegrown. Experienced. Chartered Accountant. Committed to people-centred representation.',
      '',
      'Today’s task: Tell one person why we need a representative who stays accessible, listens in the wards, and delivers on youth empowerment, education, agriculture, small business and rural welfare every day — not only during campaigns.',
      '',
      '“The people must not only hear from their representative during elections; they must feel represented throughout the tenure.”',
      '',
      'OK is Okay · NDC is Okay · Nigeria will be Okay',
      'Join, volunteer and share: ' + link,
      '#OKisOkay #NDC2027 #91Days #YewaNorth #ImekoAfon #PeterObi #AccountableRepresentation'
    ].join('\n');
  }
};
