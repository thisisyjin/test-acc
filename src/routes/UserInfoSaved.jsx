import styled from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/index';

const UserInfoSavedBlock = styled.div`
  .desc {
    background-color: crimson;
    color: #fff;
    border-radius: 100px;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
  }
`;

const UserInfoSaved = () => {
  return (
    <UserInfoSavedBlock>
      UserInfoSavedBlock
      <div className="desc">Flow 종료</div>
      <Link to="/">홈으로</Link>
    </UserInfoSavedBlock>
  );
};

export default UserInfoSaved;
