import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">----------------------------------Footer Content-----------------------------------------</h5>
                        <p>
                            Contact me:
                            <a href="mailto:beikuncanada@gmail.com?Subject=Hello%20again" target="_top">beikuncanada@gmail.com</a>
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Links</h5>
                        <p> Follow me on: </p>
                        <ul>
                            <li className="list-unstyled">
                                <a href="https://github.com/qiushanbeikun" target="_blank">Github</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="https://www.youtube.com/channel/UCB01XZsudptPaZz2bm66mJQ" target="_blank">Youtube</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="https://space.bilibili.com/87137436" target="_blank">BiliBili</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" target="_blank">Unused link</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
};

export default FooterPage;