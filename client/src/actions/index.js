import types from './types';
import axios from 'axios';

// http://dev.michaelahn.solutions
export function createEvent(form) {

    const request = axios.post("/add_events", {
        title: form.values.title,
        description: form.values.description,
        subject: form.values.subject,
        date: form.values.date,
        time: form.values.time,
        duration: form.values.duration,
        location: form.values.location,
        max: form.values.max,
        phone: form.values.phone,
        email: form.values.email,
        coordinates: form.coordinates,
        facebookID: '',
    });

    return {
        type: types.CREATE_EVENT,
        payload: request
    }
}

export function getAll() {

    const request = axios.get("/events");

    return {
        type: types.GET_ALL,
        payload: request
    }
}

export function userEvents() {
    const request = axios.get("/user_events");

    return {
        type: types.USER_EVENTS,
        payload: request
    }
}

export function userAuth() {
    const request = axios.get("/checkLogin");

    return {
        type: types.USER_AUTH,
        payload: request
    }
}

export function userJoin(eventInfo) {
    const request = axios.post("/join_events", eventInfo);

    return {
        type: types.USER_JOIN,
        payload: request
    }
}

export function deleteEvent(eventInfo) {
    const request = axios.post("/delete_events", eventInfo);

    return {
        type: types.DELETE_EVENT,
        payload: request
    }
}

export function getProfileJoin() {
    const request = axios.get("/user_joined_events");

    return {
        type: types.GET_JOIN_PROFILE,
        payload: request
    }
}