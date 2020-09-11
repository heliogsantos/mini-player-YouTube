import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 450px;
  background: #ffffff;
  overflow-x: hidden;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  right: 30px;
  bottom: -300px;
  transition: 0.3s linear;
  ${(props) =>
    props.active &&
    `
      bottom: 0;
    `}
`;

export const Video = styled.video`
  width: 100%;
  position: relative;
`;

export const VideoContent = styled.div`
  width: 100%;
  height: 260px;
  position: relative;
`;

export const Layer = styled.div`
  width: 100%;
  height: inherit;
  position: absolute;
  z-index: 2;
  top: -7px;
  left: 0;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
  background: rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: 1;
  }
`;

export const Description = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  padding: 5px 18px;
  cursor: pointer;

  div + div {
    position: relative;
    top: 10px;
  }

  h1 {
    color: #030303;
    font-size: 16px;
    font-weight: 500;
    line-height: 2rem;
  }

  span {
    color: #606060;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6rem;
    display: flex;
    justify-content: space-space-around;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      height: 3px;
      width: 3px;
      border-radius: 100%;
      background: #848484;
      left: 26px;
      top: 11px;
    }

    p:nth-of-type(2) {
      margin-left: 11px;
    }
  }
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #e5e5e5;
  height: 300px;
`;
