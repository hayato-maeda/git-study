import React, { useRef, useState } from "react";
// import * as XLSX from "xlsx";

const NewTodo: React.FC = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [excelData, setExcelData] = useState("");

  const handleReadFile = (fileObj: File) => {
    // console.log(fileObj);
    const reader = new FileReader();
    reader.readAsDataURL(fileObj);
    reader.onload = () => {
      const val = reader.result;
      console.log(val);
    }
    console.log(fileObj);
    if (fileObj) {
      setFileName(fileObj.name);
      fileObj.arrayBuffer().then((buffer) => {
        // const workbook = XLSX.read(buffer, { type: "buffer", bookVBA: true });
        // const firstSheetName = workbook.SheetNames[0];
        // const worksheet = workbook.Sheets[firstSheetName];
        // const data = XLSX.utils.sheet_to_json(worksheet);
        // setExcelData(JSON.stringify(data));
      });
    }
  };

  return (
    // <form onSubmit={todoSubmitHandler}>
    <form>
      <div>
        {!!fileName && <span>ファイル名：{fileName}</span>}
        <label htmlFor="todo-text">Todo内容</label>
        <input
          type="file"
          id="todo-text"
          ref={fileInput}
          onChange={(e) => {
            e.preventDefault();
            handleReadFile(e.currentTarget.files![0]);
          }}
        />
      </div>
      <button type="submit">TODO追加</button>
      {!!excelData && (
        <div
          style={{
            border: "solid 1px #444",
            marginTop: "10px",
            padding: "10px",
          }}
        >
          {excelData}
        </div>
      )}
    </form>
  );
};

export default NewTodo;
