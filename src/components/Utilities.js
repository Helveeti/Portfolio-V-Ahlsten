export function rightAlign(i){
    if(i % 2 === 0) return true;
    else return false;
}

export function requirePic(pic){
    return require('./contents/pictures/' + pic);
}

export function toLink(link){
    window.open(
        link,
        '_blank'
    );
}