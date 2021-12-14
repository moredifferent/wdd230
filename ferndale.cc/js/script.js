const d = new Date();

  document.getElementById("cyear").textContent = d.getFullYear();

  let oLastModif = new Date(document.lastModified);
  document.getElementById("datelm").textContent = oLastModif;