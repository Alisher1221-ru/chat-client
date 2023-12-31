import React, { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

const App = () => {
	const [counter, setCounter] = useState<number>(0);

	const increase = () => {
		setCounter(counter + 1);
	};
	const decrease = () => {
		setCounter(counter - 1);
	};

	return (
		<Flex gap="10px" padding="10px" bgImage={"https://wallpapercave.com/wp/wp5073942.jpg"} h='100vh' bgSize='cover'>
			<Button colorScheme="blue" onClick={increase}>
				+
			</Button>
			<Text fontSize={24} fontWeight="bold">
				{counter}
			</Text>
			<Button colorScheme="blue" onClick={decrease}>
				-
			</Button>
		</Flex>
	);
};

export default App;
