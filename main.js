document.getElementById("send").addEventListener("click",()=>{
  const url = document.getElementById("url").value;
  const data = {"content": document.getElementById("content").value};

  const obj = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  console.dir(obj);

  fetch(url, obj);
});
