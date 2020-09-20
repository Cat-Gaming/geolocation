// Get Location
if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(showPosition);
}
// make map
function showPosition(position)
{
    var mapOptions = {
        center: [position.coords.latitude, position.coords.longitude],
        zoom: 12
    }
    
    var map = new L.map('map', mapOptions);
    var layer = new L.TileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`);
    map.addLayer(layer);
}