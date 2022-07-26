import React from "react";

import {
  InfoSec,
  InfoRow,
  InfoColunm,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from "./InfoSection.Elements";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  topLine,
  headLine,
  description,
  buttonLabel,
}) => {
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
