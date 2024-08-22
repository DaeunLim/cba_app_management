import React, { useState, useEffect } from 'react';
import { Container, HeaderText, HeaderView, FormContainer, OutterContainer, InnerContainer, Box1, Box2, Box3, DDayTest, TextBox, StatusTitle, CountTitle, Position, Numbers } from './View.styled';
import BackTextInput from '@components/BackTextinput';
import RadialChart from '@components/RadialChart';
import BarCharts from '@components/BarCharts';

import { User } from '@type/states';
import { requestUser } from '@apis/index';

const Home = () => {
  const [search, set_search] = useState("");
  const [dDay, setDDay] = useState(null);
  const [data, set_data] = useState<User[]>([]); // can query user's data from here

  const calculateDDay: any = (targetDate: any) => {
    const today: any = new Date();
    const target: any = new Date(targetDate);
    const difference = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
    return difference;
  };
  
  useEffect(() => {
    const targetDate = '2024-08-23'; // Set your target date here
    setDDay(calculateDDay(targetDate));
  }, []);

  /*const registeredCount = data.length;
  console.log(registeredCount);*/
  useEffect(() => {
    requestUser().then((res) => {
      set_data(res.data.user);
      console.log(res.data);
    });
  }, []);



  

  return (
    <Container>
      <HeaderView>
        <HeaderText>대시보드</HeaderText>
        <BackTextInput placeHolder={'Search...'} getter={search} setter={set_search} />
        <HeaderText></HeaderText>
      </HeaderView>
      <FormContainer>
        <Box1>
          
            <TextBox>복음으로: The Grace</TextBox>
           
            <DDayTest>D-{dDay}</DDayTest>
         
        </Box1>

        
        <Box1>Box1 <br />Hello World</Box1>
        <Box1>
          Box1 <br />
          Next Line
        </Box1>
        <Box2>
          <OutterContainer>
            <StatusTitle>가입 현황</StatusTitle>
            <InnerContainer>
              <Position>대청 1부</Position>
            </InnerContainer>
            <InnerContainer>
              <TextBox>반일섭 M</TextBox>
              <TextBox>노시은 M</TextBox>
              <TextBox>권수영 M</TextBox>
            </InnerContainer>
            <InnerContainer>
              <Numbers>30</Numbers>
              <Numbers>100</Numbers>
              <Numbers>100</Numbers>
            </InnerContainer>
            <InnerContainer>
              <Position>대청 2부</Position>
              <Position>기타</Position>
            </InnerContainer>
            <InnerContainer>
              <Numbers>30</Numbers>
              <Numbers>30</Numbers>
            </InnerContainer> <br />
            <InnerContainer>총 200</InnerContainer>
            
          </OutterContainer>
          
        </Box2>
        
        <Box2>
          <OutterContainer>
            <StatusTitle>납부 현황</StatusTitle>
          
          
          <RadialChart percentage={30}/>
          <InnerContainer>
              <TextBox>납부 수</TextBox>
              <TextBox>등록 수</TextBox>
            </InnerContainer>
            <InnerContainer>
              <TextBox>30</TextBox>
              <TextBox>100</TextBox>
            </InnerContainer>
            </OutterContainer>
        </Box2>
        
        <Box3>
          
        <BarCharts percentage={100}/>
        </Box3>
        
      </FormContainer>
      
    </Container>
  );
};

export default Home;