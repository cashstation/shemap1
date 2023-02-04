// Initialize and add the map
function initMap(): void {
  // The location of pittsburgh
  //40.44101589247759, -80.00934188727608
  const pitt = { lat: 40.441, lng: -80.009 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: pitt,
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: pitt,
    map: map,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
//try again