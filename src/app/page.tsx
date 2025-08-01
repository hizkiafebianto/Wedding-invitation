import { Suspense } from 'react';
import Front from '@/components/front';

export default function Home() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Front />
        </Suspense>
    );
}
