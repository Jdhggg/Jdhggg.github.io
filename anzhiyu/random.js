var posts=["2024/09/14/c-程序与输出/","2124/09/10/hello-world/","2024/09/13/军训/","2024/09/24/热点分析-网络带货/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };