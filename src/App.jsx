import { useState } from "react";
import AddDetails from "./components/addDetails";
import FillDetails from "./components/fillDetails";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./components/viewDetails";

function App() {
  const [details, setDetails] = useState([]);
  const [modal, setModal] = useState(1);
  const [detailValue, setDetailValue] = useState([]);
  const [title, setTitle] = useState("");

  return (
    <main className="fixed inset-0 flex flex-col items-center justify-center py-4 bg-gray-100 px-[15vw]">
      {modal === 1 && (
        <AddDetails
          setDetails={setDetails}
          details={details}
          setModal={setModal}
          setTitle={setTitle}
          title={title}
        />
      )}
      {modal === 2 && (
        <FillDetails
          setDetails={setDetails}
          details={details}
          setModal={setModal}
          detailValue={detailValue}
          setDetailValue={setDetailValue}
          title={title}
        />
      )}
      {modal === 3 && (
        <>
          <PDFViewer className="my-4 flex h-full w-full flex-col gap-10 rounded-[32px] bg-white px-12 py-12">
            <MyDocument
              setDetails={setDetails}
              details={details}
              setModal={setModal}
              detailValue={detailValue}
              setDetailValue={setDetailValue}
              title={title}
            />
          </PDFViewer>
          <h3
            onClick={() => {
              setModal(1);
              setDetails([]);
              setDetailValue([]);
              setTitle("");
            }}
            className="flex cursor-pointer items-center text-sm font-medium underline w-full "
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
            Restart
          </h3>
        </>
      )}
      <section className="flex items-center mt-4">
        {new Array(3).fill().map((_, index) => (
          <div
            key={index + "ss"}
            className={`mx-1 h-4 w-4 rounded-full ${modal === index + 1 ? "bg-gray-500" : "border border-gray-500"}`}
          ></div>
        ))}
      </section>
    </main>
  );
}

export default App;
