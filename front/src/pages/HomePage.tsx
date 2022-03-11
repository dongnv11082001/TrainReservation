import React from 'react'
import HomeLayout from '../components/pages/home/layout'
import customerCare from '../asserts/images/247.svg'
import payment from '../asserts/images/payment.svg'
import bestprice from '../asserts/images/bestprice.svg'

const serviceData = [
  {
    title: 'Hỗ trợ khách hàng 24/7',
    content:
            'Chat là có, gọi là nghe, không quản đêm hôm, ngày nghỉ và ngày lễ.',
    image: customerCare,
  },
  {
    title: 'Thanh toán dễ dàng, đa dạng',
    content: 'Bao gồm thêm chuyển khoản ngân hàng và tiền mặt tại cửa hàng.',
    image: payment,
  },
  {
    title: 'Săn vé giá tốt nội địa, quốc tế ',
    content:
            'So sánh giá tốt nhất từ các hãng hàng không nội địa và 50.000 đường bay quốc tế.',
    image: bestprice,
  },
]

const HomePage: React.FC = () => {
  return <HomeLayout services={serviceData}/>
}
export default HomePage