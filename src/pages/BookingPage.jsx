import React, { useState } from "react";
import { useMovies } from "../context/MoviesContext";
import MovieTicket from "../components/MovieTicket";

const BookingPage = () => {
  const { bookingDetails, dates } = useMovies();
  const [seats, setSeats] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const locations = [
    "PVR Janakpuri",
    "INOX Vikaspuri",
    "Cinepolis Vegas Mall",
    "PVR Saket",
    "Suraj Cinemas Noida",
  ];
  const totalPrice = quantity * seats;
  console.log(bookingDetails);
  console.log(dates);
  return (
    <div className="flex justify-center gap-7 items-center h-[60vh] flex-wrap">
      {bookingDetails ? (
        <>
          <div className="border-2 w-[600px] mt-5">
            <MovieTicket
              bookingDetails={bookingDetails}
              selectedDate={selectedDate}
              quantity={quantity}
              seats={seats}
              totalPrice={totalPrice}
              selectedLocation={selectedLocation}
            />
            <div className="px-3 py-3 flex justify-center flex-wrap">
              <select
                onChange={(event) => setSelectedDate(event.target.value)}
                className="border-2 px-2 py-1 mx-1 rounded-md"
              >
                <option value="">Select Date</option>
                {dates.map((date) => (
                  <option value={date}>{date}</option>
                ))}
              </select>
              <select
                className="border-2 px-2 py-1 mx-1 rounded-md"
                onChange={(event) => setSelectedLocation(event.target.value)}
              >
                <option value="">Select Location</option>
                {locations.map((location) => (
                  <option value={location}>{location}</option>
                ))}
              </select>
              <select
                onChange={(event) => setSeats(event.target.value)}
                className="border-2 px-2 py-1 mx-1 rounded-md"
              >
                <option value="">Select Seat</option>
                <option value={500}>VIP (₹500)</option>
                <option value={350}>Executive(₹350)</option>
                <option value={250}>Normal(₹250)</option>
              </select>
            </div>
            <div className="flex justify-center mb-5">
              <div>
                <p className="text-lg font-semibold">Select quantity</p>
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity == 1}
                  className="border-2 px-2 text-2xl bg-gray-300 mx-1"
                >
                  -
                </button>
                <strong className="text-lg">{quantity}</strong>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="border-2 px-2 text-2xl bg-gray-300 mx-1"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="border-2 text-xl px-4 py-4 bg-gray-100 mx-2">
            <p>Booking Summary</p>
            <p>Fare: ₹{seats}</p>
            <p>Quantity: {quantity}</p>
            <p>
              Total Price: {quantity} X ₹{seats} = ₹{totalPrice}
            </p>
            <button className="bg-indigo-700 w-full mt-4 py-1 px-2 text-white rounded-lg ">
              Proceed To Pay
            </button>
          </div>
        </>
      ) : (
        <p className="text-2xl font-semibold">No bookings yet</p>
      )}
    </div>
  );
};
export default BookingPage;
