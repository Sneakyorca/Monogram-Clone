if(window.innerWidth <= 768){
    

    document.querySelector('header').innerHTML = `<div class="menu">
            <ul>
                <ul class = "top"><li><img src="" alt=""> MONOGRAM</li><li class = "x")><span></span><span></span></li></ul>
                <li><a href="">HOW IT WORKS</a></li>
                <li  style = "border-bottom: none;"><a href="">WORKFLOWS</a><li></li><ul class = "pad"><li>AUDIO CONSOLE</li><li>PHOTO CONSOLE</li><li>VIDEO CONSOLE</li><li>MINI CONSOLE</li></ul></li>
                <li><a href="">DOWNLOAD</a></li>
                <li><a href="">BLOG</a></li>
                <li><a href="">SUPPORT</a></li>
                <li class = "shop"  style = "border-bottom: none;"><a href=""><strong>SHOP</strong></a></li>
            </ul>
        </div>
        <ul><li><img src="" alt=""> MONOGRAM</li></ul>
        <nav>
            <ul>
                <li class = "dashes"><span></span><span></span><span></span></li>
                <li class = "shop"><a href=""><img src = "" alt = "shop"></img></a></li>
                <li><a href=""><img src="" alt="">$ &#9660;</a></li>
            </ul>
        </nav>`;
        const menu = document.querySelector('.menu');
        document.querySelectorAll('.x, .dashes').forEach((mm) =>{
            mm.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
        })}else{
        document.querySelector('header').innerHTML = `<ul><li><img src="" alt=""> MONOGRAM</li></ul>
        <nav>
            <ul>
                <li><a href="">HOW IT WORKS</a></li>
                <li><a href="">WORKFLOWS &#9660;</a></li>
                <li><a href="">DOWNLOAD</a></li>
                <li><a href="">BLOG</a></li>
                <li><a href="">SUPPORT</a></li>
                <li class = "shop"><a href=""><strong>SHOP</strong></a></li>
                <li><a href=""><img src="" alt=""> USD &#9660;</a></li>
            </ul>
        </nav>`
    };