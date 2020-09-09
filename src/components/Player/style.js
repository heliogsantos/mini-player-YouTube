import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 450px;
  min-height: 600px;
  height: 600px;
  background: #ffffff;
  overflow-x: hidden;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.2);
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

  .text {
    text-align: left;

    h1 {
      color: #030303;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.6rem;
    }

    p {
      color: #606060;
      font-size: 15px;
      font-weight: 400;
      line-height: 1.5rem;
    }
  }
`;
