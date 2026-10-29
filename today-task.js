window.TODAY_TASK = {
  date: '2026-10-29',
  title: '79 days to election: Share Oluwadara Kehinde’s people-centred agenda',
  desc: 'With 79 days until 16 January 2027, the NDC National Campaign Council is active and Peter Obi has called for a crusade of rebuilding on fairness, justice, equity and productivity. Locally, Oluwadara Kehinde (Akan) continues ward engagement in Yewa North / Imeko-Afon with a clear, practical agenda. Today’s task: share one pillar of the agenda with a friend or family member and invite them to join the OK Campaign.',
  image: '/gallery/Joga-Iboro ward Oct 2026.jpeg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '79 DAYS TO ELECTION — NIGERIA WILL BE OK',
      '',
      'The NDC National Campaign Council is now live. Peter Obi and Kwankwaso have called on Nigerians to join the crusade of rebuilding our nation.',
      '',
      'In Yewa North / Imeko-Afon, Oluwadara Kehinde (Akan) is already on the ground with a people-centred agenda:',
      '1. Youth Empowerment',
      '2. Agriculture & Value Addition',
      '3. Entrepreneurship & Small Business',
      '4. Education & Skills',
      '5. Accountable Representation',
      '6. Infrastructure & Rural Welfare',
      '',
      '“The people must not only hear from their representative during elections; they must feel represented throughout the tenure.”',
      '',
      'Today’s task: Share one of these pillars with a friend or family member and invite them to join the movement.',
      '',
      '“OK is Okay · NDC is Okay · Nigeria will be Okay.”',
      '',
      'Volunteer and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #NigeriaWillBeOK #79Days'
    ].join('\n');
  }
};
