import React, { useState } from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
    flex: 1;
`;

const TitleContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TitleLabel = Styled.Text`
    font-size: 24px;
`;

const CountContainer = Styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;
const CountLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

const ButtonContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

interface Props {
    title?: string;
    initValue: number;
}

const Counter = ({ title, initValue }: Props) => {
    // using State, number state (if js => useState(initValue), but ts => define initValue as number)
    // can edit Immutable variable "count" with set function "setCount" => "count" can be editted in this component
    // only updating changed part using "Virtual DOM" of React
    const [count, setCount] = useState<number>(0);
    // const [변수명, 변수를 변경할 set 함수] = useState<State의 타입>(초기 값); => can use objects for initValue

    return (
        <Container>
            {title && (
                <TitleContainer>
                    <TitleLabel>{title}</TitleLabel>
                </TitleContainer>
            )}
            <CountContainer>
                <CountLabel>{initValue + count}</CountLabel>
            </CountContainer>
            <ButtonContainer>
                <Button iconName="plus" onPress={() => setCount(count + 1)} />
                <Button iconName="minus" onPress={() => setCount(count - 1)} />
            </ButtonContainer>
        </Container>
    );
};
export default Counter;