import * as React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { setLocale } from './store/app/actions';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import Features from './components/Features';
import css from './App.module.css';
// import {Switch, Route} from 'react-router-dom'
import {NavLink, Switch, Route} from 'react-router-dom'
// import {renderRoutes} from 'react-router-config'
import routes from '../shared/routes'
import PrivateRoute from './components/PrivateRoute'


class App extends React.PureComponent {
    setLanguage = (e) => {
        this.props.setLocale(e.target.value);
    };

    render() {
        const { t } = this.props; 

        return (
            <div className={css.wrapper}>
                <Helmet defaultTitle="React SSR Starter" titleTemplate="%s – React SSR Starter" />

                <h1>
                    <ReactLogo className={css.reactLogo} /> React + Express – SSR Starter
                </h1>

                <Features />

                <h2>{t('i18n-example')}</h2>
                <p>
                    <button value="de_DE" onClick={this.setLanguage}>
                        Deutsch
                    </button>
                    <button value="en_US" onClick={this.setLanguage}>
                        English
                    </button>
                </p>
            </div>
        );
    }
}

const mapDispatchToProps = {
    setLocale,
};

export default connect(
    null,
    mapDispatchToProps
)(withNamespaces()(App));
