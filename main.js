var arr=[{user:"yaakoubiaymen547@gmail.com",
    password:"1234567896"}]




$("#btn").click(function(event){
    event.preventDefault();
    var x=$("#pas").val()
if(x.length>8){
    alert( "Welcom in WatchHub")
    window.location.replace("watch.html")
}
else{alert("Failed")}})




