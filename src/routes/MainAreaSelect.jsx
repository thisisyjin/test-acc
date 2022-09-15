import styled from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/index';

const MainAreaSelectBlock = styled.div`
  .another {
    bottom: 100px;
  }
`;

const MainAreaSelect = () => {
  return (
    <MainAreaSelectBlock>
      MainAreaSelectBlock
      <Link to="/area/sub" className="another">
        시/도 선택
      </Link>
      <Link to="/area/search">직접입력 선택</Link>
    </MainAreaSelectBlock>
  );
};

export default MainAreaSelect;
