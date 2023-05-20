// export interface IVisit {
//     beginTime: string;
//     cabinet: string;
//     comment: string;
//     endTime: string;
//     id_patient: string;
//     id_visit: string;
//     id_visit_purpose: string;
//     medicalStuffId: string;
//     result: string;
//     status: string;
// }
export interface IVisit {
    beginTime: string;
    dateStart: string;
    client :{
        surname: string;
        name: string;
        patronymic: string;
    }
    serviceType: string;
    cabinet: string;
    comment: string;
    endTime: string;
    id_patient: string;
    id_visit: string;
    id_visit_purpose: string;
    medicalStuffId: string;
    result: string;
    status: string;
}