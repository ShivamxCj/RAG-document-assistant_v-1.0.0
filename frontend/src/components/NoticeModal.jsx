function NoticeModal({ onContinue }) {

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 w-[450px] shadow-xl">

        <h2 className="text-xl font-semibold mb-4">
          ⚠️ Response Time Notice
        </h2>


        <p className="text-slate-300 mb-4">
          This assistant uses a local AI model running on the server.
          You may experience delays while generating responses.
        </p>


        <p className="text-slate-400 text-sm mb-6">
          The current version runs on a CPU-only Azure VM, so response
          speed depends on available computing resources.
          Future versions can use GPU-based infrastructure for faster
          inference.
        </p>


        <button
          onClick={onContinue}
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
        >
          Continue Chat
        </button>

      </div>

    </div>
  );
}

export default NoticeModal;