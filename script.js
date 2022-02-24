const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const namelist = document.querySelectorAll(".names");
    const pname = document.getElementsByTagName("h2");

    for(var i=0; i< pname.length; i++){
        let match = namelist[i].getElementsByTagName("h2")[0] && namelist[i].getElementsByTagName("h3")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                namelist[i].style.display = "";
            }
            else{
                namelist[i].style.display = "none";
            }
        }
    }
}