import { useState } from 'react';
import styled from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/index';

const HomeBlock = styled.div`
  input,
  select {
    padding: 12px 6px;
  }

  .area-wrap {
    width: 310px;
    margin: 0 auto;
    opacity: 0;
    height: 0;
    transition: 0.6s;
    overflow: hidden;
  }

  .area-wrap.active {
    opacity: 1;
    height: auto;
  }

  .hos-wrap {
    opacity: 0;
    height: 0;
    transition: 0.6s;
    overflow: hidden;
  }

  .hos-wrap.active {
    opacity: 1;
    height: auto;
  }

  select {
    width: 150px;
    border: none;
    margin-right: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.2);
    padding-left: 20px;
  }

  select:last-child {
    margin-right: 0;
  }

  .input-grp {
    display: flex;
    width: 340px;
    margin: 0 auto;
    button {
      margin-left: 10px;
    }
    margin-bottom: 25px;
  }

  input {
    border: none;
    display: block;
    background-color: #eee;
    border-radius: 5px;
    width: 280px;
    padding-left: 20px;
  }

  button {
    display: block;
    width: 50px;
    background-color: royalblue;
    color: #fff;
    border-radius: 4px;
  }

  .hos-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 8px;
    padding-left: 12px;
    margin-bottom: 6px;
    border-radius: 4px;

    button {
      padding: 6px;
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
    border-top: 2px solid #999;
    color: #666;
    margin-bottom: 10px;
  }

  .area-info {
    position: relative;
    color: #999;
    font-size: 14px;
    font-weight: 500;
    left: 100px;
    top: -2px;
  }

  .hospital-info {
    position: relative;
    color: #999;
    font-size: 14px;
    font-weight: 500;
    left: 56px;
    top: -2px;
  }

  .acc-title::after {
    content: '???';
    position: absolute;
    right: 20px;
    top: 9px;
  }

  .acc-title.active {
    padding: 16px 20px;
    border-top: 2px solid royalblue;
    margin-bottom: 10px;
    color: royalblue;
  }

  .acc-title.active + .area-wrap {
    min-height: auto;
  }
`;

const NewHome = () => {
  const [isActiveArea, setActiveArea] = useState(true);
  const [isActiveHos, setActiveHos] = useState(!isActiveArea);
  const [mainArea, setMainArea] = useState();
  const [subArea, setSubArea] = useState();

  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');

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

  const onSelectHos = (e) => {
    // ?????? active ?????????
    setActiveArea(false);
    setActiveHos(false);
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  const onClickSearch = () => {
    setSearch(input);
  };

  return (
    <HomeBlock>
      <div>????????? ??????</div>
      <Link to="/area/main">??????</Link>
      <h3
        className={`acc-title ${isActiveArea && 'active'}`}
        onClick={onClickTitleOne}
      >
        1/ ?????? ??????
        {!isActiveArea && <span className="area-info">????????? ?????????</span>}
      </h3>
      <div className={`area-wrap ${isActiveArea && 'active'}`}>
        <select name="main" id="main" onChange={onSelectMain} value={mainArea}>
          <option selected disabled>
            ???/??? ??????
          </option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
        </select>
        <select name="main" id="main" onChange={onSelectSub} value={subArea}>
          <option selected disabled>
            ???/???/??? ??????
          </option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
          <option value="?????????">?????????</option>
        </select>
      </div>
      <h3
        className={`acc-title ${isActiveHos && 'active'}`}
        onClick={onClickTitleTwo}
      >
        2/ ????????? ??????
        {!isActiveHos && (
          <span className="hospital-info">???????????? ????????????</span>
        )}
      </h3>

      <div className={`hos-wrap ${isActiveHos && 'active'}`}>
        <div className="input-grp">
          <input
            type="text"
            placeholder="???????????? ???????????????"
            value={input}
            onChange={onChangeInput}
          />
          <button onClick={onClickSearch}>??????</button>
        </div>
        {search && (
          <div className="search-result">
            <div className="hos-info">
              <div className="name-wrap">
                ???????????? ??????
                <span className="address">????????? ????????? ????????? 123-4567</span>
              </div>
              <button>??????</button>
            </div>
            <div className="hos-info">
              <div className="name-wrap">
                ???????????? ?????????
                <span className="address">????????? ????????? ????????? 123-4567</span>
              </div>
              <button>??????</button>
            </div>
            <div className="hos-info">
              <div className="name-wrap">
                ???????????? ??????
                <span className="address">????????? ????????? ????????? 123-4567</span>
              </div>
              <button>??????</button>
            </div>
            <div className="hos-info">
              <div className="name-wrap">
                ???????????? ????????????
                <span className="address">????????? ????????? ????????? 123-4567</span>
              </div>
              <button onClick={onSelectHos}>??????</button>
            </div>
          </div>
        )}
      </div>
    </HomeBlock>
  );
};

export default NewHome;
