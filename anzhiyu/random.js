var posts=["2124/09/10/hello-world/","2024/09/13/军训/","2024/09/14/c-程序与输出/","2024/09/24/热点分析-网络带货/","2024/09/26/自然数与数据类型/","2024/10/01/有符号型/","2024/09/28/9-28/","2024/10/16/判断/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };