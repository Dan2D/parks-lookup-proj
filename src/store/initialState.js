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
                    lat: 33.806671,
                    lng:-86.791130,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Birmingham Civil Rights National Monument",
                          "parkCode": "bicr"
                        },
                        {
                          "name": "Freedom Riders National Monument",
                          "parkCode": "frri"
                        },
                        {
                          "name": "Horseshoe Bend National Military Park",
                          "parkCode": "hobe"
                        },
                        {
                          "name": "Little River Canyon National Preserve",
                          "parkCode": "liri"
                        },
                        {
                          "name": "Muscle Shoals National Heritage Area",
                          "parkCode": "mush"
                        },
                        {
                          "name": "Natchez Trace National Scenic Trail",
                          "parkCode": "natt"
                        },
                        {
                          "name": "Natchez Trace Parkway",
                          "parkCode": "natr"
                        },
                        {
                          "name": "Russell Cave National Monument",
                          "parkCode": "ruca"
                        },
                        {
                          "name": "Selma To Montgomery National Historic Trail",
                          "parkCode": "semo"
                        },
                        {
                          "name": "Trail Of Tears National Historic Trail",
                          "parkCode": "trte"
                        },
                        {
                          "name": "Tuskegee Airmen National Historic Site",
                          "parkCode": "tuai"
                        },
                        {
                          "name": "Tuskegee Institute National Historic Site",
                          "parkCode": "tuin"
                        }
                      ]
               },
               "AK": {
                    name: "Alaska",
                    lat: 61.370716,
                    lng: -152.404419,
                    zoom: 4,
                    parks: [
                        {
                          "name": "Alagnak Wild River",
                          "parkCode": "alag"
                        },
                        {
                          "name": "Alaska Public Lands",
                          "parkCode": "anch"
                        },
                        {
                          "name": "Aleutian Islands World War II National Historic Area",
                          "parkCode": "aleu"
                        },
                        {
                          "name": "Aniakchak National Monument & Preserve",
                          "parkCode": "ania"
                        },
                        {
                          "name": "Bering Land Bridge National Preserve",
                          "parkCode": "bela"
                        },
                        {
                          "name": "Cape Krusenstern National Monument",
                          "parkCode": "cakr"
                        },
                        {
                          "name": "Denali National Park & Preserve",
                          "parkCode": "dena"
                        },
                        {
                          "name": "Gates Of The Arctic National Park & Preserve",
                          "parkCode": "gaar"
                        },
                        {
                          "name": "Glacier Bay National Park & Preserve",
                          "parkCode": "glba"
                        },
                        {
                          "name": "I&#241;upiat Heritage Center",
                          "parkCode": "inup"
                        },
                        {
                          "name": "Katmai National Park & Preserve",
                          "parkCode": "katm"
                        },
                        {
                          "name": "Kenai Fjords National Park",
                          "parkCode": "kefj"
                        },
                        {
                          "name": "Klondike Gold Rush National Historical Park",
                          "parkCode": "klgo"
                        },
                        {
                          "name": "Kobuk Valley National Park",
                          "parkCode": "kova"
                        },
                        {
                          "name": "Lake Clark National Park & Preserve",
                          "parkCode": "lacl"
                        },
                        {
                          "name": "Noatak National Preserve",
                          "parkCode": "noat"
                        },
                        {
                          "name": "Sitka National Historical Park",
                          "parkCode": "sitk"
                        },
                        {
                          "name": "Wrangell - St Elias National Park & Preserve",
                          "parkCode": "wrst"
                        },
                        {
                          "name": "Yukon - Charley Rivers National Preserve",
                          "parkCode": "yuch"
                        }
                      ]
                },
                "AZ": {
                    name: "Arizona",
                    lat: 33.729759,
                    lng: -111.431221,
                    zoom: 6,
                    parks: [
                        {
                          "name": "Canyon de Chelly National Monument",
                          "parkCode": "cach"
                        },
                        {
                          "name": "Casa Grande Ruins National Monument",
                          "parkCode": "cagr"
                        },
                        {
                          "name": "Chiricahua National Monument",
                          "parkCode": "chir"
                        },
                        {
                          "name": "Coronado National Memorial",
                          "parkCode": "coro"
                        },
                        {
                          "name": "Fort Bowie National Historic Site",
                          "parkCode": "fobo"
                        },
                        {
                          "name": "Glen Canyon National Recreation Area",
                          "parkCode": "glca"
                        },
                        {
                          "name": "Grand Canyon National Park",
                          "parkCode": "grca"
                        },
                        {
                          "name": "Hohokam Pima National Monument",
                          "parkCode": "pima"
                        },
                        {
                          "name": "Hubbell Trading Post National Historic Site",
                          "parkCode": "hutr"
                        },
                        {
                          "name": "Juan Bautista de Anza National Historic Trail",
                          "parkCode": "juba"
                        },
                        {
                          "name": "Lake Mead National Recreation Area",
                          "parkCode": "lake"
                        },
                        {
                          "name": "Montezuma Castle National Monument",
                          "parkCode": "moca"
                        },
                        {
                          "name": "Navajo National Monument",
                          "parkCode": "nava"
                        },
                        {
                          "name": "Old Spanish National Historic Trail",
                          "parkCode": "olsp"
                        },
                        {
                          "name": "Organ Pipe Cactus National Monument",
                          "parkCode": "orpi"
                        },
                        {
                          "name": "Parashant National Monument",
                          "parkCode": "para"
                        },
                        {
                          "name": "Petrified Forest National Park",
                          "parkCode": "pefo"
                        },
                        {
                          "name": "Pipe Spring National Monument",
                          "parkCode": "pisp"
                        },
                        {
                          "name": "Saguaro National Park",
                          "parkCode": "sagu"
                        },
                        {
                          "name": "Sunset Crater Volcano National Monument",
                          "parkCode": "sucr"
                        },
                        {
                          "name": "Tonto National Monument",
                          "parkCode": "tont"
                        },
                        {
                          "name": "Tumacácori National Historical Park",
                          "parkCode": "tuma"
                        },
                        {
                          "name": "Tuzigoot National Monument",
                          "parkCode": "tuzi"
                        },
                        {
                          "name": "Walnut Canyon National Monument",
                          "parkCode": "waca"
                        },
                        {
                          "name": "Wupatki National Monument",
                          "parkCode": "wupa"
                        }
                      ]
                },
                "AR": {
                    name: "Arkansas",
                    lat: 34.969704,
                    lng: -92.373123,
                    zoom: 7,
                    parks: [
                     {
                     name: 'Arkansas Post National Memorial',
                     parkCode: 'arpo'
                     },
                     {
                     name: 'Buffalo National River',
                     parkCode: 'buff'
                     },
                     {
                     name: 'Fort Smith National Historic Site',
                     parkCode: 'fosm'
                     },
                     {
                     name: 'Hot Springs National Park',
                     parkCode: 'hosp'
                     },
                     {
                     name: 'Little Rock Central High School National Historic Site',
                     parkCode: 'chsc'
                     },
                     {
                     name: 'Pea Ridge National Military Park',
                     parkCode: 'peri'
                     },
                     {
                     name: 'President William Jefferson Clinton Birthplace Home National Historic Site',
                     parkCode: 'wicl'
                     },
                     {
                     name: 'Trail Of Tears National Historic Trail',
                     parkCode: 'trte'
                     },
                    ]
                },
                "CA": {
                    name: "California",
                    lat: 36.116203,
                    lng: -119.681564,
                    zoom: 6,
                    parks: [
                            {
                              "name": "Alcatraz Island",
                              "parkCode": "alca"
                            },
                            {
                              "name": "Cabrillo National Monument",
                              "parkCode": "cabr"
                            },
                            {
                              "name": "California National Historic Trail",
                              "parkCode": "cali"
                            },
                            {
                              "name": "Castle Mountains National Monument",
                              "parkCode": "camo"
                            },
                            {
                              "name": "César E. Chávez National Monument",
                              "parkCode": "cech"
                            },
                            {
                              "name": "Channel Islands National Park",
                              "parkCode": "chis"
                            },
                            {
                              "name": "Death Valley National Park",
                              "parkCode": "deva"
                            },
                            {
                              "name": "Devils Postpile National Monument",
                              "parkCode": "depo"
                            },
                            {
                              "name": "Eugene O'Neill National Historic Site",
                              "parkCode": "euon"
                            },
                            {
                              "name": "Fort Point National Historic Site",
                              "parkCode": "fopo"
                            },
                            {
                              "name": "Golden Gate National Recreation Area",
                              "parkCode": "goga"
                            },
                            {
                              "name": "John Muir National Historic Site",
                              "parkCode": "jomu"
                            },
                            {
                              "name": "Joshua Tree National Park",
                              "parkCode": "jotr"
                            },
                            {
                              "name": "Juan Bautista de Anza National Historic Trail",
                              "parkCode": "juba"
                            },
                            {
                              "name": "Lassen Volcanic National Park",
                              "parkCode": "lavo"
                            },
                            {
                              "name": "Lava Beds National Monument",
                              "parkCode": "labe"
                            },
                            {
                              "name": "Manzanar National Historic Site",
                              "parkCode": "manz"
                            },
                            {
                              "name": "Mojave National Preserve",
                              "parkCode": "moja"
                            },
                            {
                              "name": "Muir Woods National Monument",
                              "parkCode": "muwo"
                            },
                            {
                              "name": "Old Spanish National Historic Trail",
                              "parkCode": "olsp"
                            },
                            {
                              "name": "Pinnacles National Park",
                              "parkCode": "pinn"
                            },
                            {
                              "name": "Point Reyes National Seashore",
                              "parkCode": "pore"
                            },
                            {
                              "name": "Pony Express National Historic Trail",
                              "parkCode": "poex"
                            },
                            {
                              "name": "Port Chicago Naval Magazine National Memorial",
                              "parkCode": "poch"
                            },
                            {
                              "name": "Presidio of San Francisco",
                              "parkCode": "prsf"
                            },
                            {
                              "name": "Redwood National and State Parks",
                              "parkCode": "redw"
                            },
                            {
                              "name": "Rosie the Riveter WWII Home Front National Historical Park",
                              "parkCode": "rori"
                            },
                            {
                              "name": "San Francisco Maritime National Historical Park",
                              "parkCode": "safr"
                            },
                            {
                              "name": "Santa Monica Mountains National Recreation Area",
                              "parkCode": "samo"
                            },
                            {
                              "name": "Sequoia & Kings Canyon National Parks",
                              "parkCode": "seki"
                            },
                            {
                              "name": "Tule Lake National Monument",
                              "parkCode": "tule"
                            },
                            {
                              "name": "Whiskeytown National Recreation Area",
                              "parkCode": "whis"
                            },
                            {
                              "name": "Yosemite National Park",
                              "parkCode": "yose"
                            }
                    ]
                },
                "CO": {
                    name: "Colorado",
                    lat: 39.059811,
                    lng: -105.311104,
                    zoom: 7,
                    parks: [
                        {
                        "name": "Bent's Old Fort National Historic Site",
                        "parkCode": "beol"
                        },
                        {
                        "name": "Black Canyon Of The Gunnison National Park",
                        "parkCode": "blca"
                        },
                        {
                        "name": "California National Historic Trail",
                        "parkCode": "cali"
                        },
                        {
                        "name": "Colorado National Monument",
                        "parkCode": "colm"
                        },
                        {
                        "name": "Curecanti National Recreation Area",
                        "parkCode": "cure"
                        },
                        {
                        "name": "Dinosaur National Monument",
                        "parkCode": "dino"
                        },
                        {
                        "name": "Florissant Fossil Beds National Monument",
                        "parkCode": "flfo"
                        },
                        {
                        "name": "Great Sand Dunes National Park & Preserve",
                        "parkCode": "grsa"
                        },
                        {
                        "name": "Hovenweep National Monument",
                        "parkCode": "hove"
                        },
                        {
                        "name": "Mesa Verde National Park",
                        "parkCode": "meve"
                        },
                        {
                        "name": "Old Spanish National Historic Trail",
                        "parkCode": "olsp"
                        },
                        {
                        "name": "Pony Express National Historic Trail",
                        "parkCode": "poex"
                        },
                        {
                        "name": "Rocky Mountain National Park",
                        "parkCode": "romo"
                        },
                        {
                        "name": "Sand Creek Massacre National Historic Site",
                        "parkCode": "sand"
                        },
                        {
                        "name": "Santa Fe National Historic Trail",
                        "parkCode": "safe"
                        },
                        {
                        "name": "Yucca House National Monument",
                        "parkCode": "yuho"
                        }
                    ]
                },
                "CT": {
                    name: "Connecticut",
                    lat: 41.597782,
                    lng: -72.755371,
                    zoom: 9,
                    parks: [
                        {
                        "name": "Appalachian National Scenic Trail",
                        "parkCode": "appa"
                        },
                        {
                        "name": "Coltsville National Historical Park",
                        "parkCode": "colt"
                        },
                        {
                        "name": "New England National Scenic Trail",
                        "parkCode": "neen"
                        },
                        {
                        "name": "The Last Green Valley National Heritage Corridor",
                        "parkCode": "qush"
                        },
                        {
                        "name": "Washington-Rochambeau Revolutionary Route National Historic Trail",
                        "parkCode": "waro"
                        },
                        {
                        "name": "Weir Farm National Historic Site",
                        "parkCode": "wefa"
                        }  
                    ]
                },
                "DE": {
                    name: "Delaware",
                    lat: 39.318523,
                    lng: -75.507141,
                    zoom: 9,
                    parks: [
                        {
                            "name": "Captain John Smith Chesapeake National Historic Trail",
                            "parkCode": "cajo"
                        },
                        {
                            "name": "Chesapeake Bay",
                            "parkCode": "cbpo"
                        },
                        {
                            "name": "First State National Historical Park",
                            "parkCode": "frst"
                        },
                        {
                            "name": "Washington-Rochambeau Revolutionary Route National Historic Trail",
                            "parkCode": "waro"
                        }
                    ]
                },
                "FL": {
                    name: "Florida",
                    lat: 27.766279,
                    lng: -81.686783,
                    zoom: 6,
                    parks: [
                        {
                          "name": "Big Cypress National Preserve",
                          "parkCode": "bicy"
                        },
                        {
                          "name": "Biscayne National Park",
                          "parkCode": "bisc"
                        },
                        {
                          "name": "Canaveral National Seashore",
                          "parkCode": "cana"
                        },
                        {
                          "name": "Castillo de San Marcos National Monument",
                          "parkCode": "casa"
                        },
                        {
                          "name": "De Soto National Memorial",
                          "parkCode": "deso"
                        },
                        {
                          "name": "Dry Tortugas National Park",
                          "parkCode": "drto"
                        },
                        {
                          "name": "Everglades National Park",
                          "parkCode": "ever"
                        },
                        {
                          "name": "Fort Matanzas National Monument",
                          "parkCode": "foma"
                        },
                        {
                          "name": "Gulf Islands National Seashore",
                          "parkCode": "guis"
                        },
                        {
                          "name": "Gullah/Geechee Cultural Heritage Corridor",
                          "parkCode": "guge"
                        },
                        {
                          "name": "Timucuan Ecological & Historic Preserve",
                          "parkCode": "timu"
                        }
                      ]
                },
                "GA": {
                    name: "Georgia",
                    lat: 33.040619,
                    lng: -83.643074,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Andersonville National Historic Site",
                          "parkCode": "ande"
                        },
                        {
                          "name": "Appalachian National Scenic Trail",
                          "parkCode": "appa"
                        },
                        {
                          "name": "Arabia Mountain National Heritage Area",
                          "parkCode": "armo"
                        },
                        {
                          "name": "Augusta Canal National Heritage Area",
                          "parkCode": "auca"
                        },
                        {
                          "name": "Chattahoochee River National Recreation Area",
                          "parkCode": "chat"
                        },
                        {
                          "name": "Chickamauga & Chattanooga National Military Park",
                          "parkCode": "chch"
                        },
                        {
                          "name": "Cumberland Island National Seashore",
                          "parkCode": "cuis"
                        },
                        {
                          "name": "Fort Frederica National Monument",
                          "parkCode": "fofr"
                        },
                        {
                          "name": "Fort Pulaski National Monument",
                          "parkCode": "fopu"
                        },
                        {
                          "name": "Gullah/Geechee Cultural Heritage Corridor",
                          "parkCode": "guge"
                        },
                        {
                          "name": "Jimmy Carter National Historic Site",
                          "parkCode": "jica"
                        },
                        {
                          "name": "Kennesaw Mountain National Battlefield Park",
                          "parkCode": "kemo"
                        },
                        {
                          "name": "Martin Luther King, Jr. National Historical Park",
                          "parkCode": "malu"
                        },
                        {
                          "name": "Ocmulgee Mounds National Historical Park",
                          "parkCode": "ocmu"
                        },
                        {
                          "name": "Trail Of Tears National Historic Trail",
                          "parkCode": "trte"
                        }
                      ]
                },
                "HI": {
                    name: "Hawaii",
                    lat: 21.094318,
                    lng: -157.498337,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Ala Kahakai National Historic Trail",
                          "parkCode": "alka"
                        },
                        {
                          "name": "Haleakal&#257; National Park",
                          "parkCode": "hale"
                        },
                        {
                          "name": "Hawai'i Volcanoes National Park",
                          "parkCode": "havo"
                        },
                        {
                          "name": "Honouliuli National Historic Site",
                          "parkCode": "hono"
                        },
                        {
                          "name": "Kalaupapa National Historical Park",
                          "parkCode": "kala"
                        },
                        {
                          "name": "Kaloko-Honok&#333;hau National Historical Park",
                          "parkCode": "kaho"
                        },
                        {
                          "name": "Pearl Harbor National Memorial",
                          "parkCode": "valr"
                        },
                        {
                          "name": "Pu`uhonua O H&#333;naunau National Historical Park",
                          "parkCode": "puho"
                        },
                        {
                          "name": "Pu`ukohol&#257; Heiau National Historic Site",
                          "parkCode": "puhe"
                        }
                      ]
                },
                "ID": {
                    name: "Idaho",
                    lat: 44.240459,
                    lng: -114.478828,
                    zoom: 6,
                    parks: [
                        {
                          "name": "California National Historic Trail",
                          "parkCode": "cali"
                        },
                        {
                          "name": "City Of Rocks National Reserve",
                          "parkCode": "ciro"
                        },
                        {
                          "name": "Craters Of The Moon National Monument & Preserve",
                          "parkCode": "crmo"
                        },
                        {
                          "name": "Hagerman Fossil Beds National Monument",
                          "parkCode": "hafo"
                        },
                        {
                          "name": "Ice Age Floods National Geologic Trail",
                          "parkCode": "iafl"
                        },
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "Minidoka National Historic Site",
                          "parkCode": "miin"
                        },
                        {
                          "name": "Nez Perce National Historical Park",
                          "parkCode": "nepe"
                        },
                        {
                          "name": "Oregon National Historic Trail",
                          "parkCode": "oreg"
                        },
                        {
                          "name": "Yellowstone National Park",
                          "parkCode": "yell"
                        }
                      ]
                },
                "IL": {
                    name: "Illinois",
                    lat: 40.349457,
                    lng: -88.986137,
                    zoom: 6,
                    parks: [
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "Lincoln Home National Historic Site",
                          "parkCode": "liho"
                        },
                        {
                          "name": "Mormon Pioneer National Historic Trail",
                          "parkCode": "mopi"
                        },
                        {
                          "name": "Pullman National Monument",
                          "parkCode": "pull"
                        },
                        {
                          "name": "Trail Of Tears National Historic Trail",
                          "parkCode": "trte"
                        }
                      ]
                },
                "IN": {
                    name: "Indiana",
                    lat: 39.849426,
                    lng: -86.258278,
                    zoom: 7,
                    parks: [
                        {
                          "name": "George Rogers Clark National Historical Park",
                          "parkCode": "gero"
                        },
                        {
                          "name": "Indiana Dunes National Park",
                          "parkCode": "indu"
                        },
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "Lincoln Boyhood National Memorial",
                          "parkCode": "libo"
                        }
                      ]
                },
                "IA": {
                    name: "Iowa",
                    lat: 42.011539,
                    lng: -93.210526,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Effigy Mounds National Monument",
                          "parkCode": "efmo"
                        },
                        {
                          "name": "Herbert Hoover National Historic Site",
                          "parkCode": "heho"
                        },
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "Mormon Pioneer National Historic Trail",
                          "parkCode": "mopi"
                        }
                      ]
                },
                "KS": {
                    name: "Kansas",
                    lat: 38.526600,
                    lng: -96.726486,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Brown v. Board of Education National Historic Site",
                          "parkCode": "brvb"
                        },
                        {
                          "name": "California National Historic Trail",
                          "parkCode": "cali"
                        },
                        {
                          "name": "Fort Larned National Historic Site",
                          "parkCode": "fols"
                        },
                        {
                          "name": "Fort Scott National Historic Site",
                          "parkCode": "fosc"
                        },
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "Nicodemus National Historic Site",
                          "parkCode": "nico"
                        },
                        {
                          "name": "Oregon National Historic Trail",
                          "parkCode": "oreg"
                        },
                        {
                          "name": "Pony Express National Historic Trail",
                          "parkCode": "poex"
                        },
                        {
                          "name": "Santa Fe National Historic Trail",
                          "parkCode": "safe"
                        },
                        {
                          "name": "Tallgrass Prairie National Preserve",
                          "parkCode": "tapr"
                        }
                      ]
                },
                "KY": {
                    name: "Kentucky",
                    lat: 37.668140,
                    lng: -84.670067,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Abraham Lincoln Birthplace National Historical Park",
                          "parkCode": "abli"
                        },
                        {
                          "name": "Big South Fork National River & Recreation Area",
                          "parkCode": "biso"
                        },
                        {
                          "name": "Camp Nelson National Monument",
                          "parkCode": "cane"
                        },
                        {
                          "name": "Cumberland Gap National Historical Park",
                          "parkCode": "cuga"
                        },
                        {
                          "name": "Fort Donelson National Battlefield",
                          "parkCode": "fodo"
                        },
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "Mammoth Cave National Park",
                          "parkCode": "maca"
                        },
                        {
                          "name": "Trail Of Tears National Historic Trail",
                          "parkCode": "trte"
                        }
                      ]
                },
                "LA": {
                    name: "Louisiana",
                    lat: 31.169546,
                    lng: -91.867805,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Atchafalaya National Heritage Area",
                          "parkCode": "attr"
                        },
                        {
                          "name": "Cane River Creole National Historical Park",
                          "parkCode": "cari"
                        },
                        {
                          "name": "Cane River National Heritage Area",
                          "parkCode": "crha"
                        },
                        {
                          "name": "El Camino Real de los Tejas National Historic Trail",
                          "parkCode": "elte"
                        },
                        {
                          "name": "Jean Lafitte National Historical Park and Preserve",
                          "parkCode": "jela"
                        },
                        {
                          "name": "New Orleans Jazz National Historical Park",
                          "parkCode": "jazz"
                        },
                        {
                          "name": "Poverty Point National Monument",
                          "parkCode": "popo"
                        },
                        {
                          "name": "Vicksburg National Military Park",
                          "parkCode": "vick"
                        }
                      ]
                },
                "ME": {
                    name: "Maine" ,
                    lat: 44.693947,
                    lng: -69.381927,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Acadia National Park",
                          "parkCode": "acad"
                        },
                        {
                          "name": "Appalachian National Scenic Trail",
                          "parkCode": "appa"
                        },
                        {
                          "name": "Katahdin Woods and Waters National Monument",
                          "parkCode": "kaww"
                        },
                        {
                          "name": "Maine Acadian Culture",
                          "parkCode": "maac"
                        },
                        {
                          "name": "Roosevelt Campobello International Park",
                          "parkCode": "roca"
                        },
                        {
                          "name": "Saint Croix Island International Historic Site",
                          "parkCode": "sacr"
                        }
                      ]
                },
                "MD": {
                    name: "Maryland",
                    lat: 39.063946,
                    lng: -76.802101,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Antietam National Battlefield",
                          "parkCode": "anti"
                        },
                        {
                          "name": "Appalachian National Scenic Trail",
                          "parkCode": "appa"
                        },
                        {
                          "name": "Assateague Island National Seashore",
                          "parkCode": "asis"
                        },
                        {
                          "name": "Baltimore National Heritage Area",
                          "parkCode": "balt"
                        },
                        {
                          "name": "Baltimore-Washington Parkway",
                          "parkCode": "bawa"
                        },
                        {
                          "name": "Captain John Smith Chesapeake National Historic Trail",
                          "parkCode": "cajo"
                        },
                        {
                          "name": "Catoctin Mountain Park",
                          "parkCode": "cato"
                        },
                        {
                          "name": "Chesapeake & Ohio Canal National Historical Park",
                          "parkCode": "choh"
                        },
                        {
                          "name": "Chesapeake Bay",
                          "parkCode": "cbpo"
                        },
                        {
                          "name": "Chesapeake Bay Gateways and Watertrails Network",
                          "parkCode": "cbgn"
                        },
                        {
                          "name": "Civil War Defenses of Washington",
                          "parkCode": "cwdw"
                        },
                        {
                          "name": "Clara Barton National Historic Site",
                          "parkCode": "clba"
                        },
                        {
                          "name": "Fort Foote Park",
                          "parkCode": "fofo"
                        },
                        {
                          "name": "Fort McHenry National Monument and Historic Shrine",
                          "parkCode": "fomc"
                        },
                        {
                          "name": "Fort Washington Park",
                          "parkCode": "fowa"
                        },
                        {
                          "name": "George Washington Memorial Parkway",
                          "parkCode": "gwmp"
                        },
                        {
                          "name": "Glen Echo Park",
                          "parkCode": "glec"
                        },
                        {
                          "name": "Greenbelt Park",
                          "parkCode": "gree"
                        },
                        {
                          "name": "Hampton National Historic Site",
                          "parkCode": "hamp"
                        },
                        {
                          "name": "Harmony Hall",
                          "parkCode": "haha"
                        },
                        {
                          "name": "Harpers Ferry National Historical Park",
                          "parkCode": "hafe"
                        },
                        {
                          "name": "Harriet Tubman Underground Railroad National Historical Park",
                          "parkCode": "hatu"
                        },
                        {
                          "name": "Journey Through Hallowed Ground National Heritage Area",
                          "parkCode": "jthg"
                        },
                        {
                          "name": "Monocacy National Battlefield",
                          "parkCode": "mono"
                        },
                        {
                          "name": "Oxon Cove  Park & Oxon Hill Farm",
                          "parkCode": "oxhi"
                        },
                        {
                          "name": "Piscataway Park",
                          "parkCode": "pisc"
                        },
                        {
                          "name": "Potomac Heritage National Scenic Trail",
                          "parkCode": "pohe"
                        },
                        {
                          "name": "Star-Spangled Banner National Historic Trail",
                          "parkCode": "stsp"
                        },
                        {
                          "name": "Thomas Stone National Historic Site",
                          "parkCode": "thst"
                        },
                        {
                          "name": "Washington-Rochambeau Revolutionary Route National Historic Trail",
                          "parkCode": "waro"
                        }
                      ]
                },
                "MA": {
                    name: "Massachusetts",
                    lat: 42.230171,
                    lng: -71.530106,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Adams National Historical Park",
                          "parkCode": "adam"
                        },
                        {
                          "name": "Appalachian National Scenic Trail",
                          "parkCode": "appa"
                        },
                        {
                          "name": "Blackstone River Valley National Historical Park",
                          "parkCode": "blrv"
                        },
                        {
                          "name": "Boston African American National Historic Site",
                          "parkCode": "boaf"
                        },
                        {
                          "name": "Boston Harbor Islands National Recreation Area",
                          "parkCode": "boha"
                        },
                        {
                          "name": "Boston National Historical Park",
                          "parkCode": "bost"
                        },
                        {
                          "name": "Cape Cod National Seashore",
                          "parkCode": "caco"
                        },
                        {
                          "name": "Essex National Heritage Area",
                          "parkCode": "esse"
                        },
                        {
                          "name": "Frederick Law Olmsted National Historic Site",
                          "parkCode": "frla"
                        },
                        {
                          "name": "John Fitzgerald Kennedy National Historic Site",
                          "parkCode": "jofi"
                        },
                        {
                          "name": "John H. Chafee Blackstone River Valley National Heritage Corridor",
                          "parkCode": "blac"
                        },
                        {
                          "name": "Longfellow House Washington's Headquarters National Historic Site",
                          "parkCode": "long"
                        },
                        {
                          "name": "Lowell National Historical Park",
                          "parkCode": "lowe"
                        },
                        {
                          "name": "Minute Man National Historical Park",
                          "parkCode": "mima"
                        },
                        {
                          "name": "New Bedford Whaling National Historical Park",
                          "parkCode": "nebe"
                        },
                        {
                          "name": "New England National Scenic Trail",
                          "parkCode": "neen"
                        },
                        {
                          "name": "Salem Maritime National Historic Site",
                          "parkCode": "sama"
                        },
                        {
                          "name": "Saugus Iron Works National Historic Site",
                          "parkCode": "sair"
                        },
                        {
                          "name": "Springfield Armory National Historic Site",
                          "parkCode": "spar"
                        },
                        {
                          "name": "The Last Green Valley National Heritage Corridor",
                          "parkCode": "qush"
                        },
                        {
                          "name": "Washington-Rochambeau Revolutionary Route National Historic Trail",
                          "parkCode": "waro"
                        }
                      ]
                },
                "MI": {
                    name: "Michigan" ,
                    lat: 43.326618,
                    lng: -84.536095,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Isle Royale National Park",
                          "parkCode": "isro"
                        },
                        {
                          "name": "Keweenaw National Historical Park",
                          "parkCode": "kewe"
                        },
                        {
                          "name": "Motor Cities National Heritage Area",
                          "parkCode": "auto"
                        },
                        {
                          "name": "North Country National Scenic Trail",
                          "parkCode": "noco"
                        },
                        {
                          "name": "Pictured Rocks National Lakeshore",
                          "parkCode": "piro"
                        },
                        {
                          "name": "River Raisin National Battlefield Park",
                          "parkCode": "rira"
                        },
                        {
                          "name": "Sleeping Bear Dunes National Lakeshore",
                          "parkCode": "slbe"
                        }
                      ]
                },
                "MN": {
                    name: "Minnesota",
                    lat: 45.694454,
                    lng: -93.900192,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Grand Portage National Monument",
                          "parkCode": "grpo"
                        },
                        {
                          "name": "Mississippi National River and Recreation Area",
                          "parkCode": "miss"
                        },
                        {
                          "name": "North Country National Scenic Trail",
                          "parkCode": "noco"
                        },
                        {
                          "name": "Pipestone National Monument",
                          "parkCode": "pipe"
                        },
                        {
                          "name": "Saint Croix National Scenic Riverway",
                          "parkCode": "sacn"
                        },
                        {
                          "name": "Voyageurs National Park",
                          "parkCode": "voya"
                        }
                      ]
                },
                "MS": {
                    name: "Mississippi" ,
                    lat: 32.741646,
                    lng: -89.678696,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Brices Cross Roads National Battlefield Site",
                          "parkCode": "brcr"
                        },
                        {
                          "name": "Gulf Islands National Seashore",
                          "parkCode": "guis"
                        },
                        {
                          "name": "Mississippi Delta National Heritage Area",
                          "parkCode": "mide"
                        },
                        {
                          "name": "Mississippi Gulf National Heritage Area",
                          "parkCode": "migu"
                        },
                        {
                          "name": "Mississippi Hills National Heritage Area",
                          "parkCode": "mihi"
                        },
                        {
                          "name": "Natchez National Historical Park",
                          "parkCode": "natc"
                        },
                        {
                          "name": "Natchez Trace National Scenic Trail",
                          "parkCode": "natt"
                        },
                        {
                          "name": "Natchez Trace Parkway",
                          "parkCode": "natr"
                        },
                        {
                          "name": "Shiloh National Military Park",
                          "parkCode": "shil"
                        },
                        {
                          "name": "Tupelo National Battlefield",
                          "parkCode": "tupe"
                        },
                        {
                          "name": "Vicksburg National Military Park",
                          "parkCode": "vick"
                        }
                      ]
                },
                "MO": {
                    name: "Missouri",
                    lat: 38.456085,
                    lng: -92.288368,
                    zoom: 7, 
                    parks: [
                        {
                          "name": "California National Historic Trail",
                          "parkCode": "cali"
                        },
                        {
                          "name": "Gateway Arch National Park",
                          "parkCode": "jeff"
                        },
                        {
                          "name": "George Washington Carver National Monument",
                          "parkCode": "gwca"
                        },
                        {
                          "name": "Harry S Truman National Historic Site",
                          "parkCode": "hstr"
                        },
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "Oregon National Historic Trail",
                          "parkCode": "oreg"
                        },
                        {
                          "name": "Ozark National Scenic Riverways",
                          "parkCode": "ozar"
                        },
                        {
                          "name": "Pony Express National Historic Trail",
                          "parkCode": "poex"
                        },
                        {
                          "name": "Santa Fe National Historic Trail",
                          "parkCode": "safe"
                        },
                        {
                          "name": "Trail Of Tears National Historic Trail",
                          "parkCode": "trte"
                        },
                        {
                          "name": "Ulysses S Grant National Historic Site",
                          "parkCode": "ulsg"
                        },
                        {
                          "name": "Wilson's Creek National Battlefield",
                          "parkCode": "wicr"
                        }
                      ]
                },
                "MT": {
                    name:  "Montana",
                    lat: 46.921925,
                    lng: -110.454353,
                    zoom: 6,
                    parks: [
                        {
                          "name": "Big Hole National Battlefield",
                          "parkCode": "biho"
                        },
                        {
                          "name": "Bighorn Canyon National Recreation Area",
                          "parkCode": "bica"
                        },
                        {
                          "name": "Fort Union Trading Post National Historic Site",
                          "parkCode": "fous"
                        },
                        {
                          "name": "Glacier National Park",
                          "parkCode": "glac"
                        },
                        {
                          "name": "Grant-Kohrs Ranch National Historic Site",
                          "parkCode": "grko"
                        },
                        {
                          "name": "Ice Age Floods National Geologic Trail",
                          "parkCode": "iafl"
                        },
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "Little Bighorn Battlefield National Monument",
                          "parkCode": "libi"
                        },
                        {
                          "name": "Nez Perce National Historical Park",
                          "parkCode": "nepe"
                        },
                        {
                          "name": "Yellowstone National Park",
                          "parkCode": "yell"
                        }
                      ]
                },
                "NE": {
                    name: "Nebraska",
                    lat: 41.125370,
                    lng: -98.268082,
                    zoom: 7, 
                    parks: [
                        {
                          "name": "Agate Fossil Beds National Monument",
                          "parkCode": "agfo"
                        },
                        {
                          "name": "California National Historic Trail",
                          "parkCode": "cali"
                        },
                        {
                          "name": "Homestead National Monument of America",
                          "parkCode": "home"
                        },
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "Missouri National Recreational River",
                          "parkCode": "mnrr"
                        },
                        {
                          "name": "Mormon Pioneer National Historic Trail",
                          "parkCode": "mopi"
                        },
                        {
                          "name": "Niobrara National Scenic River",
                          "parkCode": "niob"
                        },
                        {
                          "name": "Oregon National Historic Trail",
                          "parkCode": "oreg"
                        },
                        {
                          "name": "Pony Express National Historic Trail",
                          "parkCode": "poex"
                        },
                        {
                          "name": "Scotts Bluff National Monument",
                          "parkCode": "scbl"
                        }
                      ]
                },
                "NV": {
                    name: "Nevada",
                    lat: 38.313515,
                    lng: -117.055374,
                    zoom: 6,
                    parks: [
                        {
                          "name": "California National Historic Trail",
                          "parkCode": "cali"
                        },
                        {
                          "name": "Death Valley National Park",
                          "parkCode": "deva"
                        },
                        {
                          "name": "Great Basin National Park",
                          "parkCode": "grba"
                        },
                        {
                          "name": "Lake Mead National Recreation Area",
                          "parkCode": "lake"
                        },
                        {
                          "name": "Old Spanish National Historic Trail",
                          "parkCode": "olsp"
                        },
                        {
                          "name": "Pony Express National Historic Trail",
                          "parkCode": "poex"
                        },
                        {
                          "name": "Tule Springs Fossil Beds National Monument",
                          "parkCode": "tusk"
                        }
                      ]
                },
                "NH": {
                    name: "New Hampshire", 
                    lat: 43.452492,
                    lng: -71.563896,
                    zoom: 8,
                    parks: [
                        {
                          "name": "Appalachian National Scenic Trail",
                          "parkCode": "appa"
                        },
                        {
                          "name": "Saint-Gaudens National Historical Park",
                          "parkCode": "saga"
                        }
                      ]
                },
                "NJ": {
                    name: "New Jersey",
                    lat: 40.298904,
                    lng: -74.521011,
                    zoom: 8,
                    parks: [
                        {
                          "name": "Appalachian National Scenic Trail",
                          "parkCode": "appa"
                        },
                        {
                          "name": "Crossroads of the American Revolution National Heritage Area",
                          "parkCode": "xrds"
                        },
                        {
                          "name": "Delaware Water Gap National Recreation Area",
                          "parkCode": "dewa"
                        },
                        {
                          "name": "Ellis Island Part of Statue of Liberty National Monument",
                          "parkCode": "elis"
                        },
                        {
                          "name": "Gateway National Recreation Area",
                          "parkCode": "gate"
                        },
                        {
                          "name": "Great Egg Harbor River",
                          "parkCode": "greg"
                        },
                        {
                          "name": "Lower Delaware National Wild and Scenic River",
                          "parkCode": "lode"
                        },
                        {
                          "name": "Morristown National Historical Park",
                          "parkCode": "morr"
                        },
                        {
                          "name": "New Jersey Pinelands National Reserve",
                          "parkCode": "pine"
                        },
                        {
                          "name": "Paterson Great Falls National Historical Park",
                          "parkCode": "pagr"
                        },
                        {
                          "name": "Thomas Edison National Historical Park",
                          "parkCode": "edis"
                        },
                        {
                          "name": "Washington-Rochambeau Revolutionary Route National Historic Trail",
                          "parkCode": "waro"
                        }
                      ]
                },
                "NM": {
                    name: "New Mexico", 
                    lat: 34.840515,
                    lng: -106.248482,
                    zoom: 6,
                    parks: [
                        {
                          "name": "Aztec Ruins National Monument",
                          "parkCode": "azru"
                        },
                        {
                          "name": "Bandelier National Monument",
                          "parkCode": "band"
                        },
                        {
                          "name": "Capulin Volcano National Monument",
                          "parkCode": "cavo"
                        },
                        {
                          "name": "Carlsbad Caverns National Park",
                          "parkCode": "cave"
                        },
                        {
                          "name": "Chaco Culture National Historical Park",
                          "parkCode": "chcu"
                        },
                        {
                          "name": "El Camino Real de Tierra Adentro National Historic Trail",
                          "parkCode": "elca"
                        },
                        {
                          "name": "El Malpais National Monument",
                          "parkCode": "elma"
                        },
                        {
                          "name": "El Morro National Monument",
                          "parkCode": "elmo"
                        },
                        {
                          "name": "Fort Union National Monument",
                          "parkCode": "foun"
                        },
                        {
                          "name": "Gila Cliff Dwellings National Monument",
                          "parkCode": "gicl"
                        },
                        {
                          "name": "Manhattan Project National Historical Park",
                          "parkCode": "mapr"
                        },
                        {
                          "name": "Old Spanish National Historic Trail",
                          "parkCode": "olsp"
                        },
                        {
                          "name": "Pecos National Historical Park",
                          "parkCode": "peco"
                        },
                        {
                          "name": "Petroglyph National Monument",
                          "parkCode": "petr"
                        },
                        {
                          "name": "Salinas Pueblo Missions National Monument",
                          "parkCode": "sapu"
                        },
                        {
                          "name": "Santa Fe National Historic Trail",
                          "parkCode": "safe"
                        },
                        {
                          "name": "Valles Caldera National Preserve",
                          "parkCode": "vall"
                        },
                        {
                          "name": "White Sands National Monument",
                          "parkCode": "whsa"
                        }
                      ]
                },
                "NY": {
                    name: "New York",
                    lat: 43.165726,
                    lng: -74.948051,
                    zoom: 7,
                    parks: [
                        {
                          "name": "African Burial Ground National Monument",
                          "parkCode": "afbg"
                        },
                        {
                          "name": "Appalachian National Scenic Trail",
                          "parkCode": "appa"
                        },
                        {
                          "name": "Captain John Smith Chesapeake National Historic Trail",
                          "parkCode": "cajo"
                        },
                        {
                          "name": "Castle Clinton National Monument",
                          "parkCode": "cacl"
                        },
                        {
                          "name": "Champlain Valley National Heritage Partnership",
                          "parkCode": "chva"
                        },
                        {
                          "name": "Chesapeake Bay",
                          "parkCode": "cbpo"
                        },
                        {
                          "name": "Chesapeake Bay Gateways and Watertrails Network",
                          "parkCode": "cbgn"
                        },
                        {
                          "name": "Eleanor Roosevelt National Historic Site",
                          "parkCode": "elro"
                        },
                        {
                          "name": "Ellis Island Part of Statue of Liberty National Monument",
                          "parkCode": "elis"
                        },
                        {
                          "name": "Erie Canalway National Heritage Corridor",
                          "parkCode": "erie"
                        },
                        {
                          "name": "Federal Hall National Memorial",
                          "parkCode": "feha"
                        },
                        {
                          "name": "Fire Island National Seashore",
                          "parkCode": "fiis"
                        },
                        {
                          "name": "Fort Stanwix National Monument",
                          "parkCode": "fost"
                        },
                        {
                          "name": "Gateway National Recreation Area",
                          "parkCode": "gate"
                        },
                        {
                          "name": "General Grant National Memorial",
                          "parkCode": "gegr"
                        },
                        {
                          "name": "Governors Island National Monument",
                          "parkCode": "gois"
                        },
                        {
                          "name": "Hamilton Grange National Memorial",
                          "parkCode": "hagr"
                        },
                        {
                          "name": "Harriet Tubman National Historical Park",
                          "parkCode": "hart"
                        },
                        {
                          "name": "Home Of Franklin D Roosevelt National Historic Site",
                          "parkCode": "hofr"
                        },
                        {
                          "name": "Hudson River Valley National Heritage Area",
                          "parkCode": "hurv"
                        },
                        {
                          "name": "Lower East Side Tenement Museum National Historic Site",
                          "parkCode": "loea"
                        },
                        {
                          "name": "Martin Van Buren National Historic Site",
                          "parkCode": "mava"
                        },
                        {
                          "name": "National Parks of New York Harbor",
                          "parkCode": "npnh"
                        },
                        {
                          "name": "Niagara Falls National Heritage Area",
                          "parkCode": "nifa"
                        },
                        {
                          "name": "North Country National Scenic Trail",
                          "parkCode": "noco"
                        },
                        {
                          "name": "Sagamore Hill National Historic Site",
                          "parkCode": "sahi"
                        },
                        {
                          "name": "Saint Paul's Church National Historic Site",
                          "parkCode": "sapa"
                        },
                        {
                          "name": "Saratoga National Historical Park",
                          "parkCode": "sara"
                        },
                        {
                          "name": "Statue Of Liberty National Monument",
                          "parkCode": "stli"
                        },
                        {
                          "name": "Stonewall National Monument",
                          "parkCode": "ston"
                        },
                        {
                          "name": "Theodore Roosevelt Birthplace National Historic Site",
                          "parkCode": "thrb"
                        },
                        {
                          "name": "Theodore Roosevelt Inaugural National Historic Site",
                          "parkCode": "thri"
                        },
                        {
                          "name": "Thomas Cole National Historic Site",
                          "parkCode": "thco"
                        },
                        {
                          "name": "Upper Delaware Scenic & Recreational River",
                          "parkCode": "upde"
                        },
                        {
                          "name": "Vanderbilt Mansion National Historic Site",
                          "parkCode": "vama"
                        },
                        {
                          "name": "Washington-Rochambeau Revolutionary Route National Historic Trail",
                          "parkCode": "waro"
                        },
                        {
                          "name": "Women's Rights National Historical Park",
                          "parkCode": "wori"
                        }
                      ]
                },
                "NC": {
                    name: "North Carolina",
                    lat: 35.630066,
                    lng: -79.806419,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Appalachian National Scenic Trail",
                          "parkCode": "appa"
                        },
                        {
                          "name": "Blue Ridge National Heritage Area",
                          "parkCode": "blrn"
                        },
                        {
                          "name": "Blue Ridge Parkway",
                          "parkCode": "blri"
                        },
                        {
                          "name": "Cape Hatteras National Seashore",
                          "parkCode": "caha"
                        },
                        {
                          "name": "Cape Lookout National Seashore",
                          "parkCode": "calo"
                        },
                        {
                          "name": "Carl Sandburg Home National Historic Site",
                          "parkCode": "carl"
                        },
                        {
                          "name": "Fort Raleigh National Historic Site",
                          "parkCode": "fora"
                        },
                        {
                          "name": "Great Smoky Mountains National Park",
                          "parkCode": "grsm"
                        },
                        {
                          "name": "Guilford Courthouse National Military Park",
                          "parkCode": "guco"
                        },
                        {
                          "name": "Gullah/Geechee Cultural Heritage Corridor",
                          "parkCode": "guge"
                        },
                        {
                          "name": "Moores Creek National Battlefield",
                          "parkCode": "mocr"
                        },
                        {
                          "name": "Overmountain Victory National Historic Trail",
                          "parkCode": "ovvi"
                        },
                        {
                          "name": "Trail Of Tears National Historic Trail",
                          "parkCode": "trte"
                        },
                        {
                          "name": "Wright Brothers National Memorial",
                          "parkCode": "wrbr"
                        }
                      ]
                },
                "ND": {
                    name: "North Dakota", 
                    lat: 47.528912,
                    lng: -99.784012,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Fort Union Trading Post National Historic Site",
                          "parkCode": "fous"
                        },
                        {
                          "name": "Knife River Indian Villages National Historic Site",
                          "parkCode": "knri"
                        },
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "North Country National Scenic Trail",
                          "parkCode": "noco"
                        },
                        {
                          "name": "Theodore Roosevelt National Park",
                          "parkCode": "thro"
                        }
                      ]
                },
                "OH": {
                    name: "Ohio", 
                    lat: 40.388783,
                    lng: -82.764915,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Charles Young Buffalo Soldiers National Monument",
                          "parkCode": "chyo"
                        },
                        {
                          "name": "Cuyahoga Valley National Park",
                          "parkCode": "cuva"
                        },
                        {
                          "name": "David Berger National Memorial",
                          "parkCode": "dabe"
                        },
                        {
                          "name": "Dayton Aviation Heritage National Historical Park",
                          "parkCode": "daav"
                        },
                        {
                          "name": "Fallen Timbers Battlefield and Fort Miamis National Historic Site",
                          "parkCode": "fati"
                        },
                        {
                          "name": "First Ladies National Historic Site",
                          "parkCode": "fila"
                        },
                        {
                          "name": "Hopewell Culture National Historical Park",
                          "parkCode": "hocu"
                        },
                        {
                          "name": "James A Garfield National Historic Site",
                          "parkCode": "jaga"
                        },
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "National Aviation Heritage Area",
                          "parkCode": "avia"
                        },
                        {
                          "name": "North Country National Scenic Trail",
                          "parkCode": "noco"
                        },
                        {
                          "name": "Perry's Victory & International Peace Memorial",
                          "parkCode": "pevi"
                        },
                        {
                          "name": "William Howard Taft National Historic Site",
                          "parkCode": "wiho"
                        }
                      ]
                },
                "OK": {
                    name: "Oklahoma",
                    lat: 35.565342,
                    lng: -96.928917,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Chickasaw National Recreation Area",
                          "parkCode": "chic"
                        },
                        {
                          "name": "Fort Smith National Historic Site",
                          "parkCode": "fosm"
                        },
                        {
                          "name": "Oklahoma City National Memorial",
                          "parkCode": "okci"
                        },
                        {
                          "name": "Santa Fe National Historic Trail",
                          "parkCode": "safe"
                        },
                        {
                          "name": "Trail Of Tears National Historic Trail",
                          "parkCode": "trte"
                        },
                        {
                          "name": "Washita Battlefield National Historic Site",
                          "parkCode": "waba"
                        }
                      ]
                },
                "OR": {
                    name: "Oregon", 
                    lat: 44.572021,
                    lng: -122.070938,
                    zoom: 7,
                    parks: [
                        {
                          "name": "California National Historic Trail",
                          "parkCode": "cali"
                        },
                        {
                          "name": "Crater Lake National Park",
                          "parkCode": "crla"
                        },
                        {
                          "name": "Fort Vancouver National Historic Site",
                          "parkCode": "fova"
                        },
                        {
                          "name": "Ice Age Floods National Geologic Trail",
                          "parkCode": "iafl"
                        },
                        {
                          "name": "John Day Fossil Beds National Monument",
                          "parkCode": "joda"
                        },
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "Lewis and Clark National Historical Park",
                          "parkCode": "lewi"
                        },
                        {
                          "name": "Nez Perce National Historical Park",
                          "parkCode": "nepe"
                        },
                        {
                          "name": "Oregon Caves National Monument & Preserve",
                          "parkCode": "orca"
                        },
                        {
                          "name": "Oregon National Historic Trail",
                          "parkCode": "oreg"
                        }
                      ]
                },
                "PA": {
                    name: "Pennsylvania",
                    lat: 40.590752,
                    lng: -77.209755,
                    zoom: 7, 
                    parks: [
                        {
                          "name": "Allegheny Portage Railroad National Historic Site",
                          "parkCode": "alpo"
                        },
                        {
                          "name": "Appalachian National Scenic Trail",
                          "parkCode": "appa"
                        },
                        {
                          "name": "Captain John Smith Chesapeake National Historic Trail",
                          "parkCode": "cajo"
                        },
                        {
                          "name": "Chesapeake Bay",
                          "parkCode": "cbpo"
                        },
                        {
                          "name": "Chesapeake Bay Gateways and Watertrails Network",
                          "parkCode": "cbgn"
                        },
                        {
                          "name": "Delaware & Lehigh National Heritage Corridor",
                          "parkCode": "dele"
                        },
                        {
                          "name": "Delaware Water Gap National Recreation Area",
                          "parkCode": "dewa"
                        },
                        {
                          "name": "Edgar Allan Poe National Historic Site",
                          "parkCode": "edal"
                        },
                        {
                          "name": "Eisenhower National Historic Site",
                          "parkCode": "eise"
                        },
                        {
                          "name": "First State National Historical Park",
                          "parkCode": "frst"
                        },
                        {
                          "name": "Flight 93 National Memorial",
                          "parkCode": "flni"
                        },
                        {
                          "name": "Fort Necessity National Battlefield",
                          "parkCode": "fone"
                        },
                        {
                          "name": "Friendship Hill National Historic Site",
                          "parkCode": "frhi"
                        },
                        {
                          "name": "Gettysburg National Military Park",
                          "parkCode": "gett"
                        },
                        {
                          "name": "Gloria Dei Church National Historic Site",
                          "parkCode": "glde"
                        },
                        {
                          "name": "Hopewell Furnace National Historic Site",
                          "parkCode": "hofu"
                        },
                        {
                          "name": "Independence National Historical Park",
                          "parkCode": "inde"
                        },
                        {
                          "name": "Johnstown Flood National Memorial",
                          "parkCode": "jofl"
                        },
                        {
                          "name": "Journey Through Hallowed Ground National Heritage Area",
                          "parkCode": "jthg"
                        },
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "Lower Delaware National Wild and Scenic River",
                          "parkCode": "lode"
                        },
                        {
                          "name": "North Country National Scenic Trail",
                          "parkCode": "noco"
                        },
                        {
                          "name": "Oil Region National Heritage Area",
                          "parkCode": "oire"
                        },
                        {
                          "name": "Potomac Heritage National Scenic Trail",
                          "parkCode": "pohe"
                        },
                        {
                          "name": "Rivers Of Steel National Heritage Area",
                          "parkCode": "rist"
                        },
                        {
                          "name": "Schuylkill River Valley National Heritage Area",
                          "parkCode": "scrv"
                        },
                        {
                          "name": "Steamtown National Historic Site",
                          "parkCode": "stea"
                        },
                        {
                          "name": "Thaddeus Kosciuszko National Memorial",
                          "parkCode": "thko"
                        },
                        {
                          "name": "Upper Delaware Scenic & Recreational River",
                          "parkCode": "upde"
                        },
                        {
                          "name": "Valley Forge National Historical Park",
                          "parkCode": "vafo"
                        },
                        {
                          "name": "Washington-Rochambeau Revolutionary Route National Historic Trail",
                          "parkCode": "waro"
                        }
                      ]
                },
                "RI": {
                    name: "Rhode Island",
                    lat: 41.680893,
                    lng: -71.511780,
                    zoom: 9,
                    parks: [
                        {
                          "name": "Blackstone River Valley National Historical Park",
                          "parkCode": "blrv"
                        },
                        {
                          "name": "John H. Chafee Blackstone River Valley National Heritage Corridor",
                          "parkCode": "blac"
                        },
                        {
                          "name": "Roger Williams National Memorial",
                          "parkCode": "rowi"
                        },
                        {
                          "name": "Touro Synagogue National Historic Site",
                          "parkCode": "tosy"
                        },
                        {
                          "name": "Washington-Rochambeau Revolutionary Route National Historic Trail",
                          "parkCode": "waro"
                        }
                      ]
                },
                "SC": {
                    name: "South Carolina",
                    lat: 33.856892,
                    lng: -80.945007,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Charles Pinckney National Historic Site",
                          "parkCode": "chpi"
                        },
                        {
                          "name": "Congaree National Park",
                          "parkCode": "cong"
                        },
                        {
                          "name": "Cowpens National Battlefield",
                          "parkCode": "cowp"
                        },
                        {
                          "name": "Fort Sumter and Fort Moultrie National Historical Park",
                          "parkCode": "fosu"
                        },
                        {
                          "name": "Gullah/Geechee Cultural Heritage Corridor",
                          "parkCode": "guge"
                        },
                        {
                          "name": "Kings Mountain National Military Park",
                          "parkCode": "kimo"
                        },
                        {
                          "name": "Ninety Six National Historic Site",
                          "parkCode": "nisi"
                        },
                        {
                          "name": "Overmountain Victory National Historic Trail",
                          "parkCode": "ovvi"
                        },
                        {
                          "name": "Reconstruction Era National Historical Park",
                          "parkCode": "reer"
                        },
                        {
                          "name": "South Carolina National Heritage Corridor",
                          "parkCode": "soca"
                        }
                      ]
                },
                "SD": {
                    name: "South Dakota", 
                    lat: 44.299782,
                    lng: -99.438828,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Badlands National Park",
                          "parkCode": "badl"
                        },
                        {
                          "name": "Jewel Cave National Monument",
                          "parkCode": "jeca"
                        },
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "Minuteman Missile National Historic Site",
                          "parkCode": "mimi"
                        },
                        {
                          "name": "Missouri National Recreational River",
                          "parkCode": "mnrr"
                        },
                        {
                          "name": "Mount Rushmore National Memorial",
                          "parkCode": "moru"
                        },
                        {
                          "name": "Wind Cave National Park",
                          "parkCode": "wica"
                        }
                      ]
                },
                "TN": {
                    name: "Tennessee", 
                    lat: 35.747845,
                    lng: -86.692345,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Andrew Johnson National Historic Site",
                          "parkCode": "anjo"
                        },
                        {
                          "name": "Appalachian National Scenic Trail",
                          "parkCode": "appa"
                        },
                        {
                          "name": "Big South Fork National River & Recreation Area",
                          "parkCode": "biso"
                        },
                        {
                          "name": "Chickamauga & Chattanooga National Military Park",
                          "parkCode": "chch"
                        },
                        {
                          "name": "Cumberland Gap National Historical Park",
                          "parkCode": "cuga"
                        },
                        {
                          "name": "Fort Donelson National Battlefield",
                          "parkCode": "fodo"
                        },
                        {
                          "name": "Great Smoky Mountains National Park",
                          "parkCode": "grsm"
                        },
                        {
                          "name": "Manhattan Project National Historical Park",
                          "parkCode": "mapr"
                        },
                        {
                          "name": "Natchez Trace National Scenic Trail",
                          "parkCode": "natt"
                        },
                        {
                          "name": "Natchez Trace Parkway",
                          "parkCode": "natr"
                        },
                        {
                          "name": "Obed Wild & Scenic River",
                          "parkCode": "obed"
                        },
                        {
                          "name": "Overmountain Victory National Historic Trail",
                          "parkCode": "ovvi"
                        },
                        {
                          "name": "Shiloh National Military Park",
                          "parkCode": "shil"
                        },
                        {
                          "name": "Stones River National Battlefield",
                          "parkCode": "stri"
                        },
                        {
                          "name": "Tennessee Civil War National Heritage Area",
                          "parkCode": "tecw"
                        },
                        {
                          "name": "Trail Of Tears National Historic Trail",
                          "parkCode": "trte"
                        }
                      ]
                },
                "TX": {
                    name: "Texas", 
                    lat: 31.054487,
                    lng: -97.563461,
                    zoom: 6,
                    parks: [
                        {
                          "name": "Andrew Johnson National Historic Site",
                          "parkCode": "anjo"
                        },
                        {
                          "name": "Appalachian National Scenic Trail",
                          "parkCode": "appa"
                        },
                        {
                          "name": "Big South Fork National River & Recreation Area",
                          "parkCode": "biso"
                        },
                        {
                          "name": "Chickamauga & Chattanooga National Military Park",
                          "parkCode": "chch"
                        },
                        {
                          "name": "Cumberland Gap National Historical Park",
                          "parkCode": "cuga"
                        },
                        {
                          "name": "Fort Donelson National Battlefield",
                          "parkCode": "fodo"
                        },
                        {
                          "name": "Great Smoky Mountains National Park",
                          "parkCode": "grsm"
                        },
                        {
                          "name": "Manhattan Project National Historical Park",
                          "parkCode": "mapr"
                        },
                        {
                          "name": "Natchez Trace National Scenic Trail",
                          "parkCode": "natt"
                        },
                        {
                          "name": "Natchez Trace Parkway",
                          "parkCode": "natr"
                        },
                        {
                          "name": "Obed Wild & Scenic River",
                          "parkCode": "obed"
                        },
                        {
                          "name": "Overmountain Victory National Historic Trail",
                          "parkCode": "ovvi"
                        },
                        {
                          "name": "Shiloh National Military Park",
                          "parkCode": "shil"
                        },
                        {
                          "name": "Stones River National Battlefield",
                          "parkCode": "stri"
                        },
                        {
                          "name": "Tennessee Civil War National Heritage Area",
                          "parkCode": "tecw"
                        },
                        {
                          "name": "Trail Of Tears National Historic Trail",
                          "parkCode": "trte"
                        }
                      ]
                },
                "UT": {
                    name: "Utah",
                    lat: 40.150032,
                    lng: -111.862434, 
                    zoom: 7,
                    parks: [
                        {
                          "name": "Arches National Park",
                          "parkCode": "arch"
                        },
                        {
                          "name": "Bryce Canyon National Park",
                          "parkCode": "brca"
                        },
                        {
                          "name": "California National Historic Trail",
                          "parkCode": "cali"
                        },
                        {
                          "name": "Canyonlands National Park",
                          "parkCode": "cany"
                        },
                        {
                          "name": "Capitol Reef National Park",
                          "parkCode": "care"
                        },
                        {
                          "name": "Cedar Breaks National Monument",
                          "parkCode": "cebr"
                        },
                        {
                          "name": "Dinosaur National Monument",
                          "parkCode": "dino"
                        },
                        {
                          "name": "Glen Canyon National Recreation Area",
                          "parkCode": "glca"
                        },
                        {
                          "name": "Golden Spike National Historical Park",
                          "parkCode": "gosp"
                        },
                        {
                          "name": "Hovenweep National Monument",
                          "parkCode": "hove"
                        },
                        {
                          "name": "Mormon Pioneer National Historic Trail",
                          "parkCode": "mopi"
                        },
                        {
                          "name": "Natural Bridges National Monument",
                          "parkCode": "nabr"
                        },
                        {
                          "name": "Old Spanish National Historic Trail",
                          "parkCode": "olsp"
                        },
                        {
                          "name": "Pony Express National Historic Trail",
                          "parkCode": "poex"
                        },
                        {
                          "name": "Rainbow Bridge National Monument",
                          "parkCode": "rabr"
                        },
                        {
                          "name": "Timpanogos Cave National Monument",
                          "parkCode": "tica"
                        },
                        {
                          "name": "Zion National Park",
                          "parkCode": "zion"
                        }
                      ]
                },
                "VT": {
                    name: "Vermont", 
                    lat: 44.045876,
                    lng: -71.710686,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Arches National Park",
                          "parkCode": "arch"
                        },
                        {
                          "name": "Bryce Canyon National Park",
                          "parkCode": "brca"
                        },
                        {
                          "name": "California National Historic Trail",
                          "parkCode": "cali"
                        },
                        {
                          "name": "Canyonlands National Park",
                          "parkCode": "cany"
                        },
                        {
                          "name": "Capitol Reef National Park",
                          "parkCode": "care"
                        },
                        {
                          "name": "Cedar Breaks National Monument",
                          "parkCode": "cebr"
                        },
                        {
                          "name": "Dinosaur National Monument",
                          "parkCode": "dino"
                        },
                        {
                          "name": "Glen Canyon National Recreation Area",
                          "parkCode": "glca"
                        },
                        {
                          "name": "Golden Spike National Historical Park",
                          "parkCode": "gosp"
                        },
                        {
                          "name": "Hovenweep National Monument",
                          "parkCode": "hove"
                        },
                        {
                          "name": "Mormon Pioneer National Historic Trail",
                          "parkCode": "mopi"
                        },
                        {
                          "name": "Natural Bridges National Monument",
                          "parkCode": "nabr"
                        },
                        {
                          "name": "Old Spanish National Historic Trail",
                          "parkCode": "olsp"
                        },
                        {
                          "name": "Pony Express National Historic Trail",
                          "parkCode": "poex"
                        },
                        {
                          "name": "Rainbow Bridge National Monument",
                          "parkCode": "rabr"
                        },
                        {
                          "name": "Timpanogos Cave National Monument",
                          "parkCode": "tica"
                        },
                        {
                          "name": "Zion National Park",
                          "parkCode": "zion"
                        }
                      ]
                },
                "VA": {
                    name: "Virginia",
                    lat: 37.769337,
                    lng: -78.169968,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Appalachian National Scenic Trail",
                          "parkCode": "appa"
                        },
                        {
                          "name": "Appomattox Court House National Historical Park",
                          "parkCode": "apco"
                        },
                        {
                          "name": "Arlington House, The Robert  E. Lee Memorial",
                          "parkCode": "arho"
                        },
                        {
                          "name": "Assateague Island National Seashore",
                          "parkCode": "asis"
                        },
                        {
                          "name": "Blue Ridge Parkway",
                          "parkCode": "blri"
                        },
                        {
                          "name": "Booker T Washington National Monument",
                          "parkCode": "bowa"
                        },
                        {
                          "name": "Cape Henry Memorial Part of Colonial National Historical Park",
                          "parkCode": "came"
                        },
                        {
                          "name": "Captain John Smith Chesapeake National Historic Trail",
                          "parkCode": "cajo"
                        },
                        {
                          "name": "Cedar Creek & Belle Grove National Historical Park",
                          "parkCode": "cebe"
                        },
                        {
                          "name": "Chesapeake Bay",
                          "parkCode": "cbpo"
                        },
                        {
                          "name": "Chesapeake Bay Gateways and Watertrails Network",
                          "parkCode": "cbgn"
                        },
                        {
                          "name": "Civil War Defenses of Washington",
                          "parkCode": "cwdw"
                        },
                        {
                          "name": "Colonial National Historical Park",
                          "parkCode": "colo"
                        },
                        {
                          "name": "Cumberland Gap National Historical Park",
                          "parkCode": "cuga"
                        },
                        {
                          "name": "Fort Monroe National Monument",
                          "parkCode": "fomr"
                        },
                        {
                          "name": "Fredericksburg & Spotsylvania National Military Park",
                          "parkCode": "frsp"
                        },
                        {
                          "name": "George Washington Birthplace National Monument",
                          "parkCode": "gewa"
                        },
                        {
                          "name": "George Washington Memorial Parkway",
                          "parkCode": "gwmp"
                        },
                        {
                          "name": "Great Falls Park",
                          "parkCode": "grfa"
                        },
                        {
                          "name": "Green Springs",
                          "parkCode": "grsp"
                        },
                        {
                          "name": "Harpers Ferry National Historical Park",
                          "parkCode": "hafe"
                        },
                        {
                          "name": "Historic Jamestowne Part of Colonial National Historical Park",
                          "parkCode": "jame"
                        },
                        {
                          "name": "Journey Through Hallowed Ground National Heritage Area",
                          "parkCode": "jthg"
                        },
                        {
                          "name": "Maggie L Walker National Historic Site",
                          "parkCode": "mawa"
                        },
                        {
                          "name": "Manassas National Battlefield Park",
                          "parkCode": "mana"
                        },
                        {
                          "name": "Overmountain Victory National Historic Trail",
                          "parkCode": "ovvi"
                        },
                        {
                          "name": "Petersburg National Battlefield",
                          "parkCode": "pete"
                        },
                        {
                          "name": "Potomac Heritage National Scenic Trail",
                          "parkCode": "pohe"
                        },
                        {
                          "name": "Prince William Forest Park",
                          "parkCode": "prwi"
                        },
                        {
                          "name": "Richmond National Battlefield Park",
                          "parkCode": "rich"
                        },
                        {
                          "name": "Shenandoah National Park",
                          "parkCode": "shen"
                        },
                        {
                          "name": "Shenandoah Valley Battlefields National Historic District",
                          "parkCode": "shvb"
                        },
                        {
                          "name": "Star-Spangled Banner National Historic Trail",
                          "parkCode": "stsp"
                        },
                        {
                          "name": "Washington-Rochambeau Revolutionary Route National Historic Trail",
                          "parkCode": "waro"
                        },
                        {
                          "name": "Wolf Trap National Park for the Performing Arts",
                          "parkCode": "wotr"
                        },
                        {
                          "name": "Yorktown Battlefield Part of Colonial National Historical Park",
                          "parkCode": "york"
                        }
                      ]
                },
                "WA": {
                    name: "Washington",
                    lat: 47.400902,
                    lng: -120.490494,
                    zoom: 6,
                    parks: [
                        {
                          "name": "Ebey's Landing National Historical Reserve",
                          "parkCode": "ebla"
                        },
                        {
                          "name": "Fort Vancouver National Historic Site",
                          "parkCode": "fova"
                        },
                        {
                          "name": "Ice Age Floods National Geologic Trail",
                          "parkCode": "iafl"
                        },
                        {
                          "name": "Klondike Gold Rush - Seattle Unit National Historical Park",
                          "parkCode": "klse"
                        },
                        {
                          "name": "Lake Roosevelt National Recreation Area",
                          "parkCode": "laro"
                        },
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "Lewis and Clark National Historical Park",
                          "parkCode": "lewi"
                        },
                        {
                          "name": "Manhattan Project National Historical Park",
                          "parkCode": "mapr"
                        },
                        {
                          "name": "Minidoka National Historic Site",
                          "parkCode": "miin"
                        },
                        {
                          "name": "Mount Rainier National Park",
                          "parkCode": "mora"
                        },
                        {
                          "name": "Nez Perce National Historical Park",
                          "parkCode": "nepe"
                        },
                        {
                          "name": "North Cascades National Park",
                          "parkCode": "noca"
                        },
                        {
                          "name": "Olympic National Park",
                          "parkCode": "olym"
                        },
                        {
                          "name": "Oregon National Historic Trail",
                          "parkCode": "oreg"
                        },
                        {
                          "name": "San Juan Island National Historical Park",
                          "parkCode": "sajh"
                        },
                        {
                          "name": "Whitman Mission National Historic Site",
                          "parkCode": "whmi"
                        },
                        {
                          "name": "Wing Luke Museum Affiliated Area",
                          "parkCode": "wing"
                        }
                      ]
                },
                "WV": {
                    name: "West Virginia",
                    lat: 38.491226,
                    lng: -80.954453,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Ebey's Landing National Historical Reserve",
                          "parkCode": "ebla"
                        },
                        {
                          "name": "Fort Vancouver National Historic Site",
                          "parkCode": "fova"
                        },
                        {
                          "name": "Ice Age Floods National Geologic Trail",
                          "parkCode": "iafl"
                        },
                        {
                          "name": "Klondike Gold Rush - Seattle Unit National Historical Park",
                          "parkCode": "klse"
                        },
                        {
                          "name": "Lake Roosevelt National Recreation Area",
                          "parkCode": "laro"
                        },
                        {
                          "name": "Lewis & Clark National Historic Trail",
                          "parkCode": "lecl"
                        },
                        {
                          "name": "Lewis and Clark National Historical Park",
                          "parkCode": "lewi"
                        },
                        {
                          "name": "Manhattan Project National Historical Park",
                          "parkCode": "mapr"
                        },
                        {
                          "name": "Minidoka National Historic Site",
                          "parkCode": "miin"
                        },
                        {
                          "name": "Mount Rainier National Park",
                          "parkCode": "mora"
                        },
                        {
                          "name": "Nez Perce National Historical Park",
                          "parkCode": "nepe"
                        },
                        {
                          "name": "North Cascades National Park",
                          "parkCode": "noca"
                        },
                        {
                          "name": "Olympic National Park",
                          "parkCode": "olym"
                        },
                        {
                          "name": "Oregon National Historic Trail",
                          "parkCode": "oreg"
                        },
                        {
                          "name": "San Juan Island National Historical Park",
                          "parkCode": "sajh"
                        },
                        {
                          "name": "Whitman Mission National Historic Site",
                          "parkCode": "whmi"
                        },
                        {
                          "name": "Wing Luke Museum Affiliated Area",
                          "parkCode": "wing"
                        }
                      ]
                },
                "WI": {
                    name: "Wisconsin",
                    lat: 44.268543,
                    lng:-89.616508,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Apostle Islands National Lakeshore",
                          "parkCode": "apis"
                        },
                        {
                          "name": "Ice Age National Scenic Trail",
                          "parkCode": "iatr"
                        },
                        {
                          "name": "North Country National Scenic Trail",
                          "parkCode": "noco"
                        },
                        {
                          "name": "Saint Croix National Scenic Riverway",
                          "parkCode": "sacn"
                        }
                      ]
                },
                "WY": {
                    name: "Wyoming",
                    lat: 42.755966,
                    lng: -107.302490,
                    zoom: 7,
                    parks: [
                        {
                          "name": "Bighorn Canyon National Recreation Area",
                          "parkCode": "bica"
                        },
                        {
                          "name": "California National Historic Trail",
                          "parkCode": "cali"
                        },
                        {
                          "name": "Devils Tower National Monument",
                          "parkCode": "deto"
                        },
                        {
                          "name": "Fort Laramie National Historic Site",
                          "parkCode": "fola"
                        },
                        {
                          "name": "Fossil Butte National Monument",
                          "parkCode": "fobu"
                        },
                        {
                          "name": "Grand Teton National Park",
                          "parkCode": "grte"
                        },
                        {
                          "name": "Mormon Pioneer National Historic Trail",
                          "parkCode": "mopi"
                        },
                        {
                          "name": "Oregon National Historic Trail",
                          "parkCode": "oreg"
                        },
                        {
                          "name": "Pony Express National Historic Trail",
                          "parkCode": "poex"
                        },
                        {
                          "name": "Yellowstone National Park",
                          "parkCode": "yell"
                        }
                      ]
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