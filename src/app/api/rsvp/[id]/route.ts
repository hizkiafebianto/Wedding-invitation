// src/app/api/rsvp/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, { params }: Params) {
  const id = params.id;

  try {
    const res = await fetch(`https://uu.seketik.com/api/rsvp/${id}`, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'RSVP not found' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: 'Server error', message: String(err) }, { status: 500 });
  }
}
