var posts=["posts/27571/","posts/34913/","posts/30980/","posts/19485/","posts/34307/","posts/371/","posts/62536/","posts/14170/","posts/52584/","posts/20371/","posts/34891/","posts/48174/","posts/45816/","posts/10604/","posts/39304/","posts/6635/","posts/48949/","posts/52847/","posts/53257/","posts/39661/","posts/56167/","posts/29764/","posts/42193/","posts/9545/","posts/35313/","posts/20769/","posts/27856/","posts/1583/","posts/40630/","posts/56301/","posts/30706/","posts/45055/","posts/14538/","posts/27736/","posts/25230/","posts/36195/","posts/51463/","posts/36128/","posts/426/","posts/14446/","posts/43040/","posts/19697/","posts/54300/","posts/28864/","posts/7649/","posts/20669/","posts/63534/","posts/3446/","posts/7351/","posts/9876/","posts/17372/","posts/48427/","posts/3510/","posts/61194/","posts/19848/","posts/8742/","posts/61316/","posts/40037/","posts/43125/","posts/59924/","posts/5855/","posts/23384/","posts/29174/","posts/46563/","posts/28536/","posts/33990/","posts/5749/","posts/43898/","posts/17010/","posts/54862/","posts/31045/","posts/65354/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };