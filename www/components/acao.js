
$(document).on("click","#geo",function(){

  function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

   
if(networkState == Connection.NONE ){
alert('Erro sem conexão');
navigator.vibrate(6000);
navigator.notification.beep(3);
  
}
else {
var onSuccess = function(position) {

       L.mapquest.key = 'KKigFM8J1l0JTWUW4VFNGQ4AjSkwIsmc';


L.mapquest.map('map', {
  center: [position.coords.latitude, position.coords.longitude],
  layers: L.mapquest.tileLayer('map'),
  zoom: 17
});    

navigator.notification.beep(1);
    };
    

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    
  
}
  
}

checkConnection();

     
      


})

