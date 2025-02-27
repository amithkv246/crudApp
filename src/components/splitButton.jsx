import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function SplitButton({ value, option }) {
    return (
        <Dropdown as={ButtonGroup}>
            <Button className='iconButton btn btn-light btn-lg fw-bold' style={{ color: "#6C757D", border: "1px solid #800000", color: "#6C757D", backgroundColor: "#F5F5F5", borderRight: "0px" }}>
                {value}
            </Button>
            <Dropdown.Toggle split id="dropdown-split-basic" className='iconButton btn btn-light btn-lg fw-bold' style={{ color: "#6C757D", border: "1px solid #800000", color: "#6C757D", backgroundColor: "#F5F5F5", borderLeft: "0px" }} />
            <Dropdown.Menu>
                <Dropdown.Item className='d-flex flex-row justify-content-evenly align-items-center w-75'>
                    <p className='mb-0'>{option}</p><i className="fa-solid fa-right-from-bracket text-black"></i>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SplitButton;