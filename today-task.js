window.TODAY_TASK={
  date:'2026-10-05',
  title:'Teachers’ Day: share Obi’s message, the townhall line, and one ward photo',
  desc:'Monday, 5 October — World Teachers’ Day. Three things. First, share Peter Obi’s Teachers’ Day post: restore the dignity of teaching, pay salaries on time, and put education first. That is also Hon. Oluwadara Kehinde’s agenda for Yewa North and Imeko-Afon. Second, forward last night’s NDC Global Digital Townhall line — no tribe buys bread cheaper, no tribe buys fuel cheaper — and the ask to stay at the polling unit until votes are counted. Third, attach one gallery photo or clip from our wards (Ebute 30 Sept, Ilara, Ayetoro, Imasayi, Sawonjo, Sunwa or the Imeko-Afon team) with the caption OK is Okay.',
  share:function(){
    var origin=window.location.origin;
    var link=(typeof shareLink==='function')?shareLink():origin;
    return 'Happy World Teachers’ Day.\\n\\nPeter Obi, NDC presidential candidate:\\nTeachers shape the next generation. Restore their dignity, pay them on time, and put education first.\\nhttps://x.com/PeterObi/status/2107042333019488477\\n\\nFrom last night’s NDC Global Digital Townhall:\\nNo tribe buys bread cheaper. No tribe buys fuel cheaper. Stay at your polling unit until the votes are counted.\\nFull replay: https://www.youtube.com/watch?v=Fd4LAXWqZUk\\nChannels report: https://www.channelstv.com/2026/10/04/no-tribe-buys-fuel-cheaper-obi-rallies-for-unity-among-nigerians/\\n\\nOur ground — attach one of these: Ebute (30 Sept), Ilara, Ayetoro, Imasayi, Sawonjo & Sunwa (15 Sept), Imeko-Afon team.\\nGallery: '+origin+'/tasks.html#gallery\\nMore NDC videos: '+origin+'/ndc.html\\n\\nOK is Okay | NDC is Okay | Nigeria will be Okay\\nJoin: '+link+'\\n#OKisOkay #NDC2027 #PeterObi #WorldTeachersDay #YewaNorth #ImekoAfon';
  }
};
