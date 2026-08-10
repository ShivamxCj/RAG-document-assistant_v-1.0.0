function HowItWorks() {

  const steps = [
    "Upload your PDF document",
    "Extract text from the document",
    "Split text into smaller chunks",
    "Create embeddings and store in vector database",
    "Retrieve relevant information using similarity search",
    "Generate answers using the LLM with document context"
  ];


  return (

    <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg p-5 mt-6">

      <h2 className="text-lg font-semibold mb-4">
        How it works
      </h2>


      <div className="space-y-3">

        {steps.map((step, index) => (

          <div
            key={index}
            className="flex gap-3 items-start"
          >

            <div className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {index + 1}
            </div>


            <p className="text-sm text-slate-300">
              {step}
            </p>


          </div>

        ))}

      </div>


    </div>

  );

}


export default HowItWorks;