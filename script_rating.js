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
            "Comments": [
                {
                    "User": "user1",
                    "Rating": 4,
                    "Comment": "Loved every moment!",
                    "Date": ""
                },
                {
                    "User": "user5",
                    "Rating": 4,
                    "Comment": "Memorable journey!",
                    "Date": "2023-09-30"
                }
            ]
        },
        {
            "Nazwa": "Aurora Borealis in Norway",
            "Comments": [
                {
                    "User": "user5",
                    "Rating": 5,
                    "Comment": "This was the best trip of my life!",
                    "Date": ""
                },
                {
                    "User": "user5",
                    "Rating": 1,
                    "Comment": "Could be better.",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user4",
                    "Rating": 2,
                    "Comment": "The guide was fantastic!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user4",
                    "Rating": 1,
                    "Comment": "Great trip!",
                    "Date": "2023-09-30"
                }
            ]
        },
        {
            "Nazwa": "Safari in Kenya",
            "Comments": [
                {
                    "User": "user5",
                    "Rating": 2,
                    "Comment": "I had a wonderful time!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user3",
                    "Rating": 1,
                    "Comment": "Loved every moment!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user4",
                    "Rating": 2,
                    "Comment": "This was the best trip of my life!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user4",
                    "Rating": 2,
                    "Comment": "I didn't enjoy it as much as I expected.",
                    "Date": "2023-09-30"
                }
            ]
        },
        {
            "Nazwa": "Wonders of New Zealand",
            "Comments": [
                {
                    "User": "user5",
                    "Rating": 5,
                    "Comment": "I had a wonderful time!",
                    "Date": ""
                }
            ]
        },
        {
            "Nazwa": "Thailand - Land of Smiles",
            "Comments": [
                {
                    "User": "user1",
                    "Rating": 2,
                    "Comment": "Nice trip!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user3",
                    "Rating": 2,
                    "Comment": "Could be better.",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user5",
                    "Rating": 5,
                    "Comment": "Loved every moment!",
                    "Date": "2023-09-30"
                }
            ]
        },
        {
            "Nazwa": "Secrets of Cambodia",
            "Comments": [
                {
                    "User": "user1",
                    "Rating": 1,
                    "Comment": "This was the best trip of my life!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user5",
                    "Rating": 2,
                    "Comment": "I had a wonderful time!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user2",
                    "Rating": 3,
                    "Comment": "Amazing experience!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user3",
                    "Rating": 2,
                    "Comment": "Memorable journey!",
                    "Date": "2023-09-30"
                }
            ]
        },
        {
            "Nazwa": "Colors of India",
            "Comments": [
                {
                    "User": "user5",
                    "Rating": 5,
                    "Comment": "Could be better.",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user1",
                    "Rating": 5,
                    "Comment": "Great trip!",
                    "Date": ""
                },
                {
                    "User": "user2",
                    "Rating": 3,
                    "Comment": "The guide was fantastic!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user4",
                    "Rating": 3,
                    "Comment": "Amazing experience!",
                    "Date": "2023-09-30"
                }
            ]
        },
        {
            "Nazwa": "Adventure in Peru",
            "Comments": [
                {
                    "User": "user4",
                    "Rating": 5,
                    "Comment": "I didn't enjoy it as much as I expected.",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user3",
                    "Rating": 3,
                    "Comment": "I had a wonderful time!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user3",
                    "Rating": 3,
                    "Comment": "Could be better.",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user4",
                    "Rating": 4,
                    "Comment": "The guide was fantastic!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user1",
                    "Rating": 1,
                    "Comment": "Loved every moment!",
                    "Date": "2023-09-30"
                }
            ]
        },
        {
            "Nazwa": "Pearls of Morocco",
            "Comments": [
                {
                    "User": "user2",
                    "Rating": 4,
                    "Comment": "Could be better.",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user2",
                    "Rating": 4,
                    "Comment": "Memorable journey!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user1",
                    "Rating": 4,
                    "Comment": "Nice trip!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user5",
                    "Rating": 4,
                    "Comment": "This was the best trip of my life!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user4",
                    "Rating": 2,
                    "Comment": "Nice trip!",
                    "Date": "2023-09-30"
                }
            ]
        },
        {
            "Nazwa": "Mysteries of Japan",
            "Comments": [
                {
                    "User": "user5",
                    "Rating": 5,
                    "Comment": "Great trip!",
                    "Date": ""
                },
                {
                    "User": "user2",
                    "Rating": 4,
                    "Comment": "Memorable journey!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user2",
                    "Rating": 3,
                    "Comment": "Great trip!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user5",
                    "Rating": 2,
                    "Comment": "Amazing experience!",
                    "Date": "2023-09-30"
                }
            ]
        },
        {
            "Nazwa": "Exploring the Amazon Rainforest",
            "Comments": [
                {
                    "User": "user3",
                    "Rating": 3,
                    "Comment": "Great trip!",
                    "Date": "2023-09-30"
                }
            ]
        },
        {
            "Nazwa": "The Great Barrier Reef Adventure",
            "Comments": [
                {
                    "User": "user1",
                    "Rating": 5,
                    "Comment": "Loved every moment!",
                    "Date": ""
                },
                {
                    "User": "user4",
                    "Rating": 3,
                    "Comment": "Nice trip!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user2",
                    "Rating": 5,
                    "Comment": "Great trip!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user4",
                    "Rating": 5,
                    "Comment": "Memorable journey!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user5",
                    "Rating": 4,
                    "Comment": "The guide was fantastic!",
                    "Date": "2023-09-30"
                }
            ]
        },
        {
            "Nazwa": "Historical Tour of Egypt",
            "Comments": [
                {
                    "User": "user2",
                    "Rating": 3,
                    "Comment": "Could be better.",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user1",
                    "Rating": 1,
                    "Comment": "Could be better.",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user5",
                    "Rating": 5,
                    "Comment": "Amazing experience!",
                    "Date": ""
                },
                {
                    "User": "user2",
                    "Rating": 2,
                    "Comment": "The guide was fantastic!",
                    "Date": "2023-09-30"
                }
            ]
        },
        {
            "Nazwa": "Majestic Canadian Rockies",
            "Comments": [
                {
                    "User": "user4",
                    "Rating": 1,
                    "Comment": "I didn't enjoy it as much as I expected.",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user1",
                    "Rating": 3,
                    "Comment": "Memorable journey!",
                    "Date": "2023-09-30"
                }
            ]
        },
        {
            "Nazwa": "Skiing in the Swiss Alps",
            "Comments": [
                {
                    "User": "user4",
                    "Rating": 1,
                    "Comment": "Amazing experience!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user1",
                    "Rating": 2,
                    "Comment": "The guide was fantastic!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user2",
                    "Rating": 2,
                    "Comment": "Nice trip!",
                    "Date": ""
                },
                {
                    "User": "user1",
                    "Rating": 4,
                    "Comment": "Amazing experience!",
                    "Date": "2023-09-30"
                },
                {
                    "User": "user4",
                    "Rating": 2,
                    "Comment": "I didn't enjoy it as much as I expected.",
                    "Date": ""
                }
            ]
        }
    ]
}

const promises = [];

// Access the "trips" property directly
data.trips.forEach((trip, index) => {
    promises.push(admin.firestore().collection('ratings').doc(trip.Nazwa).set(trip));
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