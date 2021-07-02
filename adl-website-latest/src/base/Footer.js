import React from 'react'

class Footer extends React.Component {
    render() {
        const data = [
            {
                title: 'Get Started',
                info: ['Why Auto-DL', 'Install', 'Pricing'],
            }, {
                title: 'Support',
                info: ['Docs', 'FAQ', 'Feedback'],
            }, {
                title: 'Company',
                info: ['About', 'Jobs', 'Contact'],
            }, 
            {
                title: 'Development',
                info: ['Contribute', 'Status', 'Work with Us'],
            }
        ];

        const styles = {
            list: {
                listStyle: 'none',
                padding: '0',
                fontWeight: '300'
            },
            footerBottom: {
                marginTop: '2em'
            }
        }

        const foot = data.map((item, ind) => 
            <React.Fragment key={ind}>
                <div className='col'>
                    <h4>{item.title}</h4>
                    <ul style={styles.list}>
                        {
                            item.info.map((x, index) => <li key={index}>{x}</li>)
                        }
                    </ul>
                </div>
            </React.Fragment>
            );

        return(
            <footer>
                {/* <h1>Footer</h1> */}
                <div className='container'>
                    <div className='row' style={styles.footerBottom}>
                        {foot}
                        <div className='col-12 quote' style={styles.footerBottom}>
                            “Deep learning will revolutionize supply chain automation.” <br/>-Dave Waters
                        </div>
                        <div className='col-12' style={styles.footerBottom}>
                            <h4>Follow us On</h4>
                            <ul id='follow' style={styles.list}>
                                {/* <li><a href="mailto:info.autold@gmail.com?subject=Auto-DL%20Contact%20from%20Website ">
                                        <i className="far fa-envelope"></i></a></li> */}
                                <li>
                                    <a href="https://www.linkedin.com/company/autodl/ ">
                                    <i className="fab fa-linkedin-in"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/auto_dl/ ">
                                    <i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://github.com/Auto-DL/ ">
                                    <i className="fab fa-github"></i></a>
                                </li>
                                <li>
                                    <a href="https://autodl.slack.com/join/shared_invite/zt-qagxiwub-ywRM_oBvvF~F7YNtlBqy_Q#/shared-invite/email">
                                    <i className="fab fa-slack"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-12' style={styles.footerBottom}>
                            Auto-DL 2021
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;