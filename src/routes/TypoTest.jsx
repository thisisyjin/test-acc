import styled from 'styled-components';

const TypoTestBlock = styled.div`
  h1.custom {
    font-size: 2rem;
  }

  p.custom {
    font-size: 1rem;
  }

  p.custom1 {
    font-size: 1em;
  }
  p.custom2 {
    font-size: 1.5rem;
  }
  p.custom3 {
    font-size: 2rem;
  }

  button.custom {
    font-size: 1rem;
  }

  input,
  button {
    display: block;
    margin-bottom: 1rem;
  }

  input.custom {
    font-size: 1rem;
  }
`;

const TypoTest = () => {
  return (
    <TypoTestBlock>
      <h1>Header 1</h1>
      <h1 className="custom">Header 1 - 2rem 설정</h1>
      <p>paragraph</p>
      <p className="custom">paragraph - 1rem 설정</p>
      <p className="custom1">paragraph - 1em 설정</p>
      <p className="custom2">paragraph - 1.5rem 설정</p>
      <p className="custom3">paragraph - 2rem 설정</p>
      <button>Button</button>
      <button className="custom">Button - 1rem 설정</button>
      <input type="text" placeholder="input" />
      <input type="text" className="custom" placeholder="input - 1rem 설정" />
    </TypoTestBlock>
  );
};

export default TypoTest;
