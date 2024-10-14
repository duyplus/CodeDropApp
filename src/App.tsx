import { BrowserRouter } from "react-router-dom";
import { Main } from "@modules/main";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ChakraProvider>
  );
};
export default App;
