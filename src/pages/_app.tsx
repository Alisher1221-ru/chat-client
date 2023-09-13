import store from "@/store";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</ChakraProvider>
	);
}
