import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import gallery_image1 from "./assets/output.png";
import gallery_image2 from "./assets/poza2.png";
import gallery_image3 from "./assets/poza3.png";
import gallery_image4 from "./assets/poza4.png";
import gallery_image5 from "./assets/poza5.png";
import gallery_image6 from "./assets/poza6.png";

function Gallery() {
  const poze = [
    {
      image: gallery_image1,
      alt: "first photo",
    },
    {
      image: gallery_image2,
      alt: "second photo",
    },
    {
      image: gallery_image3,
      alt: "third photo",
    },
    {
      image: gallery_image4,
      alt: "forth photo",
    },
    {
      image: gallery_image5,
      alt: "fifth photo",
    },
    {
      image: gallery_image6,
      alt: "sixth photo",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openFullscreen = (index) => {
    setCurrentImageIndex(index);
  };

  const closeFullscreen = () => {
    setCurrentImageIndex(null);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape" && currentImageIndex !== null) {
        closeFullscreen();
      } else if (
        event.key === "ArrowLeft" &&
        currentImageIndex !== null &&
        currentImageIndex > 0
      ) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex !== null ? prevIndex - 1 : 0
        );
      } else if (
        event.key === "ArrowRight" &&
        currentImageIndex !== null &&
        currentImageIndex < poze.length - 1
      ) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex !== null ? prevIndex + 1 : 0
        );
      }
    };

    document.body.addEventListener("keydown", handleKeyPress);

    return () => {
      document.body.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentImageIndex, poze.length]);

  return (
    <div>
      <h2 className="text-center text-lg md:text-4xl font-barlow font-bold md:mb-8 mt-12">
        Galerie foto
      </h2>
      <div className="grid grid-cols-1 gap-2 mx-10 sm:grid-cols-2 md:grid-cols-3 sm:mx-8 md:mx-20 my-2.5">
        {poze.map(({ image }, index) => (
          <div key={index} className="flex flex-wrap justify-center">
            <div className="flex justify-center relative">
              <img
                onClick={() => openFullscreen(index)}
                className="h-full max-w-full rounded-lg object-cover object-center cursor-pointer"
                src={image}
                alt="gallery-photo"
              />
              <div
                className="absolute inset-0 flex justify-center cursor-pointer items-center bg-cyan-500 opacity-0 transition duration-500 transform hover:opacity-75 hover:scale-90"
                onClick={() => openFullscreen(index)}
              >
                <CiSquarePlus className="text-white text-lg size-20" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {currentImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex justify-center items-center">
          <img
            src={poze[currentImageIndex].image}
            alt="fullscreen-image"
            className="absolute inset-0 w-full h-full object-contain mt-20 mb-20"
          />
          <div className="absolute top-0 right-0 p-4 cursor-pointer">
            <FaTimes
              onClick={closeFullscreen}
              className="text-black text-2xl"
            />
          </div>
          {currentImageIndex > 0 && (
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 cursor-pointer my-20">
              <FaArrowLeft
                onClick={() =>
                  setCurrentImageIndex((prevIndex) =>
                    prevIndex !== null ? prevIndex - 1 : 0
                  )
                }
                className="text-black text-2xl cursor-pointer"
              />
            </div>
          )}
          {currentImageIndex < poze.length - 1 && (
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 cursor-pointer my-20">
              <FaArrowRight
                onClick={() =>
                  setCurrentImageIndex((prevIndex) =>
                    prevIndex !== null ? prevIndex + 1 : 0
                  )
                }
                className="text-black text-2xl cursor-pointer"
              />
            </div>
          )}
        </div>
      )}
      <div className="text-center mt-4">
        <a
          href="https://www.facebook.com/AleargaPentruViata"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-700 hover:bg-cyan-500 text-white font-bold py-4 px-12 rounded-xl inline-block mb-20"
        >
          GALERIE FOTO
        </a>
      </div>
    </div>
  );
}

export default Gallery;
