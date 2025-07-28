import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";
import Logo from "../../public/sentient_logo.png";
import Script from "next/script";

export default function Home() {
  const [isClosed, setIsClosed] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
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
    const timer = setTimeout(() => {
      setIsClosed(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className="flex min-h-screen overflow-y-hidden relative flex-col items-center justify-between px-4 sm:px-8 md:px-24"
    >
      <div className="flex flex-col w-full">
        <div className="fixed inset-0 w-full h-full">
          <div className="bg-black w-full h-full absolute z-[6] opacity-10" />
          <img
            src="https://raw.githubusercontent.com/haonchon/riverai/main/public/BackgroundAIVideoMoracaRiver.gif"
            className="absolute inset-0 w-full h-full z-[5] object-cover"
            alt="Your background"
          />
        </div>

        <div
          className={`z-[12] ${
            isClosed ? "hidden" : "flex"
          } w-full justify-center`}
        >
          <NextImage
            alt="logo"
            src={Logo}
            width={120}
            height={120}
            className="w-[80px] sm:w-[100px] md:w-[120px]"
          />
        </div>

        <div
          className={`${
            isClosed ? "hidden" : "flex"
          } flex-col w-full h-full z-[12]`}
        >
          <div className="flex flex-col z-[12] justify-center items-center gap-6 sm:gap-10 px-4 sm:px-6 md:px-0">
            <Script
              id="retune.so/chat"
              src="https://retune.so/api/script/chat.js?iframe&id=11ede80e-cc16-dcf0-9c30-1136ef551952"
              defer
            />
            <div className="w-full max-w-[550px] h-[70vh]">
              <iframe
                data-retune-chat="11ede80e-cc16-dcf0-9c30-1136ef551952"
                className="w-full h-full"
                style={{ border: 0, background: "rgba(255,255,255,0.2)" }}
              />
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="bg-white uppercase font-semibold text-black rounded-[18px] px-5 py-2"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          onClick={handleClickOutside}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
        >
          <div
            ref={modalRef}
            className="bg-white w-full max-w-sm mx-auto rounded shadow-lg p-4 sm:p-6"
          >
            <div className="flex relative flex-col justify-between items-center">
              <button
                className="absolute right-2 top-2 text-gray-800 hover:text-gray-500 text-2xl"
                onClick={() => setModalOpen(false)}
              >
                &times;
              </button>
              <div className="flex flex-col w-full text-center gap-6">
                <h1 className="text-base sm:text-lg leading-relaxed">
                  We are creating AI chat bots to educate and rebuild
                  relationships with more-than-human beings, for nature
                  conservation and restoration. By combining live data and the
                  latest research, we aim to monitor and redirect value towards
                  nature stewardship.
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
        <div className="z-[12] flex flex-col text-white items-center w-full justify-center text-center gap-2">
          <NextImage
            alt="logo"
            src={Logo}
            width={200}
            height={200}
            className="w-[150px] sm:w-[250px] md:w-[400px]"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl">
            the more-than-human chat
          </h1>
          <h1 className="text-base sm:text-lg md:text-xl">
            rebuilding nature stewardship
          </h1>
        </div>
      </div>
    </main>
  );
}
