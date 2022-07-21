// Your code goes here

document.addEventListener("DOMContentLoaded", function () {
  // let p = document.querySelector("p");

  // let p = document.getElementById("text");

  let p = document.querySelector("#text");

  p.addEventListener("click", function () {
    console.log("clicked");
  });
  debugger;
  p.textContent = "This is really cool!";
});
