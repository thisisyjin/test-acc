import styled from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/index';
import { ReactComponent as Checked } from '../assets/check.svg';

const ImgSavedBlock = styled.div`
  .desc {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    padding: 40px 15px;
    margin-top: 40px;
  }
  svg {
    position: relative;
    top: 5px;
    right: 8px;
  }
`;

const ImgSaved = () => {
  return (
    <ImgSavedBlock>
      ImgSavedBlock
      <div className="desc">
        <Checked />
        <span>이미지가 업로드 되었습니다.</span>
      </div>
      <Link to="/info">정보 입력하기</Link>
    </ImgSavedBlock>
  );
};

export default ImgSaved;
