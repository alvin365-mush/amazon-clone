import styled from 'styled-components';

export const Box = styled.div`
padding: 0px 0px;
background: #131921;
position: relative; 
width: 100%;
margin-top: 0px; 
position: sticky;
top: 0;
z-index: 100;


@media (max-width: 1000px) { 
	padding:  0px 0px; 
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
justify-content: center; 
padding-left: 1px;
padding-right: 1px;
`;
export const Column2 = styled.div` 
display: flex; 

flex-direction: column; 
text-align: center;
justify-content: center; 
padding-left: 20px;
padding-right: 1px;
width: auto;
`;

export const Row = styled.div` 
display: grid; 
width:100%;
grid-template-columns: repeat(auto-fill, 
						minmax(385px, 1fr)); 
grid-gap: 0px; 

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
//border: 1px solid #fff;