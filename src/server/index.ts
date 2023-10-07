import axios from "axios";
import fs from "fs";
import FormData from "form-data";

const url = "http://localhost:4005/";

async function formatXlsxinJson(filePath: fs.PathLike) {
  try {
    const formData = new FormData();
    formData.append("file", fs.createReadStream(filePath));

    const response = await axios.post(`${url}spreadsheet/`, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    return response.data;
  } catch (error) {
    console.error("ERROR", error);
  }
}

export { formatXlsxinJson };
