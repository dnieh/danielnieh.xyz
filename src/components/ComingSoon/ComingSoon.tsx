import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  font-size: 2rem;
`;

const ComingSoon = () => (
  <Container>
    <>Coming soon</>
    <Link href="/">↩</Link>
  </Container>
);

export default ComingSoon;
