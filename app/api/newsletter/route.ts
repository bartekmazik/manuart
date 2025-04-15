import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  if (!email) {
    return new Response(JSON.stringify({ message: "Brak emaila" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  await prisma.newsletter.create({
    data: {
      email: email,
    },
  });
  return new Response(JSON.stringify({ message: "Wiadomość wysłana!" }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
