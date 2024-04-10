"use client";
import { useState } from "react";

export default function Home() {
  const [E, setE] = useState(0.0);
  const [R1, setR1] = useState(0.0);
  const [R2, setR2] = useState(0.0);
  const [n, setn] = useState(0.0);
  const [Is, setIs] = useState(0.000000001);

  const [i, setI] = useState([""]);
  const [v, setV] = useState([0]);

  const getI = (v) => {
    return (E - v) / (R1 + R2);
  };
  const getV = (i) => {
    return 0.025 * n * Math.log(i / Is);
  };
  const compute = () => {
    let tv = v[i.length - 1];
    setI([...i, getI(tv)]);
    let ti = getI(tv);
    setV([...v, getV(ti)]);
    console.log(i, v);
  };

  return (
    <div className="h-screen w-screen flex justify-around items-center gap-3">
      <div className="flex flex-col gap-5">
        <div>
          {" "}
          <div className="text-xl">E:</div>
          <input
            className="input input-bordered"
            type="text"
            onChange={(e) => {
              setE(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="text-xl">R1:</div>
          <input
            className="input input-bordered"
            type="text"
            onChange={(e) => {
              setR1(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="text-xl">R2:</div>
          <input
            className="input input-bordered"
            type="text"
            onChange={(e) => {
              setR2(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="text-xl">n:</div>
          <input
            className="input input-bordered"
            type="text"
            onChange={(e) => {
              setn(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="text-xl">Is:</div>
          <input
            placeholder="0.000000001"
            className="input input-bordered"
            type="text"
            onChange={(e) => {
              setIs(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            compute();
          }}
          className="btn btn-block"
        >
          ALLTHE DAY AND ALLTHENIGHT
        </button>
      </div>
      <div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>I</th>
                  <th>V</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {i.map((x) => {
                  return (
                    <tr key={x}>
                      <th>{i.indexOf(x)}</th>
                      <td>{x}</td>
                      <td>{v[i.indexOf(x)]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
