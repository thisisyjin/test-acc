import styled from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/index';
import previewImg from '../assets/preview.png';

const ImgUploadBlock = styled.div`
  .img-block {
    width: 320px;
    margin: 0 auto;
    display: flex;
    gap: 10px;
    margin-top: 40px;
  }
  img {
    display: block;
    width: 100px;
  }
`;

const ImgUpload = () => {
  return (
    <ImgUploadBlock>
      ImgUploadBlock
      <div className="img-block">
        <img src={previewImg} alt="preview" />
        <img src={previewImg} alt="preview" />
        <img src={previewImg} alt="preview" />
      </div>
      <Link to="/upload/save">이미지 업로드</Link>
    </ImgUploadBlock>
  );
};

export default ImgUpload;
