import { useState } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { askQuestion } from "../api/ragApi";


function ChatBox({ sessionId }) {


  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);


  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! Upload a document and ask questions."
    }
  ]);





  const sendMessage = async () => {


    if (!message.trim() || loading) return;



    const userText = message;



    setMessages(prev => [

      ...prev,

      {
        role: "user",
        text: userText
      }

    ]);



    setMessage("");





    if (!sessionId) {


      setMessages(prev => [

        ...prev,

        {
          role: "assistant",
          text: "Please upload a document first."
        }

      ]);


      return;

    }





    try {


      setLoading(true);



      const response = await askQuestion(
        userText,
        sessionId
      );



      setMessages(prev => [

        ...prev,

        {
          role: "assistant",
          text: response.answer,
          sources: response.sources
        }

      ]);




    } catch(error) {


      console.error(error);



      setMessages(prev => [

        ...prev,

        {
          role: "assistant",
          text: "Failed to get response."
        }

      ]);



    } finally {


      setLoading(false);


    }


  };








  return (


    <div
      className="
        bg-slate-900
        border
        border-slate-700
        rounded-xl
        shadow-lg
        flex
        flex-col
        w-full
        h-[70vh]
        sm:h-[600px]
        overflow-hidden
      "
    >





      {/* Chat Header */}

      <div
        className="
          p-4
          sm:p-5
          border-b
          border-slate-700
        "
      >

        <h2
          className="
            text-lg
            sm:text-xl
            font-semibold
            text-white
          "
        >
          💬 Chat
        </h2>


        <p
          className="
            text-xs
            sm:text-sm
            text-slate-400
            mt-1
          "
        >
          Ask questions about your document
        </p>


      </div>







      {/* Messages Area */}

      <div
        className="
          flex-1
          p-4
          sm:p-5
          space-y-4
          overflow-y-auto
          scrollbar-thin
        "
      >


        {messages.map((msg,index)=>(


          <Message

            key={index}

            role={msg.role}

            text={msg.text}

            sources={msg.sources}

          />


        ))}






        {loading && (


          <Message

            role="assistant"

            text="Thinking..."

          />


        )}





      </div>








      {/* Input */}

      <div
        className="
          border-t
          border-slate-700
          p-3
          sm:p-4
        "
      >

        <ChatInput

          message={message}

          setMessage={setMessage}

          sendMessage={sendMessage}

          disabled={!sessionId}

        />

      </div>





    </div>


  );


}


export default ChatBox;