
let isShowing ;

function showNavs() {
    

    if (isShowing) {
        document.getElementById('mobile-navs').style.display = 'none';
        isShowing = false;
    }
    else {
        document.getElementById('mobile-navs').style.display = 'block';
        isShowing = true;
    }

}