export default function Home() {
  return (
    <>
      <div className="w-full h-[calc(100dvh-60px)] text-white flex justify-center items-center border-2 border-gray-800 flex-col gap-6 bg-gradient-to-r p-4">
        <h1 className="text-6xl font-bold drop-shadow-lg animate-fade-in">WebDev Compiler</h1>
        <p className="text-gray-500 text-center text-xl max-w-2xl animate-slide-in">
          Compile HTML, CSS, and JavaScript code on the go and share it with your friends
        </p>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 2s ease-in-out;
        }

        .animate-slide-in {
          animation: slide-in 1.5s ease-in-out;
        }
      `}</style>
    </>
  );
}
