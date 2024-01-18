import React, { useState } from "react";

const AddDetails = ({ setDetails, details, setModal,setTitle,title }) => {
  const [detail, setDetail] = useState("");
  return (
    <section className=" flex w-full flex-col gap-10 rounded-[32px] bg-white px-12 py-12">
      <div className="space-y-2">
        <h2 className=" text-xl font-semibold">Title</h2>

        <input
          type="text"
          placeholder="Enter Title of Document"
          className="w-full rounded-lg border-2 border-gray-200 px-2 py-2.5 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <h2 className=" text-xl font-semibold">Add Details</h2>
        <div className="w-full space-y-12 rounded-[16px] border-2 border-gray-200 px-16 py-8">
          <form
            className="space-y-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (detail === "") return;
              if (details.includes(detail)) return;
              setDetails([...details, detail]);
              setDetail("");
            }}
          >
            <input
              type="text"
              placeholder="Enter Details"
              className="w-full rounded-lg border-2 border-gray-200 px-2 py-2.5 outline-none"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-lg bg-gray-200 px-2 py-2.5 font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add
            </button>
          </form>

          {details.length > 0 && (
            <div>
              {details.map((detail, index) => (
                <div
                  key={index + "ss"}
                  className="flex items-center justify-between border-b border-gray-200 px-2 py-2.5 font-medium capitalize"
                >
                  <p>{detail}</p>
                  <button
                    onClick={() => {
                      setDetails(details.filter((e) => e !== detail));
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="{2}"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full; flex justify-end">
        <button
          onClick={() => {
            if (details.length === 0 || !title) return;
            setModal(2);
          }}
          disabled={details.length === 0 || !title}
          className="flex items-center justify-center rounded-lg bg-black px-4 py-2.5 font-medium text-white"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default AddDetails;
