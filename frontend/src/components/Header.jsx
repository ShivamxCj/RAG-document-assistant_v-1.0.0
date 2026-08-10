function Header() {
  return (

    <header className="bg-indigo-900 border-b border-slate-800 py-8 shadow-lg">

      <div className="text-center">

        <h1 className="text-4xl font-bold tracking-tight text-white">
          RAG Document Assistant
        </h1>


        <p className="mt-3 text-slate-400 text-sm md:text-base">
          Chat with your documents using AI-powered retrieval
        </p>


      </div>

    </header>

  );
}


export default Header;