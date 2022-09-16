import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from '../../node_modules/react-router-dom/index';
import { Helmet } from 'react-helmet-async';
import expand from '../assets/expand.svg';

const HomeBlock = styled.div`
  .button-area {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    background-color: #fafafa;
    box-shadow: -2px -2px 2px 2px rgba(0, 0, 0, 0.2);
  }

  .next {
    position: relative;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    background-color: royalblue;
    border-radius: 6px;
    padding: 16px;
    font-size: 18px;
    margin-bottom: 10px;

    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
  }

  .next:disabled {
    background-color: #ddd;
    color: #aaa;
    box-shadow: none;
  }

  h1 {
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 400;
    background-color: #fff;
    padding-left: 16px;
  }
  input,
  select {
    padding: 12px 6px;
    font-size: 16px;
  }

  .area-wrap {
    width: 310px;
    margin: 0 auto;
  }

  select {
    position: relative;
    -webkit-appearance: none;
    background-color: #fff;
    color: #000;
    width: 150px;
    border: none;
    margin-right: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.2);
    padding-left: 20px;
    background-image: url(${expand});
    background-position: 95%;
    background-repeat: no-repeat;
    background-size: 20px;
  }

  select:last-child {
    margin-right: 0;
  }

  form {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
    padding: 10px;
    gap: 10px;
    input {
      flex: 4;
    }
    button {
      font-size: 16px;
      flex: 1;
    }
  }

  input {
    border: none;
    display: block;
    background-color: #eee;
    border-radius: 5px;
    padding-left: 20px;
    font-size: 16px;
    width: 200px;
  }

  button {
    display: block;
    min-width: 60px;
    width: 20%;
    background-color: royalblue;
    color: #fff;
    border-radius: 4px;
  }

  .hos-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-left: none;
    border-right: none;
    padding: 15px;
    padding-left: 12px;
    margin-bottom: 6px;

    &:last-child {
      margin-bottom: 40px;
    }

    button {
      padding: 10px 0;
    }
  }

  .address {
    display: block;
    font-size: 12.2px;
    color: #555;
  }

  // accordian

  .acc-title {
    position: relative;
    padding: 16px 20px;
    border-top: 2px solid #aaa;
    color: #666;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s;
    font-weight: 500;
  }

  .area-info {
    color: #999;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    right: 30px;
  }

  .hospital-info {
    color: #999;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    right: 30px;
  }

  .acc-title::after {
    content: '⌵';
    position: absolute;
    right: 20px;
    top: 9px;
  }

  .acc-title::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    display: block;
    width: 0;
    height: 2px;
    background-color: royalblue;
    transition: 0.25s;
  }

  .acc-title.active {
    padding: 16px 20px;
    /* border-top: 2px solid royalblue; */
    margin-bottom: 10px;
    color: royalblue;
  }

  .acc-title.active.acc-title::before {
    width: 100%;
  }

  .acc-title.active.acc-title::after {
    color: royalblue;
    transform: scaleY(-1) translateY(-10px);
  }

  .loading {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #0066ff;
  }

  .search-result {
    height: 315px;
    background-color: #fbfbfb;
    overflow-y: auto;
  }

  // animation
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

const Home = () => {
  const navigate = useNavigate();

  const inputRef = useRef(null);

  const [isActiveArea, setActiveArea] = useState(true);
  const [isActiveHos, setActiveHos] = useState(!isActiveArea);
  const [mainArea, setMainArea] = useState();
  const [subArea, setSubArea] = useState();

  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [hospital, setHospital] = useState('');

  const onClickTitleOne = () => {
    setActiveArea((prev) => !prev);
    setActiveHos(false);
  };

  const onClickTitleTwo = () => {
    setActiveArea(false);
    setActiveHos((prev) => !prev);
  };

  const onSelectMain = (e) => {
    setMainArea(e.target.value);
  };

  const onSelectSub = (e) => {
    // setSubArea
    setSubArea(e.target.value);

    // setActive
    setActiveArea(false);
    setActiveHos(true);
  };

  // 만약 subArea가 바뀌면 -> 검색창 리셋되고 api 다시 요청해야 함.
  useEffect(() => {
    setInput('');
    setSearch('');
    setHospital('');
    if (inputRef.current) inputRef.current.focus();
  }, [subArea]);

  const onSelectHos = (e) => {
    // 둘다 active 꺼버림
    setActiveArea(false);
    setActiveHos(false);
    const innerT = e.target.parentNode.innerText;
    const hosName = innerT.slice(0, innerT.indexOf('\n'));
    setHospital(hosName);
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  const onClickSearch = (e) => {
    e.preventDefault();
    inputRef.current.blur();
    if (input.length < 2) {
      alert('최소 2자 입력하세요');
      return;
    }
    setLoading(true);
    getLoading();
    // 만약 search가 ''이면 ->
  };

  const getLoading = () => {
    // 비동기 요청 - axios
    setTimeout(() => {
      console.log('api 요청');
      setSearch(input);
      setLoading(false);
      // search가 ''이면 에러창 띄우기
    }, 1300);
  };

  const onClickNext = () => {
    navigate('/upload');
  };

  const nextPage = () => {
    navigate('/search');
  };

  return (
    <>
      <Helmet>
        <title>step 1 - 병의원찾기</title>
      </Helmet>
      <HomeBlock>
        <h1 onClick={nextPage}>병의원 찾기 - test</h1>
        <div className="button-area">
          <button
            className="next"
            disabled={!(mainArea && subArea && hospital)}
            onClick={onClickNext}
          >
            다음
          </button>
        </div>
        <h3
          className={`acc-title ${isActiveArea && 'active'}`}
          onClick={onClickTitleOne}
        >
          1/ 지역 선택
          {!isActiveArea && mainArea && subArea && (
            <span className="area-info">{`${mainArea} ${subArea}`}</span>
          )}
        </h3>{' '}
        {isActiveArea && (
          <div className="area-wrap">
            <select
              name="main"
              id="main"
              onChange={onSelectMain}
              value={mainArea}
            >
              <option selected disabled>
                시/도 선택
              </option>
              <option value="서울시">서울시</option>
              <option value="서울시">서울시</option>
              <option value="서울시">서울시</option>
              <option value="서울시">서울시</option>
              <option value="서울시">서울시</option>
              <option value="서울시">서울시</option>
              <option value="서울시">서울시</option>
              <option value="서울시">서울시</option>
              <option value="서울시">서울시</option>
              <option value="서울시">서울시</option>
              <option value="서울시">서울시</option>
              <option value="서울시">서울시</option>
              <option value="서울시">서울시</option>
              <option value="서울시">서울시</option>
              <option value="서울시">서울시</option>
            </select>
            <select
              name="main"
              id="main"
              onChange={onSelectSub}
              value={subArea}
            >
              <option selected disabled>
                시/군/구 선택
              </option>
              <option value="강서구">강서구</option>
              <option value="노원구">노원구</option>
              <option value="강남구">강남구</option>
              <option value="강북구">강북구</option>
              <option value="광진구">광진구</option>
              <option value="강서구">강서구</option>
              <option value="노원구">노원구</option>
              <option value="강남구">강남구</option>
              <option value="강북구">강북구</option>
              <option value="광진구">광진구</option>
              <option value="강서구">강서구</option>
              <option value="노원구">노원구</option>
              <option value="강남구">강남구</option>
              <option value="강북구">강북구</option>
              <option value="광진구">광진구</option>
              <option value="강서구">강서구</option>
              <option value="노원구">노원구</option>
              <option value="강남구">강남구</option>
              <option value="강북구">강북구</option>
              <option value="광진구">광진구</option>
              <option value="강서구">강서구</option>
              <option value="노원구">노원구</option>
              <option value="강남구">강남구</option>
              <option value="강북구">강북구</option>
              <option value="광진구">광진구</option>
            </select>
          </div>
        )}
        <h3
          className={`acc-title ${isActiveHos && 'active'}`}
          onClick={onClickTitleTwo}
        >
          2/ 병의원 검색
          {!isActiveHos && search && (
            <span className="hospital-info">{hospital}</span>
          )}
        </h3>
        {isActiveHos && (
          <div className="hos-wrap">
            <form onSubmit={onClickSearch}>
              <input
                type="text"
                placeholder="병원명을 입력하세요"
                value={input}
                onChange={onChangeInput}
                ref={inputRef}
              />
              <button>검색</button>
            </form>
            {search && (
              <div className="search-result">
                <div className="hos-info">
                  <div className="name-wrap">
                    아프지마 내과
                    <span className="address">
                      서울시 강서구 강서동 123-4567
                    </span>
                  </div>
                  <button onClick={onSelectHos}>선택</button>
                </div>
                <div className="hos-info">
                  <div className="name-wrap">
                    아프지마 피부과
                    <span className="address">
                      서울시 강서구 강서동 123-4567
                    </span>
                  </div>
                  <button onClick={onSelectHos}>선택</button>
                </div>
                <div className="hos-info">
                  <div className="name-wrap">
                    아프지마 외과
                    <span className="address">
                      서울시 강서구 강서동 123-4567
                    </span>
                  </div>
                  <button onClick={onSelectHos}>선택</button>
                </div>
                <div className="hos-info">
                  <div className="name-wrap">
                    아프지마 정형외과
                    <span className="address">
                      서울시 강서구 강서동 123-4567
                    </span>
                  </div>
                  <button onClick={onSelectHos}>선택</button>
                </div>
                <div className="hos-info">
                  <div className="name-wrap">
                    아프지마 정형외과
                    <span className="address">
                      서울시 강서구 강서동 123-4567
                    </span>
                  </div>
                  <button onClick={onSelectHos}>선택</button>
                </div>
                <div className="hos-info">
                  <div className="name-wrap">
                    아프지마 정형외과
                    <span className="address">
                      서울시 강서구 강서동 123-4567
                    </span>
                  </div>
                  <button onClick={onSelectHos}>선택</button>
                </div>
                <div className="hos-info">
                  <div className="name-wrap">
                    아프지마 정형외과
                    <span className="address">
                      서울시 강서구 강서동 123-4567
                    </span>
                  </div>
                  <button onClick={onSelectHos}>선택</button>
                </div>
                <div className="hos-info">
                  <div className="name-wrap">
                    아프지마 치과
                    <span className="address">
                      서울시 강서구 강서동 123-4567
                    </span>
                  </div>
                  <button onClick={onSelectHos}>선택</button>
                </div>
                <div className="hos-info">
                  <div className="name-wrap">
                    아프지마 정신과
                    <span className="address">
                      서울시 강서구 강서동 123-4567
                    </span>
                  </div>
                  <button onClick={onSelectHos}>선택</button>
                </div>
              </div>
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
        )}
      </HomeBlock>
    </>
  );
};

export default Home;
