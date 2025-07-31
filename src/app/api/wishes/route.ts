import { NextRequest, NextResponse } from 'next/server';

const API_BASE = 'https://uu.seketik.com/api/wishes';
const API_KEY = process.env.WISHES_API_KEY || ''; // set di .env.local

export async function GET() {
    try {
        const res = await fetch(API_BASE, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`, // kalau pakai token
            },
        });

        if (!res.ok) {
            return NextResponse.json({ error: 'Failed to fetch' }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ error: 'Server error', err }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const res = await fetch(API_BASE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify(body),
        });

        const data = await res.json();

        if (!res.ok) {
            return NextResponse.json(data, { status: res.status });
        }

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ error: 'Server error', err }, { status: 500 });
    }
}
