import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import { useNavigate } from '../../node_modules/react-router-dom/index';

import Change from '../assets/change.svg';

const SearchTestBlock = styled.div`
  background-color: #fff;
  min-height: 100%;
  border-bottom: none;
  border-radius: 30px 30px 0 0;
  padding: 10px;
  height: 100%;
  animation-name: pop-up-bg;
  animation-duration: 500ms;

  @keyframes pop-up-bg {
    from {
      transform: translateY(100%);
    }

    to {
      transform: none;
    }
  }

  .header-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    .area-info {
      color: #888;
      font-size: 15px;
      margin-right: 10px;

      img {
        background-color: #888;
        border-radius: 50%;
        position: relative;
        top: 6px;
      }
    }
  }

  h1 {
    font-size: 20px;
    font-weight: 500;
    padding: 0 10px;
  }
  form {
    width: 100%;
    display: flex;
    gap: 10px;
    padding: 10px 0;
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
    position: relative;
    overflow: auto;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  .loading {
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 100%;
    height: 100%;
    // 굳이 안가려져도 되는건지?

    .loadingio-spinner-ellipsis-e4bv9du3r5h {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .hos-info {
    background-color: #fefefe;
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

  // animation - loading
  @keyframes ldio-s90hw9ncs7a {
    0% {
      transform: translate(6px, 40px) scale(0);
    }
    25% {
      transform: translate(6px, 40px) scale(0);
    }
    50% {
      transform: translate(6px, 40px) scale(1);
    }
    75% {
      transform: translate(40px, 40px) scale(1);
    }
    100% {
      transform: translate(74px, 40px) scale(1);
    }
  }
  @keyframes ldio-s90hw9ncs7a-r {
    0% {
      transform: translate(74px, 40px) scale(1);
    }
    100% {
      transform: translate(74px, 40px) scale(0);
    }
  }
  @keyframes ldio-s90hw9ncs7a-c {
    0% {
      background: #457dff;
    }
    25% {
      background: #457dff;
    }
    50% {
      background: #457dff;
    }
    75% {
      background: #457dff;
    }
    100% {
      background: #457dff;
    }
  }
  .ldio-s90hw9ncs7a div {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(40px, 40px) scale(1);
    background: #457dff;
    animation: ldio-s90hw9ncs7a 2.272727272727273s infinite
      cubic-bezier(0, 0.5, 0.5, 1);
  }
  .ldio-s90hw9ncs7a div:nth-child(1) {
    background: #457dff;
    transform: translate(74px, 40px) scale(1);
    animation: ldio-s90hw9ncs7a-r 0.5681818181818182s infinite
        cubic-bezier(0, 0.5, 0.5, 1),
      ldio-s90hw9ncs7a-c 2.272727272727273s infinite step-start;
  }
  .ldio-s90hw9ncs7a div:nth-child(2) {
    animation-delay: -0.5681818181818182s;
    background: #457dff;
  }
  .ldio-s90hw9ncs7a div:nth-child(3) {
    animation-delay: -1.1363636363636365s;
    background: #457dff;
  }
  .ldio-s90hw9ncs7a div:nth-child(4) {
    animation-delay: -1.7045454545454546s;
    background: #457dff;
  }
  .ldio-s90hw9ncs7a div:nth-child(5) {
    animation-delay: -2.272727272727273s;
    background: #457dff;
  }
  .loadingio-spinner-ellipsis-e4bv9du3r5h {
    width: 90px;
    height: 90px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-s90hw9ncs7a {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.9);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-s90hw9ncs7a div {
    box-sizing: content-box;
  }
`;

const SearchTest = () => {
  const navigate = useNavigate();
  const inputRef = useRef();

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
    getAPIrequest();
  };

  // useEffect(() => {
  //   getAPIrequest();
  // }, []);

  const getAPIrequest = async () => {
    console.log('api GET 요청');
    setLoading(true);
    try {
      const hosList = await axios.get(
        'https://22144ce6-c7da-4ad3-ab85-ce22c7ae5b8a.mock.pstmn.io/search',
        // API 호출 - 병원정보
      );
      setDatas(hosList.data.row.result.hospital); // [{1}, {2}, {3}, ...]
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (datas) {
      const result = datas.filter((data) => {
        return data.name.trim().includes(value.trim()) ? data.name : null;
      });
      setResults(result);
      if (!result.length) {
        setResults(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datas]);

  const onSelectHos = (registered) => {
    if (registered) alert('이미 등록된 병원입니다.');
    else {
      console.log('등록 가능 - 사진 등록 페이지로 이동');
      navigate('/upload');
    }
  };

  const prevPage = () => {
    navigate('/');
  };

  const goTestPage = () => {
    navigate('/typo');
  };

  useEffect(() => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 550);
  }, []);

  return (
    <SearchTestBlock>
      <div className="header-wrap">
        <h1 onClick={goTestPage}>병의원 검색 Logic</h1>
        <div className="area-info">
          서울시 강서구 <img src={Change} alt="change" onClick={prevPage} />
        </div>
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={value}
          onChange={onChangeInput}
          placeholder="병원명을 입력하세요."
          ref={inputRef}
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

        {loading && (
          <div className="loading">
            <div className="loadingio-spinner-ellipsis-e4bv9du3r5h">
              <div className="ldio-s90hw9ncs7a">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SearchTestBlock>
  );
};

export default SearchTest;
