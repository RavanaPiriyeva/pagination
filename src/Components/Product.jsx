import axios, { Axios } from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate ,useLocation } from "react-router-dom";

const Product = () => {
  const [obj, setObj] = useState({});
  const [num, setNum] = useState(1);
  const [selectnum,setSelectNum] =useState(2)
  let navigate = useNavigate();
  let location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const perpage = searchParams.get("per_page");
  const page = searchParams.get("page");

  useEffect(() => {
    loadData();
  }, [num , selectnum]);

  const loadData = () => {
    axios
      .get("https://reqres.in/api/products?per_page="+perpage+"&&page=" + page)
      .then((res) => {
          setObj(res.data);
        navigate("products?per_page="+selectnum+"&&page=" + num)
      });
  };

  console.log(selectnum)
  let x = Math.ceil(obj.total / selectnum);
  console.log(x)
  const newArr = [];

  const change = (i) => {
    //navigate("products?per_page="+selectnum+"&&page=" + num)
    setNum(i);
  };
 
  const convertArr = (x) => {
    for (let i = 1; i <= x; i++) {
      newArr.push(i);
    }
    console.log(newArr);
    
  };


  const changeSelect = (i) => {
    //navigate("products?per_page="+selectnum+"&&page=" + num)
    console.log(i)
    setSelectNum(i)
    //console.log(i)
  };
  return (
    <div>
      <ul>
        {obj.data &&
          obj.data.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
      </ul>
      {convertArr(x)}
      {newArr &&
        newArr.map((item) => {
         return <button value={item} onClick={(e) => change(e.target.value)} key={item}>
            {item}
          </button>;
        })}

        <select onClick={(e) => changeSelect(e.target.value)}>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="6">6</option>
        </select>
    </div>
  );
};

export default Product;
