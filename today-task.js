window.TODAY_TASK = {
  date: '2026-10-16',
  title: 'World Food Day: Innovate today, nourish tomorrow — support our farmers',
  desc: 'Today is World Food Day 2026 (theme: Innovate Today, Nourish Tomorrow). Oluwadara Kehinde (Akan), NDC candidate for Yewa North/Imeko-Afon, has made agriculture and value addition a core pillar of his people-centred agenda. Share with one friend or family member why modern practices, processing, reduced waste and better opportunities for grassroots farmers matter for food security and rural livelihoods in our constituency. 92 days to election day — let’s keep building.',
  image: '/gallery/Igan%20Okoto%20Engagement.jpg',
  share: function () {
    var link = (typeof shareLink === 'function') ? shareLink() : (window.location.origin + '/');
    return [
      'WORLD FOOD DAY 2026 — INNOVATE TODAY, NOURISH TOMORROW.',
      '',
      'Oluwadara Kehinde (Akan) — NDC candidate for Yewa North/Imeko-Afon.',
      'Homegrown leadership. Transparent representation. Tech-driven solutions.',
      '',
      'Today’s task: tell one person why we must support our farmers — better practices, value addition, less waste, and opportunities so rural communities thrive and food is available.',
      '',
      '“Farming remains a major livelihood. Advocate for modern practices, processing, value addition, and better opportunities for grassroots farmers and agribusiness.”',
      '',
      'OK is Okay · NDC is Okay · Nigeria will be Okay',
      'Join, volunteer and share: ' + link,
      '#OKisOkay #NDC2027 #WorldFoodDay #InnovateTodayNourishTomorrow #AgricultureFirst #YewaNorth #ImekoAfon #PeterObi'
    ].join('\n');
  }
};
