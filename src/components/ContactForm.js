import Button from "./Button";
import Name from "./Name";
import Number from "./Number";

function ContactForm({ value, onSubmit, onChange}) {

  return (<form onSubmit={onSubmit} >
    <span>Name</span>
    <Name type="text" value={value} onChange={onChange}></Name>
    <span>Number</span>
    <Number></Number>
    <Button type = "submit"></Button>
  </form>  

  )
};

export default ContactForm;
