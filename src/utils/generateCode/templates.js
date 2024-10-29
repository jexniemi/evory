const generateApp = (appName) => {
  return `
  import React, { useState } from "react";
  import styled from "styled-components";
  
  interface Props {}
  
  export default function ${appName}({}: Props) {
    return (
        <Wrapper>
        </Wrapper>
    );
  }; 

  const Wrapper = styled.div${"``"};
`;
};

const generatePage = (pageName, displayName, componentName) => {
  return `
  
  import ${componentName} from "@/apps/${componentName}"
  import App from "@/common/App";

  export default function ${componentName}Page() {
    return (
      <App
        title="${displayName}"
        description=""
        instructions=""
      >
        <${componentName} />
      </Page>
    );
  }
`;
};

module.exports = {
  generateApp,
  generatePage,
};
