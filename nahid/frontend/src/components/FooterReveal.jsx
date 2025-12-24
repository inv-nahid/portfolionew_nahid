import { useEffect, useRef, useState } from "react"

const FooterReveal = () => {
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect()
                }
            },
            { threshold: 0.4 }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={containerRef}
            className="bg-black text-white flex flex-col items-center justify-start py-24"
        >
            {/* Vertical Line */}
            <div className="relative flex items-start">
                <div className="w-[2px] h-[600px] sm:h-[840px] bg-transparent overflow-hidden">
                    <div
                        className={`
        w-full h-full bg-red-700 origin-top
        transition-transform duration-[2500ms] ease-out
        ${visible ? "scale-y-100" : "scale-y-0"}
            `}
                    />
                </div>
            </div>


            <p
                className={`
                    font-['Metal']
                    mt-16 sm:mt-24
                    text-2xl sm:text-2xl
                    text-white tracking-wide
                    transition-all duration-900 ease-out delay-[2600ms]
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                    `}
            >
                Glad you could make it to the end.
            </p>
            <p className={` 
                    mt-7 font-['Metal'] transition-all duration-900 ease-out delay-[2600ms]
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
                I know how much heart goes into a new idea.
            </p>
            <p
                className={`
                    font-['Metal']
                    transition-all duration-900 ease-out delay-[2600ms]
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                    `}
            >
                When you're ready to take that first step, I'll walk it with you.
            </p>
        </section>
    )
}

export default FooterReveal
