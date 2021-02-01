import { JumbotronContainer } from "./containers/jumbotron";
import { FooterContainer } from "./containers/footer";
import { FaqContainer } from "./containers/faqs";
function App() {
  return (
    <>
      <JumbotronContainer />;
      <FaqContainer />
      <FooterContainer />;
    </>
  );
}

export default App;
