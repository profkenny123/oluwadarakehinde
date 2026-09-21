window.TODAY_TASK={
  date:'2026-09-21',
  title:'Share Kaduna town hall + Sawonjo/Sunwa ground',
  desc:'Peter Obi and Kwankwaso just held an NDC town hall in Kaduna (demand-driven campaigns, holidays in Nigeria). Pair Punch/THISDAY coverage with our own Sawonjo 15 Sept and Sunwa ward clips so national news rides with Yewa North / Imeko-Afon faces.',
  share:function(){
    var origin=window.location.origin;
    var link=(typeof shareLink==='function')?shareLink():origin;
    return 'NDC is on the ground.\n\nPeter Obi & Kwankwaso \u2014 Kaduna town hall: campaigns must be demand-driven, not empty promises. Holidays in Nigeria. Votes that count.\nRead: https://punchng.com/2027-obi-asks-nigerians-to-drive-campaign-agenda/\nVideos: '+origin+'/ndc.html\n\nOur ground: Sawonjo & Sunwa (15 Sept) + Imeko team.\nGallery: '+origin+'/tasks.html#gallery\n\nOK is Okay | NDC is Okay\nJoin: '+link+'\n#OKisOkay #NDC2027 #YewaNorth';
  }
};
