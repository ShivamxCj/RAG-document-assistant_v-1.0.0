import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


function Header() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (

    <header className="
      bg-slate-950/80
      backdrop-blur-md
      border-b
      border-slate-800
      shadow-lg
      sticky
      top-0
      z-50
    ">


      <div className="
        max-w-7xl
        mx-auto
        px-5
        py-4
        flex
        items-center
        justify-between
      ">



        {/* Brand */}

        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >


          <img
  src={logo}
  alt="ContextaAI Logo"
  className="
    h-18
    w-18
    sm:h-16
    sm:w-16
    rounded-xl
    object-contain
  "
/>



          <div>

             <h1
      className="
        text-2xl
        sm:text-3xl
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


            {/* <p className="
              hidden
              sm:block
              text-xs
              text-slate-400
            ">
              RAG-powered knowledge assistant
            </p> */}


          </div>


        </Link>





        {/* Desktop Navigation */}

        <nav className="
          hidden
          md:flex
          items-center
          gap-8
          text-sm
          font-medium
        ">




          <Link
            to="/about"
            className="
              text-slate-300
              hover:text-indigo-400
              transition
            "
          >
            About
          </Link>



          <a
            href="https://github.com/ShivamxCj/RAG-document-assistant_v-1.0.0"
            target="_blank"
            rel="noreferrer"
            className="
              bg-indigo-600
              hover:bg-indigo-700
              px-4
              py-2
              rounded-lg
              text-white
              transition
            "
          >
            GitHub
          </a>


        </nav>





        {/* Mobile Hamburger */}

        <button
          className="
            md:hidden
            text-white
            text-3xl
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? "✕" : "☰"}

        </button>



      </div>





      {/* Mobile Menu */}

      {menuOpen && (

        <div className="
          md:hidden
          border-t
          border-slate-800
          bg-slate-950
          px-5
          py-5
          space-y-4
        ">




          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="
              block
              text-slate-300
              hover:text-indigo-400
            "
          >
            About
          </Link>



          <a
            href="https://github.com/ShivamxCj/RAG-document-assistant_v-1.0.0"
            target="_blank"
            rel="noreferrer"
            className="
              block
              bg-indigo-600
              text-center
              px-4
              py-2
              rounded-lg
              text-white
            "
          >
            GitHub
          </a>


        </div>

      )}


    </header>

  );

}


export default Header;
