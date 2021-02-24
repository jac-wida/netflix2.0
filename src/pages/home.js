import { JumbotronContainer } from "../containers/jumbotron";

import { FooterContainer } from "../containers/footer";
import { FaqContainer } from "../containers/faqs";
import HeaderContainer from "../containers/header";

function Home() {
  return (
    <>
      <HeaderContainer>
        <JumbotronContainer />
        <FaqContainer />
        <FooterContainer />
      </HeaderContainer>
    </>
  );
}

export default Home;
