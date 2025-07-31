import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;

    try {
        const res = await fetch(`https://uu.seketik.com/api/rsvp/${id}`, {
            headers: {
                // jika perlu Authorization token
                // 'Authorization': `Bearer ${process.env.RSVP_API_KEY}`,
                Accept: 'application/json',
            },
        });

        if (!res.ok) {
            return NextResponse.json({ error: 'RSVP not found' }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ error: 'Server error', err }, { status: 500 });
    }
}
