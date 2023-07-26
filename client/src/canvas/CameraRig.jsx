import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react"; // Import useRef to create a ref for the CameraRig

import state from "../store";

const CameraRig = ({ children }) => {
	const group = useRef(); // Create a ref for the CameraRig

	const snap = useSnapshot(state); // Get the snapshot from the state

	useFrame((state, delta) => {
		const isBreakpoint = window.innerWidth <= 1260;
		const isMobile = window.innerWidth <= 600;

		// Set the initial position of the model
		let targetPosition = [-0.4, 0, 2];

		if (snap.intro) {
			if (isBreakpoint) targetPosition = [0, 0, 2];
			if (isMobile) targetPosition = [0, 0.2, 2.5];
		} else {
			if (isMobile) targetPosition = [0, 0, 2.5];
			else targetPosition = [0, 0, 2];
		}

		// Set the model camera position
		easing.damp3(state.camera.position, targetPosition, 0.25, delta);

		// Set the model rotation smoothly
		easing.dampE(
			group.current.rotation,
			[state.pointer.y / 10, -state.pointer.x / 5, 0],
			0.25,
			delta
		);
	});

	return <group ref={group}>{children}</group>; // Use the group ref and render children inside the CameraRig
};

export default CameraRig;
