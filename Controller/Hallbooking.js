
let rooms = [
    {
        room_id: 1,
        room_name: "room - 1",
        amenities: "TV,Wi-Fi,Coffee maker",
        seats: 5,
        price_per_hour:1500
    },
    {
        room_id: 2,
        room_name: "room - 2",
        amenities: "Wi-Fi,Coffee maker",
        seats: 8,
        price_per_hour:4500
    },
    {
        room_id: 3,
        room_name: "room - 3",
        amenities: "Wi-Fi,Coffee maker,playing area",
        seats: 5,
        price_per_hour:1500
    }
]

let booking_rooms = []

//get all ro0ms
export const getrooms = (req, res) => {
    res.status(200).json({data:rooms})
}

//1.create rooms
export const createrooms = (req, res) => {
  const { room_name,seats, amenities, price_per_hour } = req.body;
  const room = {
    room_id: rooms.length + 1,
    room_name,
    seats,
    amenities,
    price_per_hour,
  };
  rooms.push(room);
  res.status(200).json({ message:'successfully added!', data:room });
}

//2.create booking room
export const bookingroom = (req, res) => {
    const { customerName, date, startTime, endTime, roomid } = req.body;

    let rooo = rooms.filter((item) => item.room_id === roomid)
    console.log(rooo);
    
    if ((!rooo.length)){
        return res.status(400).json({ message: 'Room not available' })
    }
    else {
        const isRoomAvailable = booking_rooms.every(
            (booking) =>
                booking.roomid !== roomid ||
                (date !== booking.date ||
                    (startTime < booking.startTime && endTime <= booking.startTime) ||
                    (startTime >= booking.endTime && endTime > booking.endTime))
        );

        if (!isRoomAvailable) {
            return res.json({ message: 'Room not available for the given date and time.' });
        }

        const booking = {
            customerd_id: booking_rooms.length + 1,
            customerName,
            date,
            startTime,
            endTime,
            roomid,
            bookingDate: new Date(),
            bookingStatus: 'Booked',
        };
        booking_rooms.push(booking);
        res.status(200).json({ message: "Room booking success", booking_details: booking });
    }
}

// Endpoint to list all rooms with booked data

export const bookeddata= (req, res) => {
    const roomData = rooms.map((room) => {
    const bookedData = booking_rooms.find((booking) => booking.roomid === room.room_id);
    return {
      roomName: room.room_name,
      bookedStatus: bookedData ? 'Booked' : 'Available',
      customerName: bookedData ? bookedData.customerName : '',
      date: bookedData ? bookedData.date : '',
      startTime: bookedData ? bookedData.startTime : '',
      endTime: bookedData ? bookedData.endTime : '',
    };
  });
  res.status(200).json(roomData);
}

// Endpoint to list all customers with booked data
export const customerdata=(req, res) => {
    const customerdetails = booking_rooms.map((booking) => {
        const room = rooms.find((room) => room.room_id === booking.roomid)
        return {
            customerName: booking.customerName,
            roomName: room.room_name,
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime
        }
    })
    res.status(200).json(customerdetails)
};

//booking details for specific details


export const bookcount=(req, res) => {
  const { customerName } = req.params;
  const customerBookingDetails = booking_rooms
    .filter((booking) => booking.customerName === customerName)
    .map((booking) => ({
      customerName: booking.customerName,
      roomName: rooms.find((room) => room.room_id === booking.roomid).room_name,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
      bookingId: booking.id,
      bookingDate: booking.bookingDate,
      bookingStatus: booking.bookingStatus,
    }));
  res.json(customerBookingDetails);
}