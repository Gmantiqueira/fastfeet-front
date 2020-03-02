import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Delivery from '../pages/Delivery';
import Recipient from '../pages/Recipient';
import Deliveryman from '../pages/Deliveryman';
import Problems from '../pages/Problems';

import RegisterDelivery from '../pages/RegisterDelivery';
import RegisterRecipient from '../pages/RegisterRecipient';
import RegisterDeliveryman from '../pages/RegisterDeliveryman';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route path="/delivery" component={Delivery} isPrivate />
            <Route path="/recipient" component={Recipient} isPrivate />
            <Route path="/deliveryman" component={Deliveryman} isPrivate />
            <Route path="/problems" component={Problems} isPrivate />

            <Route
                path="/register/delivery"
                exact
                component={RegisterDelivery}
                isPrivate
            />
            <Route
                path="/register/recipient"
                exact
                component={RegisterRecipient}
                isPrivate
            />
            <Route
                path="/register/deliveryman"
                exact
                component={RegisterDeliveryman}
                isPrivate
            />
        </Switch>
    );
}
