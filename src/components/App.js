import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import PageNav from './PageNav';
const { Glyph, Container } = require('elemental');

const App = (props) => {
  return (
    <div className="page-wrapper">
      <header className="demo-banner demo-banner--primary">
        <Container maxWidth={768} className="demo-container">
          <span className="demo-banner-illustration" />
          <h1 className="demo-banner__heading demo-banner__heading-1"><Link to="/">Mapa da democracia</Link></h1>
          <h2 className="demo-banner__heading demo-banner__heading-2">Veja quem é quem no rito do impeachment</h2>
        </Container>
      </header>
      <PageNav />
      <div className="page-body">
        {props.children}
      </div>
      <div className="page-footer">
        <Container maxWidth={768} className="demo-container container">
          <p>
            O conteúdo deste website está licenciado sob uma Licença&nbsp;
            <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
              <img alt="Licença Creative Commons Atribuição-CompartilhaIgual 4.0 Internacional" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" />
            </a>
          </p>
          <p>Feito com muito <Glyph icon="heart" type="danger" />,&nbsp;
            <a href="https://github.com/lpirola/mapa-da-democracia"> software livre </a><i className="fa fa-github"></i> e&nbsp;
            <a href="https://github.com/lpirola/mapa-da-democracia/blob/master/CONTRIBUTORS.md">um monte de gente</a> colaborando junto.</p>
        </Container>
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
