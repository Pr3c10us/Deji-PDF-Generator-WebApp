import React, { useEffect, useState } from "react";

const FillDetails = ({
  setDetails,
  details,
  setModal,
  detailValue,
  setDetailValue,
  title,
}) => {
  useEffect(() => {
    const d = details.map((detail) => {
      return {
        det: detail,
        val: "",
      };
    });

    setDetailValue(d);

    return () => {};
  }, [details]);

  return (
    <section className="flex w-full flex-col gap-10 rounded-[32px] bg-white px-12 py-12">
      <h3
        onClick={() => setModal(1)}
        className="flex cursor-pointer items-center text-sm font-medium underline"
      >
        {/* arrow without horizontal line svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7"
          />
        </svg>
        Go Back
      </h3>

      <h1 className="text-3xl font-semibold capitalize">
        Fill in the details for: {title}
      </h1>
      <div className="grid gap-4 md:grid-cols-2">
        {detailValue.map((detail, index) => (
          <div key={index + "ss"}>
            <label className="text-sm font-medium capitalize">
              {detail.det}
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-2 border-gray-200 px-2 py-2.5 capitalize outline-none"
              placeholder={`Enter ${detail.det}`}
              value={detail.val}
              onChange={(e) => {
                const dnewDets = detailValue.map((d) => {
                  if (d.det === detail.det) {
                    return { det: detail.det, val: e.target.value };
                  }
                  return d;
                });
                setDetailValue(dnewDets);
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex w-full justify-end">
        <button
          onClick={() => {
            const isFilled = detailValue.every((detail) => detail.val !== "");
            if (!isFilled) return;
            setModal(3);
          }}
          disabled={details.length === 0}
          className="flex items-center justify-center gap-2 rounded bg-green-600 px-6 py-2.5 font-medium text-white"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default FillDetails;
