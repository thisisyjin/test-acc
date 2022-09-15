import styled from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/index';

const UserInfoFormBlock = styled.div`
  .user {
    display: block;
    border: none;
    width: 200px;
    margin: 0 auto;
    margin-top: 25px;
    padding: 10px;
    border-bottom: 1px solid #333;
  }
`;

const UserInfoForm = () => {
  return (
    <UserInfoFormBlock>
      UserInfoFormBlock
      <input className="user" type="text" placeholder="이름" />
      <input className="user" type="text" placeholder="연락처" />
      <Link to="/info/save">정보 입력 완료</Link>
    </UserInfoFormBlock>
  );
};

export default UserInfoForm;
