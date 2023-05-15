import { Button, Table, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useNavigate, useNavigation } from 'react-router-dom';
import './supplier.css'
const Supplier = () => {
    let navigate = useNavigate();

  const { confirm } = Modal;

  const [supplier, setSupplier] = useState([]);

  const deleteProduct = (id) => {
    confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      onOk() {
        axios
          .delete("https://northwind.vercel.app/api/suppliers/" + id)
          .then((data) => {
            loadData();
          });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
    },
    {
      title: "Contact Name",
      dataIndex: "contactName",
      key: "contactName",
      sorter: (a, b) => a.contactName.localeCompare(b.contactName),
    },
    {
      title: "City",
      dataIndex: "address",
      key: "city",
      render: (text, record) => <span>{record.address ? record.address.city: "-"}</span>
    },
    {
      title: "Delete",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <Button onClick={() => deleteProduct(id)} type="primary" danger>
          Delete
        </Button>
      ),
    },
    // {
    //     title: 'Addres',
    //     children: [
    //       {
    //         title: 'City',
    //         dataIndex: 'address',
    //         key: 'city',
    //        // width: 200,
    //       },
    //     ],
    //   },
  ];

  const loadData = () => {
    axios.get("https://northwind.vercel.app/api/suppliers").then((res) => {
      setSupplier(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);


  const rowClassName = (record) => {
    if (record.address?.city == "London") {
        return "tomato"
    }
  };
  return (
    <>
        <Button type='primary' onClick={() => navigate('/addsupplier')}>Add</Button>
      <Table
        dataSource={supplier}
        columns={columns}
        rowClassName={rowClassName}
        pagination={{
          pageSize: 5,
        }}
      />
    </>
  );
};

export default Supplier;
