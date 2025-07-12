import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const API_URL = process.env.API_URL || "http://localhost:8000/api/predict";

  try {
    const formData = await request.formData();

    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error calling backend API:", error);
    return NextResponse.json(
      { error: "Failed to classify image" },
      { status: 500 }
    );
  }
}
