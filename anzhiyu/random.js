var posts=["posts/27571/","posts/34913/","posts/30980/","posts/62536/","posts/34307/","posts/371/","posts/19485/","posts/14170/","posts/52847/","posts/52584/","posts/39304/","posts/6635/","posts/29764/","posts/39661/","posts/27856/","posts/40630/","posts/1583/","posts/45055/","posts/14538/","posts/30706/","posts/25230/","posts/36195/","posts/54300/","posts/51463/","posts/36128/","posts/43040/","posts/19697/","posts/7649/","posts/17372/","posts/63534/","posts/20669/","posts/7351/","posts/28864/","posts/48427/","posts/3510/","posts/61194/","posts/8742/","posts/61316/","posts/23384/","posts/46563/","posts/19848/","posts/5855/","posts/59924/","posts/29174/","posts/33990/","posts/31045/","posts/28536/","posts/5749/","posts/43898/","posts/54862/","posts/65354/","posts/17010/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };