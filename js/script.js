const d = new Date();
const year = d.getFullYear();
const fulldate = `${year}`;
document.querySelector("#cyear").textContent = fulldate;

let lmdate = new Date(document.lastModified)
document.querySelector("#datelm").textContent = lmdate;