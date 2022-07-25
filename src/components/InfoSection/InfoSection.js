import React from "react";

import {
  InfoSec,
  InfoRow,
  InfoColunm,
  TextWrapper,
} from "./InfoSection.Elements";
import { Container } from "../../globalStyles";

const InfoSection = ({ lightBg, imgStart, lightTopLine }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColunm>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColunm>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
