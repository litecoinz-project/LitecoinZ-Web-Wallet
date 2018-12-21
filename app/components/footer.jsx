import React from 'react'
import {Container, Row, Col} from 'reactstrap';

var footer = {
  backgroundColor: '#f5f5f5'
}

var longP = {
  wordWrap: 'break-word'
}

export default class ZFooter extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="footerstyle">
        <br/>
        <Container>
        <div className="outer">
        <div className="contact-text links">
        <Row>
          <Col md="12">
            <p><span className="f1">MAKE SURE YOU ARE ON</span><b> WALLET.LITECOINZ.ORG</b></p>

            <p className="f2">Keys are validated client-side and do not leave your browser or network. You are responsible for keeping your own keys safe!</p>
          </Col>
        </Row>
        <a href="https://LitecoinZ.org" target="_blank" data-toggle="tooltip" title="Website">
          <svg className="middle" fill="currentColor" preserveAspectRatio="xMidYMid meet" height="28" width="28" viewBox="0 0 40 40">
            <path d="m32.9 22.1v10.8q0 0.5-0.4 1t-1 0.4h-8.6v-8.6h-5.7v8.6h-8.6q-0.5 0-1-0.4t-0.4-1v-10.8q0 0 0 0t0-0.1l12.9-10.6 12.8 10.6q0 0.1 0 0.1z m5-1.5l-1.4 1.7q-0.2 0.2-0.4 0.2h-0.1q-0.3 0-0.5-0.2l-15.4-12.8-15.5 12.8q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.2l-1.4-1.7q-0.1-0.2-0.1-0.5t0.2-0.5l16.1-13.4q0.7-0.6 1.7-0.6t1.7 0.6l5.4 4.6v-4.4q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v9.1l4.9 4.1q0.2 0.2 0.3 0.5t-0.2 0.5z"></path>
          </svg>
          &nbsp;
        </a>
        <a href="https://discord.gg/QNcS4Pm" target="_blank" data-toggle="tooltip" title="Discord">
          <svg className="middle" fill="currentColor" preserveAspectRatio="xMidYMid meet" height="28" width="28" viewBox="0 0 40 40">
            <path d="m31.4 17.1q0 3.1-2.1 5.8t-5.7 4.1-7.9 1.6q-1.9 0-3.9-0.4-2.8 2-6.2 2.9-0.8 0.2-1.9 0.3h-0.1q-0.3 0-0.5-0.2t-0.2-0.4q0-0.1 0-0.2t0-0.1 0-0.1l0.1-0.2 0-0.1 0.1-0.1 0.1-0.1 0.1-0.1q0.1-0.1 0.5-0.6t0.6-0.6 0.5-0.7 0.6-0.8 0.4-1q-2.7-1.6-4.3-4t-1.6-5q0-3.1 2.1-5.7t5.7-4.2 7.9-1.5 7.9 1.5 5.7 4.2 2.1 5.7z m8.6 5.8q0 2.6-1.6 5t-4.3 3.9q0.2 0.5 0.4 1t0.6 0.8 0.5 0.7 0.6 0.7 0.5 0.5q0 0 0.1 0.1t0.1 0.1 0.1 0.1 0 0.2l0.1 0.1 0 0.1 0 0.1 0 0.2q0 0.3-0.3 0.5t-0.5 0.1q-1.1-0.1-1.9-0.3-3.4-0.9-6.2-2.9-2 0.4-3.9 0.4-6.1 0-10.6-3 1.3 0.1 2 0.1 3.6 0 6.9-1t5.9-2.9q2.8-2 4.3-4.7t1.5-5.7q0-1.7-0.5-3.4 2.9 1.6 4.5 4t1.7 5.2z"></path>
          </svg>
          &nbsp;
        </a>
        <a href="https://twitter.com/LitecoinzTeam" target="_blank" data-toggle="tooltip" title="Twitter">
          <svg className="middle" fill="currentColor" preserveAspectRatio="xMidYMid meet" height="28" width="28" viewBox="0 0 40 40">
            <path d="m37.7 9.1q-1.5 2.2-3.7 3.7 0.1 0.3 0.1 1 0 2.9-0.9 5.8t-2.6 5.5-4.1 4.7-5.7 3.3-7.2 1.2q-6.1 0-11.1-3.3 0.8 0.1 1.7 0.1 5 0 9-3-2.4-0.1-4.2-1.5t-2.6-3.5q0.8 0.1 1.4 0.1 1 0 1.9-0.3-2.5-0.5-4.1-2.5t-1.7-4.6v0q1.5 0.8 3.3 0.9-1.5-1-2.4-2.6t-0.8-3.4q0-2 0.9-3.7 2.7 3.4 6.6 5.4t8.3 2.2q-0.2-0.9-0.2-1.7 0-3 2.1-5.1t5.1-2.1q3.2 0 5.3 2.3 2.4-0.5 4.6-1.7-0.8 2.5-3.2 3.9 2.1-0.2 4.2-1.1z"></path>
          </svg>
          &nbsp;
        </a>
        <a href="https://bitcointalk.org/index.php?topic=2767102.0" target="_blank" data-toggle="tooltip" title="Bitcoin Talk">
          <svg className="middle" fill="currentColor" preserveAspectRatio="xMidYMid meet" height="28" width="28" viewBox="0 0 40 40">
            <path d="m31.1 14.3q0.3 4-3 5.7 2.6 0.7 3.9 2.3t1 4.8q-0.1 1.6-0.7 2.8t-1.4 2-2.2 1.3-2.7 0.8-3.3 0.3v5.7h-3.4v-5.6q-1.8 0-2.7 0v5.6h-3.5v-5.7q-0.4 0-1.2 0t-1.2 0h-4.4l0.6-4.1h2.5q1.1 0 1.3-1.1v-9h0.4q-0.2 0-0.4 0v-6.4q-0.3-1.6-2-1.6h-2.4v-3.6l4.7 0q1.4 0 2.1 0v-5.6h3.5v5.5q1.8-0.1 2.7-0.1v-5.4h3.4v5.6q1.8 0.1 3.2 0.5t2.5 1 1.8 1.7 0.8 2.6z m-4.8 12.2q0-0.9-0.4-1.5t-0.8-1-1.3-0.7-1.5-0.4-1.6-0.2-1.5-0.1-1.5 0.1-1 0v7.5q0.1 0 0.8 0t1 0 1.2 0 1.3-0.1 1.3-0.2 1.2-0.3 1.1-0.4 0.9-0.7 0.5-0.9 0.2-1.1z m-1.6-10.7q0-0.7-0.3-1.3t-0.7-0.9-1.1-0.6-1.2-0.4-1.4-0.2-1.3 0-1.2 0-0.8 0v6.8q0.1 0 0.7 0.1t1.1 0 1.1-0.1 1.2-0.1 1.2-0.3 1-0.4 0.9-0.6 0.6-0.8 0.2-1.2z"></path>
          </svg>
          &nbsp;
        </a>
        <a href="https://github.com/litecoinz-project/LitecoinZWebWallet.git" target="_blank" data-toggle="tooltip" title="Source Code">
          <svg className="middle" fill="currentColor" preserveAspectRatio="xMidYMid meet" height="28" width="28" viewBox="0 0 40 40">
            <path d="m20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6q0 5.6-3.3 10.1t-8.4 6.2q-0.6 0.1-0.9-0.2t-0.3-0.7q0 0 0-1.7t0-3q0-2.1-1.2-3.1 1.3-0.2 2.3-0.4t2.1-0.9 1.8-1.5 1.2-2.3 0.5-3.4q0-2.7-1.8-4.6 0.8-2-0.2-4.5-0.6-0.2-1.8 0.2t-2 1l-0.9 0.5q-2-0.6-4.3-0.6t-4.2 0.6q-0.4-0.2-1-0.6t-1.9-0.8-1.9-0.3q-1 2.5-0.1 4.5-1.8 1.9-1.8 4.6 0 1.9 0.5 3.4t1.1 2.3 1.8 1.5 2.1 0.9 2.3 0.4q-0.9 0.8-1.1 2.3-0.4 0.2-1 0.3t-1.3 0.1-1.4-0.5-1.3-1.4q-0.4-0.7-1-1.1t-1.1-0.6l-0.5 0q-0.5 0-0.6 0.1t-0.1 0.2 0.2 0.3 0.2 0.3l0.2 0.1q0.5 0.2 1 0.9t0.7 1.1l0.2 0.5q0.3 0.9 1 1.4t1.5 0.7 1.5 0.1 1.3-0.1l0.5 0q0 0.8 0 1.9t0 1.2q0 0.5-0.3 0.7t-0.9 0.2q-5.2-1.7-8.4-6.2t-3.3-10.1q0-4.7 2.3-8.6t6.2-6.2 8.6-2.3z m-10.6 24.6q0.1-0.2-0.2-0.3-0.2-0.1-0.2 0.1-0.1 0.1 0.1 0.2 0.2 0.2 0.3 0z m0.7 0.7q0.1-0.1-0.1-0.3-0.2-0.2-0.3-0.1-0.2 0.1 0 0.4 0.3 0.2 0.4 0z m0.7 1q0.2-0.1 0-0.4-0.2-0.3-0.4-0.1-0.2 0.1 0 0.4t0.4 0.1z m0.9 1q0.2-0.2-0.1-0.4-0.3-0.3-0.4-0.1-0.2 0.2 0 0.4 0.3 0.3 0.5 0.1z m1.3 0.5q0-0.2-0.3-0.3-0.4-0.1-0.4 0.1t0.2 0.4q0.4 0.1 0.5-0.2z m1.4 0.1q0-0.2-0.4-0.2-0.4 0-0.4 0.2 0 0.3 0.4 0.3 0.4 0 0.4-0.3z m1.3-0.2q-0.1-0.2-0.4-0.2-0.4 0.1-0.3 0.4t0.4 0.1 0.3-0.3z"></path>
          </svg>
          &nbsp;
        </a>
        <a href="mailto:support@litecoinz.org" target="_blank" data-toggle="tooltip" title="support@litecoinz.org">
          <svg className="middle" fill="currentColor" preserveAspectRatio="xMidYMid meet" height="28" width="28" viewBox="0 0 40 40">
            <path d="m37.1 33.6v-17.2q-0.7 0.8-1.5 1.5-6 4.6-9.5 7.5-1.1 1-1.9 1.5t-1.9 1.1-2.3 0.6h0q-1.1 0-2.3-0.6t-1.9-1.1-1.9-1.5q-3.5-2.9-9.5-7.5-0.8-0.7-1.5-1.5v17.2q0 0.3 0.2 0.5t0.5 0.2h32.8q0.3 0 0.5-0.2t0.2-0.5z m0-23.5v-0.5l0-0.3 0-0.3-0.2-0.2-0.2-0.2-0.3 0h-32.8q-0.3 0-0.5 0.2t-0.2 0.5q0 3.7 3.2 6.3 4.3 3.4 9 7.1 0.1 0.1 0.8 0.7t1 0.8 1 0.7 1.1 0.6 1 0.2h0q0.5 0 1-0.2t1.1-0.6 1-0.7 1-0.8 0.8-0.7q4.7-3.7 9-7.1 1.2-0.9 2.2-2.6t1-2.9z m2.9-0.8v24.3q0 1.4-1 2.5t-2.6 1h-32.8q-1.5 0-2.6-1t-1-2.5v-24.3q0-1.5 1.1-2.5t2.5-1.1h32.8q1.5 0 2.6 1.1t1 2.5z"></path>
          </svg>
          &nbsp;
        </a>
        <br />
        </div>
        </div>
        </Container>
      </div>
    )
  }
}
