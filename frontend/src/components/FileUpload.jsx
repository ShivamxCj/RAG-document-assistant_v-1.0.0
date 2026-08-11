import { useState } from "react";
import { uploadPDF } from "../api/ragApi";


function FileUpload({
  setSessionId,
  setFileName,
  fileName
}) {


  const [file, setFile] = useState(null);

  const [message, setMessage] = useState("");

  const [uploading, setUploading] = useState(false);





  const handleUpload = async () => {


    if (!file) {

      setMessage("Please select a PDF first.");

      return;

    }



    try {


      setUploading(true);

      setMessage("Processing document...");



      const result = await uploadPDF(file);



      setSessionId(result.session_id);

      setFileName(file.name);



      setMessage("Document ready");



    } catch(error) {


      console.error(error);

      setMessage("Upload failed");


    } finally {


      setUploading(false);


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
        p-5
        sm:p-8
        w-full
        min-h-[300px]
      "
    >





      <h2
        className="
          text-xl
          font-semibold
          text-white
          mb-6
        "
      >
        Document
      </h2>







      {!fileName ? (



        <div
          className="
            flex
            flex-col
            gap-5
          "
        >





          {/* Upload Box */}


          <label

            className="
              cursor-pointer
              border-2
              border-dashed
              border-slate-600
              rounded-xl
              h-[170px]
              sm:h-[200px]
              flex
              flex-col
              justify-center
              items-center
              text-center
              hover:border-indigo-500
              hover:bg-slate-800
              transition
              px-4
            "

          >



            <div
              className="
                text-4xl
                mb-3
              "
            >
              📄
            </div>





            <p
              className="
                text-sm
                text-slate-400
                break-all
              "
            >

              {
                file
                ? file.name
                : "Choose PDF file"
              }

            </p>



            <p
              className="
                text-xs
                text-slate-500
                mt-2
              "
            >
              Click to browse
            </p>





            <input

              type="file"

              accept=".pdf"

              className="hidden"

              onChange={(e)=>{


                setFile(e.target.files[0]);

                setMessage("");

              }}

            />



          </label>







          {/* Upload Button */}



          {file && (


            <button

              onClick={handleUpload}

              disabled={uploading}


              className="
                w-full
                bg-indigo-600
                hover:bg-indigo-700
                disabled:bg-indigo-400
                text-white
                py-3
                rounded-lg
                font-medium
                transition
              "

            >


              {
                uploading
                ? "Processing..."
                : "Upload PDF"
              }



            </button>



          )}






        </div>




      ) : (





        <div>


          <p
            className="
              text-white
              font-medium
            "
          >
            Uploaded File
          </p>




          <div
            className="
              mt-4
              bg-slate-800
              rounded-lg
              p-4
            "
          >

            <p
              className="
                text-slate-300
                text-sm
                break-all
              "
            >

              📄 {fileName}

            </p>


          </div>





          <p
            className="
              mt-5
              text-green-400
              text-sm
            "
          >

            ✅ Ready for questions

          </p>



        </div>




      )}







      {message && (


        <p

          className="
            mt-5
            text-sm
            text-slate-300
          "

        >

          {message}


        </p>



      )}






    </div>



  );

}



export default FileUpload;