window.TODAY_TASK = {
  date: '2026-10-19',
  title: 'Share why Oluwadara Kehinde is the right candidate — paired with Peter Obi’s New Nigeria call',
  desc: 'Peter Obi spent the weekend with Nigerians in Manchester and Birmingham talking about our collective responsibility to build a New Nigeria that tackles corruption and elects competent, compassionate leaders. Today, share with one friend or family member why Oluwadara Kehinde (Akan) — homegrown chartered accountant focused on youth, agriculture, education, small business and accountable representation — is the person who will deliver that vision right here in Yewa North/Imeko-Afon. OK is Okay.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      'BUILDING A NEW NIGERIA STARTS AT HOME.',
      '',
      'Peter Obi just met Nigerians in Manchester and Birmingham. He said the task of building a New Nigeria is our collective responsibility — tackling corruption and electing leaders of capacity, character, compassion and commitment.',
      '',
      'In Yewa North / Imeko-Afon, that leader is Oluwadara Kehinde (Akan).',
      'Homegrown. Chartered Accountant (ICAN). Experienced in public finance. Focused on youth empowerment, agriculture & value addition, education & skills, entrepreneurship, and rural welfare.',
      '',
      'Today’s task: Tell one person why our constituency needs a representative who is already listening in the wards — not only during elections.',
      '',
      '“OK is Okay · NDC is Okay · Nigeria will be Okay.”',
      '',
      'Join, volunteer and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #AccountableRepresentation'
    ].join('\n');
  }
};
