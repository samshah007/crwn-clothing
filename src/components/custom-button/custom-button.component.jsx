import React from "react";

import { CostomButtonContainer } from "./custom-button.style";

const CustomButton = ({children, ...props}) => (
    <CostomButtonContainer {...props}>
        {children}
    </CostomButtonContainer>
);
export default CustomButton;