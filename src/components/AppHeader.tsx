interface AppHeaderProps {
  title: string;
}

function AppHeader({ title }: AppHeaderProps): JSX.Element {
  const handleClick = () => console.log(title.toUpperCase())
  return <h1 onClick={handleClick}>{title}</h1>;
}

export default AppHeader;
