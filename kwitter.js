function addUser()
{
    user_name = document.getElementById("usernam").value;
    localStorage.setItem("usernam", user_name);

    window.location="kwitter_room.html";
}