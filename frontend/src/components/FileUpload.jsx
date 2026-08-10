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

    <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg p-6 h-fit">


      <h2 className="text-xl font-semibold mb-4 text-white">
        Document
      </h2>



      {!fileName ? (

        <>

          <input
            type="file"
            accept=".pdf"
            onChange={(e)=>setFile(e.target.files[0])}
            className="mb-4"
          />


          <button
            onClick={handleUpload}
            disabled={uploading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >

            {uploading ? "Processing..." : "Upload PDF"}

          </button>


        </>


      ) : (


        <div>


          <p className="font-medium">
            Uploaded File:
          </p>


          <p className="mt-2 text-slate-300 break-all">
            📄 {fileName}
          </p>


          <p className="mt-4 text-green-600">
            ✅ Ready for questions
          </p>


        </div>


      )}


      {message && (

        <p className="mt-4 text-sm">
          {message}
        </p>

      )}


    </div>

  );

}


export default FileUpload;