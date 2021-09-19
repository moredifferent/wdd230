let lmdate = document.lastModified();
let cdate = new Date();
onload (
    document.getElementById("datelm").innerHTML = lmdate,
    document.getElementById("cyear").innerHTML = cdate.getFullYear())