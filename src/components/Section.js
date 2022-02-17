import Button from "./Button";
import Input from "./Input";

function Section({ title }) {

  const section =
    title === 'Phonebook' ? (
      <div>
        <h1>{title}</h1>
        <Input></Input>
        <Button></Button>
      </div>
    ) : (
      <div></div>
    );
  
  return section

}

export default Section
