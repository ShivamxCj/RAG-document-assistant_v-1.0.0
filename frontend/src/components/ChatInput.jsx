function ChatInput({ message, setMessage, sendMessage, disabled }) {


  const handleKeyDown = (e) => {


    if (e.key === "Enter") {

      e.preventDefault();


      if (!disabled) {
        sendMessage();
      }

    }


  };




  return (

    <div
      className="
        flex
        flex-col
        sm:flex-row
        gap-3
        p-3
        sm:p-4
        bg-slate-900
      "
    >




      {/* Input */}

      <input
        type="text"
        value={message}
        disabled={disabled}
        onChange={(e)=>setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={
          disabled
            ? "Upload a document first..."
            : "Ask something about your document..."
        }
        className="
          flex-1
          w-full
          rounded-lg
          border
          border-slate-600
          bg-slate-800
          text-white
          placeholder-slate-400
          px-4
          py-3
          text-sm
          sm:text-base
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
          disabled:bg-slate-700
        "
      />





      {/* Send Button */}

      <button
        onClick={sendMessage}
        disabled={disabled}
        className="
          w-full
          sm:w-auto
          rounded-lg
          bg-indigo-600
          px-6
          py-3
          text-white
          font-medium
          hover:bg-indigo-700
          transition
          disabled:bg-slate-600
        "
      >

        Send

      </button>



    </div>

  );

}


export default ChatInput;