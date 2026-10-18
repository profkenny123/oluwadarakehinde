window.TODAY_TASK = {
  date: '2026-10-18',
  title: '90 days to election: Share the NDC Campaign Council launch & why Oluwadara Kehinde is our candidate',
  desc: '90 days until 16 January 2027. On 20 October the NDC inaugurates the Obi-Kwankwaso Presidential Campaign Council. Pair that national momentum with our local candidate. Share with one friend or family member why Oluwadara Kehinde (Akan) — homegrown, chartered accountant, focused on youth, agriculture, education, small business and accountable representation — is the right choice for Yewa North/Imeko-Afon. OK is Okay.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '90 DAYS TO ELECTION DAY — 16 JANUARY 2027.',
      '2 DAYS TO NDC PRESIDENTIAL CAMPAIGN COUNCIL INAUGURATION — 20 OCTOBER.',
      '',
      'Oluwadara Kehinde (Akan) — NDC candidate for Yewa North/Imeko-Afon.',
      'Homegrown. Experienced. Chartered Accountant. People-centred representation.',
      '',
      'Today’s task: Tell one person about the national campaign structure launching this week and why our constituency needs a representative who is already on the ground — listening in the wards, prioritising youth empowerment, agriculture & value addition, education & skills, entrepreneurship, and rural welfare.',
      '',
      '“OK is Okay · NDC is Okay · Nigeria will be Okay.”',
      '',
      'Join, volunteer and share: ' + link,
      '#OKisOkay #NDC2027 #90Days #CampaignCouncil #YewaNorth #ImekoAfon #PeterObi #AccountableRepresentation'
    ].join('\n');
  }
};
