import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const url = process.env.URL_CONVERT_SPREADSHEET;

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
