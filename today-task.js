window.TODAY_TASK={
  date:'2026-10-04',
  title:'Tonight’s townhall: register, share, and attach one gallery photo from our wards',
  desc:'Sunday, 4 October. Three things. First, Peter Obi hosts A New Nigeria Global Digital Townhall tonight at 7:00 PM WAT (2 PM EST) on protecting every vote and winning 2027. Register at vote4obi.com/townhall.html and send the link to your ward group before evening. Second, share his morning post on the abduction of about 20 prospective corps members — insecurity must not be a norm. Third, attach a local file so Yewa North and Imeko-Afon show up in the same status: Ebute (30 Sept), Sawonjo and Sunwa (15 Sept), Imeko-Afon team, Ilara, Ayetoro, Imasayi, Ibese or Ohunbe.',
  share:function(){
    var origin=window.location.origin;
    var link=(typeof shareLink==='function')?shareLink():origin;
    return 'Protecting every vote. Winning 2027. Together.\n\nTonight — Sunday 4 October 2026\nPeter Obi, A New Nigeria Global Digital Townhall\n7:00 PM WAT | 2 PM EST\nRegister: https://vote4obi.com/townhall.html\nHis invite: https://x.com/PeterObi/status/2106135552571457848\n\nThis morning he also spoke on the abduction of about 20 prospective corps members. Insecurity must not be a norm.\nhttps://x.com/PeterObi/status/2106640658018549855\n\nSokoto town hall: https://www.youtube.com/watch?v=--jNpqPZ3yQ\nRamin Kura IDP visit: https://www.youtube.com/watch?v=m6E9rtpRvYQ\nIndependence: Nigeria is not cursed — https://www.youtube.com/watch?v=PwVFzVCgS04\n\nOur ground — share one of these with the links: Ebute (30 Sept), Sawonjo & Sunwa (15 Sept), Imeko-Afon team, Ilara, Ayetoro, Imasayi.\nGallery: '+origin+'/tasks.html#gallery\nMore NDC videos: '+origin+'/ndc.html\n\nOK is Okay | NDC is Okay | Nigeria will be Okay\nJoin: '+link+'\n#OKisOkay #NDC2027 #PeterObi #Kwankwaso #ProtectEveryVote #YewaNorth #ImekoAfon';
  }
};
