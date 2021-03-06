import Link from 'gatsby-link'

import styled, { css } from '../../modules/emotion'

export const Root = styled('footer')`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background-color: #111213;
  box-shadow: 0px -1px 54px rgba(0, 0, 0, 0.3);
  transform: translateY(150px);
  transition: opacity 0.2s ease;

  ${({ theme }) =>
    !theme.footer &&
    css`
      opacity: 0;
    `};
`

export const Links = styled('ul')`
  flex-grow: 1;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  padding: 20px 70px;
`

interface ISection {
  name: string
}

export const Section = styled<ISection, 'li'>('li')`
  flex-grow: 1;

  &::before {
    display: block;
    content: "${({ name }) => name}";
    font-size: 1.125rem;
    font-weight: 400;
    margin: 0px 0px 1rem;
    color: #90a3e6;
    text-shadow: rgba(144, 163, 230, 0.12) 0px 0px 3px;
  }
`

export namespace Place {
  const Base = css`
    display: block;
    text-decoration: none;
    opacity: 0.6;
    transition: opacity 0.2s ease;
    margin-bottom: 0.4rem;

    &:hover {
      opacity: 0.9;
    }
  `

  export const Route = styled(Link)`
    ${Base};
  `

  export const Href = styled('a')`
    ${Base};
  `
}

export const Chin = styled('div')`
  display: flex;
  height: 30px;
  padding: 0 70px;
  line-height: 30px;
  font-size: 0.8rem;
  background-color: rgba(0, 0, 0, 0.1);
`

export const Copyright = styled('span')`
  opacity: 0.3;
`

export const Credits = styled('span')`
  flex-grow: 1;
  text-align: right;

  a {
    color: #a8bdff;
  }
`
