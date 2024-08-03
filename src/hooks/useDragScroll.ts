import { useEffect, useRef } from "react";

const useDragScroll = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isDragging = useRef(false);
	const startX = useRef(0);
	const scrollLeft = useRef(0);

	useEffect(() => {
		const element = ref.current;

		if (!element) return;

		const handleMouseDown = (e: MouseEvent) => {
			isDragging.current = true;
			startX.current = e.pageX - element.offsetLeft;
			scrollLeft.current = element.scrollLeft;
		};

		const handleMouseLeave = () => {
			isDragging.current = false;
		};

		const handleMouseUp = () => {
			isDragging.current = false;
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (!isDragging.current) return;
			e.preventDefault();
			const x = e.pageX - element.offsetLeft;
			const walk = (x - startX.current) * 2;
			element.scrollLeft = scrollLeft.current - walk;
		};

		element.addEventListener("mousedown", handleMouseDown);
		element.addEventListener("mouseleave", handleMouseLeave);
		element.addEventListener("mouseup", handleMouseUp);
		element.addEventListener("mousemove", handleMouseMove);

		return () => {
			element.removeEventListener("mousedown", handleMouseDown);
			element.removeEventListener("mouseleave", handleMouseLeave);
			element.removeEventListener("mouseup", handleMouseUp);
			element.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return ref;
};

export default useDragScroll;
