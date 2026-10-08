window.TODAY_TASK={
  date:'2026-10-08',
  title:'100 days to election morning — share the card',
  desc:'Thursday, 8 October is the 100-day mark to 16 January 2027, 9:00am Nigerian time. One theme only: the countdown. Share the card below. Oluwadara Kehinde (Akan) is large on it; the NDC logo is small. Caption: 100 days. Yewa North and Imeko-Afon decide who speaks for them in the House. Ask one friend, one family member, and one neighbour to register, collect their PVC, and stay at the polling unit until the votes are counted. Attach the card, then your personal referral link.',
  image:'/assets/100-days-ok-2026-10-08.jpg',
  share:function(){
    var origin=window.location.origin;
    var link=(typeof shareLink==='function')?shareLink():origin;
    return '100 DAYS TO GO.\\n\\n16 January 2027. 9:00am Nigerian time.\\nYewa North / Imeko-Afon.\\n\\nOluwadara Kehinde (Akan) is the NDC candidate for the House of Representatives.\\nHomegrown. Chartered accountant. A decade in Ogun public finance.\\nRoads, water, power, and classrooms that work.\\n\\nShare this card: '+origin+'/assets/100-days-ok-2026-10-08.jpg\\nDaily task: '+origin+'/tasks.html\\n\\nAsk one friend, one family member, and one neighbour:\\nGet your PVC. Vote NDC. Stay until the votes are counted.\\n\\nPeter Obi, NDC Global Digital Townhall:\\nNo tribe buys bread cheaper. No tribe buys fuel cheaper.\\nReplay: https://www.youtube.com/watch?v=Fd4LAXWqZUk\\n\\nOK is Okay | NDC is Okay | Nigeria will be Okay\\nJoin with my link: '+link+'\\n#OKisOkay #NDC2027 #100Days #PeterObi #YewaNorth #ImekoAfon';
  }
};
