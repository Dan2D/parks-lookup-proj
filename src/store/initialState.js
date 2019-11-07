export const initialState = {
    appState: {
        state: null,
        park: null,
        content: null,
        loading: false,
        err: null
    },
   parksData: {
       states: {
           byId: {
               "AL": {
                    name: "Alabama",
                    lat: 32.806671,
                    lng:-86.791130,
                    zoom: 7
               },
               "AK": {
                    name: "Alaska",
                    lat: 61.370716,
                    lng: -152.404419,
                    zoom: 4
                },
                "AZ": {
                    name: "Arizona",
                    lat: 33.729759,
                    lng: -111.431221,
                    zoom: 7
                },
                "AR": {
                    name: "Arkansas",
                    lat: 34.969704,
                    lng: -92.373123,
                    zoom: 7,
                },
                "CA": {
                    name: "California",
                    lat: 36.116203,
                    lng: -119.681564,
                    zoom: 6,
                },
                "CO": {
                    name: "Colorado",
                    lat: 39.059811,
                    lng: -105.311104,
                    zoom: 7,
                },
                "CT": {
                    name: "Connecticut",
                    lat: 41.597782,
                    lng: -72.755371,
                    zoom: 9,
                },
                "DE": {
                    name: "Delaware",
                    lat: 39.318523,
                    lng: -75.507141,
                    zoom: 9,
                },
                "FL": {
                    name: "Florida",
                    lat: 27.766279,
                    lng: -81.686783,
                    zoom: 6,
                },
                "GA": {
                    name: "Georgia",
                    lat: 33.040619,
                    lng: -83.643074,
                    zoom: 7,
                },
                "HI": {
                    name: "Hawaii",
                    lat: 21.094318,
                    lng: -157.498337,
                    zoom: 7,
                },
                "ID": {
                    name: "Idaho",
                    lat: 44.240459,
                    lng: -114.478828,
                    zoom: 6,
                },
                "IL": {
                    name: "Illinois",
                    lat: 40.349457,
                    lng: -88.986137,
                    zoom: 6,
                },
                "IN": {
                    name: "Indiana",
                    lat: 39.849426,
                    lng: -86.258278,
                    zoom: 7,
                },
                "IA": {
                    name: "Iowa",
                    lat: 42.011539,
                    lng: -93.210526,
                    zoom: 7,
                },
                "KS": {
                    name: "Kansas",
                    lat: 38.526600,
                    lng: -96.726486,
                    zoom: 7,
                },
                "KY": {
                    name: "Kentucky",
                    lat: 37.668140,
                    lng: -84.670067,
                    zoom: 7,
                },
                "LA": {
                    name: "Louisiana",
                    lat: 31.169546,
                    lng: -91.867805,
                    zoom: 7,
                },
                "ME": {
                    name: "Maine" ,
                    lat: 44.693947,
                    lng: -69.381927,
                    zoom: 7,
                },
                "MD": {
                    name: "Maryland",
                    lat: 39.063946,
                    lng: -76.802101,
                    zoom: 7,
                },
                "MA": {
                    name: "Massachusetts",
                    lat: 42.230171,
                    lng: -71.530106,
                    zoom: 7,
                },
                "MI": {
                    name: "Michigan" ,
                    lat: 43.326618,
                    lng: -84.536095,
                    zoom: 7,
                },
                "MN": {
                    name: "Minnesota",
                    lat: 45.694454,
                    lng: -93.900192,
                    zoom: 7,
                },
                "MS": {
                    name: "Mississippi" ,
                    lat: 32.741646,
                    lng: -89.678696,
                    zoom: 7,
                },
                "MO": {
                    name: "Missouri",
                    lat: 38.456085,
                    lng: -92.288368,
                    zoom: 7, 
                },
                "MT": {
                    name:  "Montana",
                    lat: 46.921925,
                    lng: -110.454353,
                    zoom: 6,
                },
                "NE": {
                    name: "Nebraska",
                    lat: 41.125370,
                    lng: -98.268082,
                    zoom: 7, 
                },
                "NV": {
                    name: "Nevada",
                    lat: 38.313515,
                    lng: -117.055374,
                    zoom: 6,
                },
                "NH": {
                    name: "New Hampshire", 
                    lat: 43.452492,
                    lng: -71.563896,
                    zoom: 8,
                },
                "NJ": {
                    name: "New Jersey",
                    lat: 40.298904,
                    lng: -74.521011,
                    zoom: 8,
                },
                "NM": {
                    name: "New Mexico", 
                    lat: 34.840515,
                    lng: -106.248482,
                    zoom: 6,
                },
                "NY": {
                    name: "New York",
                    lat: 43.165726,
                    lng: -74.948051,
                    zoom: 7,
                },
                "NC": {
                    name: "North Carolina",
                    lat: 35.630066,
                    lng: -79.806419,
                    zoom: 7,
                },
                "ND": {
                    name: "North Dakota", 
                    lat: 47.528912,
                    lng: -99.784012,
                    zoom: 7,
                },
                "OH": {
                    name: "Ohio", 
                    lat: 40.388783,
                    lng: -82.764915,
                    zoom: 7,
                },
                "OK": {
                    name: "Oklahoma",
                    lat: 35.565342,
                    lng: -96.928917,
                    zoom: 7,
                },
                "OR": {
                    name: "Oregon", 
                    lat: 44.572021,
                    lng: -122.070938,
                    zoom: 7,
                },
                "PA": {
                    name: "Pennsylvania",
                    lat: 40.590752,
                    lng: -77.209755,
                    zoom: 7, 
                },
                "RI": {
                    name: "Rhode Island",
                    lat: 41.680893,
                    lng: -71.511780,
                    zoom: 9,
                },
                "SC": {
                    name: "South Carolina",
                    lat: 33.856892,
                    lng: -80.945007,
                    zoom: 7,
                },
                "SD": {
                    name: "South Dakota", 
                    lat: 44.299782,
                    lng: -99.438828,
                    zoom: 7,
                },
                "TN": {
                    name: "Tennessee", 
                    lat: 35.747845,
                    lng: -86.692345,
                    zoom: 7,
                },
                "TX": {
                    name: "Texas", 
                    lat: 31.054487,
                    lng: -97.563461,
                    zoom: 6,
                },
                "UT": {
                    name: "Utah",
                    lat: 40.150032,
                    lng: -111.862434, 
                    zoom: 7,
                },
                "VT": {
                    name: "Vermont", 
                    lat: 44.045876,
                    lng: -71.710686,
                    zoom: 7,
                },
                "VA": {
                    name: "Virginia",
                    lat: 37.769337,
                    lng: -78.169968,
                    zoom: 7,
                },
                "WA": {
                    name: "Washington",
                    lat: 47.400902,
                    lng: -121.490494,
                    zoom: 7,
                },
                "WV": {
                    name: "West Virginia",
                    lat: 38.491226,
                    lng: -80.954453,
                    zoom: 7,
                },
                "WI": {
                    name: "Wisconsin",
                    lat: 44.268543,
                    lng:-89.616508,
                    zoom: 7,
                },
                "WY": {
                    name: "Wyoming",
                    lat: 42.755966,
                    lng: -107.302490,
                    zoom: 7,
                }
           },
           allIds: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
       },
       parks: {
           byId: {},
           allIds: [],
           loading: false
       },
       alerts: {
        byId: {},
        allIds: [],
        loading: false
       },
       campgrounds: {
        byId: {},
        allIds: [],
        parkCode: "",
        loading: false
       },
       events: {
        byId: {},
        allIds: [],
        parkCode: "",
        loading: false
       },
       news: {
        byId: {},
        allIds: [],
        parkCode: "",
        loading: false
       },
       visitorCenters: {
        byId: {},
        allIds: [],
        parkCode: "",
        loading: false
       },
   },
//    mapData: {}
}