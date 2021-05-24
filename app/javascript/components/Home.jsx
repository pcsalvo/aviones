import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from "react-router-dom";

const tilesProvider = "https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"

let myMap = L.map('myMap').setView([51.505, -0.09], 13)


export default () => (
  <div>
    <h1 className="display-4">Avioncitos</h1>
    <p className="lead">
        Podrás encontrar el estado del vuelo de los avioncitos
    </p>
    <div id="myMap" style="height: 600px">
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""></script>
    </div>
  </div>
);