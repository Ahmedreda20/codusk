_,
_::after,
\*::before {
outline: none !important;
}
.font-lato {
font-family: "Poppins", sans-serif !important;
scroll-behavior: smooth;
}
input,
textarea,
select,
button {
font-family: "Poppins", sans-serif !important;
color: #fff;
}
::-webkit-scrollbar {
width: 0px;
}
[data-type="title"]::after {
position: absolute;
content: "";
left: 0;
bottom: 3px;
height: 7px;
width: 70%;
background-color: rgba(216, 90, 6, 0.5);
z-index: -1;
}
[data-type="grid__container"] {
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
[data-type="portfolio"] {
grid-template-columns: auto 50px;
}
[data-type="services"] {
box-shadow: 0 0 40px rgba(204, 204, 204, 0.281);
}
[data-type="article__item"] main::after {
position: absolute;
content: "";
width: 100%;
height: 95%;
background-color: rgb(21, 28, 37);
bottom: -12px;
left: -12px;
border-radius: 15px;
z-index: -1;
}
