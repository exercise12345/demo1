
function showdiv() {
  document.getElementById('setup-content').style.display = 'flex';
  document.getElementById('initial-setup').style.height = "180px";
  document.getElementById("setup-hide").style.display = "block";
  document.getElementById("setup-show").style.display = "none";
}

function hidediv() {
    document.getElementById('setup-content').style.display = 'none';
    document.getElementById('initial-setup').style.height = "50px";
    document.getElementById("setup-hide").style.display = "none";
    document.getElementById("setup-show").style.display = "block";
}