window.TODAY_TASK = {
  date: '2026-10-14',
  title: 'Share the education agenda and NDC momentum',
  desc: 'Oluwadara Kehinde (Akan), NDC candidate for Yewa North/Imeko-Afon, prioritises education and skills so young people can thrive. Today, tell one friend or family member about his commitment to vocational training, digital education and support for teachers and learners. Also share that the NDC will inaugurate its presidential campaign council for Peter Obi and Rabiu Kwankwaso on October 20 — our local candidate is ready to deliver year-round representation.',
  image: '/gallery/Igan%20Okoto%20Engagement.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      'EDUCATION & SKILLS FOR YEWA NORTH / IMEKO-AFON.',
      '',
      'Oluwadara Kehinde (Akan) — NDC candidate.',
      'Homegrown leadership. Transparent representation. Tech-driven solutions.',
      '',
      'Today’s task: share with one person why education must come first — vocational training, digital skills, and support for teachers so our youth can build the future.',
      'The NDC is preparing fully: campaign council inauguration set for 20 October for Peter Obi and Rabiu Kwankwaso. Our candidate is ready.',
      '',
      '“The people must not only hear from their representative during elections; they must feel represented throughout the tenure.”',
      '',
      'OK is Okay · NDC is Okay · Nigeria will be Okay',
      'Join, volunteer and share: ' + link,
      '#OKisOkay #NDC2027 #EducationFirst #YewaNorth #ImekoAfon #PeterObi'
    ].join('\n');
  }
};
