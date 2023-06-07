import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";

import Logo from "../../public/sentient_logo.png";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isClosed, setIsClosed] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      videoRef.current
        .play()
        .catch((error) =>
          console.log('Autoplay was blocked. Show a "Play" button.')
        );
    }
  }, []);

  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node)
    ) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    // Set a timeout to update the state after 3 seconds
    const timer = setTimeout(() => {
      setIsClosed(false);
    }, 2000);

    // Clean up the timeout when the component unmounts or dependencies change
    return () => clearTimeout(timer);
  }, []);
  return (
    <main
      className={`flex min-h-screen overflow-y-hidden relative flex-col items-center justify-between px-24`}
    >
      <div className="flex flex-col">
        <div className="fixed inset-0 w-full h-full">
          <div className="bg-black w-full h-full absolute z-[6] opacity-10" />
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full z-[5] object-cover"
            src="https://taraliver.b-cdn.net/Tara%20River.mp4"
            title="Your video title"
            autoPlay
            muted
            playsInline
            loop
          ></video>
        </div>
        <div
          className={`z-[12] ${
            isClosed ? "hidden" : "flex"
          } w-full justify-center`}
        >
          <NextImage alt="logo" src={Logo} width={120} height={120} />
        </div>

        <div
          className={`${
            isClosed ? "hidden" : "flex"
          } flex-col w-full h-fullz-[12]`}
        >
          <div
            className={`flex flex-col z-[12] justify-center align-center items-center gap-10`}
          >
            <div className="flex flex-col items-center">
              <h1 className="text-[20px] text-white font-[600]">
                Chat with Morača, the wild river in Montenegro
              </h1>
              <iframe
                className="z-[11] opacity-90 rounded-md w-[300px] md:w-[600px] h-[400px] lg:h-[600px]"
                src="https://sentient.retune.so/chat/11ede80e-cc16-dcf0-9c30-1136ef551952/widget?key=11edbf75-310a-4970-a236-45941de73e77"
                width="550"
                height="700"
              />
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-white uppercase font-[600] text-black rounded-[18px] px-5 py-2"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          onClick={handleClickOutside}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div
            ref={modalRef}
            className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg p-6"
          >
            <div className="flex relative flex-col justify-between items-center">
              <button
                className="absolute right-0 top-0 text-gray-800 hover:text-gray-500 transition duration-150 ease-in-out"
                onClick={() => setModalOpen(false)}
              >
                &times;
              </button>
              <div className="flex flex-col w-full text-center gap-10">
                <h1>
                  {` We're creating AI chat bots to educate and rebuild
                  relationships with more-than-human beings, for
                  nature conservation and restoration. By combining
                  live data and the latest research, we aim to monitor
                  and redirect value towards nature stewardship.`}
                </h1>
                <h1>
                  This is a demo. For more information please write{" "}
                  <br /> jasmine@speaksentient.com
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`flex bg-black h-full fixed z-[20] top-0 w-full justify-center items-center align-center transition-all duration-500 ease-in-out transform 
        ${isClosed ? "scale-100 opacity-75" : "scale-0 opacity-0"}
        `}
      >
        <div className="z-[12] flex flex-col text-white items-center text-[25px] w-full justify-center">
          <NextImage alt="logo" src={Logo} width={400} height={400} />
          <h1>the more than-human chat</h1>
          <h1>rebuilding nature stewardship</h1>
        </div>
      </div>
    </main>
  );
}
