let socket = null;

function startSocket () {
    socket = new WebSocket("ws://st-chat.shas.tel");
}

startSocket();

socket.onclose = function(event) {
    if (event.wasClean) {
      alert('Соединение закрыто чисто');
    } else {
      alert('Обрыв соединения');
    }
    alert('Код: ' + event.code + ' причина: ' + event.reason);
    setTimeout(function(){startSocket()}, 5000);
  };
  
  
  socket.onerror = function(error) {
    alert("Ошибка " + error.message);
  };

export default socket