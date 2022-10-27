function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 15.829017928709513, lng: 78.0377413630125 },
        zoom: 10,
        mapId: '2efb7465d52daabf'
    });

    const marker = new google.maps.Marker({
        position:{lat: 15.836115654489646, lng:78.02279018599604 },
        map,
        title: "My location",
        icon:{
            url: "placeholder.png",
            scaledSize: new google.maps.Size(38,38)
        },
        animation: google.maps.Animation.DROP
    });
    const infowindow = new google.maps.InfoWindow({
        content: "Ritesh's House",
    });

    marker.addListener("click", () => {
        infowindow.open(map,marker);
    });
}