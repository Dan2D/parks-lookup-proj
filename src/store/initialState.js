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
                    name: "Alabama"
               },
               "AK": {
                    name: "Alaska"
                },
                "AZ": {
                    name: "Arizona"
                },
                "AR": {
                    name: "Arkansas"
                },
                "CA": {
                    name: "California"
                },
                "CO": {
                    name: "Colorado"
                },
                "CT": {
                    name: "Connecticut"
                },
                "DE": {
                    name: "Delaware"
                },
                "FL": {
                    name: "Florida"
                },
                "GA": {
                    name: "Georgia"
                },
                "HI": {
                    name: "Hawaii"
                },
                "ID": {
                    name: "Idaho"
                },
                "IL": {
                    name: "Illinois"
                },
                "IN": {
                    name: "Indiana"
                },
                "IA": {
                    name: "Iowa"
                },
                "KS": {
                    name: "Kansas"
                },
                "KY": {
                    name: "Kentucky"
                },
                "LA": {
                    name: "Louisiana"
                },
                "ME": {
                    name: "Maine" 
                },
                "MD": {
                    name: "Maryland"
                },
                "MA": {
                    name: "Massachusetts"
                },
                "MI": {
                    name: "Michigan" 
                },
                "MN": {
                    name: "Minnesota"
                },
                "MS": {
                    name: "Mississippi" 
                },
                "MO": {
                    name: "Missouri" 
                },
                "MT": {
                    name:  "Montana"
                },
                "NE": {
                    name: "Nebraska" 
                },
                "NV": {
                    name: "Nevada" 
                },
                "NH": {
                    name: "New Hampshire" 
                },
                "NJ": {
                    name: "New Jersey"
                },
                "NM": {
                    name: "New Mexico" 
                },
                "NY": {
                    name: "New York"
                },
                "NC": {
                    name: "North Carolina" 
                },
                "ND": {
                    name: "North Dakota" 
                },
                "OH": {
                    name: "Ohio" 
                },
                "OK": {
                    name: "Oklahoma"
                },
                "OR": {
                    name: "Oregon" 
                },
                "PA": {
                    name: "Pennsylvania" 
                },
                "RI": {
                    name: "Rhode Island"
                },
                "SC": {
                    name: "South Carolina"
                },
                "SD": {
                    name: "South Dakota" 
                },
                "TN": {
                    name: "Tennessee" 
                },
                "TX": {
                    name: "Texas" 
                },
                "UT": {
                    name: "Utah" 
                },
                "VT": {
                    name: "Vermont" 
                },
                "VA": {
                    name: "Virginia"
                },
                "WA": {
                    name: "Washington"
                },
                "WV": {
                    name: "West Virginia"
                },
                "WI": {
                    name: "Wisconsin"
                },
                "WY": {
                    name: "Wyoming"
                }
           },
           allIds: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
       },
       parks: {
           byId: {},
           allIds: []
       },
       alerts: {
        byId: {},
        allIds: []
       },
       campgrounds: {
        byId: {},
        allIds: []
       },
       events: {
        byId: {},
        allIds: []
       },
       news: {
        byId: {},
        allIds: []
       },
       visitorCenters: {
        byId: {},
        allIds: []
       },
   },
//    mapData: {}
}