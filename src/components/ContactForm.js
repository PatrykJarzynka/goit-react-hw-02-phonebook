import Button from "./Button";
import Input from "./Input";

function ContactForm({ value, onSubmit, onChange}) {

  return (<form onSubmit={onSubmit} >
    <Input type="text" value ={value} onChange={onChange}></Input>
    <Button type = "submit"></Button>
  </form>  

  )
};

export default ContactForm;
