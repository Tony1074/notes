document.getElementById("check").onclick = function() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    if (login == "Arsenii" && password == "Arsenii0111") 
    alert("Добро пожаловать в заметки нажмите кнопку вход");

   else if (login == "Оля" && password == "777") 
    alert("Добро пожаловать в заметки нажмите кнопку вход");

    else if (login == "мама" && password == "111") 
    alert("Добро пожаловать в заметки нажмите кнопку вход");

    else alert("неправельный логин или пароль");
}