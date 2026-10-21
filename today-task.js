window.TODAY_TASK = {
  date: '2026-10-21',
  title: 'Share that NDC stays focused — fresh congresses for any gaps, work continues in Yewa North/Imeko-Afon',
  desc: 'The NDC has announced it will hold fresh congresses to replace any candidates who defected after alleged inducements. The party says those who left lacked commitment; preparations for the Obi-Kwankwaso ticket and all other candidates continue. Today’s task: tell one friend or family member in the constituency that Oluwadara Kehinde (Akan) remains fully committed on the ground — homegrown, accessible, and focused on youth, agriculture, education and rural welfare. OK is Okay.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      'NDC STAYS FOCUSED. THE WORK CONTINUES.',
      '',
      'Some candidates may have left after alleged inducements. The NDC will hold fresh congresses under the Electoral Act to fill any gaps with credible people.',
      '',
      'In Yewa North / Imeko-Afon, Oluwadara Kehinde (Akan) is still here — listening in the wards, pushing people-centred representation.',
      'Homegrown. Chartered Accountant (ICAN). Decade of public-finance experience.',
      'Youth empowerment. Agriculture & value addition. Education & skills. Small business. Rural welfare.',
      '',
      'Today’s task: Tell one person why we need a representative who stays accessible every day.',
      '',
      '“OK is Okay · NDC is Okay · Nigeria will be Okay.”',
      '',
      'Join, volunteer and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria'
    ].join('\n');
  }
};
