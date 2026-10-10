window.TODAY_TASK = {
  date: '2026-10-10',
  title: 'Talk to one neighbour about education',
  desc: 'Saturday’s task is a conversation, not another poster. Reach one friend, one family member, and one neighbour. Tell them Oluwadara Kehinde (Akan) is prioritising education and skills for Yewa North and Imeko-Afon — vocational training, digital skills, and support for teachers and learners. Ask them to get a PVC and stay until votes are counted on 16 January 2027.',
  image: '/assets/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      'EDUCATION FIRST FOR YEWA NORTH AND IMEKO-AFON.',
      '',
      'Oluwadara Kehinde (Akan), NDC candidate for Yewa North / Imeko-Afon, is a Chartered Accountant who knows public finance.',
      'His people-centred agenda puts youth empowerment, skills acquisition, and education at the centre.',
      '',
      'Today, talk to one friend, one family member, and one neighbour:',
      'Young people need vocational training and digital skills.',
      'Teachers need tools, welfare, and professional support.',
      'Get your PVC. Vote NDC on 16 January 2027. Stay until the votes are counted.',
      '',
      'See the full agenda:',
      'https://www.oluwadarakehinde.com/',
      '',
      'OK is Okay | NDC is Okay | Nigeria will be Okay',
      'Join: ' + link,
      '#OKisOkay #NDC2027 #Education #Skills #YewaNorth #ImekoAfon'
    ].join('\n');
  }
};
