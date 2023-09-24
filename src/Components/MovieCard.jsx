import React from "react";

const MovieCard = ({ allMovieData, loading }) => {
  return (
    <div>
      {loading ? (
        <div className="flex justify-center ">
          <img
            className=" w-16 py-20"
            src="https://i.gifer.com/ZZ5H.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="flex flex-wrap px-4 lg:px-10">
          {allMovieData.map((item, index) => {
            const { Poster, Title, Year, Type, imdbID } = item;
            return (
              <div key={index} className="p-2 md:w-1/4 w-full">
                <div className="bg-[#40407a] p-3 rounded-2xl shadow-lg hover:translate-y-1 border-2 border-gray-600">
                  <img
                    className="rounded-lg w-full mb-2"
                    src={Poster}
                    alt="img"
                  />
                  <h2 className="text-xl font-bold text-white">{Title}</h2>
                  <h2 className="text-lg text-white mb-2">{Year}</h2>
                  <h2 className="text-lg text-white mb-2">{Type}</h2>
                  <h2 className="text-lg text-white mb-2">{imdbID}</h2>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
