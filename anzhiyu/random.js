var posts=["posts/27571/","posts/34913/","posts/30980/","posts/19485/","posts/14170/","posts/52584/","posts/371/","posts/39304/","posts/52847/","posts/6635/","posts/34307/","posts/36195/","posts/40630/","posts/45055/","posts/51463/","posts/17372/","posts/61194/","posts/63534/","posts/3510/","posts/19697/","posts/61316/","posts/5855/","posts/59924/","posts/43898/","posts/28536/","posts/31045/","posts/62536/","posts/33990/","posts/43040/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };