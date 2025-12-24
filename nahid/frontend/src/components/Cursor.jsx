import { useEffect, useRef } from "react"

const Cursor = () => {
    const cursorRef = useRef(null)

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    useEffect(() => {
        const cursor = cursorRef.current

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }

        const animate = () => {
            currentX += (mouseX - currentX) * 0.40
            currentY += (mouseY - currentY) * 0.40

            cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
            requestAnimationFrame(animate);
        }

        const handleMouseOver = (e) => {
            const target = e.target

            const isRealElement =
                target &&
                target !== document.body &&
                target !== document.documentElement

            if (isRealElement) {
                cursor.style.backgroundColor = "white"
                cursor.style.borderColor = "white"
                cursor.style.mixBlendMode = "difference"
                cursor.style.transform += " scale(1.35)"
            } else {
                cursor.style.backgroundColor = "red"
                cursor.style.borderColor = "red"
                cursor.style.mixBlendMode = "normal"
                cursor.style.transform = cursor.style.transform.replace(" scale(1.35)", "")
            }
        }

        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseover", handleMouseOver)

        animate()

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseover", handleMouseOver)
        }
    }, [])

    return (
        <div
            ref={cursorRef}
            className="
        fixed top-0 left-0 z-[9999] pointer-events-none
        w-4 h-4 -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-red-500 border border-red-500
        transition-all duration-200 ease-out"
        />
    )
}

export default Cursor
