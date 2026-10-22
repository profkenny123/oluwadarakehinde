window.TODAY_TASK = {
  date: '2026-10-22',
  title: 'Share the rebuilding message: Peter Obi in London + Oluwadara Kehinde ready at home',
  desc: 'Yesterday Peter Obi arrived in London and met British officials and Nigerian diaspora on our collective responsibility to rebuild Nigeria free from bad leadership and corruption. A New Nigeria is Possible. Today’s task: tell one friend or family member that while the national ticket is engaging the world, Oluwadara Kehinde (Akan) is already on the ground in Yewa North / Imeko-Afon with a clear people-centred agenda — youth, agriculture, education, small business and rural welfare. Share this and your referral link.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      'A NEW NIGERIA IS POSSIBLE — STARTING AT HOME.',
      '',
      'Peter Obi is in London meeting diaspora and officials on rebuilding Nigeria with competent, accountable leadership.',
      '“The child of nobody can become somebody without knowing anybody.”',
      '',
      'In Yewa North / Imeko-Afon, Oluwadara Kehinde (Akan) is already doing the work:',
      'Homegrown. ICAN Chartered Accountant. Decade of public-finance experience in Ogun State.',
      'Youth empowerment · Agriculture & value addition · Education & skills · Entrepreneurship · Accountable representation · Rural welfare.',
      '',
      'Today’s task: Tell one person why we need a representative who stays accessible every day, not only at election time.',
      '',
      '“OK is Okay · NDC is Okay · Nigeria will be Okay.”',
      '',
      'Join, volunteer and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #86Days'
    ].join('\n');
  }
};
