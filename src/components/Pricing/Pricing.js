import React from "react";

const Pricing = () => {
  return (
    <>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCardInfo>
              <PricingCardIcon>
                <GiRock />
              </PricingCardIcon>
              <PricingCardPlan>Starter Pack</PricingCardPlan>
              <PricingCardCost>$99.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>100 New Users</PricingCardFeature>
                <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                <PricingCardFeature>Retargeting analytics</PricingCardFeature>
              </PricingCardFeatures>
              <Button primary>Choose Plan</Button>
            </PricingCardInfo>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </>
  );
};

export default Pricing;
