import React from "react";

const sectiom = () => {
  const blocks = [
    // {
    //   id: 38341906,
    //   image:
    //     "https://res.cloudinary.com/dnyrrcacd/image/upload/v1715225402/bscscan/Icon_nk6dme.png",
    //   validator: "0x1cFDBd2d...731F38164",
    //   reward: 0.03715,
    //   txns: 95,
    //   timestamp: "8 secs ago",
    //   seconds: 3,
    // },
    {
      id: 38341905,
      image:
        "https://res.cloudinary.com/dnyrrcacd/image/upload/v1715225402/bscscan/Icon_nk6dme.png",
      validator: "0x1579ca96...1AD393380",
      reward: 0.10131,
      txns: 294,
      timestamp: "11 secs ago",
      seconds: 3,
    },
    {
      id: 38341904,
      image:
        "https://res.cloudinary.com/dnyrrcacd/image/upload/v1715225402/bscscan/Icon_nk6dme.png",
      validator: "0xfC1004C0...20EB304a2",
      reward: 0.03221,
      txns: 91,
      timestamp: "14 secs ago",
      seconds: 3,
    },
    {
      id: 38341903,
      image:
        "https://res.cloudinary.com/dnyrrcacd/image/upload/v1715225402/bscscan/Icon_nk6dme.png",
      validator: "0xF8de5e61...0332811bf",
      reward: 0.05301,
      txns: 237,
      timestamp: "17 secs ago",
      seconds: 3,
    },
    {
      id: 38341902,
      image:
        "https://res.cloudinary.com/dnyrrcacd/image/upload/v1715225402/bscscan/Icon_nk6dme.png",
      validator: "Validator: HashQu...",
      reward: 0.12229,
      txns: 176,
      timestamp: "20 secs ago",
      seconds: 3,
    },
    {
      id: 38341901,
      image:
        "https://res.cloudinary.com/dnyrrcacd/image/upload/v1715225402/bscscan/Icon_nk6dme.png",
      validator: "0xCcB42A9b...E78A84577",
      reward: 0.05879,
      txns: 225,
      timestamp: "23 secs ago",
      seconds: 3,
    },
  ];

  return (
    <div className=" x-auto mt-4 font-Roboto border-2 p-9 pb-5 rounded-xl overflow-x-auto">
      {" "}
      {/* w-9/12 */}
      <div className="flex flex-row justify-between items-center">
        <div className="text-xl mb-4 font-semibold ml-2">Latest Blocks</div>
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
            className="flex items-center justify-between border-t-2 border-gray-200 rounded-md p-4 py-5"
            key={block.id}
          >
            <div className="flex text-xl">
              <div className="flex flex-row">
                <img className="w-6 h-6 mt-4" src={block.image} alt="" />
                <div className="flex flex-col pl-4">
                  <div className="mr-2 text-blue-cust font-normal">
                    {block.id}
                  </div>
                  <div className="mr-2 text-gray-500">{block.timestamp}</div>
                </div>
              </div>
              <div className="flex flex-col mx-24">
                <div className="text-l flex flex-row justify-content: space-between">
                  <div className="flex flex-row pl-2 pr-2">Validated By </div>
                  <div className="text-blue-cust">{block.validator}</div>
                </div>
                <div className="flex flex-row pl-2">
                  <div className="text-blue-cust">{block.txns} Txns</div>
                  <div className="text-gray-500 pl-2">
                    in {block.seconds} secs
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <button className="border-2 px-2 py-2 rounded-xl">
                {" "}
                {block.reward.toFixed(5)} BNB{" "}
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

export default sectionn;
