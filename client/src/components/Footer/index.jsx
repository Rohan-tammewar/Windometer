import React from 'react';

import Wrapper from '../wrapper';

import { CopyrightInfo, FooterContainer } from './Footer.styled';

const Footer = () => {

    return (
        <FooterContainer>
            <Wrapper>
                <CopyrightInfo>
                    <div className="copyright">
                        <p><span>Copyright ©WindoMeter 2021</span>  |  <a href="#FIXME">Website Privacy Policy</a></p>
                    </div>
                </CopyrightInfo>
            </Wrapper>
        </FooterContainer>
    );
};

export default Footer;
