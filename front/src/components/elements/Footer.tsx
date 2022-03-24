import React from 'react'
import styled from 'styled-components'
import {InstagramIcon} from '../../asserts/icons/IGicon'
import {FacebookIcon} from '../../asserts/icons/FacebookIcon'
import {WhatsappIcon} from '../../asserts/icons/WhatsappIcon'

const footerQuickLinks = [
  {
    title: 'Help',
    items: [
      {name: 'Contact us', path: '/'},
      {name: 'Delivery Information', path: '/'},
      {name: 'Payment information', path: '/'},
      {name: 'Customer service', path: '/'},
      {name: 'FAQ', path: '/'},
    ],
  },
  {
    title: 'About us',
    items: [
      {name: 'Our stores', path: '/'},
      {name: 'Customer care', path: '/'},
      {name: 'Site map', path: '/'},
    ],
  },
  {
    title: 'Legal',
    items: [
      {name: 'Privacy policy', path: '/'},
      {name: 'Terms & Conditions', path: '/'},
      {name: 'Cookie policy', path: '/'},
    ],
  },
]

const footerSocialLinks = {
  title: 'Follow us',
  phoneNumber: '+84 0000 0000',
  socialNetworks: [
    {icon: <InstagramIcon/>, path: 'https://www.google.com.vn'},
    {icon: <WhatsappIcon/>, path: 'https://www.google.com.vn'},
    {icon: <FacebookIcon/>, path: 'https://www.google.com.vn'},
  ],
}

export const Footer: React.FC = () => {
  return (
    <Container>
      <div className="quick-links">
        <div className="follow">
          <div className="title">{footerSocialLinks.title}</div>
          <div className="phone-number">{footerSocialLinks.phoneNumber}</div>
          <div className="social-network">
            {footerSocialLinks.socialNetworks.map((item, i) => (
              <a key={i} className="icon" href={item.path}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-items">
          {footerQuickLinks.map((child, i) => (
            <div key={i} className="footer-item">
              <div className="title">{child.title}</div>
              {child.items.map((link, j) => (
                <a key={j} href={link.path}>
                  <div className="link-name">{link.name}</div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="copyright">© Copyright Team 1, 2022</div>
    </Container>
  )
}

const Container = styled.div`
  padding: 2rem 12% 0;
  background: #334c76;
  color: white;
  .quick-links {
    display: flex;
    justify-content: space-evenly;
    .follow {
      width: 345px;
      .phone-number {
        font-weight: bold;
        font-size: 1rem;
        margin-bottom: 20px;
      }
      .social-network {
        .icon {
          margin-right: 10px;
        }
      }
    }
    .footer-items {
      display: flex;
      .footer-item {
        width: 270px;
        .link-name {
          font-size:1rem;
          margin-bottom: 10px;
        }
      }
    }
  }
  .copyright {
    border-top: 1px solid #bbb;
    color: #ddd;
    font-size: 1rem;
    padding: 1.2rem 0 3rem;
    margin-top: 2rem;
    text-align: center;
  }
  .title {
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
    font-size: 1.2rem;
  }
  a {
    color: #bbb;
    font-family: "Poppins", sans-serif;
  }
`