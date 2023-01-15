import { Form1, Form2 } from "./Form1";
import { useState } from "react";

const FormRender = () => {
  const [form, setForm] = useState(true);
  return (
    <div className="w-full h-screen  flex flex-col items-center justify-center">
      {form ? <Form1 /> : <Form2 />}
      <button
        onClick={() => setForm(!form)}
        className="mt-24 bg-orange-600 p-3 px-5 text-white font-semibold hover:shadow-[0px_0px_74px_13px_rgba(234,88,12,0.75)]"
      >
        Switch Form
      </button>
    </div>
  );
};

export default FormRender;
