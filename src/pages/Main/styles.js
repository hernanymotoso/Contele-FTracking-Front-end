import styled from 'styled-components';

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Header = styled.header`
  flex: 1;
  margin: 40px 0 20px 0;

  img {
    width: 175px;
    margin-left: 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Section = styled.section`
  background: #f7f7f7;
  padding-bottom: 40px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 21px;
  color: #1a237a;
  width: 100%;
  margin: 40px 0 0 20px;
`;

export const SAddress = styled.div`
  flex: 2;
  /* width: 50%; */
  background: #f7f7f7;
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px;

  input,
  select {
    border-radius: 4px;
    border: solid 1px #b7b7b7;
    height: 28px;
    flex: 1;

    margin: 0 20px;
    margin-top: 20px;
    font-size: 12px;
    padding-left: 10px;
  }
  select {
    background: #fff;
  }
`;
export const CInformation = styled.div`
  flex: 2;
  /* width: 50%; */
  background: #f7f7f7;
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px;

  input,
  select {
    border-radius: 4px;
    border: solid 1px #b7b7b7;
    height: 28px;
    flex: 1;
    margin: 0 20px;
    margin-top: 20px;
    font-size: 12px;
    padding-left: 10px;
  }
  select {
    background: #fff;
  }
`;

export const SubmitOrder = styled.button`
  width: 200px;
  border-radius: 4px;
  border: 0;
  padding: 10px;
  background: #1a237a;
  color: #fff;
  align-self: flex-end;
  margin-bottom: 40px;
  margin-right: 30px;
`;
