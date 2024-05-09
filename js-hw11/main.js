//Ivo's code for reference

function initMap() {
  const location = { lat: 49.83991201557608, lng: 24.01958371272718 };
  const mapSelector = document.querySelector(".map");
  map = new google.maps.Map(mapSelector, {
    center: location,
    zoom: 15,
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
