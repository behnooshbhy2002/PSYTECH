import React,{useState} from "react";
import "../style/SearchBox.css";
import therapy from "../../images/therapy.png";
import { IoSearchCircleSharp } from "react-icons/io5";
import { Button, Form } from "react-bootstrap";
import { Outlet, useSearchParams } from "react-router-dom";

const SearchBox = () => {

const [searchTerm, setSearchTerm] = useState("");

const [searchParams, setSearchParams] = useSearchParams();
const [query, setQuery] = useState(searchParams.get("query"));

//const res = useFetch(query ? `/search/${query}` : "/new");

const handleSearch = (event) => {
  event.preventDefault();
  ///history.push(`/search?q=${searchTerm}`);
};

const handleInputChange = (event) => {
  setSearchTerm(event.target.value);
};

  return (
    <div className="contain">
      <img src={therapy} className="pic" />
      <div className="searchbox" dir="rtl">
        <h1 className="p">به دنبال چه میگردید؟</h1>
        <h3 className="p">
          می توانید نام پزشک یا تخصص موردنظرتان را جستجو کنید...
        </h3>
        <form onSubmit={handleSearch} className="search-input-wrapper">
          <input
            className="search-input"
            placeholder="جستجو کنید ...."
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            dir="rtl"
          />
         
          <IoSearchCircleSharp id="search-icon" size={60} onClick={handleSearch}></IoSearchCircleSharp>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
