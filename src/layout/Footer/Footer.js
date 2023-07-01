import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs"
import FooterStyled from './FooterStyled';
import MainTitle from '../../components/Title/MainTitle';
import Title from '../../components/Title/Title';
const Footer = () => {
  return (
    <>
      <FooterStyled>
        <Row>
          <Col>
            <Row className="mt-5">
              <Col>
                <b className="man mansize"> Comspanany</b>

                <div className="man">
                  <span className="footerText">
                    <a className="aTag" href=' https://www.spotify.com/in-en/about-us/contact/'>
                      About
                    </a>
                  </span>

                  <Row>
                    <Col>
                      <span className="footerText">
                        <a className="aTag" href='https://www.lifeatspotify.com/'>
                          Jobs
                        </a>
                      </span>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <span className="footerText">
                        <a className="aTag" href='https://newsroom.spotify.com/'>
                          For the records
                        </a>
                      </span>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col>
                <b className="man">Communities</b>
                <Row>
                  <Col>
                    <span className="footerText">
                      <a className="aTag" href='https://artists.spotify.com/home'>
                        For Artists {"  "}
                      </a>
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span className="footerText">
                      <a className="aTag" href='https://developer.spotify.com/'>
                        Developers{" "}
                      </a>
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col>

                    <span className="footerText">
                      <a className="aTag" href='https://ads.spotify.com/en-IN/'>
                        Advertising {" "}
                      </a>
                    </span>
                  </Col>
                </Row>
                <Row>

                  <Col>


                    <span className="footerText">
                      <a className="aTag" href='https://investors.spotify.com/home/default.aspx'>
                        Investors {" "}
                      </a>
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col>

                    <span className="footerText">
                      <a className="aTag" href='https://spotifyforvendors.com/'>
                        Vendors
                      </a>
                      {" "}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col>

                    <span className="footerText">
                      <a className="aTag" href='https://www.spotify.com/in-en/spotifyforwork/'>
                        Spotify for Work {" "}
                      </a>
                    </span>
                  </Col>
                </Row>
              </Col>

              <Col><b className="man">Useful links</b>
                <Row>
                  <Col>
                    <span className="footerText">
                      <a className="aTag" href='https://support.spotify.com/in-en/'>
                        Support
                        {" "}
                      </a>
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span className="footerText">
                      <a className="aTag" href='https://www.spotify.com/in-en/free/'>
                        Free Mobile App
                      </a>
                      {" "}
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col sm={2}>
            <div className="mt-5">
              <a className='aTag' href="httspans://www.instagram.com/sspanotify/" target="_blank" rel="noospanener noreferrer">
                <AiFillInstagram className="socialIcon mx-1" size={40} color='#fff' />
              </a>
              <a className='aTag' href="httspans://twitter.com/i/flow/login?redirect_after_login=%2Fsspanotify" target="_blank" rel="noospanener noreferrer">
                <AiFillTwitterCircle className="socialIcon mx-2" size={40} color='#fff' />
              </a>
              <a className='aTag' href="httspans://www.facebook.com/SspanotifyIndia/?brand_redir=6243987495" target="_blank" rel="noospanener noreferrer">
                <BsFacebook className="socialIcon" size={35} color='#fff' />
              </a>
            </div>
          </Col>
          <hr className="underline mt-2"></hr>
          <span className='copy'>&copy; {new Date().getFullYear()}  Spotify AB
          </span>
        </Row>
      </FooterStyled>
    </>
  )
}

export default Footer
