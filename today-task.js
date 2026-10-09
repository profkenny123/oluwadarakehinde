window.TODAY_TASK = {
  date: '2026-10-09',
  title: 'Share the Igan Okoto engagement',
  desc: 'Friday’s task is a gallery share, not another countdown. Post the Igan Okoto engagement photo. Tell one friend, one family member, and one neighbour that Oluwadara Kehinde (Akan) is already on the ground in Yewa North — and ask them to get a PVC before 16 January 2027.',
  image: '/gallery/Igan Okoto Engagement.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      'IGAN OKOTO IS LISTENING.',
      '',
      'Oluwadara Kehinde (Akan) and the OK team met people at Igan Okoto.',
      'This is not a poster campaign. It is ward by ward.',
      '',
      'NDC candidate for Yewa North / Imeko-Afon.',
      'Homegrown. Chartered accountant. A decade in Ogun public finance.',
      'Education, roads, water, and power that reach the wards.',
      '',
      'Ask one friend, one family member, and one neighbour:',
      'Get your PVC. Vote NDC. Stay until the votes are counted.',
      '',
      'See the photo:',
      'https://www.oluwadarakehinde.com/gallery/Igan%20Okoto%20Engagement.jpg',
      '',
      'OK is Okay | NDC is Okay | Nigeria will be Okay',
      'Join: ' + link,
      '#OKisOkay #NDC2027 #IganOkoto #YewaNorth #ImekoAfon'
    ].join('\n');
  }
};
