import React, { useState } from "react";
import "./Dashboard.css";
import Select from "react-select";
import ReactApexChart from "react-apexcharts";
import BarchartComponent from "./components/bar";
import BasicTable from "./components/table";
const Dashboard = () => {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );
  const chartData = {
    series: [8, 65, 12, 15],
    options: {
      chart: {
        type: "pie",
      },

      labels: ["Customer1", "Customer2", "Customer3", "Customer4"],
    },
  };
  const options = [
    { value: "quaterly", label: "quaterly" },
    { value: "yearly", label: "yearly" },
    { value: "monthly", label: "monthly" },
    { value: "daily", label: "daily" },
  ];
  const changeStyle = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <div>
      <div id="page-top">
        {/*  <!-- Page Wrapper --> */}
        <div id="wrapper">
          {/*  <!-- Sidebar --> */}
          <ul className={style} id="accordionSidebar">
            {/*  <!-- Sidebar - Brand --> */}
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="#"
            >
              <div className="sidebar-brand-text mx-3">Dashboard</div>
              <div className="text-center d-none d-md-inline">
                <button
                  className="rounded-circle border-0"
                  id="sidebarToggle"
                  onClick={changeStyle}
                ></button>
              </div>
            </a>

            {/*  <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </a>
            </li>

            {/*  <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i style={{color:"white"}} className="fas fa-fw fa-cog"></i>
                <span>Products</span>
              </a>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <a className="collapse-item" href="buttons.html">
                   Product 1
                  </a>
                  <a className="collapse-item" href="cards.html">
                  Product 2
                  </a>
                </div>
              </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i style={{color:"white"}} class="fa fa-users"></i>
                <span>Customers</span>
              </a>
              <div
                id="collapseUtilities"
                className="collapse"
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <a className="collapse-item" href="utilities-color.html">
                 Customer 1
                  </a>
                  <a className="collapse-item" href="utilities-border.html">
                   Customer 2
                  </a>
                </div>
              </div>
            </li>

            {/*  <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapsePages"
                aria-expanded="true"
                aria-controls="collapsePages"
              >
                <i style={{color:"white"}} className="fa fa-money"></i>
                <span>Income</span>
              </a>
              <div
                id="collapsePages"
                className="collapse"
                aria-labelledby="headingPages"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <a className="collapse-item" href="login.html">
                    Income gross
                  </a>
                  <a className="collapse-item" href="register.html">
                    Income increase
                  </a>
                 
                </div>
              </div>
            </li>
            <li className="nav-item">
            <a
                className="nav-link collapsed"
                href="#"
               
              >
               
               <i style={{color:"white"}} className="fa fa-envelope"></i>
                <span>Promote</span>
              </a> 
              </li>
              <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                
              >
                <i style={{color:"white"}} className="fa fa-money"></i>
                <span>Help</span>
              </a>
              </li>
          </ul>

          <div id="content-wrapper" className="d-flex flex-column">
            {/*  <!-- Main Content --> */}
            <div id="content">
              {/*  <!-- Topbar --> */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                  onClick={changeStyle1}
                >
                  <i className="fa fa-bars"></i>
                </button>

                <h3
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginLeft: "8px",
                  }}
                >
                  Hello Shahrukh <span>&#x1F44B;</span>
                </h3>

                {/*  <!-- Topbar Search --> */}
                <form className="d-none d-sm-inline-block form-inline ml-auto my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>

                {/*  <!-- Topbar Navbar --> */}
              </nav>
              {/*  <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                {/*  <!-- Content Row --> */}
                <div className="row">
                  {/*  <!-- Earnings (Monthly) Card Example --> */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <div className="circle-icon">
                              <div className="circle-background">
                                <i
                                  style={{ color: "green" }}
                                  className="fas fa-dollar-sign fa-4x"
                                ></i>
                              </div>
                            </div>
                          </div>
                          <div style={{ marginLeft: "45px" }} className="col">
                            <div className="font-weight-bold text-primary text-uppercase mb-1">
                              Earnings
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              $198K
                            </div>
                            <div className="text-xs mb-0 text-gray-800">
                              <span
                                style={{ color: "green", fontSize: "10px" }}
                              >
                                &uarr;
                              </span>{" "}
                              37.8% this month
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*  <!-- Earnings (Monthly) Card Example --> */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <div className="circle-icon">
                              <div className="circle-background">
                                <i
                                  style={{ color: "purple" }}
                                  className="fas fa-clipboard fa-4x"
                                ></i>
                              </div>
                            </div>
                          </div>
                          <div style={{ marginLeft: "45px" }} className="col">
                            <div className="font-weight-bold text-primary text-uppercase mb-1">
                              Orders
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              $2.4K
                            </div>
                            <div className="text-xs mb-0 text-gray-800">
                              &darr; 2% this month
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*  <!-- Earnings (Monthly) Card Example --> */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <div className="circle-icon">
                              <div className="circle-background">
                                <i
                                  style={{ color: "blue" }}
                                  className="fa fa-balance-scale fa-4x"
                                ></i>
                              </div>
                            </div>
                          </div>
                          <div style={{ marginLeft: "45px" }} className="col">
                            <div className="font-weight-bold text-primary text-uppercase mb-1">
                              Balance
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              $2.4K
                            </div>
                            <div className="text-xs mb-0 text-gray-800">
                              &darr; 2% this month
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*  <!-- Pending Requests Card Example --> */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <div className="circle-icon">
                              <div className="circle-background">
                                <i
                                  style={{ color: "red" }}
                                  className="fa fa-shopping-cart fa-4x"
                                ></i>
                              </div>
                            </div>
                          </div>
                          <div style={{ marginLeft: "45px" }} className="col">
                            <div className="font-weight-bold text-primary text-uppercase mb-1">
                              Total Sales
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              $89K
                            </div>
                            <div className="text-xs mb-0 text-gray-800">
                              &uarr; 11% this month
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  <!-- Content Row --> */}

                <div className="row">
                  {/*   <!-- Area Chart --> */}
                  <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-2">
                      {/*  <!-- Card Header - Dropdown --> */}
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <div>
                          <h6
                            style={{ color: "black" }}
                            className="m-0 font-weight-bold"
                          >
                            Overview
                          </h6>
                          <span>Monthly Earning</span>
                        </div>
                        <div style={{ width: "200px" }}>
                          <Select defaultValue={options[0]} options={options} />
                        </div>
                      </div>

                      {/*  <!-- Card Body --> */}
                      <div className="card-body">
                        <div className="chart-area">
                          <BarchartComponent
                            colors={["#00008B"]}
                            tooltip={true}
                            chartname="Monthly Earning"
                            data={[
                              20, 34, 67, 89, 12, 21, 90, 43, 57, 51, 31, 49,
                            ]}
                            categories={[
                              "Jan",
                              "Feb",
                              "Mar",
                              "Apr",
                              "May",
                              "June",
                              "July",
                              "Aug",
                              "Sept",
                              "Oct",
                              "Nov",
                              "Dec",
                            ]}
                            Chartheight="300"
                            Xaxisrotate={-45}
                            Chartwidth={"100%"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*  <!-- Pie Chart --> */}
                  <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                      {/*  <!-- Card Header - Dropdown --> */}
                      <div className="card-header py-3 align-items-center ">
                        <h6
                          style={{ color: "black" }}
                          className="m-0 font-weight-bold"
                        >
                          Customers
                        </h6>
                        <span> Customers that can buy products</span>
                      </div>
                      <div style={{ minHeight: "350px" }} className="card-body">
                        <ReactApexChart
                          options={chartData.options}
                          series={chartData.series}
                          type="pie"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{marginBottom:"20px"}} className="row">
                <BasicTable />
                </div>
              </div>
            </div>
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2021</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
