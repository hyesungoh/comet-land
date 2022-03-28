import { IHeader } from '../../../_content/Header';

function Header({ heading, description }: IHeader) {
  return (
    <header>
      <h1>{heading}</h1>
      <p>{description}</p>
    </header>
  );
}

export default Header;
