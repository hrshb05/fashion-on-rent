import React, { useState } from "react";
import Images from "./images.js";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "../Components/Header.js";
import Footer from "../Components/footer.js";
import Card from "../Components/Card.js";

const View = () => {
  const [selected, setselected] = useState(Images[0]);

  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <>
      <Header />
      <div className="bg-blue-light mx-12 mt-6 rounded-2xl pt-2 flex flex-wrap">
        <div>
          <img
            src={selected}
            alt="selected"
            className="ml-28 w-72 rounded-lg h-96 absolute "
          />
          <div>
            {Images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt = " "
                className={
                  selected === img
                    ? "border-2 border-blue-400 w-20 h-20 mb-4 rounded-md mt-2 ml-4"
                    : "w-20 h-20 mb-4 mt-2 rounded-md ml-4"
                }
                onClick={() => setselected(img)}
              />
            ))}
          </div>
        </div>
        <div className=" ml-80 pl-6 mb-10 pr-32 w-3/5 rounded-xl border-2 border-gray-100 bg-white">
          <h1 className=" mt-5 text-2xl font-semibold tracking-wider">
            Fawn Sherwani with Red Churidar
          </h1>
          <p className="text-2xl font-semibold mt-5 tracking-wider ">
            Rent &nbsp; : &nbsp;₹ 500 <span className="text-sm">/ day</span>
          </p>
          <p className="mt-5">
            {" "}
            <span className="text-xl font-semibold tracking-wider ">
              Sizes :{" "}
            </span>
            <br />
            <br />
            <span className=" ml-12">
              <input
                type="radio"
                name="size"
                value="small"
                id="1"
                className="hidden cl m-2"
              />
              <label
                for="1"
                className="w-10 h-10 bg-blue-100 "
                class="cl px-3 py-1 border border-black m-2 bg-gray-100">
                S
              </label>
              <input
                type="radio"
                name="size"
                className="hidden"
                id="2"
                value="medium"
              />
              <label
                for="2"
                className="w-10 h-10  "
                class="cl px-3 py-1 border border-black m-2 bg-gray-100">
                M
              </label>
              <input
                type="radio"
                name="size"
                className="hidden"
                id="3"
                value="large"
              />
              <label
                for="3"
                className="w-10 h-10 "
                class="cl px-3 py-1 border border-black m-2 bg-gray-100">
                L
              </label>
              <input
                type="radio"
                name="size"
                className="hidden"
                id="4"
                value="large"
              />
              <label
                for="4"
                className="w-10 h-10 "
                class="cl px-3 py-1 border border-black m-2 bg-gray-100">
                XL
              </label>
              <input
                type="radio"
                name="size"
                className="hidden"
                id="5"
                value="large"
              />
              <label
                for="5"
                className="w-10 h-10 "
                class="cl px-3 py-1 border border-black m-2 bg-gray-100">
                XXL
              </label>
              <input
                type="radio"
                name="size"
                className="hidden"
                id="6"
                value="large"
              />
              <label
                for="6"
                className="w-10 h-10"
                class="cl px-3 py-1 m-2 border border-black bg-gray-100">
                3XL
              </label>
            </span>
          </p>

          <p className="text-center mt-6">By Panchee's Closet</p>
          <p className="tracking-wider text-lg ml-4 font-semibold mt-4">
            Availabilty Calender -
            <div className="mt-5">
              <Calendar
                selectRange
                onChange={onChange}
                value={date}
                className="mb-6 "
              />

              <input
                type="text"
                value={date}
                className="border ml-20 rounded-lg w-40 bg-red-light px-5 py-1 border-gray-400"
              />
              <span className="mx-6"> to</span>
              <input
                type="text"
                value={date}
                className="border ml-4 w-40 bg-red-light rounded-lg px-5 py-1 border-gray-400"
              />

              <button
                type="submit"
                className="mt-8 ml-60 mb-6 bg-red-light rounded-lg p-1 px-4 border-2 border-gray-300">
                {" "}
                Claim Now{" "}
              </button>
            </div>
          </p>
        </div>
        <div className="">
          <div className="bg-white -mt-96 w-80 py-2 px-8 text-xs leading-loose ml-10 rounded-2xl tracking-wider ">
            <p className="font-bold">Product Description:</p>
            <p>
              <span className="font-semibold">Color:</span> Fawn
            </p>
            <p>
              <span className="font-semibold">Garment Type :</span> Sherwani
            </p>
            <p>
              the product price is inclusive of : 1 Sherwani, 1 Biege Churidar
            </p>
            <p className="font-semibold">Style Tip :</p>
            <p>Team this outfit with a red shawl for a royal demeanour</p>
          </div>
        </div>
      </div>

      <div className="flex mt-10 mb-8 justify-between  text-center w-content m-8 border border-gray-400 rounded-xl mx-10">
        <div className="p-4 ml-16 leading-loose">
          <p className="mb-2">
            <span className="text-xl pb-4 font-semibold tracking-wider">
              {" "}
              Rental Address:{" "}
            </span>
            <br />
          </p>
          <p className="mb-2">
            {" "}
            570/550, Virat Nagar, Alambagh <br /> Lucknow 226005
          </p>

          <p className="text-sm">The product will be deliver by shopkeeper</p>
        </div>
        <div className="p-8 mr-16 -mt-3  leading-loose">
          <p className="text-xl pb-4 mb-4 font-semibold tracking-wider">
            For Additonal Details :
          </p>
          <button
            type="submit"
            value="chat"
            className=" text-lg font-semibold bg-blue-b_light hover:bg-blue-light py-1 px-3 rounded-lg ">
            Chat Now
          </button>
        </div>
      </div>

      <div className="absolute top-30 left-20 my-3 ">
        <p className="mt-6 font-sans tracking-wide text-3xl font-semi-bold ">
          Similar Items
        </p>
      </div>
      <div className="flex mx-16 justify-around mt-20 mb-5">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default View;
