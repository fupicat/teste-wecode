import styled from 'styled-components'

export const Container = styled.div`
max-width: 1920px;
margin: auto;

nav {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  position: absolute;
  width: 100%;
  max-width: 1920px;
  padding: 6.3125rem 6.25rem 0 6.25rem;
  z-index: 1;

  .main {
    display: flex;
    gap: 14.5rem;

    .logo {
      font-weight: 500;
      font-size: 2.875rem;
      line-height: 4.3125rem;
      text-decoration: none;

      color: #000000;

      span {
        font-weight: 400;
        font-size: 2.875rem;
        line-height: 4.3125rem;

        color: #E95F45;
      }
    }

    .menu {
      display: flex;
      gap: 9.375rem;
      align-items: center;

      a {
        font-weight: 500;
        font-size: 2.25rem;
        line-height: 3.375rem;

        text-decoration: none;
        color: #333333;

        :hover {
          text-decoration: underline;
          color: #F46442;
        }
      }
    }
  }

  .button {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.25rem;
    padding: 1.0625rem 3.4375rem 1.0994rem 3.4375rem;
    white-space: nowrap;
    
    text-decoration: none;
    background: #333333;
    border-radius: 100px;
    color: #FFFFFF;

    transition: background-color 200ms;

    :hover {
      background: #595959;
    }
  }
}

section.main {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  .title {
    padding-left: 4.875rem;
    padding-bottom: 2.8763rem;
    padding-top: 21.9375rem;

    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      padding-left: 2rem;
      padding-right: 2rem;
      width: 100%
    }

    h1 {
      font-weight: 300;
      font-size: 12.5rem;
      line-height: 18.75rem;
      text-shadow: 0px 0px 50px #eeedf2;

      color: #333333;

      @media screen and (max-width: 1024px) {
        font-size: 20vw;
        line-height: 100%;
        text-align: center;
      }
    }

    .camp {
      margin-top: -5.5rem;
      margin-left: 0.6875rem;
      font-size: 13.25rem;
      line-height: 19.875rem;

      @media screen and (max-width: 1024px) {
        margin-left: 0;
        font-size: 20vw;
        margin-top: 0;
        line-height: 100%;
      }
    }

    form {
      display: flex;
      align-items: center;
      background: white;
      border-radius: 99px;
      width: 797px;

      @media screen and (max-width: 1024px) {
        width: 100%;
        margin-top: 3rem;
      }

      input[type=email] {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        margin: 4.75rem 4.0625rem 4.125rem 4.0625rem;
        border: none;
        width: 100%;

        color: #9b9b9b;
        background: white;
      }

      button {
        position: relative;
        cursor: pointer;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 2.25rem;
        text-align: center;
        padding: 32px 63px 31px 63px;
        margin: 0 2.75rem 0 0;
        white-space: nowrap;

        background: linear-gradient(90deg, #FFCE5A 0%, #F48743 50%, #F35E41 100%);
        background-size: 200%;
        background-position-x: right;
        border-radius: 99px;
        border: none;
        color: #FCFCFC;
        opacity: 1;

        transition: background-position 200ms, color 200ms, opacity 200ms;

        :hover {
          background-position-x: left;
        }

        ::after {
          content: '';
          pointer-events: none;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;

          transition: background-position 500ms cubic-bezier(0.34, 1.56, 0.64, 1);

          background: url("/Done.png");
          background-repeat: no-repeat;
          background-position: center 200%;
        }
      }

      .enviado {
        pointer-events: none;
        opacity: 0.6;
        color: transparent;

        ::after {
          background-position: center;
        }
      }
    }
  }

  .fogueira {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;

    width: 50rem;
    height: 64.375rem;

    background: url("/Fogueira.png");
    background-repeat: no-repeat;

    @media screen and (max-width: 1024px) {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-size: contain;
      background-position: 100%;
      margin: 0px 4rem;
    }
  }
}

section.dates {
  display: flex;
  justify-content: space-evenly;
  padding: 0 6.25rem 6.25rem 6.25rem;
  width: 100%;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    h1 {
      font-weight: 300;
      font-size: 9.75rem;
      line-height: 14.625rem;

      color: #E95F45;
    }

    p {
      width: 19.875rem;
      font-size: 1.375rem;
      line-height: 2.0625rem;

      color: #333333;
    }
  }
}
`