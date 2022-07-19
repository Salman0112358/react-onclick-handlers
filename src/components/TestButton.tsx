/*
function TestButton(): JSX.Element {
  function handleClick(){
    console.log("Greetings from the test button!")
  }
  return <button onClick={handleClick}>Make me do something when I'm clicked...</button>;
}
---------------------------------------------------------------------EXAMPLE A function declaration-----------------------------------------------------------------------------------------------

function TestButton(): JSX.Element {
  const handleClick = () => {
    console.log("Hello from the test button again!!");
  };
  return (
    <button onClick={handleClick}>
      Make me do something when I'm clicked..
    </button>
  );
}

//---------------------------------------------------------------------EXAMPLE B full body arrow function-----------------------------------------------------------------------------------------------


function TestButton() : JSX.Element {
  const handleClick = () => console.log("single line arrow function")
  return (
    <button onClick={handleClick}>Hell from the test button for example C </button>
  )
}




//---------------------------------------------------------------------EXAMPLE C Single line arrow function-----------------------------------------------------------------------------------------------

function TestButton() : JSX.Element {
  return (
    <button onClick={()=> console.log("anonymous function LETS GOOO!!!!")}>
      This is the test button again! but this time it is anonymous
    </button>
  )
}


export default TestButton;

//---------------------------------------------------------------------EXAMPLE F Single line anonymous arrow function-----------------------------------------------------------------------------------------------*/

function TestButton() : JSX.Element {
  const URL = "https://www.youtube.com/"
  return (
    <button onClick={()=> {
      console.log("anonymous function LETS GOOO!!!!")
      window.alert("Thins are happening!!!!")
      window.open(URL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
      }}>
      This is the test button again! but this time it is anonymous
    </button>
  )
}


export default TestButton;
