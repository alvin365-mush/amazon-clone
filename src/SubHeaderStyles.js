import styled from 'styled-components';

export const Box = styled.div`
padding: 9px 9px;
background: rgb(35, 47, 62);
position: relative; 

width: 100%;
margin-top: 0px; 


@media (max-width: 1000px) { 
	padding: 20px 0px; 
} 
`;
export const Box2 = styled.div` 
padding: 50px 60px; 
background: rgb(35, 47, 62);
position: absolute; 
bottom: 0; 
width: 100%; 


@media (max-width: 1000px) { 
	padding: 70px 30px; 
} 
`;

export const Container = styled.div` 
	display: flex; 
	flex-direction: column; 
	justify-content: center;
	align-items:center 
	max-width: 100%; 
	margin: 0 auto; 
	/* background: red; */
`

export const Column = styled.div` 
display: flex; 
flex-direction: column; 
text-align: left; 
padding-left: 5px;
padding-right: 5px;
`;

export const Row = styled.div` 
display: grid; 
grid-template-columns: repeat(auto-fill, 
						minmax(185px, 1fr)); 
grid-gap: 10px; 

@media (max-width: 1000px) { 
	grid-template-columns: repeat(auto-fill, 
						minmax(200px, 1fr)); 
} 
`;

export const FooterLink = styled.a` 
color: #fff; 
margin-top: 0px;
margin-bottom: 10px; 
font-size: 14px; 
text-decoration: none; 

&:hover { 

    text-decoration-line: underline;
	transition: 200ms ease-in; 
} 
`;

export const Heading = styled.p` 
font-size: 13px; 
color: #fff; 
margin-bottom: 1px; 
font-weight: bold;
`;
export const Heading2 = styled.p` 
font-size: 13px; 
color: #fff;  
font-weight: bold;
margin-left:10px;
`;
