import { useState } from "react";
import Header from "./components/Header";
import FileUpload from "./components/FileUpload";
import ChatBox from "./components/ChatBox";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {

  const [sessionId, setSessionId] = useState(null);
  const [fileName, setFileName] = useState("");



  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Header />


      {!sessionId ? (

        <div className="flex justify-center items-center h-[80vh]">

          <FileUpload
            setSessionId={setSessionId}
            setFileName={setFileName}
          />

        </div>


      ) : (


        <div className="flex gap-6 p-6 h-[calc(100vh-80px)]">


          {/* Left 30% */}
          <div className="w-[30%]">

            <FileUpload
              setSessionId={setSessionId}
              setFileName={setFileName}
              fileName={fileName}
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

    </div>

  );

}


export default App;