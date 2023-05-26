import { css } from 'styled-components';

const theme = {
  flexCustom: (flexDirection, justifyContent, alignItems) =>
    css`
      display: flex;
      flex-direction: ${flexDirection};
      justify-content: ${justifyContent};
      align-items: ${alignItems};
    `,
};

export default theme;
