# API Overview

### Base URL: https://nodejstask2.onrender.com/


1. Get All Rooms

HTTP Method: `GET`  
Endpoint: `/`
Description: Get details of all rooms.

2. Create Room

HTTP Method: `POST`
Endpoint: `/createroom`
Description: Create a new room.

Example Body content for create room:
`
{
        "room_name": "room - 5",
        "amenities": "Wi-Fi",
        "seats": 1,
        "price_per_hour":1000
}`

3. Book Room

HTTP Method: `POST`
Endpoint: `/bookroom`
Description: Book a room for a customer.

Example Body content for Booking Room:

`{
            "customerName":"nithya",
            "date":"2-2-2024",
            "startTime":"10am",
            "endTime":"11am",
            "roomid":1
}`

4. Get Booked Data

HTTP Method: `GET`
Endpoint: `/bookdata`
Description: Get booking status for all rooms.

5. Get Customer Data

HTTP Method: `GET`
Endpoint: `/customerdata`
Description: Get booking details for all customers.

6. Get Booking Count for a Customer

HTTP Method: `GET`
Endpoint: `/bookcount/:customerName`
Description: Get the count and details of bookings for a specific customer.
