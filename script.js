function modate () {
    let lmdate = document.lastModified();
    document.getElementById("datelm").innerHTML = lmdate;
}
function copyr () {
    let cdate = new Date();
    document.getElementById("cyear").innerHTML = cdate.getFullYear();
}
onload (modate (), copyr ());