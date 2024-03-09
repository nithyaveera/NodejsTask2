# API Overview
Base URL: http://localhost:your_port


1. Get All Rooms

HTTP Method: `GET`  
Endpoint: `/`
Description: Get details of all rooms.

2. Create Room

HTTP Method: `POST`
Endpoint: `/createroom`
Description: Create a new room.

3. Book Room

HTTP Method: `POST`
Endpoint: `/bookroom`
Description: Book a room for a customer.

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
