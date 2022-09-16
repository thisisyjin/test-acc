import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import { useNavigate } from '../../node_modules/react-router-dom/index';

const SearchTestBlock = styled.div`
  h1 {
    font-size: 20px;
    font-weight: 500;
    padding: 0 10px;
  }
  form {
    display: flex;
    gap: 10px;
    padding: 10px;
  }
  input {
    font-size: 16px;
    display: block;
    flex: 4;
    border: none;
    background-color: #eee;
    border-radius: 4px;
    padding: 12px 30px;
  }
  button.search {
    display: block;
    border-radius: 4px;
    padding: 12px;
    background-color: royalblue;
    color: #fff;
  }

  .hos-info-wrap {
    height: 400px;
    overflow: auto;
  }

  .hos-info {
    background-color: #f9f7ed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #666;
    gap: 10px;
    span {
      display: block;
      color: #666;
      font-size: 13px;
    }

    button {
      display: block;
      padding: 6px 10px;
      background-color: #333;
      color: #fff;
      border-radius: 4px;
    }
  }
`;

const SearchTest = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [datas, setDatas] = useState(null);
  const [results, setResults] = useState(null);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    // 검색어 필터링
    if (value) {
      const result = datas.filter((data) => {
        return data.name.includes(value.trim()) ? data.name : null;
      });
      setResults(result);
    }
  };

  useEffect(() => {
    getAPIrequest();
  }, []);

  const getAPIrequest = async () => {
    console.log('api GET 요청');
    const hosList = await axios.get(
      'https://22144ce6-c7da-4ad3-ab85-ce22c7ae5b8a.mock.pstmn.io/search',
      // API 호출 - 병원정보 +
    );
    setDatas(hosList.data.row.result.hospital); // [{1}, {2}, {3}, ...]
  };

  const onSelectHos = (registered) => {
    if (registered) alert('이미 등록된 병원입니다.');
    else {
      console.log('등록 가능 - 사진 등록 페이지로 이동');
      navigate('/upload');
    }
  };

  return (
    <SearchTestBlock>
      <h1>병의원 검색 - Logic Test</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={value}
          required
          onChange={onChangeInput}
          placeholder="병원명을 입력하세요."
        />
        <button className="search">검색</button>
      </form>
      <div className="hos-info-wrap">
        {results &&
          results.map((result, index) => (
            <div key={index} className="hos-info">
              <div>
                {result.name}
                <span>{result.address}</span>
              </div>
              <button onClick={() => onSelectHos(result.registered)}>
                선택
              </button>
            </div>
          ))}
      </div>
    </SearchTestBlock>
  );
};

export default SearchTest;
