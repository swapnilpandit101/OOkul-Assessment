// 📜 src/utils/parseXML.js
import { XMLParser } from "fast-xml-parser";

const parseXML = (xmlString) => {
  try {
    const parser = new XMLParser({
      ignoreAttributes: false,
      parseTagValue: true,
    });

    return parser.parse(xmlString);
  } catch (error) {
    console.error("Error parsing XML:", error);
    return null;
  }
};

export default parseXML;
