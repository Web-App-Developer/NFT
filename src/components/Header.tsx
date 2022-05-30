import { Row, Col, Container } from "react-bootstrap";
import Logo from "../assets/images/logo.png";
import './style.css';
interface Props {
  connect: () => void;
  killSession: () => void;
  connected: boolean;
  address: string;
}

const Header = (props: Props) => {

  return (
    <div id="wrapper">
      <header className="header-light scroll-light">
        <Container>
          <Row>
            <Col md={12}>
              <div className="de-flex sm-pt10">
                <div className="de-flex-col">
                  <div className="de-flex-col">
                    <div id="logo">
                      <a href="/" className="logo__item">
                        <img
                          alt=""
                          className="logo-2"
                          src={Logo}
                          style={{ width: "60px" }}
                        />
                        <h2
                          className="logo-1"
                        >
                          Investor Nation
                        </h2>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="de-flex-col header-col-mid">
                  <div className="menu_side_area">
                    {props.connected ? (
                      <div
                      
                        className="connect__button"
                        onClick={props.killSession}
                      >
                        <i className="icon_wallet_alt"></i>
                        <span>CONNECTED WALLET</span>
                      </div>
                    ) : (
                      <div
                       
                        className="connect__button"
                        onClick={props.connect}
                      >
                        <i className="icon_wallet_alt mr-2"></i>
                        <span>Connect Wallet</span>
                      </div>
                    )}
                    {/* <span id="menu-btn"></span> */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Header;
