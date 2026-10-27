window.TODAY_TASK = {
  date: '2026-10-27',
  title: 'Share Peter Obi’s post-inauguration message: A New and Productive Nigeria is Possible',
  desc: 'Yesterday the NDC National Campaign Council was inaugurated. Today Peter Obi posted that a new and productive Nigeria is possible and Nigeria will be OK. He highlighted the challenges of poverty, corruption, insecurity and low productivity, and called on Nigerians to join the crusade with Kwankwaso. While the national ticket advances, Oluwadara Kehinde (Akan) continues people-centred work in Yewa North / Imeko-Afon. Share this message with one friend or family member and invite them to join the OK Campaign.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      'A NEW AND PRODUCTIVE NIGERIA IS POSSIBLE. NIGERIA WILL BE OK.',
      '',
      'Yesterday the NDC National Campaign Council was inaugurated in Abuja.',
      '',
      'Today Peter Obi said: over 140 million Nigerians are multidimensionally poor. Corruption, insecurity, unemployment and inequality persist. Revenue has not translated into productivity.',
      '',
      'Obi and Kwankwaso call on all Nigerians to join the crusade of rebuilding our nation on fairness, justice, equity, productivity, inclusion and development.',
      '',
      'Locally, Oluwadara Kehinde (Akan) is already mobilising for Yewa North / Imeko-Afon with a clear agenda:',
      '• Youth empowerment',
      '• Agriculture & value addition',
      '• Education & skills',
      '• Entrepreneurship & small business',
      '• Accountable representation',
      '• Infrastructure & rural welfare',
      '',
      'Today’s task: Share this national message with one friend or family member and invite them to join the movement.',
      '',
      '“OK is Okay · NDC is Okay · Nigeria will be Okay.”',
      '',
      'Volunteer and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #NigeriaWillBeOK'
    ].join('\n');
  }
};
