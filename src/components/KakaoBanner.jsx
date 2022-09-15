import styled from 'styled-components';

const KakaoBannerBlock = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
`;

const KakaoBannerBtn = styled.a`
  display: block;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 100px;
  font-size: 16px;
  padding: 20px 35px;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.15);
`;

const KakaoBanner = () => {
  return (
    <KakaoBannerBlock>
      <KakaoBannerBtn href="http://pf.kakao.com/_xkSxkxdxj" target="_blank">
        카톡 문의하기
      </KakaoBannerBtn>
    </KakaoBannerBlock>
  );
};

export default KakaoBanner;
