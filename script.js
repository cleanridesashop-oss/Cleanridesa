// Fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section, .card, .review").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Back to top button
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#0A84FF;
color:white;
font-size:24px;
cursor:pointer;
display:none;
box-shadow:0 10px 25px rgba(10,132,255,.4);
transition:.3s;
z-index:9999;
`;

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Add animation CSS dynamically
const style = document.createElement("style");
style.innerHTML = `
.hidden{
opacity:0;
transform:translateY(40px);
transition:all .8s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

.gallerygrid img{
transition:transform .4s ease, box-shadow .4s ease;
}

.gallerygrid img:hover{
transform:scale(1.06);
box-shadow:0 20px 40px rgba(10,132,255,.35);
}

.button:active,
.buybtn:active{
transform:scale(.97);
}
`;

document.head.appendChild(style);
