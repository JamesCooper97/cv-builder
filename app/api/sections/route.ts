import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Helper to get JSON file path
const getFilePath = () => path.join(process.cwd(), "data", "sections.json");

// Helper to read JSON data
const readJSONFile = async () => {
  const data = await fs.readFile(getFilePath(), "utf-8");
  return JSON.parse(data);
};

// Helper to write JSON data
const writeJSONFile = async (data: any) => {
  await fs.writeFile(getFilePath(), JSON.stringify(data, null, 2));
};

// GET request: Fetch all sections
export async function GET() {
  const sections = await readJSONFile();
  console.log("Sections: " + JSON.stringify(sections))
  return NextResponse.json({ sections }, { status: 200 });
}

// POST request: Update the sections
export async function POST(req: Request) {
  const updatedSections = await req.json();
  console.log("Sections: " + JSON.stringify(updatedSections))
  await writeJSONFile(updatedSections);
  return NextResponse.json({ message: "Sections updated" }, { status: 200 });
}
