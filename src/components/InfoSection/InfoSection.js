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
              </TextWrapper>
            </InfoColunm>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
