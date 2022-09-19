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
    width: 100%;
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
    padding: 12px 20px;
    &:focus {
      background-color: #f4f2e0;
    }
  }
  button.search {
    flex: 1;
    display: block;
    border-radius: 4px;
    padding: 10px;
    background-color: royalblue;
    color: #fff;
  }

  .hos-info-wrap {
    height: 400px;
    overflow: auto;

    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  .hos-info {
    background-color: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #666;
    gap: 10px;

    &:last-child {
      border-bottom: none;
      padding-bottom: 12px;
    }

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

  .no-data {
    position: relative;
    width: 100%;
    height: 400px;
    display: flex;
    color: royalblue;
    align-items: center;
    justify-content: center;
  }
`;

const SearchTest = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [datas, setDatas] = useState(null);
  const [results, setResults] = useState(null);

  const [loading, setLoading] = useState(false);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value.length < 2) {
      alert('2자 이상 입력하세요');
      return;
    }
    // 검색어 필터링

    const result = datas.filter((data) => {
      return data.name.trim().includes(value.trim()) ? data.name : null;
    });
    setResults(result);
    if (!result.length) {
      setResults(false);
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
        {results === false && (
          <div className="no-data">검색하신 병의원 정보가 없습니다.</div>
        )}
      </div>
      {loading && <div className="loading">Loading ...</div>}
    </SearchTestBlock>
  );
};

export default SearchTest;
