import React from "react";

const Latest_Transaction = () => {
  const blocks = [
    {
      id: "0x84d3987b91...",
      image:
        "https://res.cloudinary.com/dnyrrcacd/image/upload/v1715236233/bscscan/Icon_gs7pzk.png",
      validator: "0x1cFDBd2d...",
      to: "0x00000000...000001000",
      amount: 0.03715,
      timestamp: 8,
    },
    {
      id: "0x3e140d17e1...",
      image:
        "https://res.cloudinary.com/dnyrrcacd/image/upload/v1715236233/bscscan/Icon_gs7pzk.png",
      validator: "OxaBBDF48A...2aeD911C1",
      to: "0xE3bA0072...19D72BaF4",
      amount: 0,
      timestamp: 8,
    },
    {
      id: "0x3caf8843924...",
      image:
        "https://res.cloudinary.com/dnyrrcacd/image/upload/v1715236233/bscscan/Icon_gs7pzk.png",

      validator: "0xe43e75d7...69515E1f1",
      to: "0x66b16620...5709c727b",
      amount: 0,
      timestamp: 8,
    },
    {
      id: "0xf01a964387c...",
      image:
        "https://res.cloudinary.com/dnyrrcacd/image/upload/v1715236233/bscscan/Icon_gs7pzk.png",

      validator: "0x6351d64C...081F040db",
      to: "0x175fAcDD...26758A4dA",
      amount: 0,
      timestamp: 8,
    },
    {
      id: "0x911b720250...",
      image:
        "https://res.cloudinary.com/dnyrrcacd/image/upload/v1715236233/bscscan/Icon_gs7pzk.png",

      validator: "0xA620a52A... F74bF9f34",
      to: "0x66b16620...5709c727b",
      amount: 0,
      timestamp: 8,
    },
    {
      id: "0x4b3c2d2b5c...",
      image:
        "https://res.cloudinary.com/dnyrrcacd/image/upload/v1715236233/bscscan/Icon_gs7pzk.png",

      validator: "0x853df78a...a8B6e569b",
      to: "0x66616620...5709c727b",
      amount: 0,
      timestamp: 8,
    },
  ];

  return (
    <div className=" x-auto mt-4 font-Roboto border-2 p-9 pb-5 rounded-xl overflow-x-auto">
      {" "}
      {/* w-9/12 */}
      <div className="flex flex-row justify-between items-center">
        <div className="text-xl mb-4 font-semibold ml-2">
          Latest Transactions
        </div>
        <button className="flex mb-4 mr-5 border-2 py-2 px-2 rounded-xl font-normal">
          <img
            className="mr-2 mt-1 h-4"
            src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1715226324/bscscan/Icon2_wavnt0.png"
            alt=""
          />
          customize
        </button>
      </div>
      <div className="flex flex-col">
        {blocks.map((block) => (
          <div
            className="flex items-center justify-between border-t-2 border-gray-200 rounded-md p-4 py-3"
            key={block.id}
          >
            <div className="flex text-xl">
              <div className="flex flex-row">
                <img className="w-6 h-6 mt-4" src={block.image} alt="" />
                <div className="flex flex-col pl-4">
                  <div className="mr-2 text-blue-cust font-normal">
                    {block.id}
                  </div>
                  <div className="flex mr-2 text-gray-500">
                    {block.timestamp} secs ago
                  </div>
                </div>
              </div>
              <div className="flex flex-col mx-24">
                <div className="text-l flex flex-row justify-content: space-between">
                  <div className="flex flex-row pl-2 pr-2">From </div>
                  <div className="text-blue-cust">{block.validator}</div>
                </div>
                <div className="flex flex-row pl-2">
                  To
                  <div className="text-blue-cust pl-1">{block.to}</div>
                  {/* <div className="text-gray-500 pl-2">
                    in {block.seconds} secs
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex">
              <button className="flex border-2 px-2 py-2 rounded-xl ml-auto">
                {" "}
                {block.amount} MB{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center border-t-2">
        <div
          href="#"
          className="text-gray-500 font-bold flex items-center justify-center mt-4"
        >
          VIEW ALL BLOCKS →
        </div>
      </div>
    </div>
  );
};

export default Latest_Transaction;
