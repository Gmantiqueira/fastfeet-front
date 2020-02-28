import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Delivery from '../pages/Delivery';
import Recipient from '../pages/Recipient';
import Deliveryman from '../pages/Deliveryman';

import RegisterRecipient from '../pages/RegisterRecipient';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route path="/delivery" component={Delivery} isPrivate />
            <Route path="/recipient" component={Recipient} isPrivate />
            <Route path="/deliveryman" component={Deliveryman} isPrivate />

            <Route
                path="/register/recipient"
                exact
                component={RegisterRecipient}
                isPrivate
            />
        </Switch>
    );
}
