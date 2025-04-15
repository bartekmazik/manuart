import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, message } = body;

  if (!email || !message) {
    return new Response(
      JSON.stringify({ message: "Brak emaila lub wiadomości" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  await prisma.message.create({
    data: {
      email: email,
      message: message,
    },
  });
  return new Response(JSON.stringify({ message: "Wiadomość wysłana!" }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
