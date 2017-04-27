var map;
function initMap() {
	var myPos = {lat: -16.381416, lng: -71.545611}
    map = new google.maps.Map(document.getElementById('map'), {
		center: myPos,
		zoom: 10
		
    });
	var customIcon = './Pictures/peruicon.png';
	var marker = new google.maps.Marker({
		position: myPos,
		map: map,
		icon: customIcon,
		animation: google.maps.Animation.DROP
	});
}