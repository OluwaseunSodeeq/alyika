"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import Image from "next/image";

export default function MeetTheTeamTable() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const sheetURL =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTnu-jzKEnWbgElEg5iL7HTpdkyeuJBjCUCzeAYraqy-vKvU1-uFg8CCA_TkAuh9Jdp8F8xyIKtcvMM/pub?gid=0&single=true&output=csv";

    fetch(sheetURL)
      .then((res) => res.text())
      .then((csv) => {
        const parsed = Papa.parse(csv, { header: true });
        setData(parsed.data);
      });
  }, []);

  return (
    <div>
      <div className="p-4 ">
        <h2 className="text-center  font-montserrat font-bold text-xl xl:text-[32px] 2xl:text-[40px] text-black">
          Meet the team
        </h2>
      </div>
      <div className="w-full px-4 py-6">
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full text-sm text-left border border-gray-200">
            <thead className="bg-dark-green text-white">
              <tr>
                <th className="p-4">S/N</th>
                <th className="p-4">First Name</th>
                <th className="p-4">Last Name</th>
                <th className="p-4">Preferred Name</th>
                <th className="p-4">Role</th>
              </tr>
            </thead>

            <tbody>
              {data.map((person, index) => (
                <tr
                  key={index}
                  onClick={() => setSelected(person)}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                  } hover:bg-green-50 cursor-pointer`}
                >
                  <td className="px-4 py-3">{person["S/N"]}</td>
                  <td className="px-4 py-3">{person["First Name"]}</td>
                  <td className="px-4 py-3">{person["Last Name"]}</td>
                  <td className="px-4 py-3">{person["Preferred Name"]}</td>
                  <td className="px-4 py-3">{person["Role"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selected && (
        <ProfileOverlay person={selected} close={() => setSelected(null)} />
      )}
    </div>
  );
}

function ProfileOverlay({ person, close }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[90%] max-w-md rounded-2xl shadow-2xl p-6 text-center relative animate-fadeIn"
      >
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-4 right-5 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Profile Image */}
        <div className="w-auto h-auto flex justify-center mb-4 border-2">
          <Image
            src="/Intense-seun.png"
            width={200}
            height={200}
            alt="profile"
            priority
            className=" object-contain border-2 border-dark-green p-1 "
          />
        </div>

        {/* Name */}
        <h2 className="text-xl font-bold text-gray-800">
          {person["First Name"]} {person["Last Name"]}
        </h2>
        {/* Official Role */}
        <div className="mt-3">
          <p className="font-semibold text-gray-800">{person["Role"]}</p>
        </div>

        {/* Preferred Name */}
        {person["Preferred Name"] && (
          <p className="text-gray-500 text-sm mb-2">
            Preferred to be called: {person["Preferred Name"]}
          </p>
        )}

        {/* Vibe Role */}
        <div className="mt-3">
          <p className="font-semibold text-green-700">{person["Vibe Role"]}</p>
        </div>
      </div>
    </div>
  );
}
