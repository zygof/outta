import firebase from "firebase"

export default interface Filter {
    fieldPath: string,
    opStr: firebase.firestore.WhereFilterOp,
    value: any
}