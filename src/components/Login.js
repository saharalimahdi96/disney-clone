import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
                <SingUp>GET ALL THERE</SingUp>
                <Description>
                i love how you build the clone with and explained everything so far! the only question i have is since redux got updated to v9 some of the code doesn't work or I'm doing it wrong but good vid all together
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
            </CTA>
            <BgImage/>
        </Content>
    </Container>
    )
   
}

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;
const Content = styled.section`
margin-bottom: 100vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
padding: 80px 40px;
height: 100%;
`;
const BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url('./images/login-background.jpg');
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: -1;
`;
const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 0;
align-items: center;
text-align: center;
margin-right: auto;
margin-left: auto;
transition-timing-function: ease-out;
transition: pacity 0.2s;
width: 100%;
`;
const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;
const SingUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px;
border: 1px solid transparent;
border-radius: 4px;
margin-top: 15px;
&:hover{
    background-color: #0483ee;
}
`
const Description = styled.p`
color: hsla(0, 0%, 95.3% , 1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`
const CTALogoTwo =styled.img`
max-width: 600px;
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom;
width: 100%;
`
export default Login;