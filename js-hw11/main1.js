//main code. custom marker + removed controls

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker"
  );
  const position = new google.maps.LatLng(49.83991201557608, 24.01958371272718);
  map = new google.maps.Map(document.querySelector(".map"), {
    center: position,
    zoom: 16,
    mapId: "LvivSpaces",
    disableDefaultUI: true, //delete a maps man
    mapTypeControl: false, //delete satelite version
    scaleControl: true,
    zoomControl: true,
  });

  //I could not add map styles as this error pops up:
  //Google Maps JavaScript API: A Map's styles property cannot be set when a mapId is present.
  // When a mapId is present, Map styles are controlled via the cloud console.

  //custom marker
  const leafImg = document.createElement("img");

  leafImg.src = "https://leafletjs.com/examples/custom-icons/leaf-green.png";

  const leafMarkerView = new AdvancedMarkerElement({
    map,
    position: position,
    content: leafImg,
    title: "LvivSpaces",
  });
}
initMap();
