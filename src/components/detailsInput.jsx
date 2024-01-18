import React from "react";

const DetailsInput = (setDetailValue, detail, detailValue) => {
  return (
    <div>
      <input
        type="text"
        placeholder={`Enter ${detail}`}
        className="w-full rounded-lg border-2 border-gray-200 px-2 py-2.5 outline-none"
        value={detailValue}
        onChange={(e) => {
          const newDetailValue = detailValue.map((detail) => {
            if (detail.detail === detail)
              return { ...detail, value: e.target.value };
            return detail;
          });
          setDetailValue(newDetailValue);
        }}
      />
    </div>
  );
};

export default DetailsInput;
