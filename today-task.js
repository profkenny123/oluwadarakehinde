window.TODAY_TASK = {
  date: '2026-11-17',
  title: '60 days to election: Share Obi’s 10,000 MW electricity pledge and local agenda',
  desc: 'With 60 days until 16 January 2027, today’s task is to share Peter Obi’s commitment to generating, transmitting and distributing at least 10,000 megawatts of electricity, securing the nation, making basic education free and compulsory, and putting primary healthcare in every ward. Pair it with Oluwadara Kehinde (Akan)’s people-centred agenda for Yewa North / Imeko-Afon. Engage friends and family. A New Nigeria is Possible.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '60 DAYS TO ELECTION — 10,000 MW AND A NEW NIGERIA',
      '',
      'Peter Obi has pledged that under an NDC government Nigeria will generate, transmit and distribute at least 10,000 megawatts of electricity. He has also committed to securing the nation so no mother loses her child, making basic education free and compulsory, and ensuring every ward has functional primary healthcare.',
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
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #60Days #10000MW'
    ].join('\n');
  }
};
