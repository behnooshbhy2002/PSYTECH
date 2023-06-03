import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/SearchBox.css";
import { IoSearchCircleSharp } from "react-icons/io5";
import { Button, Form } from "react-bootstrap";
import therapy from "../../images/therapy.png";
import { Outlet, useSearchParams } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState();

  const history = useNavigate();

  const addQuery = (key, value, url) => {
    let searchParams = new URLSearchParams(url.search);
    searchParams.set(key, value);
    url({
      pathname: "/PsycologistList",
      search: searchParams.toString(),
    });
  };

  const removeQuery = (key, url) => {
    let searchParams = new URLSearchParams(url.search);
    searchParams.delete(key);
    url({
      pathname: "/PsycologistList",
      search: searchParams.toString(),
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(keyword);
      //history("/PsycologistList");
      //removeQuery("keyword", history);
      addQuery("keyword", keyword, history);
    }
  };
  const handleSearch = (event) => {
    event.preventDefault();
    console.log(keyword);
    history("/PsycologistList");
    removeQuery("keyword", history);
    addQuery("keyword", keyword, history);
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
            placeholder="جستجو کنید...."
            dir="rtl"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          ></input>
          <IoSearchCircleSharp
            id="search-icon"
            size={60}
            onClick={handleSearch}
          ></IoSearchCircleSharp>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
