import { takeEvery } from 'redux-saga/effects';

function* mysagafirst() {
    yield takeEvery('typeone');
}

export default mysagafirst;