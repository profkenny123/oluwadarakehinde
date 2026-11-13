window.TODAY_TASK = {
  date: '2026-11-13',
  title: '64 days to election: Share Peter Obi’s Lagos assurance and Oluwadara Kehinde’s agenda',
  desc: 'With 64 days until 16 January 2027, today’s task is to share Peter Obi’s message from the Lagos town hall that your sacrifice for a New Nigeria will not be in vain, paired with Oluwadara Kehinde (Akan)’s people-centred agenda for Yewa North / Imeko-Afon. Engage friends and family. A New Nigeria is Possible.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '64 DAYS TO ELECTION — YOUR SACRIFICE WON’T BE IN VAIN',
      '',
      'Peter Obi in Lagos: Your sacrifice for a New Nigeria will not be in vain. We will unite Nigeria, secure the country, fight corruption, deliver 10,000 MW of power, and put a functional primary healthcare centre in every ward.',
      '',
      'Pair the national vision with Oluwadara Kehinde (Akan)’s local agenda for Yewa North / Imeko-Afon:',
      '• Youth Empowerment',
      '• Agriculture & Value Addition',
      '• Entrepreneurship & Small Business',
      '• Education & Skills',
      '• Accountable Representation',
      '• Infrastructure & Rural Welfare',
      '',
      'Get your PVC. Engage friends and family. Vote Oluwadara Kehinde (Akan).',
      'OK is Okay. NDC is Okay. Nigeria will be Okay.',
      '',
      'See more and join: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #64Days'
    ].join('\n');
  }
};
