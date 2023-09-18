import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Overview from "./Components/Overview";
import Blogpost from "./Components/Blogpost";
import { Route, Routes } from "react-router-dom";

function App() {
  const [hits, setHits] = useState([]);
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleSearch();
  });

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://cdn.contentful.com/spaces/bicmbwrww2bh/entries?access_token=tNiGC3b1I64hpUi6pqo6CLuLcn-kJGF_l2RFE3NYDqk`
      );
      const searchData = response.data;
      setHits(searchData.hits);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/post/:blogId" element={<Blogpost />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
