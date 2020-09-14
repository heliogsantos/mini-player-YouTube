import styled from 'styled-components';

const WraperVideoInfo = styled.div`
  display: flex;
  max-height: 70px;
  height: 70px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 3px;
`;

const InfoVodeo = styled.div`
  width: 150px;

  video {
    width: 100%;
    height: 100%;
  }
`;

const DescriptionInfo = styled.div`
  padding: 10px;
  width: 90%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;

  h2 {
    font-size: 15px;
    font-weight: 500;
  }

  p {
    font-size: 13px;
    padding-top: 4px;
    color: #919191;
  }
`;

export { WraperVideoInfo, InfoVodeo, DescriptionInfo };
