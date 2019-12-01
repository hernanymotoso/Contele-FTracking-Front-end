import React, { Component } from 'react';

import Container from '../../components/Container';
import Input from '../../components/Input';
// eslint-disable-next-line import/named
import {
  Header,
  Section,
  Content,
  CInformation,
  SAddress,
  Title,
  Break,
  SubmitOrder,
} from './styles';

import logo from '../../assets/images/logo.png';

export default class Main extends Component {
  state = {};

  render() {
    return (
      <>
        <Container>
          <Header>
            <img src={logo} alt="logo" />
          </Header>
        </Container>

        <Section>
          <Container>
            <Content>
              <CInformation>
                <Title>Contact Information</Title>
                <Input InputType="text" InputPlaceholder="First Name:" />
                <Input InputType="text" InputPlaceholder="Last Name:" />
                <Break />
                <Input InputType="email" InputPlaceholder="Email Address:" />
                <Input InputType="phone" InputPlaceholder="Phone" />
                <Break />
                <select>
                  <option value="English">Language</option>
                  <option value="English">English</option>
                  <option value="Portugues">Portugues</option>
                  <option value="Chines">Chines</option>
                  <option value="Alemão">Alemão</option>
                </select>
                <select>
                  <option value="English">Country</option>
                  <option value="English">English</option>
                  <option value="Portugues">Portugues</option>
                  <option value="Chines">Chines</option>
                  <option value="Alemão">Alemão</option>
                </select>
              </CInformation>
              <SAddress>
                <Title>Shipping Address</Title>
                <Input InputType="text" InputPlaceholder="Address Line 1:" />
                <Break />
                <Input InputType="text" InputPlaceholder="Address Line 2:" />
                <Break />
                <select>
                  <option value="English">Language</option>
                  <option value="English">English</option>
                  <option value="Portugues">Portugues</option>
                  <option value="Chines">Chines</option>
                  <option value="Alemão">Alemão</option>
                </select>
                <select>
                  <option value="English">Country</option>
                  <option value="English">English</option>
                  <option value="Portugues">Portugues</option>
                  <option value="Chines">Chines</option>
                  <option value="Alemão">Alemão</option>
                </select>
                <select>
                  <option value="English">Country</option>
                  <option value="English">English</option>
                  <option value="Portugues">Portugues</option>
                  <option value="Chines">Chines</option>
                  <option value="Alemão">Alemão</option>
                </select>
              </SAddress>
            </Content>
            <Content>
              <SAddress>
                <Title>Billing Address</Title>
                <Input InputType="text" InputPlaceholder="Address Line 1:" />
                <Break />
                <Input InputType="text" InputPlaceholder="Address Line 2:" />
                <Break />
                <select>
                  <option value="English">Language</option>
                  <option value="English">English</option>
                  <option value="Portugues">Portugues</option>
                  <option value="Chines">Chines</option>
                  <option value="Alemão">Alemão</option>
                </select>
                <select>
                  <option value="English">Country</option>
                  <option value="English">English</option>
                  <option value="Portugues">Portugues</option>
                  <option value="Chines">Chines</option>
                  <option value="Alemão">Alemão</option>
                </select>
                <select>
                  <option value="English">Country</option>
                  <option value="English">English</option>
                  <option value="Portugues">Portugues</option>
                  <option value="Chines">Chines</option>
                  <option value="Alemão">Alemão</option>
                </select>
                {/* <Break /> */}
              </SAddress>
              <SAddress>
                <Title>Check the boxes below</Title>
                <input type="text" placeholder="First Name:" />
                <Break />
                <input type="email" placeholder="Email Address:" />
                <Break />
                <select>
                  <option value="English">Language</option>
                  <option value="English">English</option>
                  <option value="Portugues">Portugues</option>
                  <option value="Chines">Chines</option>
                  <option value="Alemão">Alemão</option>
                </select>
                <select>
                  <option value="English">Country</option>
                  <option value="English">English</option>
                  <option value="Portugues">Portugues</option>
                  <option value="Chines">Chines</option>
                  <option value="Alemão">Alemão</option>
                </select>
                <select>
                  <option value="English">Country</option>
                  <option value="English">English</option>
                  <option value="Portugues">Portugues</option>
                  <option value="Chines">Chines</option>
                  <option value="Alemão">Alemão</option>
                </select>
              </SAddress>
            </Content>
          </Container>
        </Section>
        <Container>
          <SubmitOrder>Order Now</SubmitOrder>
        </Container>
      </>
    );
  }
}
