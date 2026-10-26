window.TODAY_TASK = {
  date: '2026-10-26',
  title: 'NDC National Campaign Council inaugurated today — share the national momentum with one friend',
  desc: 'Today the Nigeria Democratic Congress inaugurates its National Campaign Council in Abuja, chaired by Senator Henry Seriake Dickson with Peter Obi as Co-Chairman. The council will coordinate campaigns for every NDC candidate, from the presidential ticket to National Assembly and state assemblies. While leaders align in Abuja, Oluwadara Kehinde (Akan) continues people-centred mobilisation across Yewa North and Imeko-Afon. Share this update and invite one friend or family member to join the movement.',
  image: '/gallery/candidate-profile.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      'NDC NATIONAL CAMPAIGN COUNCIL INAUGURATED TODAY.',
      '',
      'On 26 October 2026 the Nigeria Democratic Congress inaugurates its National Campaign Council in Abuja.',
      '',
      'Chairman: Senator Henry Seriake Dickson',
      'Co-Chairman: Peter Obi (Presidential Candidate)',
      'Co-Vice Chairman: Rabiu Musa Kwankwaso',
      'Vice Chairman: Senator Cleopas Zuwoghe',
      '',
      'The council coordinates campaigns for all NDC candidates — presidential, National Assembly, governorship and state assemblies.',
      '',
      'Locally, Oluwadara Kehinde (Akan) remains focused on Yewa North / Imeko-Afon with a people-centred agenda:',
      '• Youth empowerment',
      '• Agriculture & value addition',
      '• Education & skills',
      '• Entrepreneurship & small business',
      '• Accountable representation',
      '• Infrastructure & rural welfare',
      '',
      'Today’s task: Share this national step with one friend or family member and invite them to join the OK Campaign.',
      '',
      '“OK is Okay · NDC is Okay · Nigeria will be Okay.”',
      '',
      'Volunteer and share: ' + link,
      '#OKisOkay #NDC2027 #YewaNorth #ImekoAfon #PeterObi #NewNigeria #CampaignCouncil'
    ].join('\n');
  }
};
