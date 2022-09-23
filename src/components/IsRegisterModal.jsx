import styled from 'styled-components';

const FullScreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000080;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IsRegisterModalBlock = styled.div`
  position: relative;
  width: 70%;
  background: #fff;
  padding: 60px 20px 20px 20px;
  border-radius: 8px;

  .header {
    position: absolute;
    border-radius: 8px 8px 0 0;
    top: 0;
    left: 0;
    width: 100%;
    background-color: royalblue;
    color: #fff;
    text-align: center;
    padding: 10px;
    margin-top: -1px;
  }

  .content {
    width: 100%;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
    font-size: 15px;
    text-align: center;
  }

  .main {
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 30px;
  }

  .line {
    width: 50%;
    height: 1px;
    background-color: #eee;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .sub {
    font-size: 14.4px;
    letter-spacing: -0.02em;
    color: #222;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
  }
`;

const IsRegisterModal = ({ onCloseModal }) => {
  return (
    <FullScreen>
      <IsRegisterModalBlock>
        <div className="header">정보</div>
        <div className="content">
          <div className="main">가격표 사진이 등록된 병원입니다.</div>
          <div className="line"></div>
          <div className="sub">
            이미 다른 이용자께서 가격표 사진을 등록한 병원입니다. 내년 1월 1일
            이후 가격표 등록이 가능합니다.
          </div>
        </div>
        <button onClick={onCloseModal}>닫기</button>
      </IsRegisterModalBlock>
    </FullScreen>
  );
};

export default IsRegisterModal;
