function Footer() {

  const techStack = [
    "FastAPI",
    "React",
    "Tailwind CSS",
    "LangChain",
    "FAISS",
    "Hugging Face",
    "Ollama",
    "Phi-3",
    "Sentence Transformers"
  ];


  return (

    <footer className="bg-slate-900 border-t border-slate-700 mt-8 py-8">

      <div className="max-w-6xl mx-auto px-6 text-center">


        <h2 className="text-xl font-semibold text-white">
          ContextAI v 1.0.0
        </h2>



        <p className="mt-2 text-slate-400">
          Built by Shivam Chatterjee
        </p>



        <div className="flex justify-center gap-6 mt-4 text-sm">


          <a
            href="https://shivamcj.netlify.app/"
            target="_blank"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Portfolio
          </a>


          <a
            href="https://github.com/ShivamxCj"
            target="_blank"
            className="text-indigo-400 hover:text-indigo-300"
          >
            GitHub
          </a>


          <a
            href="https://www.linkedin.com/in/shivam-chatterjee-1230b4247/"
            target="_blank"
            className="text-indigo-400 hover:text-indigo-300"
          >
            LinkedIn
          </a>


        </div>



        <div className="mt-6">

          <p className="text-sm text-slate-400 mb-3">
            Built with
          </p>


          <div className="flex flex-wrap justify-center gap-2">


            {techStack.map((tech, index) => (

              <span
                key={index}
                className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs"
              >
                {tech}
              </span>

            ))}


          </div>

        </div>



        <p className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Shivam Chatterjee. All rights reserved.
        </p>


      </div>


    </footer>

  );

}


export default Footer;