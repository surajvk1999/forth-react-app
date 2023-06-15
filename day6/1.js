function like(p1) {
    console.log(p1)
    let likeref = p1.nextElementSibling;
    let existiing =likeref.innerHTML;
    let newVal= parseInt(existiing)+1;
    likeref.innerHTML=newVal;
}

function dislike(p1) {
    console.log(p1)
    let likeref = p1.nextElementSibling;
    let existiing =likeref.innerHTML;
    let newVal= parseInt(existiing)+1;
    likeref.innerHTML=newVal;
}
function angry(p1) {
    console.log(p1)
    let likeref = p1.nextElementSibling;
    let existiing =likeref.innerHTML;
    let newVal= parseInt(existiing)+1;
    likeref.innerHTML=newVal;
}