function HowItWorks() {


  const steps = [

    "Upload your PDF document",

    "Extract text from the document using PDF processing",

    "Split text into smaller meaningful chunks",

    "Create embeddings and store them in a vector database",

    "Retrieve relevant information using similarity search",

    "Generate context-aware answers using the LLM"

  ];



  return (

    <div
      className="
        bg-slate-900
        border
        border-slate-700
        rounded-xl
        shadow-lg
        p-4
        sm:p-5
        mt-6
        w-full
      "
    >



      <h2
        className="
          text-lg
          sm:text-xl
          font-semibold
          mb-5
          text-white
        "
      >
        ⚙️ How it works
      </h2>





      <div
        className="
          space-y-4
        "
      >


        {steps.map((step,index)=>(


          <div
            key={index}
            className="
              flex
              gap-3
              items-start
            "
          >




            {/* Step Number */}

            <div
              className="
                flex-shrink-0
                bg-indigo-600
                text-white
                rounded-full
                w-6
                h-6
                sm:w-7
                sm:h-7
                flex
                items-center
                justify-center
                text-xs
                sm:text-sm
                font-medium
              "
            >

              {index + 1}

            </div>






            {/* Step Text */}

            <p
              className="
                text-sm
                sm:text-base
                text-slate-300
                leading-relaxed
              "
            >

              {step}

            </p>



          </div>


        ))}


      </div>



    </div>

  );

}


export default HowItWorks;