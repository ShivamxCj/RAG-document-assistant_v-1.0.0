import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FileUpload from "./components/FileUpload";
import ChatBox from "./components/ChatBox";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import NoticeModal from "./components/NoticeModal";

import About from "./AboutProject";



function Home() {


  const [sessionId, setSessionId] = useState(null);

  const [fileName, setFileName] = useState("");

  const [showNotice, setShowNotice] = useState(false);

  const [showSidePanel, setShowSidePanel] = useState(false);





  const handleSession = (id) => {

    setSessionId(id);

    setShowNotice(true);

  };







  return (


    <div
      className="
        min-h-screen
        bg-slate-950
        text-white
        flex
        flex-col
      "
    >



      <Header />








      {!sessionId ? (



        /* Initial Upload Screen */


        <div
          className="
            flex
            justify-center
            items-center
            min-h-[80vh]
            px-4
          "
        >



          <div
            className="
              w-full
              max-w-md
            "
          >



            <FileUpload

              setSessionId={handleSession}

              setFileName={setFileName}

            />



          </div>



        </div>






      ) : (






        <div
          className="
            flex
            flex-col
            lg:flex-row
            gap-6
            p-4
            sm:p-6
            flex-1
          "
        >






          {/* Mobile Document Toggle */}



          <button

            onClick={() =>
              setShowSidePanel(!showSidePanel)
            }


            className="
              lg:hidden
              flex
              items-center
              justify-between
              bg-slate-900
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              text-white
            "

          >


            <span className="font-medium">

              📄 Document Info

            </span>



            <span>

              {
                showSidePanel
                ? "▲"
                : "▼"
              }

            </span>



          </button>









          {/* Document Side Panel */}



          <div

            className={`

              w-full

              lg:w-[30%]

              flex

              flex-col

              gap-6


              ${
                showSidePanel
                ? "block"
                : "hidden"
              }


              lg:block

            `}

          >






            <FileUpload


              setSessionId={handleSession}


              setFileName={setFileName}


              fileName={fileName}



            />






            <HowItWorks />






          </div>













          {/* Chat Section */}





          <div

            className="

              w-full

              lg:w-[70%]

            "

          >






            <ChatBox

              sessionId={sessionId}

            />






          </div>







        </div>





      )}









      <Footer />









      {showNotice && (



        <NoticeModal


          onContinue={() =>
            setShowNotice(false)
          }


        />



      )}







    </div>



  );

}









function App() {


  return (



    <Routes>



      <Route

        path="/"

        element={<Home />}

      />





      <Route

        path="/about"

        element={<About />}

      />



    </Routes>



  );

}






export default App;