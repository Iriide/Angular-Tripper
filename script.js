#!/usr/bin/node
const admin = require('firebase-admin');

// npm install firebase
// npm instll firebase-admin

admin.initializeApp({
    credential: admin.credential.cert("tripper-backend-84181-firebase-adminsdk-3emdb-cf09fd94c8.json")
});

const data = {
    "trips": [
        {
            "Nazwa": "Discover Tuscany",
            "DocelowyKraj": "Italy",
            "DataRozpoczecia": "2024-05-15",
            "DataZakonczenia": "2024-05-22",
            "CenaJednostkowa": 1200,
            "MaxIloscMiejsc": 20,
            "KrotkiOpis": "Join us on an unforgettable journey through the picturesque hills of Tuscany, full of vineyards and historic towns.",
            "LinkDoZdjecia": [
                "https://images.pexels.com/photos/37650/new-zealand-lake-mountain-landscape-37650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/3892172/pexels-photo-3892172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            "Tags": [
                "Cultural Experience",
                "Relaxation"
            ],
            "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485471.3560330837!2d9.710188027902504!3d43.3495998001066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d42b531080347b%3A0xbac6c3ba5b2059ab!2sToskania%2C%20W%C5%82ochy!5e0!3m2!1spl!2spl!4v1704506342384!5m2!1spl!2spl"
        },
        {
            "Nazwa": "Aurora Borealis in Norway",
            "DocelowyKraj": "Norway",
            "DataRozpoczecia": "2024-11-10",
            "DataZakonczenia": "2024-11-17",
            "CenaJednostkowa": 1500,
            "MaxIloscMiejsc": 15,
            "KrotkiOpis": "Experience the magic of the Northern Lights in the heart of Norway. Nighttime safari and comfortable accommodation.",
            "LinkDoZdjecia": [
                "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/1381153/pexels-photo-1381153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            "Tags": [
                "Adventure",
                "Exclusive"
            ],
            "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7114689.24532153!2d7.225847669999339!3d64.19215745489797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461268458f4de5bf%3A0xa1b03b9db864d02b!2sNorwegia!5e0!3m2!1spl!2spl!4v1704506440015!5m2!1spl!2spl"
        },
        {
            "Nazwa": "Safari in Kenya",
            "DocelowyKraj": "Kenya",
            "DataRozpoczecia": "2024-07-05",
            "DataZakonczenia": "2024-07-12",
            "CenaJednostkowa": 1800,
            "MaxIloscMiejsc": 12,
            "KrotkiOpis": "An unforgettable adventure amidst the wild nature of Africa. Safari with a guide and observation of wild animals.",
            "LinkDoZdjecia": [
                "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.pexels.com/photos/2600207/pexels-photo-2600207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            "Tags": [
                "Adventure",
                "Nature"
            ],
            "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8171114.0741860885!2d32.61645277754684!3d0.16491081111559155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182780d08350900f%3A0x403b0eb0a1976dd9!2sKenia!5e0!3m2!1spl!2spl!4v1704506475675!5m2!1spl!2spl"
        },
        {
            "Nazwa": "Wonders of New Zealand",
            "DocelowyKraj": "New Zealand",
            "DataRozpoczecia": "2024-12-10",
            "DataZakonczenia": "2024-12-20",
            "CenaJednostkowa": 2500,
            "MaxIloscMiejsc": 10,
            "KrotkiOpis": "Discover the extraordinary landscapes and culture of the Maori. Journey through mountains, fjords, and green hills.",
            "LinkDoZdjecia": [
                "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.pexels.com/photos/808466/pexels-photo-808466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            "Tags": [
                "Nature",
                "Exclusive"
            ],
            "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27008534.368770164!2d136.92711568101018!3d-34.27557629736492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2c200e17779687%3A0xb1d618e2756a4733!2sNowa%20Zelandia!5e0!3m2!1spl!2spl!4v1704506517548!5m2!1spl!2spl"
        },
        {
            "Nazwa": "Thailand - Land of Smiles",
            "DocelowyKraj": "Thailand",
            "DataRozpoczecia": "2024-01-15",
            "DataZakonczenia": "2024-01-25",
            "CenaJednostkowa": 1600,
            "MaxIloscMiejsc": 20,
            "KrotkiOpis": "Discover exotic Thailand. Temples, beaches, and unforgettable flavors of Thai cuisine.",
            "LinkDoZdjecia": [
                "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.pexels.com/photos/472309/pexels-photo-472309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            "Tags": [
                "Relaxation",
                "Cultural Experience"
            ],
            "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7961848.316095331!2d96.1993821028296!3d12.996059770167761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sTajlandia!5e0!3m2!1spl!2spl!4v1704506551973!5m2!1spl!2spl"
        },
        {
            "Nazwa": "Secrets of Cambodia",
            "DocelowyKraj": "Cambodia",
            "DataRozpoczecia": "2024-02-10",
            "DataZakonczenia": "2024-02-20",
            "CenaJednostkowa": 1900,
            "MaxIloscMiejsc": 15,
            "KrotkiOpis": "Explore the mysterious temples of Angkor Wat and discover the rich culture of Cambodia.",
            "LinkDoZdjecia": [
                "https://images.unsplash.com/photo-1642493405065-37de55bef2b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            "Tags": [
                "Cultural Experience",
                "Adventure"
            ],
            "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655436.74028028!2d102.89750904450984!3d12.547731397714114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310787c76e7e8d37%3A0x4cfebe6afcf13c84!2sCambodia!5e0!3m2!1spl!2spl!4v1704506601886!5m2!1spl!2spl"
        },
        {
            "Nazwa": "Colors of India",
            "DocelowyKraj": "India",
            "DataRozpoczecia": "2024-10-05",
            "DataZakonczenia": "2024-10-15",
            "CenaJednostkowa": 1800,
            "MaxIloscMiejsc": 18,
            "KrotkiOpis": "Immerse yourself in the richness of Indian culture and traditions. Visit famous temples and colorful bazaars.",
            "LinkDoZdjecia": [
                "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.pexels.com/photos/1786306/pexels-photo-1786306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            "Tags": [
                "Cultural Experience",
                "Relaxation"
            ],
            "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47622138.3085061!2d64.43967647640161!3d20.047377055429906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267fc7ac7d215%3A0xf5d5679baf77f5fc!2sIndia!5e0!3m2!1spl!2spl!4v1704506639738!5m2!1spl!2spl"
        },
        {
            "Nazwa": "Adventure in Peru",
            "DocelowyKraj": "Peru",
            "DataRozpoczecia": "2024-03-10",
            "DataZakonczenia": "2024-03-20",
            "CenaJednostkowa": 2300,
            "MaxIloscMiejsc": 15,
            "KrotkiOpis": "Discover ancient civilizations and amazing landscapes of Peru. Visit Machu Picchu and more.",
            "LinkDoZdjecia": [
                "https://images.unsplash.com/photo-1545330785-15356daae141?q=80&w=1290&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.pexels.com/photos/2539417/pexels-photo-2539417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            "Tags": [
                "Adventure",
                "Nature"
            ],
            "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12772034.172369538!2d-81.33004096432328!3d-9.189486603371667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b199a4f2f2b1e1%3A0x1e8a051aea4a09ef!2sPeru!5e0!3m2!1spl!2spl!4v1704506681371!5m2!1spl!2spl"
        },
        {
            "Nazwa": "Pearls of Morocco",
            "DocelowyKraj": "Morocco",
            "DataRozpoczecia": "2024-09-15",
            "DataZakonczenia": "2024-09-22",
            "CenaJednostkowa": 1100,
            "MaxIloscMiejsc": 20,
            "KrotkiOpis": "Dive into the colors and aromas of Morocco. Explore medinas, the Atlas Mountains, and the Sahara Desert.",
            "LinkDoZdjecia": [
                "https://images.unsplash.com/photo-1547112033-4e3f1c379955?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.pexels.com/photos/4253829/pexels-photo-4253829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            "Tags": [
                "Cultural Experience",
                "Adventure"
            ],
            "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25535448.926570337!2d-13.172601827840967!3d31.79170213856888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1257456ae8bf4d4b%3A0x1d5a6df3d5f1967b!2sMorocco!5e0!3m2!1spl!2spl!4v1704506714437!5m2!1spl!2spl"
        },
        {
            "Nazwa": "Mysteries of Japan",
            "DocelowyKraj": "Japan",
            "DataRozpoczecia": "2024-04-10",
            "DataZakonczenia": "2024-04-20",
            "CenaJednostkowa": 2500,
            "MaxIloscMiejsc": 10,
            "KrotkiOpis": "Discover ancient temples, modern metropolises, and the springtime cherry blossoms of Japan.",
            "LinkDoZdjecia": [
                "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            "Tags": [
                "Cultural Experience",
                "Nature",
                "Exclusive"
            ],
            "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8301632.847773537!2d129.4975610416488!3d37.5629927574232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1spl!2spl!4v1704506743649!5m2!1spl!2spl"
        },
        {
            "Nazwa": "Exploring the Amazon Rainforest",
            "DocelowyKraj": "Brazil",
            "DataRozpoczecia": "2024-08-05",
            "DataZakonczenia": "2024-08-15",
            "CenaJednostkowa": 2000,
            "MaxIloscMiejsc": 15,
            "KrotkiOpis": "Journey through the dense Amazon rainforest and experience its unique wildlife and lush vegetation.",
            "LinkDoZdjecia": [
                "https://images.pexels.com/photos/3672776/pexels-photo-3672776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            "Tags": [
                "Adventure",
                "Nature"
            ],
            "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15917045.330221426!2d-69.57774235214657!3d-13.702797159956934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a5e5e8d9b3c2d7%3A0x9750c4d4dc7f9b3f!2sBrazil!5e0!3m2!1spl!2spl!4v1704506776100!5m2!1spl!2spl"

        },
        {
            "Nazwa": "The Great Barrier Reef Adventure",
            "DocelowyKraj": "Australia",
            "DataRozpoczecia": "2024-09-10",
            "DataZakonczenia": "2024-09-20",
            "CenaJednostkowa": 2200,
            "MaxIloscMiejsc": 12,
            "KrotkiOpis": "Explore the vibrant underwater world of the Great Barrier Reef, home to a plethora of marine life.",
            "LinkDoZdjecia": [
                "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/673195/pexels-photo-673195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            "Tags": [
                "Adventure",
                "Nature"
            ],
            "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26259553.755170293!2d112.92131898991924!3d-25.734968497538282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c2c7%3A0x538267a0a1c8b9b!2sAustralia!5e0!3m2!1spl!2spl!4v1704506808874!5m2!1spl!2spl"

        },
        {
            "Nazwa": "Historical Tour of Egypt",
            "DocelowyKraj": "Egypt",
            "DataRozpoczecia": "2024-10-01",
            "DataZakonczenia": "2024-10-12",
            "CenaJednostkowa": 1700,
            "MaxIloscMiejsc": 20,
            "KrotkiOpis": "Discover the ancient wonders of Egypt, including the Pyramids of Giza and the Sphinx.",
            "LinkDoZdjecia": [
                "https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/5609738/pexels-photo-5609738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            "Tags": [
                "Cultural Experience",
                "Adventure"
            ],
            "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14031594.90564899!2d25.447525805535252!3d26.820553269680856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847340c7e6e6d%3A0xcc4b4d8ce6a142e3!2sEgypt!5e0!3m2!1spl!2spl!4v1704506841494!5m2!1spl!2spl"

        },
        {
            "Nazwa": "Majestic Canadian Rockies",
            "DocelowyKraj": "Canada",
            "DataRozpoczecia": "2024-07-20",
            "DataZakonczenia": "2024-07-30",
            "CenaJednostkowa": 2100,
            "MaxIloscMiejsc": 15,
            "KrotkiOpis": "Experience the breathtaking beauty of the Canadian Rockies, with its pristine lakes and mountains.",
            "LinkDoZdjecia": [
                "https://images.pexels.com/photos/1592461/pexels-photo-1592461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/63332/science-world-false-creek-vancouver-british-columbia-63332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            "Tags": [
                "Nature",
                "Relaxation"
            ],
            "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23118335.227198243!2d-141.00336639630708!3d56.13036604915592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b8fb3f1f740b105%3A0xbee3a817c5e7a200!2sCanada!5e0!3m2!1spl!2spl!4v1704506874195!5m2!1spl!2spl"

        },
        {
            "Nazwa": "Skiing in the Swiss Alps",
            "DocelowyKraj": "Switzerland",
            "DataRozpoczecia": "2025-01-05",
            "DataZakonczenia": "2025-01-15",
            "CenaJednostkowa": 2300,
            "MaxIloscMiejsc": 10,
            "KrotkiOpis": "Enjoy the thrill of skiing in the stunning Swiss Alps, with world-class resorts and slopes.",
            "LinkDoZdjecia": [
                "https://images.pexels.com/photos/2382317/pexels-photo-2382317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/685766/pexels-photo-685766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            "Tags": [
                "Adventure",
                "Exclusive"
            ],
            "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761440.244126671!2d6.116670957760324!3d46.81818768055922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64a185a752c7%3A0x3cdfd12a60f1ab0a!2sSwitzerland!5e0!3m2!1spl!2spl!4v1704506907088!5m2!1spl!2spl"

        }
    ]

}

const promises = [];

// Access the "trips" property directly
data.trips.forEach((trip, index) => {
    promises.push(admin.firestore().collection('trips').doc(trip.Nazwa).set(trip));
});

Promise.all(promises)
    .then(() => {
        console.log('All documents added successfully');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Error adding documents:', error);
        process.exit(1);
    });

    // node push_json.js