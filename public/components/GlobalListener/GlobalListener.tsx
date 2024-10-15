// "use client"
//
// import {useEffect, useRef, useState} from 'react';
// import {usePathname, useRouter} from 'next/navigation'
// import {animatePageIn, animatePageOut} from "@/public/animations/animations";
//
// function sleep(ms: number): Promise<void> {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }
// export default function GlobalListener() {
//     const pathname = usePathname();
//     const router = useRouter()
//     const previousPath = useRef(null);
//
//     useEffect(() => {
//         if (previousPath.current !== pathname) {
//             const handleTransition = async () => {
//                 const transitionElement = document.createElement('div');
//                 transitionElement.id = 'transition-element';
//                 transitionElement.className = 'w-screen h-screen bg-[#FF2F00] z-100 fixed top-0 left-0';
//                 document.body.appendChild(transitionElement);
//
//                 animatePageOut();
//
//                 await sleep(1000);
//
//                 // @ts-ignore
//                 previousPath.current = pathname;
//
//
//                 router.push(pathname)
//
//                 animatePageIn();
//
//                 await sleep(1000);
//
//                 document.body.removeChild(transitionElement);
//             };
//
//             handleTransition();
//             // Route change detected! Trigger animation.
//             // @ts-ignore
//
//         }
//     }, [pathname, router]); // Dependency on pathname for re-evaluation on change
//
//     return null;
//
// }