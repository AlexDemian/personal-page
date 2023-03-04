import styled from "@emotion/styled";
import { AccordionCard } from "../components/Accordion";
import { acticles } from "../constants";

const Iframe = styled.iframe`
  width: 100%;
  height: 60vh;
  border-width: unset;
  border-style: unset;
  border-color: unset;
  border-image: unset;
`;

export const PostsPage: React.FC = () => {
  return (
    <>
      {acticles.map((acticle) => (
        <AccordionCard
          key={acticle.url}
          title={acticle.title}
          body={<Iframe src={acticle.url} />}
        />
      ))}
    </>
  );
};
