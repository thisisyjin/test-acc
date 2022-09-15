import styled from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/index';

const AreaSearchFormBlock = styled.div`
  input {
    display: block;
    border: none;
    width: 200px;
    margin: 0 auto;
    margin-top: 30px;
    padding: 10px;
    border-bottom: 1px solid #333;
  }
`;

const AreaSearchForm = () => {
  return (
    <AreaSearchFormBlock>
      AreaSearchFormBlock
      <input type="text" placeholder="시/군/구 지역 검색" />
      <Link to="/hospital">지역검색 후 선택</Link>
    </AreaSearchFormBlock>
  );
};

export default AreaSearchForm;
