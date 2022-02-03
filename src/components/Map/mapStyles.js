export default [
  {
    featureType: "all",

    stylers: [
      {
        saturation: 0,
      },
      {
        hue: "#e7ecf0",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text",
    stylers: [
      {
        color: "#878787",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        saturation: -70,
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        saturation: -60,
      },
    ],
  },
];
