var button=document.getElementById("switchid");
button.onclick =function(){
    document.body.classList.toggle("darktheme");
    if(document.body.classList.contains("darktheme"))
    {
        button.innerText="bright";
    }
    else
    {
        button.innerText="dark";
    }
}  