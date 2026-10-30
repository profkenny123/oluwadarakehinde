window.TODAY_TASK = {
  date: '2026-10-30',
  title: '78 days to election: Share NDC’s transparency and Oluwadara Kehinde’s accountable representation',
  desc: 'With 78 days until 16 January 2027, the NDC has shown leadership by disclosing N8.5 billion raised and N2.4 billion spent in seven months — a clear signal of accountability. Locally, Oluwadara Kehinde (Akan) brings the same commitment to Yewa North / Imeko-Afon through people-centred, transparent representation. Today’s task: share this message with one friend or family member and invite them to join the OK Campaign.',
  image: '/gallery/Joga-Iboro ward Oct 2026.jpeg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '78 DAYS TO ELECTION — NIGERIA WILL BE OK',
      '',
      'The Nigeria Democratic Congress just showed what accountability looks like: N8.529 billion raised, N2.402 billion spent, and the books opened to the public.',
      '',
      'In Yewa North / Imeko-Afon, Oluwadara Kehinde (Akan) carries the same standard. Homegrown, experienced, committed to transparent representation.',
      '',
      'His agenda includes accountable representation so that “the people must not only hear from their representative during elections; they must feel represented throughout the tenure.”',
      '',
      'Today’s task: Share this with a friend or family member. Invite them to join the movement for a New Nigeria that works for everyone.',
      '',
      '“OK is Okay · NDC is Okay · Nigeria will be Okay.”',
      '',
      'Volunteer and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #NigeriaWillBeOK #78Days #Accountability'
    ].join('\n');
  }
};
