function createMapMarker() {
  // Set the access token
  mapboxgl.accessToken = 'pk.eyJ1IjoieGxtYXgybHgiLCJhIjoiY2xraDEzbHBjMDVmYjNmbzhlemNxa3QwZSJ9._MNnpVO4SKSIGaf3cT1Gtw';

  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.091542, 42.358862],
    zoom: 12,
  });

  // Add a marker to the map at the specified location
  new mapboxgl.Marker()
    .setLngLat([-71.091542, 42.358862])
    .addTo(map);
}

createMapMarker()