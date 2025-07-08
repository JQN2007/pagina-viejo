const $btnup = document.getElementById("up");

window.addEventListener("scroll", (e) =>
{
let y = document.documentElement.scrollTop;
if(y === 0)
{
    $btnup.classList.add("hide");
    $btnup.classList.remove("active");
}else if (y >= 200)
{
    $btnup.classList.remove("hide");
    $btnup.classList.add("active");
}
});

document.addEventListener("click", (e) =>
{
    if(e.target === $btnup || e.target.matches(".fa-arrow-up"))
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});