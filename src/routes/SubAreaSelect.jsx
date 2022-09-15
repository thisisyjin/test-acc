import styled from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/index';

const SubAreaSelectBlock = styled.div``;

const SubAreaSelect = () => {
  return (
    <SubAreaSelectBlock>
      SubAreaSelectBlock
      <Link to="/hospital">시/군/구 선택</Link>
    </SubAreaSelectBlock>
  );
};

export default SubAreaSelect;
