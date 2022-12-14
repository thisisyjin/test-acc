import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from '../../node_modules/react-router-dom/index';
import { Helmet } from 'react-helmet-async';
import expand from '../assets/expand.svg';
import { sido, sggu, sgguCode, sidoCode } from '../assets/areaData';

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
    margin-bottom: 10px;
    padding: 0 10px 10px 10px;
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
    content: '???';
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

const Home = ({ history, location }) => {
  const navigate = useNavigate();

  const inputRef = useRef(null);

  const [isActiveArea, setActiveArea] = useState(true);
  const [isActiveHos, setActiveHos] = useState(!isActiveArea);

  const [mainArea, setMainArea] = useState(); // redux - area.js
  const [subArea, setSubArea] = useState(); // redux - area.js
  const [mainAreaCode, setMainAreaCode] = useState(); // redux - area.js
  const [subAreaCode, setSubAreaCode] = useState(); // redux - area.js

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
    const sidoName = e.target.value;
    setMainArea(sidoName);
    setMainAreaCode(sidoCode[sido.indexOf(sidoName)]);
    // ????????? ????????????
    if (e.target.value === '?????????') {
      setActiveArea(false);
      setActiveHos(true);
      setSubArea('?????????');
    }
  };

  const onSelectSub = (e) => {
    // setSubArea
    const sgguName = e.target.value;
    setSubArea(sgguName);
    const sidoIndex = sido.indexOf(mainArea);
    setSubAreaCode(sgguCode[sidoIndex][sggu[sidoIndex].indexOf(sgguName)]); // ???????????? ??????

    // setActive - ???????????? ??????
    setActiveArea(false);
    setActiveHos(true);
  };

  // ?????? subArea??? ????????? -> ????????? ???????????? api ?????? ???????????? ???.
  useEffect(() => {
    setInput('');
    setSearch('');
    setHospital('');
  }, [subArea]);

  useEffect(() => {
    if (subAreaCode) {
      console.log(subAreaCode);
    }
  }, [subAreaCode]);

  useEffect(() => {
    if (mainAreaCode) {
      console.log(mainAreaCode);
    }
  }, [mainAreaCode]);

  useEffect(() => {
    console.log(navigate);
  }, [navigate]);

  // const onSelectHos = (e) => {
  //   // ?????? active ?????????
  //   setActiveArea(false);
  //   setActiveHos(false);
  //   const innerT = e.target.parentNode.innerText;
  //   const hosName = innerT.slice(0, innerT.indexOf('\n'));
  //   setHospital(hosName);
  // };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onClickSearch = (e) => {
    e.preventDefault();
    inputRef.current.blur();
    if (input.length < 2) {
      alert('?????? 2??? ???????????????');
      return;
    }
    getLoading();
    // ?????? search??? ''?????? ->
  };

  const getLoading = () => {
    // ????????? ?????? - axios
    setTimeout(() => {
      console.log('api ??????');
      setSearch(input);
      // search??? ''?????? ????????? ?????????
    }, 1200);
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
        <title>step 1 - ???????????????</title>
      </Helmet>
      <HomeBlock>
        <h1>????????? ?????? - test</h1>
        <div className="button-area">
          <button
            className="next"
            disabled={!(mainArea && subArea && hospital)}
            onClick={onClickNext}
          >
            ??????
          </button>
        </div>
        <h3
          className={`acc-title ${isActiveArea && 'active'}`}
          onClick={onClickTitleOne}
        >
          1/ ?????? ??????
          {!isActiveArea && mainArea && subArea && (
            <span className="area-info">{`${mainArea} ${
              subArea === '?????????' ? '' : subArea
            }`}</span>
          )}
        </h3>{' '}
        {isActiveArea && (
          <div className="area-wrap">
            <select
              name="main"
              id="main"
              onChange={onSelectMain}
              defaultValue="ph"
              value={mainArea}
            >
              <option disabled value="ph">
                ???/??? ??????
              </option>
              {sido.map((m, i) => (
                <option value={m} key={`main-${i}`}>
                  {m}
                </option>
              ))}
            </select>
            <select
              name="sub"
              id="sub"
              onChange={onSelectSub}
              defaultValue="ph"
              value={subArea}
            >
              <option disabled value="ph">
                ???/???/??? ??????
              </option>
              {mainArea &&
                sggu[sido.indexOf(mainArea)].map((s, i) => (
                  <option value={s} key={`sub-${i}`}>
                    {s}
                  </option>
                ))}
            </select>
          </div>
        )}
        <h3
          className={`acc-title ${isActiveHos && 'active'}`}
          onClick={onClickTitleTwo}
        >
          2/ ????????? ??????
          {!isActiveHos && search && (
            <span className="hospital-info">{hospital}</span>
          )}
        </h3>
        {isActiveHos && (
          <div className="hos-wrap">
            <form onSubmit={onClickSearch}>
              <input
                type="text"
                placeholder="???????????? ???????????????"
                value={input}
                onChange={onChangeInput}
                ref={inputRef}
                onClick={nextPage}
              />
              <button>??????</button>
            </form>
          </div>
        )}
      </HomeBlock>
    </>
  );
};

export default Home;
