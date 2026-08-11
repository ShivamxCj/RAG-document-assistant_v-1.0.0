import { useState } from "react";
import Header from "./components/Header";
import FileUpload from "./components/FileUpload";
import ChatBox from "./components/ChatBox";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import NoticeModal from "./components/NoticeModal";

function App() {

  const [sessionId, setSessionId] = useState(null);
  const [fileName, setFileName] = useState("");
  const [showNotice, setShowNotice] = useState(false);



  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Header />


      {!sessionId ? (

        <div className="flex justify-center items-center h-[80vh]">

          <FileUpload
            setSessionId={(id) => {
              setSessionId(id);
              setShowNotice(true);
            }}
            setFileName={setFileName}
          />

        </div>


      ) : (


        <div className="flex gap-6 p-6 h-[calc(100vh-80px)]">


          {/* Left 30% */}
          <div className="w-[30%]">

            <FileUpload
              setSessionId={(id) => {
                setSessionId(id);
                setShowNotice(true);
              }}
              setFileName={setFileName}
            />
            <HowItWorks />

          </div>



          {/* Right 70% */}
          <div className="w-[70%]">

            <ChatBox sessionId={sessionId} />

          </div>


        </div>

      )}
      <Footer />
      {showNotice && (
  <NoticeModal
    onContinue={() => setShowNotice(false)}
  />
)}

    </div>

  );

}


export default App;