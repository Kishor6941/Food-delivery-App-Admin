import React, { useEffect, useState } from "react";
import "./ListItem.css";
import axios from "axios";
import { toast } from "react-toastify";

const ListItem = () => {
  const [list, setList] = useState([]);
  const API_URL = "http://localhost:4000";

  const fetchList = async () => {
    const response = await axios.get(`${API_URL}/api/food/list`);
    if (response?.data?.success) {
      setList(response?.data?.data);
    } else {
      toast.error(response?.data?.message);
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${API_URL}/api/food/remove`, {
      id: foodId,
    });
    if (response.data?.success) {
      await fetchList();
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.data?.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${API_URL}/images/` + item.image} alt="" />
              <p>{item?.name}</p>
              <p>{item?.category}</p>
              <p>${item?.price}</p>
              <p className="cursor" onClick={() => removeFood(item?._id)}>
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListItem;
