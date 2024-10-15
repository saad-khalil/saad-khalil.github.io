import gsap from "gsap";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
export const animatePageIn = () => {
    console.log("starting in animation")
    const transitionElement = document.getElementById("transition-element");

    if (transitionElement) {
        console.log("animation wrapper exists in")
        const tl = gsap.timeline();

        tl.set(transitionElement, {
            xPercent: 0,
        })
            .to(transitionElement, {
                xPercent: 100,
                duration: 0.8,
            })
            .to(
                transitionElement,
                {
                    borderTopLeftRadius: "50vh",
                    borderBottomLeftRadius: "50vh",
                    duration: 0.4,
                },
                "<"
            );
    }
};


export const animatePageOut = () => {
    console.log("starting out animation")
    const animationWrapper = document.getElementById("transition-element");

    if (animationWrapper) {
        console.log("animation wrapper exists out")
        const tl = gsap.timeline();

        tl.set(animationWrapper, {
            xPercent: -100,
            borderTopRightRadius: "50vh",
            borderBottomRightRadius: "50vh",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
        })
            .to(animationWrapper, {
                xPercent: 0,
                duration: 0.8,
            })
            .to(
                animationWrapper,
                {
                    borderTopRightRadius: "0",
                    borderBottomRightRadius: "0",
                    duration: 0.4,
                },
                "<"
            );
    }
};