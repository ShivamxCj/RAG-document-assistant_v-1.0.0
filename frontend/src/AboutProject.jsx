import logo from "./assets/logo.png";
function About() {

  const techStack = [
    {
      name: "PyMuPDF",
      purpose: "Extracts text content and metadata from PDF documents."
    },
    {
      name: "LangChain Text Splitter",
      purpose: "Splits large documents into smaller meaningful chunks for retrieval."
    },
    {
      name: "Hugging Face Sentence Transformers",
      purpose: "Converts document chunks into semantic vector embeddings."
    },
    {
      name: "FAISS",
      purpose: "Performs similarity search to retrieve relevant document context."
    },
    {
      name: "Ollama (Phi-3)",
      purpose: "Runs local LLM inference to generate context-aware responses."
    },
    {
      name: "FastAPI",
      purpose: "Provides REST APIs for document upload and question answering."
    },
    {
      name: "Azure VM",
      purpose: "Hosts and deploys the backend infrastructure."
    }
  ];


  const pipeline = [
    "User uploads a PDF document",
    "PDF text is extracted using PyMuPDF",
    "Document is split into smaller chunks",
    "Chunks are converted into embeddings using Sentence Transformers",
    "Embeddings are stored and searched using FAISS",
    "Relevant context is retrieved based on user query",
    "Ollama LLM generates a grounded response using retrieved context"
  ];


  return (

    <div className="
      min-h-screen
      bg-slate-950
      text-white
      px-4
      sm:px-8
      py-10
    ">


      <div className="
        max-w-5xl
        mx-auto
      ">


 {/* Title */}

<div className="text-center mb-10">


  <div className="
    flex
    items-center
    justify-center
    gap-4
  ">


    <img
      src={logo}
      alt="ContextaAI Logo"
      className="
        h-16
        w-16
        sm:h-24
        sm:w-24
        object-contain
        rounded-xl
      "
    />



    <h1
      className="
        text-3xl
        sm:text-5xl
        font-bold
        bg-gradient-to-r
        from-indigo-400
        to-blue-500
        bg-clip-text
        text-transparent
      "
    >
      ContextAI
    </h1>


  </div>





  <p
    className="
      mt-5
      text-slate-400
      text-base
      sm:text-lg
      max-w-2xl
      mx-auto
    "
  >
    RAG-powered AI knowledge assistant for intelligent document conversations
  </p>



</div>




        {/* Overview */}

        <section className="
          bg-slate-900
          border
          border-slate-700
          rounded-2xl
          p-5
          sm:p-8
        ">


          <h2 className="
            text-xl
            sm:text-2xl
            font-semibold
            text-indigo-400
            mb-4
          ">
            About ContextaAI
          </h2>



          <p className="
            text-slate-300
            leading-relaxed
          ">

            ContextaAI is a Retrieval-Augmented Generation (RAG)
            powered AI knowledge assistant designed to transform
            documents into interactive knowledge sources.

            <br/><br/>

            Users can upload PDF documents and ask questions
            naturally. The system combines semantic retrieval
            with large language models to fetch relevant context
            and generate intelligent, grounded responses.

          </p>


        </section>





        {/* Pipeline */}

        <section className="
          mt-6
          bg-slate-900
          border
          border-slate-700
          rounded-2xl
          p-5
          sm:p-8
        ">


          <h2 className="
            text-xl
            sm:text-2xl
            font-semibold
            text-indigo-400
            mb-5
          ">
            RAG Pipeline Flow
          </h2>



          <div className="space-y-3">


            {pipeline.map((step,index)=>(

              <div
                key={index}
                className="
                  flex
                  gap-3
                  bg-slate-800
                  rounded-xl
                  p-4
                  text-slate-300
                "
              >

                <span className="text-indigo-400 font-bold">
                  {index+1}.
                </span>


                <p>
                  {step}
                </p>


              </div>

            ))}


          </div>


        </section>





        {/* Tech Stack */}

        <section className="
          mt-6
          bg-slate-900
          border
          border-slate-700
          rounded-2xl
          p-5
          sm:p-8
        ">


          <h2 className="
            text-xl
            sm:text-2xl
            font-semibold
            text-indigo-400
            mb-5
          ">
            Technology Stack
          </h2>




          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
          ">


            {techStack.map((tech,index)=>(

              <div
                key={index}
                className="
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-xl
                  p-4
                "
              >


                <h3 className="
                  font-semibold
                  text-white
                ">
                  {tech.name}
                </h3>


                <p className="
                  text-sm
                  text-slate-400
                  mt-2
                ">
                  {tech.purpose}
                </p>


              </div>

            ))}


          </div>


        </section>





        {/* Limitations */}

        <section className="
          mt-6
          bg-slate-900
          border
          border-slate-700
          rounded-2xl
          p-5
          sm:p-8
        ">


          <h2 className="
            text-xl
            sm:text-2xl
            font-semibold
            text-indigo-400
            mb-4
          ">
            Current Version
          </h2>


          <p className="text-slate-300 leading-relaxed">

            Version 1.0 uses an in-memory session architecture.
            Documents and embeddings are temporarily stored during
            the active session.

            The current deployment uses CPU-based LLM inference
            through Ollama, where response latency is mainly
            influenced by model generation speed.

          </p>


        </section>



      </div>


    </div>

  );

}


export default About;