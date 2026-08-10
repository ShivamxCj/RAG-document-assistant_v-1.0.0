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

    <div className="flex gap-3 p-4 border-t border-slate-700 bg-slate-900">


      <input
        type="text"
        value={message}
        disabled={disabled}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={
          disabled
            ? "Upload a document first..."
            : "Ask something about your document..."
        }
        className="flex-1 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-slate-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-slate-700"
      />



      <button
        onClick={sendMessage}
        disabled={disabled}
        className="rounded-lg bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700 disabled:bg-slate-600"
      >
        Send
      </button>


    </div>

  );

}


export default ChatInput;