import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Sidebar } from "react-pro-sidebar";

import { Line, List, Text } from "../../components";

import "react-circular-progressbar/dist/styles.css";

const DashboardPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="sticky w-[250px] flex flex-col h-screen md:hidden justify-start overflow-auto top-0">
              <div className="bg-violet-400 flex flex-col h-screen gap-10 items-center justify-start p-5 w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-19px w-[87%] md:w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-17px py-17px w-full">
                    <Line className="bg-blue-A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-49%">
                      <Text
                        className="mt-3px text-base text-blue-A700_01"
                        size="txtGilroySemiBold16"
                      >
                        <i className="fa-solid fa-layer-group"></i> Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-9px w-31% md:w-full">
                      <div className="flex">
                        <Text
                          className="mt-3px text-base text-blue_gray-700"
                          size="txtGilroySemiBold16Bluegray700"
                        >
                          <i className="fa-solid fa-globe"></i> Product
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-49% md:w-full">
                      <Text
                        className="mt-5px text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        <i className="fa-solid fa-user"></i> Customer
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-9px w-31% md:w-full">
                      <Text
                        className="mt-3px text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        <i className="fa-solid fa-wallet"></i> Income
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-9px w-35% md:w-full">
                      <Text
                        className="mt-3px text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        <i className="fa-solid fa-ranking-star"></i> Promotion
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-42% md:w-full">
                      <Text
                        className="mt-1 text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        <i className="fa-solid fa-message"></i> Help
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Sidebar>

            <div className="flex flex-1 flex-col gap-[38px] items-start justify-start w-full">
              <Text
                className="text-gray-900 text-lg"
                size="txtGilroySemiBold18"
              >
                Welcome Aman
              </Text>
              <div className="flex flex-col gap-8 items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-md w-full">
                    <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                      <div className="flex flex-col gap-[21px] items-start justify-start pr-1 py-1">
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyMedium16"
                        >
                          Earning
                        </Text>
                        <Text
                          className="mb-[3px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                          size="txtGilroyBold24"
                        >
                          $198k
                        </Text>
                      </div>
                      <div className="!w-[70px] h-[70px] overflow-visible">
                        <CircularProgressbar
                          className="!w-[70px] h-[70px] overflow-visible"
                          value={29}
                          counterClockwise
                          strokeWidth={24}
                          styles={{
                            trail: { strokeWidth: 24, stroke: "#0061ff" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(19deg)",
                              stroke: "#e0ebff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-md w-full">
                    <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                      <div className="flex flex-col gap-[21px] items-start justify-start pr-1 py-1">
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyMedium16"
                        >
                          Orders
                        </Text>
                        <Text
                          className="mb-0.5 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                          size="txtGilroyBold24"
                        >
                          $2.4k
                        </Text>
                      </div>
                      <div className="!w-[70px] h-[70px] overflow-visible">
                        <CircularProgressbar
                          className="!w-[70px] h-[70px] overflow-visible"
                          value={29}
                          counterClockwise
                          strokeWidth={24}
                          styles={{
                            trail: { strokeWidth: 24, stroke: "#349765" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(19deg)",
                              stroke: "#d2efe0",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-md w-full">
                    <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                      <div className="flex flex-col gap-[22px] items-start justify-start pr-1 py-1">
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyMedium16"
                        >
                          Balance
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                          size="txtGilroyBold24"
                        >
                          $2.4k
                        </Text>
                      </div>
                      <div className="!w-[70px] h-[70px] overflow-visible">
                        <CircularProgressbar
                          className="!w-[70px] h-[70px] overflow-visible"
                          value={29}
                          counterClockwise
                          strokeWidth={24}
                          styles={{
                            trail: { strokeWidth: 24, stroke: "#ff6700" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(19deg)",
                              stroke: "#ffe1cc",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-md w-full">
                    <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                      <div className="flex flex-col gap-[21px] items-start justify-start pr-1 py-1">
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyMedium16"
                        >
                          Total Sales
                        </Text>
                        <Text
                          className="mb-[3px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                          size="txtGilroyBold24"
                        >
                          $89k
                        </Text>
                      </div>
                      <div className="!w-[70px] h-[70px] overflow-visible">
                        <CircularProgressbar
                          className="!w-[70px] h-[70px] overflow-visible"
                          value={29}
                          counterClockwise
                          strokeWidth={24}
                          styles={{
                            trail: { strokeWidth: 24, stroke: "#0061ff" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(19deg)",
                              stroke: "#e0ebff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col gap-4 items-center justify-start p-6 sm:px-5 rounded-md w-[71%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="text-gray-900 text-2xl"
                        size="txtGilroySemiBold18"
                      >
                        Overview
                      </Text>
                      <div className="flex sm:flex-1 flex-row gap-8 items-center justify-end w-[41%] sm:w-full">
                        <select name="drop" id="dropdown">
                          <option value="quarterly">Quarterly</option>
                          <option value="monthly">Monthly</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-row gap-6 items-center justify-start w-[36%] md:w-full">
                        <Text
                          className="sm:text-lg md:text-[26px] text-[28px] text-gray-700"
                          size="txtGilroyBold28"
                        >
                          Monthly Earning
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-row gap-[30px] items-end justify-between w-[94%] md:w-full">
                          <div className="flex flex-col gap-2.5 items-center justify-start w-[5%]">
                            <div className="bg-blue-200 h-[212px] rounded-[5px] w-full"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14"
                            >
                              Jan
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[132px] w-[5%]">
                            <div className="bg-blue-200 h-20 rounded-[5px] w-full"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14"
                            >
                              Feb
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-9 w-[5%]">
                            <div className="bg-blue-200 h-44 rounded-[5px] w-full"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14"
                            >
                              Mar
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[31px] w-[5%]">
                            <div className="bg-blue-200 h-[181px] rounded-[5px] w-full"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14"
                            >
                              Apr
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[157px] w-[5%]">
                            <div className="bg-blue-200 h-[55px] rounded-[5px] w-full"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14"
                            >
                              May
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[94px] w-[5%]">
                            <div className="bg-blue-200 h-[118px] rounded-[5px] w-full"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14"
                            >
                              Jun
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[49px] w-[5%]">
                            <div className="bg-blue-200 h-[163px] rounded-[5px] w-full"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14"
                            >
                              Jul
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[108px] w-[5%]">
                            <div className="bg-blue-A700 h-[220px] rounded-[5px] w-full"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14"
                            >
                              Aug
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[91px] w-[5%]">
                            <div className="bg-blue-200 h-[121px] rounded-[5px] w-full"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14"
                            >
                              Sep
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[58px] w-[5%]">
                            <div className="bg-blue-200 h-[154px] rounded-[5px] w-full"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14"
                            >
                              Oct
                            </Text>
                          </div>
                          <List
                            className="sm:flex-col flex-row gap-[30px] grid grid-cols-2 mt-[39px] w-[13%]"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                              <div className="bg-blue-200 h-[173px] rounded-[5px] w-full"></div>
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14"
                              >
                                Nov
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                              <div className="bg-blue-200 h-[173px] rounded-[5px] w-full"></div>
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14"
                              >
                                Des
                              </Text>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white-A700 flex  flex-1 flex-col items-center justify-start sm:ml-[0] p-20 sm:px-5 h-[426.667px] rounded-md ">
                    <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                      <div className="flex flex-col gap-[22px] items-start justify-start pr-1 py-1">
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyMedium16"
                        >
                          Customer that buy products
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                          size="txtGilroyBold24"
                        >
                          5,732
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[55px] items-center justify-start  md:w-full">
                        <div className="h-[171px] relative w-[171px]">
                          <div className="!w-[171px] h-[171px] m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[171px] h-[171px] m-auto overflow-visible"
                              value={34}
                              strokeWidth={14}
                              styles={{
                                trail: { strokeWidth: 4, stroke: "#0061ff" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(245deg)",
                                  stroke: "#eaecf0",
                                },
                              }}
                            ></CircularProgressbar>
                          </div>
                          <div class="absolute h-132 inset-0 flex flex-col justify-center items-center">
                            <div class="w-32 h-32 bg-gray-200 rounded-full overflow-visible"></div>
                            <div class="absolute inset-0 flex flex-col justify-center items-center">
                              <p class="text-blue-gray-400 text-lg font-bold">
                                65%
                              </p>
                              <p class="text-blue-gray-400 text-lg">
                                Total New Customers
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-[23px] sm:px-5 rounded-md w-full md:w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtGilroySemiBold18Black900"
                        >
                          Product Sell
                        </Text>
                      </div>
                      <table>
                        <tr>
                          <td>Product Name</td>
                          <td>Stock</td>
                          <td>Price</td>
                          <td>Total Sales</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
