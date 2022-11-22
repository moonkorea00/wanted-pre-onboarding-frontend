import { css, DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexDefault: css`
    display: flex;
    align-items: center;
  `,
  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,
};

export default theme;
