function Message({ role, text, sources }) {

  const isUser = role === "user";

  const isThinking = text === "Thinking...";


  return (

    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >


      <div
        className={`max-w-xl rounded-2xl px-4 py-3 shadow-lg ${
          isUser
            ? "bg-indigo-600 text-white"
            : "bg-slate-800 text-slate-200 border border-slate-700"
        }`}
      >


        {isThinking ? (


          <div className="flex items-center gap-1 text-slate-300">

            <span>
              Thinking
            </span>


            <span className="animate-bounce">
              .
            </span>


            <span className="animate-bounce [animation-delay:200ms]">
              .
            </span>


            <span className="animate-bounce [animation-delay:400ms]">
              .
            </span>


          </div>


        ) : (


          <p className="whitespace-pre-wrap leading-relaxed">
            {text}
          </p>


        )}



        {sources && sources.length > 0 && (

          <div className="mt-4 pt-3 border-t border-slate-600 text-sm">


            <p className="font-semibold text-slate-300 mb-2">
              Sources
            </p>



            <div className="space-y-1">

              {sources.map((page, index) => (

                <p
                  key={index}
                  className="text-slate-400"
                >
                  📄 Page {page}
                </p>

              ))}

            </div>


          </div>

        )}


      </div>


    </div>

  );

}


export default Message;