const dark = document.getElementById('dark');

function darkMode() {
    document.body.classList.toggle('dark');

    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('dark');

    const hero = document.getElementById('hero');
    hero.classList.toggle('clr');

    const tentangSaya = document.getElementById('tentang-saya');
    tentangSaya.classList.toggle('margin');

    const portofolio = document.getElementById('portofolio');
    portofolio.classList.toggle('clr');
    portofolio.classList.toggle('margin');

    const kemampuan = document.getElementById('kemampuan');
    kemampuan.classList.toggle('margin');

    const komentar = document.getElementById('komentar');
    komentar.classList.toggle('clr');
    komentar.classList.toggle('margin');

    const path = document.getElementById('path');
    path.classList.toggle('display');

    const pathDua = document.getElementById('path2');
    pathDua.classList.toggle('display');

    const pathTiga = document.getElementById('path3');
    pathTiga.classList.toggle('display');

    const pathEmpat = document.getElementById('path4');
    pathEmpat.classList.toggle('display');

    const pathLima = document.getElementById('path5');
    pathLima.classList.toggle('display');

    const moon = document.getElementById('moon')
    if (document.body.classList.contains('dark')) {
        moon.src = 'assets/images/mode/sun.png';
    } else {
        moon.src = 'assets/images/mode/moon.png';
    }
}