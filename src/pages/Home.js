import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';

//import '../styles/Home.css';

function Home() {
  return (
    <div className='custom-container'>
        <Container >
        <div>
        <h1>AGENT SYSTEM</h1>
        <Link to="/joinPage">
          <button>Join Now!</button>
        </Link>
        <p>
        Becoming an agent for RJ Printing opens up an extraordinary opportunity to secure a lifelong earning potential. As an agent, you will be part of a dynamic team that caters to the printing needs of customers. Whether it's business cards, flyers, or large-scale banners, RJ Printing offers a diverse range of high-quality printing solutions. By joining this renowned company as an agent, you'll not only gain access to their cutting-edge technology and vast array of services, but you'll also earn a percentage on every customer order for life. This means that as long as RJ Printing continues to thrive and grow, you'll enjoy a consistent stream of passive income. As an agent, you'll have the chance to build strong relationships with clients and provide them with exceptional service while reaping the rewards of a long-term partnership with RJ Printing.
        </p>

        <p>
        As an agent for RJ Printing, your earning potential is primarily based on customer orders with their reference code. Customers who place orders using your reference code will contribute to your earnings, allowing you to receive a percentage of the revenue generated from their orders. This system provides a passive income stream, as you can continue to earn from customers who use your reference code for their printing needs. While the Early Adopter program exists, it is not a requirement for you to directly refer new agents in order to earn. Instead, your focus will primarily be on attracting customers and ensuring their satisfaction with RJ Printing's services. By effectively marketing the company's offerings and building a strong customer base, you can maximize your earnings and enjoy a successful partnership with RJ Printing.

        </p>

        <h3>Example Services Offered</h3>

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Services</th>
      <th scope="col">Regular Price</th>
      <th scope="col">Agent Price</th>
      <th scope="col">Sample Earning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Tarpaulin</th>
      <td>15 pesos/sqr foot</td>
      <td>12 pesos/sql foot</td>
      <td>3 pesos</td>
    </tr>
    <tr>
      <th scope="row">Sticker</th>
      <td>1 peso/sqr inch</td>
      <td>.75 pesos/sqr inch</td>
      <td>.25 pesos</td>
    </tr>
    <tr>
      <th scope="row">Sintra Board</th>
      <td>130 pesos/sqr foot</td>
      <td>100 pesos/sqr foot</td>
      <td>30 pesos</td>
    </tr>
    <tr>
      <th scope="row">T-shirt Print</th>
      <td>250 pesos</td>
      <td>230 pesos</td>
      <td>20 pesos</td>
    </tr>
    <tr>
      <th scope="row">3D Print</th>
      <td>5 pesos/gram</td>
      <td>3 pesos/gram</td>
      <td>2 pesos</td>
    </tr>   
    <tr>
      <td className="col-12" colSpan="4">and more!</td>
    </tr>







  </tbody>
</table>

<h3>Early Adopter Bonus</h3>
<p>
When the number of agents reaches a specific threshold, a fascinating phenomenon occurs. At this tipping point, the early adopters are rewarded generously, receiving six times the initial fee in Ethereum. This ingenious incentive system aims to recognize and appreciate the contributions of those who joined the network in its infancy.
</p>

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Initial Entry</th>
      <th scope="col">Bonus Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0.01234 Ethereum (1305 php)</td>
      <td>0.07404 Ethereum (7835 php)</td>
    </tr>
    <tr>
      <td className="col-12" colSpan="2">Note: Ethereum amount is exact / php conversion is as of 7/6/2023 and will definitly change based on crypto market.</td>
    </tr>
    </tbody>
</table>

<h3>Where will my 0.01234 Ethereum go?</h3>
<p>Everyamount will be physically materialized as you will recieve the following: </p>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RJ Printing Agent ID with your referal code</td>
      <td>250 php</td>
    </tr>
    <tr>
      <td>2x3 Agent Tarpaulin to put up your own business</td>
      <td>240 php</td>
    </tr>
    <tr>
      <td>1,000 Gift Check for RJ Printing Products and Services </td>
      <td>1,000 php</td>
    </tr>
    <tr>
      <td>Total </td>
      <td>1,490 php</td>
    </tr>
    <tr>
      <td className="col-12" colSpan="2">Note: Non Convertible to Cash. The full value of the gift check can be used in multiple transactions by converting to store credit on your first transaction as Agent.</td>
    </tr>
    </tbody>
</table>

        <p>Click the button and start earning!<br></br>
        </p>
        <Link to="/joinPage">
          <button>Join Now!</button>
        </Link>

        <p></p>
        </div>
        </Container>


    </div>
  )
}

export default Home