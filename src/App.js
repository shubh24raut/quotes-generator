import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [quotes, setQuotes] = useState("");

  const getQuotes = async () => {
    fetch(process.env.REACT_APP_URL)
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };
 
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full px-10 md:px-20 bg-gradient-to-bl from-yellow-500 via-orange-400 to-pink-500  ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center flex-col h-[24rem] w-[24rem] md:h-[36rem] md:w-[36rem] bg-white/20 rounded-3xl "
      >
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{duration:1.2}}
          className="flex items-center py-8 mb-4"
        >
          <p className="font-extrabold underline font-serif text-3xl uppercase tracking-[6px] ">
            Quotes
          </p>
        </motion.div>
        <div>
          <p className="uppercase font-mono text-center text-lg mb-4 px-4">
            {quotes.text}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{duration:1.2}}
        >
          <button
            className="flex items-center font-serif font-semibold justify-center h-12 mt-4 rounded-full tracking-widest text-sm hover:bg-white/10 transition ease-in-out w-40 border border-red-600 "
            onClick={getQuotes}
          >
            GET QUOTES
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
