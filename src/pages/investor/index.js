import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Row, Col, Container, Form } from "react-bootstrap";
import "./style.css";
import InvestorBanner from "../../assets/brand.svg";
import TableItem from "../../helpers/TableItem";

const Investor = ({ connect, killSession, connected, address }) => {
  const { key } = useParams();
 console.log("key",key);
  const countries = [
    { country: "United States", key: "united_states" },
    { country: "United Kingdom", key: "united_kingdom" },
    { country: "Ireland", key: "ireland" },
    { country: "Poland", key: "poland" },
    { country: "Germany", key: "germany" },
    { country: "Norway", key: "norway" },
  ];

  const [records, setRecords] = useState([]);
  let srchCountry = "";
  const [selCountry, setSelCountry] = useState("");
  const getData = () => {
    fetch("../data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        let data = [];
        for (var j = 0; j < myJson.length; j++) {
          if (srchCountry == myJson[j].country) {
            data.push(myJson[j]);
          }
        }
        setRecords(data);
      });
  };

  useEffect(() => {
    for (var i = 0; i < countries.length; i++) {
      if (key == countries[i].key) {
        srchCountry = countries[i].country;
      }
    }
    getData();
  }, []);

  const selectCountry = (val) => {
    document.location.href = "/investor/" + val.target.value;

  };



  const [rowsPerPage, setRowPerpage] = useState(5);

  return (
    <div>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section id="subheader" className="text-black">
          <div className="investor__banner">
            <Container>
              <div className="banner__section">
                <div className="banner_text">
                  <h1>Investor</h1>
                  <p>Way to higher financial Attitude.</p>
                </div>
                <div className="banner_image">
                  <img src={InvestorBanner} className="img-fluid" alt="banner" />
                </div>
              </div>
            </Container>
          </div>
        </section>

        <section aria-label="section">
          <Container>
            <Row>
              {/* <Col md={2} style={{ margin: '0px auto 30px auto' }}> */}
              {/* <Form.Select aria-label="Select Country" onChange={selectCountry}>
                                    {countries && countries.length > 0
                                        ? countries.map((item) => (
                                            <option value={item.key}>{item.country}</option>
                                        ))
                                        : ""}
                                </Form.Select> */}

              <div className="selectdiv">
                <label>
                  <select onChange={selectCountry}>
                    {countries && countries.length > 0
                      ? countries.map((item) => (
                          key === item.key ? <option value={item.key} selected>{key}</option> :
                          <option value={item.key}>{item.country}</option>
                        ))
                      : ""}
                  </select>
                </label>
              </div>
              {/* </Col> */}
              <Col md={12}>
                <TableItem data={records} rowsPerPage={rowsPerPage} setRowPerpage={setRowPerpage}/>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <a href="#" id="back-to-top"></a>
    </div>
  );
};

export default Investor;
