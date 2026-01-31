const vis = document.querySelector(".icon-right");

function toggleVis() {
  if (vis.innerText === "visibility") {
    vis.innerText = "visibility_off";
  } else {
    vis.innerText = "visibility";
  }
}

if (vis) vis.onclick = toggleVis;
