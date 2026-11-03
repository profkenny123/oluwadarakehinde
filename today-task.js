window.TODAY_TASK = {
  date: '2026-11-03',
  title: '74 days to election: Share Peter Obi’s emergency agenda and Oluwadara Kehinde’s local call to action',
  desc: 'With 74 days until 16 January 2027, today’s task is to share the national message of declaring emergencies on unity, insecurity, education, corruption, hunger, health and electricity, paired with Oluwadara Kehinde (Akan)’s people-centred agenda for Yewa North / Imeko-Afon. Invite friends and family to join the movement for a New Nigeria.',
  image: '/assets/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      '74 DAYS TO ELECTION — EMERGENCY AGENDA FOR A NEW NIGERIA',
      '',
      'Peter Obi and the NDC have called for emergency measures on unity, insecurity, education, corruption, hunger, health and electricity. A New and Productive Nigeria is Possible.',
      '',
      'Locally, Oluwadara Kehinde (Akan) is already on the ground in Yewa North / Imeko-Afon with a people-centred agenda:',
      '• Youth empowerment and skills',
      '• Agriculture and value addition',
      '• Entrepreneurship and small business',
      '• Education and skills',
      '• Accountable representation',
      '• Infrastructure and rural welfare',
      '',
      '"The people must not only hear from their representative during elections; they must feel represented throughout the tenure."',
      '',
      'Today’s task: Share this with one friend or family member. Let them know OK is working for our communities and Nigeria will be OK.',
      '',
      'OK is Okay · NDC is Okay · Nigeria will be Okay.',
      '',
      'Join and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #NigeriaWillBeOK #74Days #EmergencyAgenda'
    ].join('\n');
  }
};
