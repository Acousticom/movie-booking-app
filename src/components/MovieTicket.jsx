import React from "react";

const MovieTicket = ({
  movieDetails,
  selectedDate,
  quantity,
  seats,
  selectedLocation,
}) => {
  const seatsType = (seats) => {
    if (seats === "500") {
      return <div className="bg-yellow-500 text-white font-semibold text-center">VIP</div>;
    } else if (seats === "350") {
      return <div className="bg-orange-400 text-white font-semibold text-center">Executive</div>
    } else if (seats === "250") {
      return <div className="bg-green-500 text-white font-semibold text-center">Normal</div>
    }
  };
  return (
    <div>
      <div className=" bg-gradient-to-l from-indigo-500  ">
        <p className="text-2xl font-semibold  text-center">
          Ticket -{quantity}
        </p>
        <div className="">{seatsType(seats)}</div>
        <div className="flex flex-wrap items-center justify-around py-4">
          <img
            src={movieDetails?.image.medium}
            alt=""
            className="w-[100px] rounded-xl h-[100px]"
          />
          <div className="text-gray-800">
            <p className="text-2xl">{movieDetails?.name}</p>
            <p>{movieDetails?.language}</p>
            <p>{selectedDate}</p>
            <p>{selectedLocation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieTicket;
