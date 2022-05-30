import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button } from "react-bootstrap";
import "./style.css";

function InvestorsPopup() {

    const history = useHistory();

    const handleOpenInvestorsPage = () => {
        history.push("/investor/united_states");
    }
  return (
    <div className="inv__pop__box">
        <div className="inv_item">
            <h4>YOU ARE A HOLDER GET ACCESS TO INVESTORS DATABASE</h4>
            <Button onClick={handleOpenInvestorsPage} variant="outline-primary">INVESTORS</Button>{' '}
        </div>
    </div>
  )
}

export default InvestorsPopup