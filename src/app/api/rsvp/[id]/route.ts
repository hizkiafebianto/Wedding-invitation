import { NextRequest, NextResponse } from 'next/server';

interface Guest {
    name: string;
    phone: string;
    address: string;
    amount: number;
    status: string;
    wedding_id: number;
}

export async function GET(
    _req: NextRequest,
    context: { params: { id: string } }
) {
    const { id } = await context.params;

    try {
        const res = await fetch('https://uu.seketik.com/api/rsvp');
        if (!res.ok) throw new Error("Failed to fetch guest list");

        const allGuests: Guest[] = await res.json();

        const toSlug = (name: string) => name.toLowerCase().replace(/ /g, '-');
        const guest = allGuests.find((item) => toSlug(item.name) === id);

        if (!guest) {
            return NextResponse.json({ error: 'RSVP not found' }, { status: 404 });
        }

        // langsung return guest yang sudah ditemukan
        return NextResponse.json(guest);
    } catch (err) {
        return NextResponse.json(
            { error: 'Server error', message: (err as Error).message },
            { status: 500 }
        );
    }
}
