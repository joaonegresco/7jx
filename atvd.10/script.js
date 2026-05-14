const demoId = document.getElementById("demo");
demoId.style.border = '2px solid purple';

const catClass = document.getElementsByClassName("categoria");
for (i = 0; i < catClass.length; i++)
catClass[i].style.border = '2px dotted orange';

const tag = document.getElementsByTagName("article");
for (i = 0; i < tag.length; i++)
tag[i].style.border = '2px dotted blue';

const queryId = document.querySelector("#demo-query")
queryId.style.border = '1px solid red'

const demoQuery = document.querySelectorAll
queryId.style.border = 