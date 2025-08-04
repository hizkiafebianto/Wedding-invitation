import { Suspense } from 'react';
import Front from '@/components/front';

export default function Home() {
    return (
        <Suspense fallback={null}>
            <Front />
        </Suspense>
    );
}
