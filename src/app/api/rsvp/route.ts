// app/api/rsvp/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();

    // Validasi sederhana (hindari spam kosong)
    if (!body.name || !body.phone || !body.address || !body.status || !body.wedding_id) {
        return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    try {
        const res = await fetch('https://uu.seketik.com/api/rsvp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        return NextResponse.json({ message: 'Server error', error }, { status: 500 });
    }
}
