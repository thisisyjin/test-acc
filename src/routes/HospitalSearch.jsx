import styled from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/index';

const HospitalSearchBlock = styled.div`
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

const HospitalSearch = () => {
  return (
    <HospitalSearchBlock>
      HospitalSearchBlock
      <input type="text" placeholder="병원명을 입력하세요" />
      <Link to="/upload/:123">병원 검색 후 선택</Link>
    </HospitalSearchBlock>
  );
};

export default HospitalSearch;
