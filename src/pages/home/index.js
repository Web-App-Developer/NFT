import { useCallback, useState } from "react";
import { Redirect } from "react-router-dom";
import GradientButton from "react-linear-gradient-button";
import { Row, Col, Container, Spinner, Button } from "react-bootstrap";
import dGifImg from "../../assets/images/nft_img.gif";
import InvestorsPopup from "./InvestorsPopup";
import mintImage from '../../assets/mint.svg';

const Home = ({
  mintItem,
  connect,
  killSession,
  connected,
  address,
  nftCount,
}) => {
  const [count, setCount] = useState(1);
  const [msg, setMsg] = useState();
  const [maxMintAmount, setMaxMintAmount] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const countDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const countUp = () => {
    if (count < maxMintAmount) {
      setCount(count + 1);
    }
  };

  const onMintItem = async () => {
    setIsLoading(true);
    let mintResult = await mintItem(count);
    if (mintResult > 0) {
      console.log("Mint has been successfully!");
      setMsg(
        <div class="alert alert-success" role="alert">
          Mint has been successfully!
        </div>
      );
    } else {
      console.log("Mint failed");
      setMsg(
        <div class="alert alert-danger" role="alert">
          Mint failed
        </div>
      );
    }
    setIsLoading(false);
  };

  const handleOpenSea = useCallback(() => {
    let URL = "https://testnets.opensea.io/collection/afrirpay-nft";
    window.open(URL, "_blank");
  }, []);

  return (
    <div className="">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section
          id="section-hero"
          aria-label="section"
          className="no-top no-bottom vh-100 landing__page__view"
          // data-bgimage="url(assets/images/background/bg-shape-1.jpg) bottom"
        >
          <div className="v-center">
            <Container>
              <Row className="align-items-center">
                <Col md={6}>
                  <div className="spacer-single"></div>
                  <div className="spacer-10"></div>
                  <h1 className="wow fadeInUp" data-wow-delay=".75s">
                    Create, sell or collect digital items.
                  </h1>
                  <p className="wow fadeInUp lead" data-wow-delay="1s">
                    Unit of data stored on a digital ledger, called a
                    blockchain, that certifies a digital asset to be unique and
                    therefore not interchangeable
                  </p>
                  <div className="spacer-10"></div>
                  <div className="mb-sm-30"></div>

                  <div>
                    <Row>
                      {/* <Col md={5}>
                        {connected ? (
                          <Button className="btn-main" onClick={killSession}>
                            <i className="icon_wallet_alt"></i>
                            <span> CONNECTED WALLET</span>
                          </Button>
                        ) : (
                          <Button className="btn-main" onClick={connect}>
                            <i className="icon_wallet_alt"></i>
                            <span> Connect Wallet</span>
                          </Button>
                        )}
                      </Col> */}
                      <Col md={6}>
                        <div
                          className="connect__button"
                          onClick={handleOpenSea}
                        >
                          <span>Opensea</span>
                        </div>{" "}
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md={6} className="xs-hide">
                  <img
                    src="assets/images/misc/nft.png"
                    className="lazy img-fluid wow fadeIn"
                    data-wow-delay="1.25s"
                    alt=""
                  />
                </Col>
              </Row>
            </Container>
          </div>

          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center">
                  <h2>Mint</h2>
                  <div className="small-border bg-color-2"></div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={5} className="text-center">
                <img
                  src={mintImage}
                  class="img-fluid img-rounded mb-sm-30"
                  alt=""
                />
              </Col>
              <Col md={7}>
                <div style={{ textAlign: "center", marginTop: "150px" }}>
                  <h2>Investor Nation</h2>
                  {connected ? (
                    <div>
                      <div style={{ marginBottom: "20px" }}>
                        {/* <div style={{ display: "inline-block" }}>
                          <GradientButton
                            gradient={[
                              "rgba(105, 79, 254, 1)",
                              "rgba(191, 75, 255, 1)",
                            ]}
                            angle="-180deg"
                            borderRadius={[10, 10]}
                            borderWidth={2}
                            color="white"
                            background="#1D133C"
                            onClick={countDown}
                          >
                            <div style={{ width: "50px" }}>-</div>
                          </GradientButton>
                        </div>
                        <div style={{ display: "inline-block" }}>
                          <GradientButton
                            gradient={[
                              "rgba(105, 79, 254, 1)",
                              "rgba(191, 75, 255, 1)",
                            ]}
                            angle="-180deg"
                            borderRadius={0}
                            borderWidth={2}
                            color="white"
                            background="#1D133C"
                          >
                            <div style={{ width: "150px" }}>{count}</div>
                          </GradientButton>
                        </div>
                        <div style={{ display: "inline-block" }}>
                          <GradientButton
                            gradient={[
                              "rgba(105, 79, 254, 1)",
                              "rgba(191, 75, 255, 1)",
                            ]}
                            angle="-180deg"
                            borderRadius={0}
                            borderWidth={2}
                            color="white"
                            background="#1D133C"
                            onClick={countUp}
                          >
                            <div style={{ width: "50px" }}>+</div>
                          </GradientButton>
                        </div> */}

                        <div className="mint__main__box">
                          <div className="mint__minus" onClick={countDown}>-</div>
                          <div className="mint__mint__count">{count}</div>
                          <div className="mint__plus" onClick={countUp}>+</div>
                        </div>
                      </div>
                      {isLoading  ? (
                        <Button className="btn-main">
                          <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        </Button>
                      ) : (
                        <div
                       
                          className="page__btn__small center__btn"
                          onClick={onMintItem}
                        >
                          <span>Mint</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={8} className="offset-md-2 pt-4">
                {msg}
              </Col>
            </Row>
          </Container>
        </section>

        {/* <section id="section-collections" className="no-bottom">
      
        </section> */}
        {nftCount > 0 ? 
         <InvestorsPopup />
        : ""}
       

        {/* <footer className="footer-light">
          <div
            className="subfooter"
            style={{
              position: "fixed",
              bottom: 0,
              width: "100%",
            }}
          >
              
            <Container>
              <Row>
                <Col md={12}>
                  <div className="df-flex">
                    <div className="de-flex-col">
                      {nftCount === 0 ? (
                        <div>
                          <span className="mint_link text-white">
                            YOU ARE A HOLDER GET ACCESS TO INVESTOR DATABASE
                          </span>
                          <a
                            data-scroll=""
                            className="mint_btn"
                            href="/investor/united_states"
                            data-wow-duration="1s"
                          >
                            INVESTORS
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </footer> */}
      </div>

      <a href="#" id="back-to-top"></a>
    </div>
  );
};

export default Home;
