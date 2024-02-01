import React from "react";

const MovieTicket = ({bookingDetails,selectedDate,quantity,seats,totalPrice,selectedLocation}) => {
  return (
    <div>
      <div className=" bg-gradient-to-l from-indigo-500  ">
        <p className="text-2xl font-semibold  text-center">
          Ticket -{quantity}
        </p>
        <div className="flex flex-wrap items-center justify-around py-4">
          <img
            src={bookingDetails?.image.medium}
            alt=""
            className="w-[100px] rounded-xl h-[100px]"
          />
          <div className="text-gray-800">
            <p className="text-2xl">{bookingDetails?.name}</p>
            <p>{bookingDetails?.language}</p>
            <p>{selectedDate}</p>
            <p>{selectedLocation}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MovieTicket;
