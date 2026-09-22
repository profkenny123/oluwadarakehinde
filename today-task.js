window.TODAY_TASK={
  date:'2026-09-22',
  title:'Share NDC unity + Kaduna town hall + our ground videos',
  desc:'Today NDC said Obi and Kwankwaso will nominate key campaign-council officers — “no battles to fight; the opponent is APC.” Pair that with Kaduna town-hall videos (issue-based campaigns, holidays in Nigeria) and our own Sawonjo, Sunwa, Imeko and Ebute clips so national news rides with Yewa North / Imeko-Afon faces.',
  share:function(){
    var origin=window.location.origin;
    var link=(typeof shareLink==='function')?shareLink():origin;
    return 'NDC is united. NDC is on the ground.\n\nPeter Obi & Kwankwaso will nominate the NDC campaign council. No internal battles — focus on winning 2027.\nRead: https://www.naijanews.com/2026/09/22/2027-peter-obi-kwankwaso-ndc-campaign-dg/\n\nWatch Kaduna town hall (issue-based campaigns):\nhttps://www.youtube.com/watch?v=91jAPJ5rLAA\nMore videos: '+origin+'/ndc.html\n\nOur ground: Sawonjo & Sunwa (15 Sept), Imeko team, Ebute.\nGallery: '+origin+'/tasks.html#gallery\n\nOK is Okay | NDC is Okay\nJoin: '+link+'\n#OKisOkay #NDC2027 #YewaNorth #ImekoAfon';
  }
};
