import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
const App = () => {
	const gsapRef = useRef();
	useGSAP(() => {
		gsap.to(gsapRef.current, {
			x: 1000,
			duration: 1,
			delay: 1,
			backgroundColor: "green",
		});
	});
	return (
		<main>
			<div ref={gsapRef} className="box"></div>
		</main>
	);
};

export default App;
