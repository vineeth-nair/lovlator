function myfunction()
{   if(document.getElementById('soul1').value!="" && document.getElementById('soul2').value!="" )
    {
    var x;
    x=Math.floor(Math.random()*100);
    document.getElementById('demo').innerHTML=x+"%"
    }
}
function refreshPage(){
    window.location.reload();
} 