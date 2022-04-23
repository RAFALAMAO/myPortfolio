import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  /* @media ${() => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0; */
  /* @media screen and (min-width: 576px) { */
  /* display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0; */
  /* } */
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 1px 3px 20px rgba(0, 191, 250, 0.2);
  text-align: center;
  width: 400px;
  /* @media ${() => props.theme.breakpoints.sm} {
    width: 100%; */
  /* } */
  @media screen and (min-width: 576px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.06);
    }
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  border-radius: 20%;
  background: #d0bb57;
  background: ${'linear-gradient(270deg, #6c42f5 0%, #13415c 100%)'};
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  /* @media ${() => props.theme.breakpoints.sm} {
    padding:.3rem */

  /* } */
  @media screen and (min-width: 576px) {
    padding: 1.5rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background:  ${'linear-gradient(45deg, #13415c 0%, #322aa1 100%)'};
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: ${'linear-gradient(45deg, #2272a1 0%, #453ade 100%)'};
    color: rgba(255, 255, 255)
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #bfbfd8;
  font-size: 1.5rem;
`;
